import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

const RoasteryStory: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const sectionStyle: React.CSSProperties = {
    minHeight: isMobile ? '70vh' : isTablet ? '80vh' : '100vh',
    background: `url("/rbg.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: isMobile ? 'center' : 'flex-end',
    justifyContent: isMobile ? 'center' : 'flex-start',
    position: 'relative',
    paddingBottom: isMobile ? '40px' : isTablet ? '60px' : '100px',
    paddingLeft: isMobile ? '0px' : isTablet ? '32px' : '24px',
    paddingRight: isMobile ? '0px' : '0px',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: isMobile 
      ? 'linear-gradient(to bottom, rgba(26, 26, 26, 0.4) 0%, rgba(26, 26, 26, 0.6) 100%)'
      : 'radial-gradient(circle at center, transparent 0%, rgba(26, 26, 26, 0.3) 100%)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '600px' : '1000px',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
    textAlign: isMobile ? 'center' : 'left',
    position: 'relative',
    zIndex: 1,
    marginLeft: isMobile ? '0px' : isTablet ? '60px' : '140px',
    width: isMobile ? '100%' : 'auto',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '36px' : isTablet ? '56px' : '80px',
    fontWeight: 'bold',
    color: '#f3e8dc',
    marginBottom: isMobile ? '12px' : '0px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    lineHeight: isMobile ? '1.2' : '1.1',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '24px' : isTablet ? '36px' : '52px',
    color: '#ffffffff',
    fontWeight: '400',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    margin: isMobile ? '0' : '0',
    lineHeight: isMobile ? '1.3' : '1.2',
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
        <h2 style={titleStyle}>The Birth of the Roastery</h2>
        <p style={subtitleStyle}>The coffee address</p>
      </div>
    </section>
  );
};

export default RoasteryStory;