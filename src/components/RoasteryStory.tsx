import React from 'react';

const RoasteryStory: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    minHeight: '60vh',
    background: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(43, 27, 18, 0.7)), 
                 url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c7a17a' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='8'/%3E%3Ccircle cx='50' cy='30' r='6'/%3E%3Ccircle cx='80' cy='25' r='7'/%3E%3Ccircle cx='30' cy='60' r='5'/%3E%3Ccircle cx='70' cy='70' r='9'/%3E%3Ccircle cx='15' cy='80' r='4'/%3E%3C/g%3E%3C/svg%3E") #2b1b12`,
    backgroundSize: '200px 200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, transparent 0%, rgba(26, 26, 26, 0.3) 100%)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 24px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '80px',
    marginBottom: '32px',
    display: 'block',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#f3e8dc',
    marginBottom: '16px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '32px',
    color: '#c7a17a',
    fontWeight: '300',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
        <span style={iconStyle}>📍</span>
        <h2 style={titleStyle}>The Birth of the Roastery</h2>
        <p style={subtitleStyle}>The coffee address</p>
      </div>
    </section>
  );
};

export default RoasteryStory;