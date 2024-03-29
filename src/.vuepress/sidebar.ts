import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    '',
    {
      children: 'structure',
      collapsible: true,
      icon: 'fluent:document-bullet-list-24-filled',
      prefix: '1.demo/',
      text: '1. 示例项目',
    },
  ],
})
