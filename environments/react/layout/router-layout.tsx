import { Layout, Menu } from 'antd'
import React from 'react'
import Loadable from 'react-loadable'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

const pages = import.meta.glob('../pages/**/*.{vue,tsx,jsx}')
const routes = Object.entries(pages).map(([filename, component]) => {
  const componentName = filename
    .split('/')
    .pop()
    ?.replace(/\.(vue|tsx|jsx)$/, '')
  return {
    path: `/${componentName}`,
    component: Loadable({
      loader: component,
      loading: () => null,
      render: (loaded) => <loaded.default />,
    }),
    name: componentName,
    meta: { page: true },
  }
})
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export const RouterLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <Router>
      <Layout className="!min-h-screen">
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <MenuSider />
        </Sider>

        <Layout className="p-4">
          <Content>
            <Routes>
              {routes.map(({ path, name, component: Comp }) => (
                <Route path={path} key={name} element={<Comp />} />
              ))}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

const MenuSider = () => {
  const router = useLocation()

  const name = router.pathname.slice(1)

  return (
    <Menu className="!pt-8" theme="dark" activeKey={name} mode="inline">
      {routes.map(({ path, name }) => {
        return (
          <Menu.Item key={name}>
            <Link to={path}>{name}</Link>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}
