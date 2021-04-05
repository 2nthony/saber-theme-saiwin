import Root from './root.vue'
import 'saika/dist/saika.css'
import './styles/main.css'

export default ({ setRootComponent }) => {
  setRootComponent(Root)
}
