import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicRoutes from './components/RouteComponents/PublicRoutes.jsx'
import PrivateRoutes from './components/RouteComponents/PrivateRoutes.jsx'
import routes from './routes/routes.js'


import './App.css'
import Login from './components/Login/Login.jsx'
import VerifyOtp from './container/VerifyOtp/VerifyOtp.jsx'
import Home from './container/Home/Home.jsx'
import Loader from './components/Loader/Loader.jsx'

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/login' element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          } />
          <Route path='/verify-otp' element={
            <PublicRoutes>
              <VerifyOtp />
            </PublicRoutes>
          } />
          {routes?.map((route, idx) => {
            return <Route key={idx} path={route.path} element={
              <PrivateRoutes>
                <route.component />
              </PrivateRoutes>
            } />
          })}
        </Routes>
      </Suspense >
    </Router>
  )
}

export default App