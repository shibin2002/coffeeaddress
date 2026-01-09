import React from 'react';
import Button from './Button';
import { useResponsive } from '../hooks/useResponsive';

const BusinessExpansion: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const topSectionStyle: React.CSSProperties = {
    backgroundColor: '#e9dbce',
    padding: isMobile ? '40px 0 60px 0' : isTablet ? '60px 0 90px 0' : '80px 0 120px 0',
  };

  const bottomSectionStyle: React.CSSProperties = {
    backgroundColor: '#c7a88b',
    padding: isMobile ? '40px 0 0px 0' : isTablet ? '60px 0 0px 0' : '80px 0 0px 0',
    overflow: 'visible',
    position: 'relative',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '768px' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
    gap: isMobile ? '32px' : isTablet ? '50px' : '80px',
    alignItems: 'center',
  };

  const topContainerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '768px' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
  };

  const contentStyle: React.CSSProperties = {
    color: '#1a1a1a',
    maxWidth: '100%',
    position: 'relative',
    zIndex: 1,
  };

  const yearStyle: React.CSSProperties = {
    fontSize: isMobile ? '40px' : isTablet ? '56px' : '72px',
    fontWeight: 'bold',
    color: '#a48163',
    marginBottom: isMobile ? '16px' : '24px',
    lineHeight: '1',
  };

  const roasteryTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '28px' : isTablet ? '42px' : '62px',
    fontWeight: 'bold',
    marginBottom: '0px',
    color: '#36251b',
    lineHeight: isMobile ? '1.2' : '1.1',
  };

  const roasteryDescriptionStyle: React.CSSProperties = {
    fontSize: isMobile ? '14px' : isTablet ? '18px' : '26px',
    lineHeight: isMobile ? '1.5' : '1.2',
    marginBottom: '0px',
    color: '#a48063',
    textAlign: isMobile ? 'left' : 'justify',
  };

  const expansionTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '26px' : isTablet ? '36px' : '52px',
    fontWeight: 'bold',
    marginBottom: '0px',
    color: '#36251b',
    lineHeight: isMobile ? '1.2' : '1.1',
  };

  const readyTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '22px' : isTablet ? '30px' : '46px',
    fontWeight: '700',
    marginBottom: isMobile ? '20px' : '30px',
    color: '#a58163',
    lineHeight: isMobile ? '1.3' : '1.2',
  };

  const expansionDescriptionStyle: React.CSSProperties = {
    fontSize: isMobile ? '16px' : isTablet ? '24px' : '36px',
    lineHeight: isMobile ? '1.4' : '1.3',
    marginBottom: isMobile ? '24px' : '33px',
    color: '#ffffffff',
  };

  const inquiryTextStyle: React.CSSProperties = {
    fontSize: isMobile ? '14px' : isTablet ? '20px' : '28px',
    color: '#a38062',
    marginBottom: isMobile ? '32px' : '48px',
  };

  return (
    <>
      <section style={topSectionStyle}>
        <div style={topContainerStyle}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: isMobile ? 'flex-start' : 'baseline', 
            marginBottom: isMobile ? '16px' : '8px',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '8px' : '0px'
          }}>
            <h3 style={roasteryTitleStyle}>Address Roastery</h3>
            <div style={yearStyle}>2016</div>
          </div>
          <p style={roasteryDescriptionStyle}>
            Address Roastery began its journey in 2016 as an extension of the success of 
            Address Café, driven by a deep passion for quality. With the trust of our 
            customers and our constant pursuit of development, 2023 marked a 
            significant milestone in our journey as we expanded and moved to a larger 
            facility, one that reflects our continuous growth and enables us to provide 
            better services to coffee enthusiasts.
          </p>
        </div>
      </section>

      <section style={bottomSectionStyle}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <h2 style={expansionTitleStyle}>Business & Expansion</h2>
            <h3 style={readyTitleStyle}>Ready to Scale</h3>
            <p style={expansionDescriptionStyle}>
              With unified operations, a solid supply chain & proven store models, Coffee 
              Address is fully prepared for regional & international expansion.
            </p>
            
            <Button 
              variant="primary" 
              size={isMobile ? "medium" : "large"} 
              style={{ 
                marginBottom: isMobile ? '16px' : '22px', 
                backgroundColor: '#c7a88b', 
                color: '#ffffffff', 
                border: '2px solid #ffffff',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '280px' : 'none'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px'}}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Contact Us
            </Button>
            <p style={inquiryTextStyle}>For partnership & expansion inquiries</p>

          </div>
        </div>
        <img 
          src="/bubg.png" 
          alt="Business Expansion" 
          style={{ 
            position: 'absolute', 
            right: isMobile ? '-200px' : isTablet ? '-120px' : '-50px', 
            top: isMobile ? '30%' : '40%', 
            transform: 'translateY(-50%)', 
            width: isMobile ? '400px' : isTablet ? '550px' : '750px', 
            height: 'auto',
            opacity: isMobile ? 0.3 : 1,
            zIndex: 0
          }} 
        />
      </section>
    </>
  );
};

export default BusinessExpansion;