import VueRouter from 'vue-router'
import Index from './views/Index'
import TodoList from './views/TodoList'

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/todos',
    component: TodoList,
    name: 'todos',
    meta: {
      title: 'All todos'
    }
  }
]

export default new VueRouter({
  routes
})
