import {createApp} from 'vue';
import App from './App.vue' ;
import {Button, NavBar, Icon, Tabbar, TabbarItem, Search, Tag, Divider, TreeSelect,
    Col, Row, Cell, Form, Field, CellGroup, Image as VanImage, Card, Empty } from 'vant';
import * as VueRouter from 'vue-router';
import routes from './configs/route';

const app = createApp(App);
app.use(NavBar);
app.use(Button);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Empty);
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
app.use(router);
app.use(Tag);
app.use(Search);
app.use(Divider);
app.use(TreeSelect);
app.use(Col);
app.use(Row);
app.use(Cell);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(VanImage);
app.use(Card);

app.mount('#app')



  


  