import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a',
    color: '#f3e8dc',
    padding: '80px 0 40px',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const topSectionStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '48px',
    marginBottom: '60px',
  };

  const brandSectionStyle: React.CSSProperties = {
    paddingRight: '40px',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  };

  const logoIconStyle: React.CSSProperties = {
    fontSize: '32px',
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#c7a17a',
    marginBottom: '32px',
  };

  const contactInfoStyle: React.CSSProperties = {
    marginBottom: '24px',
  };

  const contactTitleStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '12px',
  };

  const phoneStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#c7a17a',
    marginBottom: '8px',
  };

  const emailStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#c7a17a',
  };

  const socialIconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
  };

  const socialIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    backgroundColor: '#2b1b12',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const columnTitleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#f3e8dc',
  };

  const linkStyle: React.CSSProperties = {
    color: '#c7a17a',
    textDecoration: 'none',
    fontSize: '14px',
    marginBottom: '12px',
    transition: 'color 0.3s ease',
  };

  const appSectionStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const appTitleStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const appButtonsStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '16px',
  };

  const appButtonStyle: React.CSSProperties = {
    backgroundColor: '#2b1b12',
    color: '#f3e8dc',
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  };

  const qrCodeStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    backgroundColor: '#f3e8dc',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    margin: '0 auto',
  };

  const bottomSectionStyle: React.CSSProperties = {
    borderTop: '1px solid #2b1b12',
    paddingTop: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  };

  const legalLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    fontSize: '12px',
  };

  const copyrightStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#c7a17a',
  };

  const paymentIconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
  };

  const paymentIconStyle: React.CSSProperties = {
    width: '32px',
    height: '20px',
    backgroundColor: '#2b1b12',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={topSectionStyle}>
          <div style={brandSectionStyle}>
            <div style={logoStyle}>
              <span style={logoIconStyle}>📍</span>
              <span style={logoTextStyle}>Coffee Address</span>
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

            <div style={contactInfoStyle}>
              <h4 style={contactTitleStyle}>Contact Us</h4>
              <div style={socialIconsStyle}>
                <div style={socialIconStyle}>📞</div>
                <div style={socialIconStyle}>📧</div>
                <div style={socialIconStyle}>📱</div>
                <div style={socialIconStyle}>💬</div>
                <div style={socialIconStyle}>📷</div>
              </div>
              <div style={phoneStyle}>9200 31993</div>
              <div style={emailStyle}>customercare@addresscafe.sa</div>
              <div style={emailStyle}>www.addresscafe.sa</div>
            </div>
          </div>

          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>About Us</h4>
            <a href="#" style={linkStyle}>Our Company</a>
            <a href="#" style={linkStyle}>Our Coffee</a>
            <a href="#" style={linkStyle}>About address Coffee</a>
            <a href="#" style={linkStyle}>Investor Relations</a>
            <a href="#" style={linkStyle}>Customer Service</a>
            <a href="#" style={linkStyle}>Contact Us</a>
          </div>

          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>Careers</h4>
            <a href="#" style={linkStyle}>Culture & Values</a>
            <a href="#" style={linkStyle}>Belonging to us</a>
            <a href="#" style={linkStyle}>College Achievement Plan</a>
            <a href="#" style={linkStyle}>Saudi Careers</a>
            
            <h4 style={{...columnTitleStyle, marginTop: '24px'}}>For Business Partners</h4>
            <a href="#" style={linkStyle}>Landlord Support Center</a>
            <a href="#" style={linkStyle}>Suppliers</a>
            <a href="#" style={linkStyle}>Corporate Gift Card Sales</a>
            <a href="#" style={linkStyle}>Office & Foodservice Coffee</a>
          </div>

          <div style={appSectionStyle}>
            <h4 style={appTitleStyle}>Download Address Coffee APP Now</h4>
            <div style={appButtonsStyle}>
              <a href="#" style={appButtonStyle}>🍎 App Store</a>
              <a href="#" style={appButtonStyle}>📱 Google Play</a>
            </div>
            <div style={qrCodeStyle}>📱</div>
          </div>
        </div>

        <div style={bottomSectionStyle}>
          <div style={legalLinksStyle}>
            <a href="#" style={linkStyle}>FAQ</a>
            <a href="#" style={linkStyle}>Privacy Policy</a>
            <a href="#" style={linkStyle}>Terms Of use</a>
            <a href="#" style={linkStyle}>Cookies Policy</a>
          </div>

          <div style={copyrightStyle}>
            © 2025. Coffee Address Holding | All rights reserved.
          </div>

          <div style={paymentIconsStyle}>
            <div style={paymentIconStyle}>💳</div>
            <div style={paymentIconStyle}>💰</div>
            <div style={paymentIconStyle}>🏦</div>
            <div style={paymentIconStyle}>📱</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;