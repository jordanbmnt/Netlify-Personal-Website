import { NavLink } from "react-router-dom";
import './style.css'
import { Contact, Home, Settings } from "lucide-react";

export const NavBar = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
  });

  return (
    <nav style={{ marginBottom: '20px' }}>
      <NavLink to="/" style={navLinkStyles}>
        <div className="nav-button">
          <Home className="nav-icon" size={20} />
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink to="/settings" style={navLinkStyles}>
        <div className="nav-button">
          <Settings className="nav-icon" size={20} />
          <p>Settings</p>
        </div>
      </NavLink>
      <NavLink to="/contact" style={navLinkStyles}>
        <div className="nav-button">
          <Contact className="nav-icon" size={20} />
          <p>Contact</p>
        </div>
      </NavLink>
    </nav>
  );
}