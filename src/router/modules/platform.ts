export default {
  path: '/platform',
  name: 'Platform',
  component: () => import('@/views/platform/index.vue'),
  meta: {
    title: '平台管理',
    icon: 'ep:platform',
    rank: 0
  }
} as RouteConfigsTable
