import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '70f886fd2e154be4ac705489e48f9259',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'wr8 Demo',
  domain: 'demo.wr8.in',
  author: 'Verfasor',
  seotitle: 'Demo Site Created with wr8',

  // open graph metadata (optional)
  description: 'This is a demo website created with wr8.',

  // social usernames (optional)
  twitter: 'verfasor',
  github: 'verfasor',
  linkedin: 'verfasor',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://wr8.in/page-icon.png',
  defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Blog',
      pageId: 'e6e15a27d2f24286b26e31433018710e'
    },    
    {
      title: 'About',
      pageId: '89cf8937e7f84ffb80a5ab2e7a445244'
    },
    {
      title: 'Contact',
      pageId: '04cb35ce1c24490ca8b942b26f4a5c80'
    }
  ]
})
