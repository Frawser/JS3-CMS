import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// RootLayout component that renders Navbar, Outlet and Footer which build the layout of the page
const RootLayout = () => {
  return (
    <>
    <Navbar />
    <div className="container">
        <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default RootLayout