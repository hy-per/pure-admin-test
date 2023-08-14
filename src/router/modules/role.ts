export default {
  path: '/role',
  name: 'Role',
  component: () => import('@/views/role/index.vue'),
  meta: {
    title: '角色管理',
    icon: 'eos-icons:role-binding',
    rank: 2
  }
} as RouteConfigsTable
