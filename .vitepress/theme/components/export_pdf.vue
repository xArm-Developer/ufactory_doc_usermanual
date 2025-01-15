<script setup>
import { useData, useRoute } from 'vitepress';
import {  onMounted, ref, watch, reactive} from 'vue';
import qs from "query-string";
import { LoaderCircle, FileDown } from "lucide-vue-next";
import {Modal, Button} from "ant-design-vue"


// const API_DRAMA_URL = "http://docs.api.ufactory.cc";
const API_DRAMA_URL = "http://docs.usermanual.ufactory.cc/pdf";


// 控制按钮显示
const showButton = ref(false);
const route = useRoute()
const data = useData()

const isEnglish = ref(false)

watch(() => data.lang, (data) => {
  isEnglish.value = (data.value === 'en-US')
}, {
  deep: true,
  immediate: true
})

const dwLoading = ref(false)
const allDwLoading = ref(false)


onMounted(() => {
  watch(() => route.path, () => {
    const params = qs.parse(window.location.search)
    if ("export" in params && params.export === '1') {
      document.querySelector(".VPSidebar").remove()
      document.querySelector(".VPLocalNav").remove()
      document.querySelector(".VPNav").remove()
      document.querySelector(".VPDoc>.container>.aside").remove()
      document.querySelector(".VPDocFooter").remove()
      
      let VPContent =  document.querySelector(".VPContent")
      VPContent.style.padding = "0px"
      
      return
    }
  }, { deep: true , immediate: true});

  // 只在首页和文档页面显示按钮
  if (window.location.pathname !== '/' && !window.location.pathname.startsWith('/')) {
    showButton.value = false;
  } else {
    showButton.value = true;
  }

 
});


function getPdfName(str) {
  const regex = /\/([^/]+)\.md$/;
    const match = str.match(regex);
    if (match && match.length > 1) {
        if (str.startsWith('zhHans/')) {
          return match[1]+"_zh.pdf"
        }
        return match[1]+"_en.pdf"
    }
    return "unknown.pdf"
}
// 下载 PDF 的函数
const downloadPDF = async () => {
  
  dwLoading.value = true
  try {
    const file_name = getPdfName(route.data.filePath)
    const response = await fetch(API_DRAMA_URL+`/`+file_name)
    // 获取 PDF 数据为 Blob
    const blob = await response.blob();

    // 创建一个下载链接并触发下载
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file_name
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url); // 释放 Blob URL
    dwLoading.value = false

  } catch (error) {
    console.error('下载 PDF 失败:', error);
    dwLoading.value = false
  }
  return
};

const downloadAllPDF = async () => {
  const isZh = data.lang.value === 'zh-CN'
  allDwLoading.value = true
  try {
    const file_name = `ufactory_docs_${!isZh?"en":"zh"}.pdf`
    const response = await fetch(API_DRAMA_URL+`/`+file_name)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = file_name
    document.body.appendChild(a)
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url) // 释放 Blob URL
    allDwLoading.value = false
  }
  catch (error) {
    console.error('下载 PDF 失败:', error);
    allDwLoading.value = false
  }
}

const openModal = ref(false)
function onOpenModal() {
  openModal.value = true
}

</script>
<template>
  
  <div class="export-btn">
    <!-- 根据 showButton 的值来控制按钮是否显示 -->
    <button v-if="showButton" @click="onOpenModal" class="export-pdf-button" :disabled="dwLoading || allDwLoading">
      <LoaderCircle class="spin" v-if="dwLoading || allDwLoading" />
      <FileDown size="18" v-else />
      {{isEnglish ? "Export PDF" :"导出PDF"}}
    </button>
    
    <Modal v-model:open="openModal" width="350px">
      <div class="export-modal">
        {{ !isEnglish ? "请选择导出的PDF文件" : "Please select the PDF file to export" }}
      </div>
      <template #footer>
        <div class="export-button">
          <Button @click="downloadAllPDF" :loading="allDwLoading">
            {{isEnglish ? "All Page" : "全部页面"}}
          </Button>
          <Button @click="downloadPDF" :loading="dwLoading">
            {{isEnglish ? "Current Page" : "当前页面"}}
          </Button>
        </div>
      </template>
    </Modal>
  </div>
</template>
 
<style scoped>
.export-modal{
  text-align: center;
  font-size: 18px;
  margin: 20px;
}

.export-button{
  width: 100%;
  display: flex;
  row-gap: 10px;
  justify-content: center;
}
</style>