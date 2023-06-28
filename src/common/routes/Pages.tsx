import { Route, Routes } from 'react-router-dom'
import { RouteNames } from '../../constants/routes.ts'
import { About } from '../../modules/about'

export const Pages = () => {
  return (
    <Routes>
      <Route path={RouteNames.ABOUT} element={<About />} />
      <Route path={'*'} element={<h1>404</h1>} />
    </Routes>
  )
}
