import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const RootLayout = ({user, setUser}) => {
  return (
    <>
    <Navbar user={user} setUser={setUser}/>
    <div className="container">
        <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default RootLayout