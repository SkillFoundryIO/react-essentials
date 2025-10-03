import { NavLink } from 'react-router-dom'

function Navbar() {
  function getLinkCss(isActive) {
    if (isActive) return "nav-link active";
    return "nav-link";
  }

  return (
    <header className="d-flex justify-content-center py-3" 
      style={{backgroundColor: '#212529'}}>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/"
               className={({ isActive }) => 
                 getLinkCss(isActive)}>
               Home
            </NavLink>
          </li>
          <li className="nav-item">
             <NavLink to="/movies"
                className={({ isActive }) => 
                  getLinkCss(isActive)}>
                Movie List
             </NavLink>
          </li>
        </ul>
    </header>
  )
}

export default Navbar