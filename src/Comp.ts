import { App } from 'vue';
import GCompA from './component/GCompA.vue';
function install(app: App) {
    app.component(GCompA.name, GCompA);
}

export default { install }
export { GCompA }
