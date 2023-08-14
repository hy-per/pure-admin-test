export default {
  path: '/page',
  name: 'Page',
  component: () => import('@/views/page/index.vue'),
  meta: {
    title: '页面管理',
    icon: 'icon-park-outline:page',
    rank: 4
  }
} as RouteConfigsTable
