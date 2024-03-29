# 鸭梨文档模板

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Sun-ZhenXing/vuepress-solid-template/deploy-docs.yml?branch=main)

🚀 已配置好 GitHub Pages，[在线查看](https://blog.alexsun.top/vuepress-hope-template/)！

- 🎉 VuePress 2 (Vue 3 + Vite 5 + TypeScript)
- ✨ [VuePress MarkDown 增强](https://vuepress-theme-hope.github.io/v2/md-enhance/)
  - 📖 支持 LaTeX 数学公式（使用 [KaTeX](https://katex.org/)）
  - 📈 [Mermaid](https://theme-hope.vuejs.press/guide/markdown/mermaid.html)
  - 💡 [chartjs](https://vuepress-theme-hope.github.io/v2/md-enhance/guide/chart/chartjs.html)
  - 📊 [Echarts](https://theme-hope.vuejs.press/guide/markdown/echarts.html)
  - 🎞️ [Presentation](https://theme-hope.vuejs.press/guide/markdown/revealjs.html)
  - 📐 [Flowchart](https://theme-hope.vuejs.press/guide/markdown/flowchart.html)
- 📋 代码复制支持
- 📜 自动生成目录
- 🔍 静态搜索支持
- 🎇 ESLint 和 Git 钩子自动规范化

## 问题

如何在某一个 MarkDown 中临时禁用 ESLint 规则？

- 使用 `<!-- markdownlint-disable -->` 来禁用所有规则
- 使用 `<!-- markdownlint-disable-line -->` 来禁用下一行规则
- 使用 `<!-- markdownlint-disable MDXXX -->` 来禁用某个规则（`MDXXX` 为规则 ID）

## 开源协议

MIT.
