//定义一些路由
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import Person from "../pages/Person.vue";
import Search from "../pages/Search.vue";
import PersonEdit from "../pages/PersonEdit.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/person', component: Person },
    { path: '/search', component: Search },
    { path: '/person/edit', component: PersonEdit },
]

export default routes;//导出