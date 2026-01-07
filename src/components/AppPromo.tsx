import React from 'react';

const AppPromo: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#f3e8dc',
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

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '24px',
    lineHeight: '1.2',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '24px',
    color: '#2b1b12',
    marginBottom: '16px',
  };

  const promoTextStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#c7a17a',
    marginBottom: '32px',
    fontWeight: '500',
  };

  const downloadSectionStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    marginBottom: '32px',
  };

  const storeButtonStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a',
    color: '#f3e8dc',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'transform 0.3s ease',
  };

  const qrCodeStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#f3e8dc',
  };

  const phonesContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  const phoneStyle: React.CSSProperties = {
    width: '200px',
    height: '400px',
    backgroundColor: '#1a1a1a',
    borderRadius: '24px',
    padding: '20px',
    margin: '0 -20px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    zIndex: 1,
  };

  const phoneScreenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3e8dc',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
  };

  const phone2Style: React.CSSProperties = {
    ...phoneStyle,
    transform: 'rotate(-5deg) scale(0.9)',
    zIndex: 0,
    opacity: 0.8,
  };

  const phone3Style: React.CSSProperties = {
    ...phoneStyle,
    transform: 'rotate(5deg) scale(0.9)',
    zIndex: 0,
    opacity: 0.8,
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
          <p style={subtitleStyle}>Enjoy your first drink for <span style={{color: '#c7a17a', fontWeight: 'bold'}}>FREE</span></p>
          <p style={promoTextStyle}>EXCLUSIVE DEALS & VOUCHERS</p>
          
          <div style={downloadSectionStyle}>
            <a 
              href="#" 
              style={{
                ...storeButtonStyle,
                transform: hoveredButton === 'app' ? 'translateY(-2px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredButton('app')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              🍎 Download on the App Store
            </a>
            
            <a 
              href="#" 
              style={{
                ...storeButtonStyle,
                transform: hoveredButton === 'play' ? 'translateY(-2px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredButton('play')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              📱 GET IT ON Google Play
            </a>
            
            <div style={qrCodeStyle}>
              📱
            </div>
          </div>
        </div>

        <div style={phonesContainerStyle}>
          <div style={phone2Style}>
            <div style={phoneScreenStyle}>☕</div>
          </div>
          <div style={phoneStyle}>
            <div style={phoneScreenStyle}>📱</div>
          </div>
          <div style={phone3Style}>
            <div style={phoneScreenStyle}>🛒</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;