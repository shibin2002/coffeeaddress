import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

const Footer: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  
  const paymentMethods = [
    { name: 'Mada', src: '/payment-logos/mada.svg' },
    { name: 'Atheer', src: '/payment-logos/atheer.svg' },
    { name: 'Visa', src: '/payment-logos/visa.svg' },
    { name: 'Mastercard', src: '/payment-logos/mastercard.svg' },
    { name: 'Apple Pay', src: '/payment-logos/apple-pay.svg' }
  ];
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a',
    color: '#f3e8dc',
    padding: isMobile ? '30px 0 30px' : isTablet ? '35px 0 35px' : '40px 0 40px',
    backgroundImage: 'url(/fbg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '768px' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
  };

  const topSectionStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 0.5fr 1fr',
    gap: isMobile ? '24px' : isTablet ? '32px' : '48px',
    marginBottom: isMobile ? '20px' : '35px',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '0px',
  };

  const logoImageStyle: React.CSSProperties = {
    height: isMobile ? '80px' : isTablet ? '120px' : '260px',
    width: 'auto',
  };

  const topBrandSectionStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
    gap: isMobile ? '16px' : '-20px',
    alignItems: 'flex-start',
    marginBottom: isMobile ? '24px' : '0px',
    paddingBottom: isMobile ? '0px' : '0px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: isMobile ? '12px' : isTablet ? '14px' : '18px',
    lineHeight: isMobile ? '1.5' : '1.6',
    color: '#ffffffff',
    marginBottom: isMobile ? '16px' : '32px',
    marginLeft: isMobile ? '0px' : '-40px',
    marginTop: isMobile ? '16px' : '30px',
    textAlign: isMobile ? 'left' : 'justify',
  };

  const phoneStyle: React.CSSProperties = {
    fontSize: isMobile ? '16px' : '24px',
    fontWeight: 'bold',
    color: '#c7a17a',
    marginBottom: '8px',
  };

  const emailStyle: React.CSSProperties = {
    fontSize: isMobile ? '10px' : '14px',
    color: '#c7a17a',
  };

  const socialIconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '12px' : '16px',
    marginBottom: isMobile ? '16px' : '24px',
    marginTop: isMobile ? '16px' : '20px',
    justifyContent: isMobile ? 'center' : 'flex-start',
  };

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const columnTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '12px' : '18px',
    fontWeight: 'bold',
    marginBottom: isMobile ? '8px' : '0px',
    color: '#f3e8dc',
  };

  const linkStyle: React.CSSProperties = {
    color: '#d7d6d6ff',
    textDecoration: 'none',
    fontSize: isMobile ? '10px' : '14px',
    marginBottom: isMobile ? '6px' : '6px',
    transition: 'color 0.3s ease',
    display: 'block',
  };

  const appSectionStyle: React.CSSProperties = {
    textAlign: isMobile ? 'center' : 'left',
    marginTop: isMobile ? '32px' : '84px',
  };

  const appTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '14px' : '20px',
    fontWeight: 'bold',
    marginBottom: isMobile ? '12px' : '20px',
  };



  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={topBrandSectionStyle}>
          <div style={logoStyle}>
            <img 
              src="/flo.png" 
              alt="Coffee Address" 
              style={logoImageStyle}
            />
          </div>
          <p style={descriptionStyle}>
            We are a Saudi brand specialized in delivering a complete experience for coffee lovers. We 
            offer a diverse selection of coffees, including specialty coffee, along with a variety of hot 
            and cold beverages, sandwiches, and desserts. Through our online store, we also provide 
            a wide range of coffee-related products, from carefully selected coffee beans to brewing 
            tools and thermal mugs with a clear vision to lead the 2011 mugs. Our journey at Address Café 
            began in the coffee sector within the Kingdom, driven by the ambition to expand globally 
            while staying committed to the highest standards of quality.
          </p>
        </div>

        <div style={topSectionStyle}>
          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>About Us</h4>
            <a href="#" style={linkStyle}>Our Company</a>
            <a href="#" style={linkStyle}>Our Coffee</a>
            <a href="#" style={linkStyle}>About Address Coffee</a>
            <a href="#" style={linkStyle}>Investor Relations</a>
            <a href="#" style={linkStyle}>Customer Service</a>
            <a href="#" style={linkStyle}>Contact Us</a>
            
            <h4 style={{...columnTitleStyle, marginTop: '24px'}}>For Business Partners</h4>
            <a href="#" style={linkStyle}>Landlord Support Center</a>
            <a href="#" style={linkStyle}>Suppliers</a>
            <a href="#" style={linkStyle}>Corporate Gift Card Sales</a>
            <a href="#" style={linkStyle}>Office & Foodservice Coffee</a>
          </div>

          <div style={{...columnStyle, marginLeft: isMobile ? '0px' : isTablet ? '24px' : '59px', textAlign: isMobile ? 'center' : 'left'}}>
            <h4 style={columnTitleStyle}>Contact Us</h4>
            <div style={socialIconsStyle}>
              <a href="https://twitter.com/addresscafe" target="_blank" rel="noopener noreferrer" style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#ffffff',
                border: '1px solid #cccccc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#372416">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://instagram.com/addresscafe" target="_blank" rel="noopener noreferrer" style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#ffffff',
                border: '1px solid #cccccc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#372416">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/addresscafe" target="_blank" rel="noopener noreferrer" style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#ffffff',
                border: '1px solid #cccccc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#372416">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://facebook.com/addresscafe" target="_blank" rel="noopener noreferrer" style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#ffffff',
                border: '1px solid #cccccc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#372416">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com/addresscafe" target="_blank" rel="noopener noreferrer" style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#ffffff',
                border: '1px solid #cccccc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#372416">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div style={{...emailStyle, marginBottom: '0px', marginTop: '-8px', fontSize: isMobile ? '10px' : '12px', fontWeight: 'bold'}}>UNIFIED NUMBER</div>
            <div style={{...phoneStyle, marginBottom: '4px', marginTop: '-8px'}}>9200 31993</div>
            <div style={emailStyle}>customercare@addresscafe.sa</div>
            <div style={emailStyle}>www.addresscafe.sa</div>
            
            <h4 style={{...columnTitleStyle, marginTop: '24px'}}>Careers</h4>
            <a href="#" style={linkStyle}>Culture & Values</a>
            <a href="#" style={linkStyle}>Belonging to us</a>
            <a href="#" style={linkStyle}>College Achievement Plan</a>
            <a href="#" style={linkStyle}>Saudi Careers</a>
          </div>

          <div style={columnStyle}>
          </div>

          <div style={appSectionStyle}>
            <h4 style={appTitleStyle}>
              Download<br />
              Address Coffee APP Now
            </h4>
            <div style={{ display: 'flex', alignItems: isMobile ? 'center' : 'flex-start', gap: isMobile ? '16px' : '20px', flexDirection: isMobile ? 'column' : 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '16px', alignItems: isMobile ? 'center' : 'flex-start' }}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'transparent',
                  border: '1px solid #b9b9b9ff',
                  color: '#ffffff',
                  padding: isMobile ? '10px 18px' : '12px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: isMobile ? '180px' : '200px',
                  fontSize: isMobile ? '14px' : '16px'
                }}>
                  <svg width={isMobile ? "24" : "28"} height={isMobile ? "24" : "28"} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: isMobile ? '10px' : '11px', color: '#cccccc' }}>Download on the</div>
                    <div style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 'bold' }}>App Store</div>
                  </div>
                </button>
                
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'transparent',
                  border: '1px solid #b9b9b9ff',
                  color: '#ffffff',
                  padding: isMobile ? '10px 18px' : '12px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: isMobile ? '180px' : '200px',
                  fontSize: isMobile ? '14px' : '16px'
                }}>
                  <svg width={isMobile ? "24" : "28"} height={isMobile ? "24" : "28"} viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5" fill="#32BBFF"/>
                    <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12" fill="#32BBFF"/>
                    <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81" fill="#FFBC00"/>
                    <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66" fill="#E74C3C"/>
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: isMobile ? '10px' : '11px', color: '#cccccc' }}>GET IT ON</div>
                    <div style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 'bold' }}>Google Play</div>
                  </div>
                </button>
              </div>
              
              <div style={{
                borderRadius: '8px',
                width: isMobile ? '100px' : '140px',
                height: isMobile ? '100px' : '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img src="/qr.png" alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'invert(1)' }} />
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: isMobile ? '4px' : '12px',
              fontSize: isMobile ? '8px' : '12px',
              flexWrap: 'wrap',
              marginTop: isMobile ? '16px' : '20px',
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: 'center'
            }}>
              <a href="#" style={linkStyle}>FAQ</a>
              <span style={{ color: '#d7d6d6ff' }}>|</span>
              <a href="#" style={linkStyle}>Privacy Policy</a>
              <span style={{ color: '#d7d6d6ff' }}>|</span>
              <a href="#" style={linkStyle}>Terms Of use</a>
              <span style={{ color: '#d7d6d6ff' }}>|</span>
              <a href="#" style={linkStyle}>Cookies Policy</a>
            </div>
            
            <div style={{
              fontSize: isMobile ? '8px' : '14px',
              color: '#d7d6d6ff',
              marginTop: isMobile ? '16px' : '24px',
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '8px' : '19px',
              justifyContent: isMobile ? 'center' : 'flex-start',
              flexWrap: 'wrap'
            }}>
              <span>© 2025. Coffee Address Holding</span>
              <span>|</span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: isMobile ? '8px' : '12px', 
          marginTop: isMobile ? '-20px' : '-45px', 
          flexWrap: 'wrap',
          gridColumn: isMobile ? '1' : '1 / 3',
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          {paymentMethods.map((method, index) => (
            <img 
              key={index} 
              src={method.src} 
              alt={method.name}
              style={{ height: isMobile ? '20px' : '24px', width: 'auto', objectFit: 'contain' }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;