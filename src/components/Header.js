import { NavLink } from 'react-router-dom'
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
                    <li className="header-nav-menu-item">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "header-nav-link active" : "header-nav-link"}>

                            <img src={userPlusIcon} alt="icon add user " className="header-nav-menu-item-img" />
                            <span className="header-nav-menu-item-span">Create Employee</span>

                    </NavLink>
                    </li>
                    <li className="header-nav-menu-item">
                    <NavLink to="/employees" end className={({ isActive }) => isActive ? "header-nav-link active" : "header-nav-link"} >

                            <img src={usersIcon} alt="Icon users" className="header-nav-menu-item-img" />
                            <span className="header-nav-menu-item-span">Current Employees</span>

                    </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
