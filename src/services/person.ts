import myAxios from "../plugins/myAxios";
import {getCurrentUserState} from "../states/person.ts";


/**
 * 获取用户信息
 * @returns {Promise<null|any>}
 */
export const getCurrentUser = async () => {
    // 从缓存获取
    const user = getCurrentUserState();
    if (user) {
        return user;
    }
    //从远程处获取用户信息
    const res = await myAxios.get("/user/current");
    if (res.code == 200 ) {
        // setCurrentUserState(res.data);
        return res.data;
    }
    return null;
}