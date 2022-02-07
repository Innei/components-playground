import { Layout, Nav } from '@douyinfe/semi-ui'
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
const { Content, Sider } = Layout

export const RouterLayout = () => {
  return (
    <Router>
      <Layout hasSider className="!min-h-screen">
        <Sider>
          <MenuSider />
        </Sider>

        <Content className="p-4">
          <Routes>
            {routes.map(({ path, name, component: Comp }) => (
              <Route path={path} key={name} element={<Comp />} />
            ))}
          </Routes>
        </Content>
      </Layout>
    </Router>
  )
}

const MenuSider = () => {
  const router = useLocation()

  const name = router.pathname.slice(1)

  return (
    <Nav
      className="!pt-8 h-screen"
      mode={'vertical'}
      selectedKeys={[name]}
      footer={{
        collapseButton: true,
      }}
    >
      {routes.map(({ path, name }) => {
        return (
          <Nav.Item key={name} itemKey={name}>
            <Link to={path} className="flex w-full h-full">
              {name}
            </Link>
          </Nav.Item>
        )
      })}
    </Nav>
  )
}
