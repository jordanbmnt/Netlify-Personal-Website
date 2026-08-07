import { NavLink } from "react-router-dom";
import './style.css'
import { Contact, Home, User, UserCircle2Icon } from "lucide-react";

export const NavBar = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'var(--heading-color)' : 'var(--body-color)',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px',
  });

  const navigationList = [
    { to: '/', label: 'HOME', icon: <Home size={20} /> },
    { to: '/link', label: 'ABOUT', icon: <User size={20} /> },
    { to: '/contact', label: 'CONTACT', icon: <Contact size={20} /> },
  ]

  return (
    <nav>
      <div className="logo">
        <img src="/logo.png" alt="soy_jimb logo" />
        <h3>Soy Jimb</h3>
      </div>
      <div>{navigationList.map(({ to, label }) => (
        <NavLink key={to} to={to} style={navLinkStyles}>
          <div className="nav-button">
            <p>{label}</p>
          </div>
        </NavLink>
      ))}</div>
      <div className="profile">
        <UserCircle2Icon size={20} />
      </div>
    </nav>
  );
}