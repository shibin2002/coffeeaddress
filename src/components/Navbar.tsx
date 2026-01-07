import React from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle: React.CSSProperties = {
    position: isScrolled ? 'fixed' : 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isScrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    padding: '16px 0',
    zIndex: 1000,
    borderBottom: isScrolled ? '1px solid rgba(199, 161, 122, 0.2)' : 'none',
    transition: 'all 0.3s ease',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  const logoImageStyle: React.CSSProperties = {
    height: '80px',
    width: 'auto',
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '12px',
    alignItems: 'center',
  };

  const linkStyle: React.CSSProperties = {
    color: '#f3e8dc',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  };

  const iconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  };

  const iconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    color: '#f3e8dc',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <a href="#" style={logoStyle}>
          <img 
            src="/logo.png" 
            alt="Coffee Address" 
            style={logoImageStyle}
          />
        </a>
        
        <ul style={navLinksStyle}>
          <li><a href="#" style={linkStyle}>Home</a></li>
          <li style={{color: '#c7a17a'}}>|</li>
          <li><a href="#" style={linkStyle}>Menu</a></li>
          <li style={{color: '#c7a17a'}}>|</li>
          <li><a href="#" style={linkStyle}>Branches</a></li>
          <li style={{color: '#c7a17a'}}>|</li>
          <li><a href="#" style={linkStyle}>Get App</a></li>
          <li style={{color: '#c7a17a'}}>|</li>
          <li><a href="#" style={linkStyle}>Contact</a></li>
        </ul>

        <div style={iconsStyle}>
          <div style={iconStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="8" r="4"/>
              <path d="M12 14c-6 0-8 3-8 6h16c0-3-2-6-8-6z"/>
            </svg>
          </div>
          <div style={iconStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div style={iconStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;