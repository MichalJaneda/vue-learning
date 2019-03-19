import VueRouter from 'vue-router'
import Index from './views/Index'
import TodoList from './views/TodoList'
import Todo from './views/Todo'

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
  },
  {
    path: '/todos/:id',
    component: Todo,
    name: 'todo',
    meta: {
      title: 'Todo...'
    }
  }
]

export default new VueRouter({
  routes
})
