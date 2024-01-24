/**
 * 用户类别
 */
export type CurrentUser = {
    id: number;
    username: string;
    userCount: string;
    avatarUrl?: string;
    gender: number;
    phone: string;
    email: string;
    userStatus: number;
    role: number;
    planetCode: string;
    tags: string[];
    createTime: Date;
};