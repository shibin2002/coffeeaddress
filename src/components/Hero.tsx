import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    minHeight: '100vh',
    height: '100vh',
    width: '100vw',
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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  };

  const contentStyle: React.CSSProperties = {
    color: '#f3e8dc',
  };

  const welcomeStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '400',
    marginBottom: '0px',
    color: '#c7a17a',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '84px',
    fontWeight: '700',
    marginTop: '20px',
    marginBottom: '0px',
    lineHeight: '0.8',
    letterSpacing: '-1px',
    whiteSpace: 'nowrap',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '26px',
    marginBottom: '40px',
    color: '#c7a17a',
    fontWeight: '300',
    lineHeight: '1.4',
    maxWidth: '500px',
  };

  const buttonsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
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
            <Button variant="outline" size="medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Find a Branch
            </Button>
            <Button variant="outline" size="medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              View Menu
            </Button>
            <Button variant="outline" size="medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
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