export default {
  path: '/account',
  name: 'Account',
  component: () => import('@/views/account/index.vue'),
  meta: {
    title: '账号管理',
    icon: 'ri:user-fill',
    rank: 1
  }
} as RouteConfigsTable
