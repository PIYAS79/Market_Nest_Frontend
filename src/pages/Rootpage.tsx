import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Rootpage = () => {
  return (
    <div className=' h-screen w-full'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Rootpage
