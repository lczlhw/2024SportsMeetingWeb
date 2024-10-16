/**
 * 路由表
 * 
 * 定义应用的路由配置，包括路径和对应的组件。
 */
import React from "react";
import GameListPage from "../pages/GameListPage";  // 导入展示所有墙列表的组件
import GamePage from "../pages/GamePage";  // 导入展示单个墙的组件

/**
 * 定义路由配置数组
 * 每个对象表示一条路由规则
 * path: 路径
 * element: 路径对应的组件
 * children: 嵌套路由
 */
const routers = [
    {
        path: '/',
        element: <GameListPage />  // 根路径，显示所有墙列表页面
    },
    {
        path: '/games',
        element: <GamePage />  // 动态路径，显示单个墙页面
    },
]

export default routers;  // 导出路由配置
