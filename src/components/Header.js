import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo.jpg'
import logoSMImg from '../assets/logo-sm.jpg'
import logoText from '../assets/logo-text.jpg'
import usersIcon from '../assets/icons/users.svg'
import userPlusIcon from '../assets/icons/user-plus.svg'
import "../styles/Header.css"


function Header(){
    return(
        <header className="header">
            <div className="header-nav-logo">
                <img src={logoSMImg} alt="Logo Wealth Health" className="header-nav-logo-smImg" />
                <img src={logoText} alt="Logo Wealth Health" className="header-nav-logo-text" />
            </div>
            <nav className="header-nav">
                <ul className="header-nav-menu">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "header-nav-link active" : "header-nav-link"}>
                        <li className="header-nav-menu-item">
                            <img src={userPlusIcon} alt="icon add user " className="header-nav-menu-item-img" />
                            <span className="header-nav-menu-item-span">Create Employee</span>
                        </li>
                    </NavLink>
                    <NavLink to="/employees" end className={({ isActive }) => isActive ? "header-nav-link active" : "header-nav-link"} >
                        <li className="header-nav-menu-item">
                            <img src={usersIcon} alt="Icon users" className="header-nav-menu-item-img" />
                            <span className="header-nav-menu-item-span">Show Employees</span>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}
export default Header
