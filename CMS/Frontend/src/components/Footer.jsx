import { NavLink } from 'react-router-dom'



const footer = () => {
  return (
    <div className="container position-absolute bottom-0 start-50 translate-middle-x">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Fruit Master, Inc</span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="btn" ><NavLink to="/products">Products</NavLink></a></li>
      <li className="ms-3"><a className="btn" ><NavLink to="/login">Login</NavLink></a></li>
      
    </ul>
      
    </footer>
  </div>
  )
}

export default footer