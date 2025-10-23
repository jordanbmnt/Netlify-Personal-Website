import { NavLink } from "react-router-dom";
import './style.css'
import { Contact, Home, Settings } from "lucide-react";

export const NavBar = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'hsl(306, 100%, 65%)' : 'hsl(306, 100%, 5%)',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px',
  });

  const navigationList = [
    { to: '/', label: 'Home', icon: <Home size={20} /> },
    { to: '/settings', label: 'Settings', icon: <Settings size={20} /> },
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