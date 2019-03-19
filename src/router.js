import VueRouter from 'vue-router'
import Index from './views/Index'
import TodoList from './views/TodoList'

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index'
  },
  {
    path: '/todos',
    component: TodoList,
    name: 'todos'
  }
]

export default new VueRouter({
  routes
})
