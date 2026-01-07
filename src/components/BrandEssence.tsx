import React from 'react';

const BrandEssence: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#e9dbce',
    backgroundImage: `url('/bbg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0px 0 0px 0',
    position: 'relative',
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    minHeight: '450px',
    display: 'flex',
    alignItems: 'center',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1100px',
    marginLeft: '19%',
    marginRight: '10%',
    padding: '0 24px',
    textAlign: 'left',
    display: 'block',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '64px',
    fontWeight: 'bold',
    color: '#2b1b12',
    marginBottom: '16px',
    marginTop: '-50px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '36px',
    color: '#8b6f47',
    lineHeight: '1.3',
    maxWidth: '800px',
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