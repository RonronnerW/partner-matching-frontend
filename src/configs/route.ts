//定义一些路由
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import Person from "../pages/Person.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/Team', component: Team },
    { path: '/Person', component: Person },
]

export default routes;//导出