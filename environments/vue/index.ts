import '@components/styles/index.css'
import { RouterView } from 'vue-router'
import { router } from './router'
const App = defineComponent({
  render() {
    return h(RouterView)
  },
})
const app = createApp(App)
app.use(router)
app.mount('#app')
