import Header from '../../pages/Header'
import Footer from '../../pages/Footer'
import { Outlet } from 'react-router-dom'

export function Layout() {
    return (
      <>
          <main>
            <Header />
            <Outlet />
          </main>
          <Footer/>
      </>
    )
  }