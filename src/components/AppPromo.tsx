import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

const AppPromo: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#f3e8dc',
    padding: isMobile ? '30px 0 20px 0' : isTablet ? '35px 0 25px 0' : '40px 0 30px 0',
    position: 'relative',
    overflow: 'visible',
    minHeight: isMobile ? '400px' : isTablet ? '550px' : '600px',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: isMobile ? '20px' : isTablet ? '40px' : '80px',
    flexDirection: isMobile ? 'column' : 'row',
  };

  const contentStyle: React.CSSProperties = {
    color: '#1a1a1a',
    width: isMobile ? '100%' : 'auto',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '36px' : isTablet ? '48px' : '64px',
    fontWeight: 'bold',
    marginBottom: isMobile ? '8px' : '12px',
    lineHeight: '1.2',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '20px' : isTablet ? '26px' : '42px',
    color: '#2b1b12',
    marginBottom: isMobile ? '6px' : '8px',
    fontWeight: 'bold',
  };

  const promoTextStyle: React.CSSProperties = {
    fontSize: isMobile ? '18px' : isTablet ? '24px' : '28px',
    color: '#c7a17a',
    marginBottom: isMobile ? '12px' : '16px',
    fontWeight: '500',
  };

  const downloadSectionStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '12px' : '24px',
    alignItems: 'flex-start',
    marginBottom: isMobile ? '20px' : '32px',
    flexDirection: isMobile ? 'column' : 'row',
  };

  const buttonsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '8px' : '12px',
  };

  const storeButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '8px' : '12px',
    backgroundColor: '#000000',
    border: '1px solid #000000',
    color: '#ffffff',
    padding: isMobile ? '10px 12px' : '12px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: isMobile ? '12px' : '14px',
    fontWeight: '600',
    transition: 'background-color 0.2s ease',
    cursor: 'pointer',
    width: isMobile ? '100%' : '260px',
  };

  const qrContainerStyle: React.CSSProperties = {
    borderRadius: '8px',
    width: isMobile ? '120px' : isTablet ? '140px' : '160px',
    height: isMobile ? '120px' : isTablet ? '140px' : '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  };

  const qrImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h2 style={titleStyle}>
            Download<br />
            Address Coffee APP Now
          </h2>
          <p style={subtitleStyle}>Enjoy your first drink for <span style={{backgroundColor: '#a58163', color: '#e9dbce', fontWeight: 'bold', padding: '0px 16px', borderRadius: '4px', display: 'inline-block'}}>FREE</span></p>
          <p style={promoTextStyle}>EXCLUSIVE DEALS & VOUCHERS</p>
          
          <div style={downloadSectionStyle}>
            <div style={buttonsContainerStyle}>
              <a 
                href="#" 
                style={{
                  ...storeButtonStyle,
                  backgroundColor: hoveredButton === 'app' ? '#1a1a1a' : '#000000',
                }}
                onMouseEnter={() => setHoveredButton('app')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <svg width="49" height="49" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div style={{ textAlign: 'left', lineHeight: '1.1' }}>
                  <div style={{ fontSize: '18px', color: '#d1d5db' }}>Download on the</div>
                  <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#ffffff' }}>App Store</div>
                </div>
              </a>
              
              <a 
                href="#" 
                style={{
                  ...storeButtonStyle,
                  backgroundColor: hoveredButton === 'play' ? '#1a1a1a' : '#000000',
                }}
                onMouseEnter={() => setHoveredButton('play')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <svg width="49" height="49" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5" fill="#32BBFF"/>
                  <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12" fill="#32BBFF"/>
                  <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81" fill="#FFBC00"/>
                  <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66" fill="#E74C3C"/>
                </svg>
                <div style={{ textAlign: 'left', lineHeight: '1.1' }}>
                  <div style={{ fontSize: '18px', color: '#d1d5db' }}>GET IT ON</div>
                  <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#ffffff' }}>Google Play</div>
                </div>
              </a>
            </div>
            
            <div style={qrContainerStyle}>
              <img src="/qr.png" alt="QR Code" style={qrImageStyle} />
            </div>
          </div>
        </div>

        <img src="/app.png" alt="Coffee App" style={{ width: isMobile ? '100%' : isTablet ? '320px' : '540px', height: 'auto', marginRight: isMobile ? '0px' : isTablet ? '-100px' : '-210px', display: isMobile ? 'none' : 'block', position: 'absolute', right: isMobile ? '0' : isTablet ? '150px' : '200px', top: '-28px', zIndex: 10 }} />
      </div>
    </section>
  );
};

export default AppPromo;