import React from 'react';
import Button from './Button';
import { useResponsive } from '../hooks/useResponsive';

const Hero: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();

  const heroStyle: React.CSSProperties = {
    minHeight: '100vh',
    height: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  const videoStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(26, 26, 26, 0.6), rgba(43, 27, 18, 0.6))',
    zIndex: 1,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '768px' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '40px' : isTablet ? '48px' : '64px',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    zIndex: 2,
    minHeight: isMobile ? 'auto' : '60vh',
  };

  const contentStyle: React.CSSProperties = {
    color: '#f3e8dc',
    textAlign: isMobile ? 'center' : 'left',
    maxWidth: isMobile ? '100%' : 'none',
  };

  const welcomeStyle: React.CSSProperties = {
    fontSize: isMobile ? '12px' : isTablet ? '16px' : '20px',
    fontWeight: '400',
    marginBottom: isMobile ? '8px' : '0px',
    color: '#c7a17a',
    letterSpacing: isMobile ? '2px' : '3px',
    textTransform: 'uppercase',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '36px' : isTablet ? '56px' : '84px',
    fontWeight: '700',
    marginTop: isMobile ? '12px' : '20px',
    marginBottom: isMobile ? '16px' : '0px',
    lineHeight: isMobile ? '1.1' : '0.8',
    letterSpacing: '-1px',
    whiteSpace: isMobile ? 'normal' : 'nowrap',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '14px' : isTablet ? '18px' : '26px',
    marginBottom: isMobile ? '32px' : isTablet ? '36px' : '40px',
    color: '#c7a17a',
    fontWeight: '300',
    lineHeight: '1.4',
    maxWidth: isMobile ? '280px' : isTablet ? '400px' : '500px',
    margin: isMobile ? '0 auto 32px auto' : isTablet ? '0 auto 36px auto' : '0 0 40px 0',
  };

  const buttonsStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '12px' : '16px',
    flexWrap: 'wrap',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'center' : 'flex-start',
    alignItems: isMobile ? 'center' : 'flex-start',
    maxWidth: isMobile ? '280px' : 'none',
    margin: isMobile ? '0 auto' : '0',
  };

  const buttonStyle: React.CSSProperties = {
    width: isMobile ? '100%' : isTablet ? '160px' : '180px',
    minWidth: isMobile ? '240px' : isTablet ? '160px' : '180px',
    justifyContent: 'center',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };
  

  return (
    <section style={heroStyle}>
      <video
        style={videoStyle}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={welcomeStyle}>Welcome To</div>
          <h1 style={titleStyle}>Coffee Address</h1>
          <p style={subtitleStyle}>Crafting moments, one cup at a time.</p>
          
          <div style={buttonsStyle}>
            <Button variant="outline" size={isMobile ? "small" : "medium"} style={buttonStyle}>
              <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Find a Branch
            </Button>
            <Button variant="outline" size={isMobile ? "small" : "medium"} style={buttonStyle}>
              <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              View Menu
            </Button>
            <Button variant="outline" size={isMobile ? "small" : "medium"} style={buttonStyle}>
              <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Our Store
            </Button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;