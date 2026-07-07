import { NavLink } from "react-router-dom";
import './style.css'
import { Contact, Home, User } from "lucide-react";

export const NavBar = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#0056b3;' : 'hsla(307, 100%, 5%, 0.94)',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px',
  });

  const navigationList = [
    { to: '/', label: 'Home', icon: <Home size={20} /> },
    { to: '/link', label: 'About Me', icon: <User size={20} /> },
    { to: '/contact', label: 'Contact', icon: <Contact size={20} /> },
  ]

  return (
    <nav style={{ marginBottom: '20px' }}>
      {navigationList.map(({ to, label, icon }) => (
        <NavLink key={to} to={to} style={navLinkStyles}>
          <div className="nav-button">
            {icon}
            <p>{label}</p>
          </div>
        </NavLink>
      ))}
    </nav>
  );
}