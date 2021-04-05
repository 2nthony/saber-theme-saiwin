import Root from './src/root.vue'
import 'saika/dist/saika.css'
import './src/styles/main.css'

export default ({ setRootComponent }) => {
  setRootComponent(Root)
}
