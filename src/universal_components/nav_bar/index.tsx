import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
  });

  return (
    <nav style={{ marginBottom: '20px' }}>
      <NavLink to="/" style={navLinkStyles}>Home</NavLink>
      <NavLink to="/settings" style={navLinkStyles}>Settings</NavLink>
      <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
    </nav>
  );
}