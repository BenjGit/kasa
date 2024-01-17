import Header from '../Header'
import Footer from '../Footer'
import GlobalStyle from '../../utils/style/globalStyle'
import { Outlet } from 'react-router-dom'

export function Layout() {
    return (
      <>
          <GlobalStyle />
          <main>
            <Header />
            <Outlet />
          </main>
          <Footer/>
      </>
    )
  }