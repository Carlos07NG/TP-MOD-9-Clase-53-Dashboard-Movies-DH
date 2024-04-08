import './App.css'
import { SideBar } from '../components/SideBar'
import { Footer } from '../components/Footer'
import { TopBar } from '../components/TopBar'
import { Outlet } from 'react-router-dom'
function AppLayout() {

  return (

    <div id="wrapper">
      <SideBar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <TopBar/>
            <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard DH</h1>
            </div>

            <Outlet/>

        </div>
    </div>
    </div>
    <Footer/>
    </div> 

  )
}

export default AppLayout
