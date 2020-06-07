import { 
  HomePage, 
  NotFoundPage,
} from './pages'

export default [
  { path: '/', exact: true, component: HomePage },
  { path: '*', exact: true, component: NotFoundPage },
]

