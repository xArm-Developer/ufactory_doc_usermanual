// https://vitepress.dev/guide/custom-theme
import { h, watchEffect } from 'vue'
import { inBrowser, useData, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ExportPDF from './components/export_pdf.vue';
import './style.css'
import './print.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {

    const { lang } = useData()
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
      }
    })
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(ExportPDF),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // app.component('ExportPDF', ExportPDF)
    // app.mount(ExportPDF)
    // ...
  },
  setup() {
    return {
      foo: 'bar',
    }
  }
} satisfies Theme
