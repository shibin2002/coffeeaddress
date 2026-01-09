import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { isMobile } = useResponsive();
  
  // 4K detection
  const is4K = window.innerWidth >= 2560;

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
    backgroundColor: isScrolled ? 'rgba(78, 52, 26, 0.55)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(12px) saturate(140%) sepia(35%) hue-rotate(15deg)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(12px) saturate(140%) sepia(35%) hue-rotate(15deg)' : 'none',
    padding: isScrolled ? (is4K ? '12px 0' : '8px 0') : (is4K ? '24px 0' : '16px 0'),
    zIndex: 1000,
    borderBottom: isScrolled ? '2px solid rgba(199, 161, 122, 0.6)' : 'none',
    border: isScrolled ? '1px solid rgba(139, 111, 87, 0.4)' : 'none',
    borderTop: 'none',
    boxShadow: isScrolled ? '0 4px 20px rgba(78, 52, 26, 0.25), inset 0 1px 0 rgba(199, 161, 122, 0.2)' : 'none',
    transition: 'all 0.3s ease',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: is4K ? '1800px' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 8px' : (is4K ? '0 32px' : '0 16px'),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: isMobile ? '8px' : (is4K ? '24px' : '16px'),
    width: '100%',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  const logoImageStyle: React.CSSProperties = {
    height: isScrolled 
      ? (isMobile ? '35px' : (is4K ? '70px' : '50px')) 
      : (isMobile ? '50px' : (is4K ? '120px' : '80px')),
    width: 'auto',
    transition: 'height 0.3s ease',
  };

  const navLinksStyle: React.CSSProperties = {
    display: isMobile ? 'none' : 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: is4K ? '18px' : '12px',
    alignItems: 'center',
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#f3e8dc',
    transition: 'all 0.3s ease',
    flexShrink: 0,
    marginLeft: 'auto',
  };

  const mobileMenuStyle: React.CSSProperties = {
    display: isMobile && isMobileMenuOpen ? 'flex' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(78, 52, 26, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    flexDirection: 'column',
    padding: '20px',
    gap: '16px',
    borderBottom: '1px solid rgba(199, 161, 122, 0.3)',
    boxShadow: '0 4px 20px rgba(78, 52, 26, 0.3)',
  };

  const mobileMenuLinkStyle: React.CSSProperties = {
    color: '#f3e8dc',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    padding: '12px 0',
    borderBottom: '1px solid rgba(199, 161, 122, 0.2)',
    transition: 'color 0.3s ease',
  };

  const linkStyle: React.CSSProperties = {
    color: '#f3e8dc',
    textDecoration: 'none',
    fontSize: isScrolled 
      ? (is4K ? '18px' : '14px') 
      : (is4K ? '22px' : '16px'),
    fontWeight: '500',
    transition: 'all 0.3s ease',
  };

  const iconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '8px' : (is4K ? '18px' : '12px'),
    alignItems: 'center',
    order: isMobile ? -1 : 0,
    flexShrink: 0,
  };

  const iconStyle: React.CSSProperties = {
    width: isScrolled 
      ? (isMobile ? '18px' : (is4K ? '28px' : '20px')) 
      : (isMobile ? '20px' : (is4K ? '36px' : '24px')),
    height: isScrolled 
      ? (isMobile ? '18px' : (is4K ? '28px' : '20px')) 
      : (isMobile ? '20px' : (is4K ? '36px' : '24px')),
    color: '#f3e8dc',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
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
          <li style={{color: '#c7a17a', fontSize: is4K ? '20px' : '16px'}}>|</li>
          <li><a href="#" style={linkStyle}>Menu</a></li>
          <li style={{color: '#c7a17a', fontSize: is4K ? '20px' : '16px'}}>|</li>
          <li><a href="#" style={linkStyle}>Branches</a></li>
          <li style={{color: '#c7a17a', fontSize: is4K ? '20px' : '16px'}}>|</li>
          <li><a href="#" style={linkStyle}>Get App</a></li>
          <li style={{color: '#c7a17a', fontSize: is4K ? '20px' : '16px'}}>|</li>
          <li><a href="#" style={linkStyle}>Contact</a></li>
        </ul>

        <div style={iconsStyle}>
          <div style={iconStyle}>
            <svg width={isScrolled ? "20" : "24"} height={isScrolled ? "20" : "24"} viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="8" r="4"/>
              <path d="M12 14c-6 0-8 3-8 6h16c0-3-2-6-8-6z"/>
            </svg>
          </div>
          <div style={iconStyle}>
            <svg width={isScrolled ? "20" : "24"} height={isScrolled ? "20" : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div style={iconStyle}>
            <svg width={isScrolled ? "20" : "24"} height={isScrolled ? "20" : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
        </div>

        <button 
          style={mobileMenuButtonStyle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      <div style={mobileMenuStyle}>
        <a href="#" style={mobileMenuLinkStyle}>Home</a>
        <a href="#" style={mobileMenuLinkStyle}>Menu</a>
        <a href="#" style={mobileMenuLinkStyle}>Branches</a>
        <a href="#" style={mobileMenuLinkStyle}>Get App</a>
        <a href="#" style={mobileMenuLinkStyle}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;