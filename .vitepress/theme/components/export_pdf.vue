<script setup>
import { useData, useRoute } from 'vitepress';
import {  onMounted, ref, watch} from 'vue';
import qs from "query-string";
import {  FileDown } from "lucide-vue-next";




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

function onOpenModal() {
  // 根据当前语言跳中文转到https://www.cn.ufactory.cc/xarm-download， 英文跳转到https://www.ufactory.cc/download/
  if (!isEnglish.value) {
    window.open("https://www.cn.ufactory.cc/xarm-download")
  } else {
    window.open("https://www.ufactory.cc/download/")
  }
}

</script>
<template>

  <div class="export-btn">
    <!-- 根据 showButton 的值来控制按钮是否显示 -->
    <button v-if="showButton" @click="onOpenModal" class="export-pdf-button" >
      <FileDown />
      {{isEnglish ? "Download PDF" :"PDF下载"}}
    </button>
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
