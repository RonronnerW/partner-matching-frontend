//定义一些路由
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import Person from "../pages/Person.vue";
import Search from "../pages/Search.vue";
import PersonEdit from "../pages/PersonEdit.vue";
import SearchResult from "../pages/SearchResult.vue";
import Login from "../pages/Login.vue";
import TeamAdd from "../pages/TeamAdd.vue";
import TeamUpdate from "../pages/TeamUpdate.vue";
import TeamJoin from "../pages/TeamJoin.vue";
import TeamCreate from "../pages/TeamCreate.vue";

const routes = [
    { path: '/', title: '主页', component: Index },
    { path: '/team', title: '队伍', component: Team },
    { path: '/team/add', title: '创建队伍', component: TeamAdd },
    { path: '/team/update', title: '更新队伍', component: TeamUpdate },
    { path: '/team/join', title: '我加入的队伍', component: TeamJoin },
    { path: '/team/create', title: '我创建的队伍', component: TeamCreate },
    { path: '/person', title: '个人', component: Person },
    { path: '/search', title: '查找', component: Search },
    { path: '/person/edit', title: '个人编辑', component: PersonEdit },
    { path: '/person/login', title: '登录', component: Login },
    { path: '/search/result', title: '查找', component: SearchResult },

]

export default routes;//导出