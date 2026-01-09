import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

const BrandEssence: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#e9dbce',
    backgroundImage: `url('/bbg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: isMobile ? '60px 0' : isTablet ? '80px 0' : '40px 0 40px 0',
    position: 'relative',
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    minHeight: isMobile ? '400px' : isTablet ? '500px' : '450px',
    display: 'flex',
    alignItems: 'center',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '800px' : '1100px',
    marginLeft: isMobile ? '0' : isTablet ? '10%' : '19%',
    marginRight: isMobile ? '0' : '10%',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
    textAlign: isMobile ? 'center' : 'left',
    display: 'block',
    width: isMobile ? '100%' : 'auto',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '32px' : isTablet ? '48px' : '64px',
    fontWeight: 'bold',
    color: '#2b1b12',
    marginBottom: isMobile ? '20px' : '16px',
    marginTop: isMobile ? '0px' : isTablet ? '-30px' : '-50px',
    letterSpacing: isMobile ? '1px' : isTablet ? '2px' : '3px',
    textTransform: 'uppercase',
    lineHeight: isMobile ? '1.2' : '1.1',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: isMobile ? '18px' : isTablet ? '28px' : '36px',
    color: '#8b6f47',
    lineHeight: isMobile ? '1.5' : '1.3',
    maxWidth: isMobile ? '100%' : isTablet ? '600px' : '800px',
    fontWeight: '600',
    margin: '0',
  };

  const backgroundPatternStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  };

  return (
    <section style={sectionStyle}>
      <div style={backgroundPatternStyle}></div>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Brand Essence</h2>
        <p style={descriptionStyle}>
          Where passion meets precision.
        </p>
        <p style={descriptionStyle}>
          We focus on delivering a consistent, memorable coffee 
          experience built on taste, quality, and a visual identity that speaks before the cup does.
        </p>
      </div>
    </section>
  );
};

export default BrandEssence;