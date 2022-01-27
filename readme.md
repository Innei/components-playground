# 便携式多环境组件测试

用于分离测试组件的效果，或用于写组件 Demo。

当前支持的环境有 React 17，Vue 3。支持 TypeScript，Vue TSX，PostCSS，TailwindCSS 3。

## 如何使用

Fork 此项目。或者 Clone 到本地。使用 pnpm 安装 workspace 需要的依赖。

```
pnpm i
```

启动单个环境：

```
pnpm run dev:react
pnpm run dev:vue
```

在每个环境中的 pages 目录下可以编写新的组件测试。路由将自动生成。

注意：pages 下的页面组件必须存在默认导出。

## 大概就是这样的界面

React:

![](https://cdn.jsdelivr.net/gh/Innei/fancy@master/2022/0127140527.png)

Vue:

![](https://cdn.jsdelivr.net/gh/Innei/fancy@master/2022/0127140602.png)