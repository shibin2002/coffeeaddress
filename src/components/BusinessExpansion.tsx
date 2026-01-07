import React from 'react';
import Button from './Button';

const BusinessExpansion: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#c7a17a',
    padding: '120px 0',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = {
    color: '#1a1a1a',
  };

  const yearStyle: React.CSSProperties = {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#2b1b12',
    marginBottom: '24px',
    lineHeight: '1',
  };

  const roasteryTitleStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '32px',
    color: '#1a1a1a',
  };

  const roasteryDescriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    lineHeight: '1.8',
    marginBottom: '48px',
    color: '#2b1b12',
  };

  const expansionTitleStyle: React.CSSProperties = {
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#1a1a1a',
  };

  const readyTitleStyle: React.CSSProperties = {
    fontSize: '36px',
    fontWeight: '300',
    marginBottom: '32px',
    color: '#2b1b12',
    fontStyle: 'italic',
  };

  const expansionDescriptionStyle: React.CSSProperties = {
    fontSize: '18px',
    lineHeight: '1.7',
    marginBottom: '32px',
    color: '#2b1b12',
  };

  const inquiryTextStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#2b1b12',
    marginBottom: '24px',
    fontStyle: 'italic',
  };

  const illustrationStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const cafeIllustrationStyle: React.CSSProperties = {
    width: '400px',
    height: '300px',
    backgroundColor: '#f3e8dc',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 20px 60px rgba(43, 27, 18, 0.3)',
    border: '4px solid #2b1b12',
    position: 'relative',
  };

  const cafeSignStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a',
    color: '#f3e8dc',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const cafeWindowsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  };

  const windowStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    backgroundColor: '#2b1b12',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  };

  const awningStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-20px',
    left: '20px',
    right: '20px',
    height: '40px',
    backgroundColor: '#2b1b12',
    borderRadius: '20px 20px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f3e8dc',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={yearStyle}>2016</div>
          <h3 style={roasteryTitleStyle}>Address Roastery</h3>
          <p style={roasteryDescriptionStyle}>
            Address Roastery began its journey in 2016 as an extension of the success of 
            Address Café, driven by a deep passion for quality. With the trust of our 
            customers and our constant pursuit of development, 2023 marked a 
            significant milestone in our journey as we expanded and moved to a larger 
            facility, one that reflects our continuous growth and enables us to provide 
            better services to coffee enthusiasts.
          </p>

          <h2 style={expansionTitleStyle}>Business & Expansion</h2>
          <h3 style={readyTitleStyle}>Ready to Scale</h3>
          <p style={expansionDescriptionStyle}>
            With unified operations, a solid supply chain & proven store models, Coffee 
            Address is fully prepared for regional & international expansion.
          </p>
          
          <p style={inquiryTextStyle}>For partnership & expansion inquiries</p>
          <Button variant="primary" size="large">
            ✉️ Contact Us
          </Button>
        </div>

        <div style={illustrationStyle}>
          <div style={cafeIllustrationStyle}>
            <div style={awningStyle}>coffee address</div>
            <div style={cafeSignStyle}>📍 Coffee Address</div>
            <div style={cafeWindowsStyle}>
              <div style={windowStyle}>☕</div>
              <div style={windowStyle}>🥐</div>
              <div style={windowStyle}>🍰</div>
            </div>
            <div style={{fontSize: '32px'}}>🏪</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessExpansion;