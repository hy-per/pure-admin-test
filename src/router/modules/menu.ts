export default {
  path: '/menu',
  name: 'Menu',
  component: () => import('@/views/menu/index.vue'),
  meta: {
    title: '菜单管理',
    icon: 'ep:menu',
    rank: 3
  }
} as RouteConfigsTable
