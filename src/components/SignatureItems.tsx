import React from 'react';
import Button from './Button';
import { useResponsive } from '../hooks/useResponsive';

interface MenuItem {
  name: string;
  displayName?: { prefix?: string; main: string };
  image: string;
  indicators?: { cold?: boolean; hot?: boolean; bread?: boolean; cookie?: boolean };
  nutrition?: { calories: string; protein: string; time: string };
}

const SignatureItems: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const menuItems: MenuItem[] = [
    {
      name: 'THE COFFEE DAY',
      displayName: { prefix: 'THE', main: 'COFFEE\nDAYS' },
      image: '/si1.png',
      indicators: { cold: true, hot: true },
      nutrition: { calories: '0 / 100g', protein: '116 mg', time: '13 min' }
    },
    {
      name: 'THE AMAZING BELLINI',
      displayName: { prefix: 'THE', main: 'AMAZING\nBELLINI' },
      image: '/si2.png',
      indicators: { cold: true },
      nutrition: { calories: '71 / 100g', protein: '146.65 mg', time: '68 min' }
    },
    {
      name: 'THE PISTACHIO COOKIES',
      displayName: { prefix: 'THE', main: 'PISTACHIO\nCOOKIES' },
      image: '/si3.png',
      indicators: { cookie: true },
      nutrition: { calories: '0 / 100g', protein: '116 mg', time: '13 min' }
    },
    {
      name: 'THE PRETZEL WITH MINT',
      displayName: { prefix: 'THE', main: 'PRETZEL\nWITH MINT' },
      image: '/si4.png',
      indicators: { bread: true },
      nutrition: { calories: '71 / 100g', protein: '146.65 mg', time: '68 min' }
    },
    {
      name: 'THE PISTACHIO LATTE',
      displayName: { prefix: 'THE', main: 'PISTACHIO\nLATTE' },
      image: '/si5.png',
      indicators: { hot: true },
      nutrition: { calories: '71 / 100g', protein: '146.65 mg', time: '68 min' }
    },
    {
      name: 'THE SPANISH LATTE',
      displayName: { prefix: 'THE', main: 'SPANISH\nLATTE' },
      image: '/si6.png',
      indicators: { cold: true },
      nutrition: { calories: '71 / 100g', protein: '146.65 mg', time: '68 min' }
    },
    {
      name: 'THE SALTED CARAMEL',
      displayName: { prefix: 'THE', main: 'SALTED\nCARAMEL' },
      image: '/si7.png',
      indicators: { cookie: true },
      nutrition: { calories: '0 / 100g', protein: '116 mg', time: '13 min' }
    },
    {
      name: 'THE SPICY TUNA PANINI',
      displayName: { prefix: 'THE', main: 'SPICY TUNA\nPANINI' },
      image: '/si8.png',
      indicators: { bread: true },
      nutrition: { calories: '71 / 100g', protein: '146.65 mg', time: '68 min' }
    }
  ];

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#c7a88b',
    padding: isMobile ? '60px 0 40px 0' : isTablet ? '70px 0 50px 0' : '80px 0 60px 0',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '768px' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: isMobile ? 'center' : 'left',
    marginBottom: '0px',
    marginTop: isMobile ? '0px' : isTablet ? '-20px' : '-40px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '36px' : isTablet ? '56px' : '74px',
    fontWeight: 'bold',
    color: '#37261c',
    marginBottom: '12px',
    letterSpacing: isMobile ? '1px' : '2px',
    lineHeight: isMobile ? '1.2' : '1.1',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '20px' : isTablet ? '28px' : '38px',
    color: '#ffffffff',
    fontWeight: 'bold',
    marginTop: isMobile ? '8px' : '-10px',
    marginBottom: isMobile ? '32px' : isTablet ? '36px' : '28px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '20px' : isTablet ? '24px' : '32px',
    marginBottom: isMobile ? '48px' : isTablet ? '56px' : '64px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#a48163',
    borderRadius: isMobile ? '12px' : '16px',
    padding: isMobile ? '20px 16px' : isTablet ? '24px 20px' : '32px 24px',
    textAlign: 'center',
    transition: 'transform 0.4s ease',
    cursor: 'pointer',
    border: '1px solid rgba(199, 161, 122, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: isMobile ? '280px' : isTablet ? '300px' : '330px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '1000px',
  };

  const cardImageStyle: React.CSSProperties = {
    width: '80%',
    height: '485%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    objectFit: 'contain',
    zIndex: 1,
    transition: 'transform 0.4s ease, z-index 0.4s ease, opacity 0.4s ease',
  };

  const cardContentStyle: React.CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    textAlign: 'left',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    transition: 'transform 0.4s ease, z-index 0.4s ease',
  };

  const cardNameStyle: React.CSSProperties = {
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '40px',
    fontWeight: 'bold',
    color: '#f3e8dc',
    marginBottom: '12px',
    letterSpacing: '1px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: isMobile ? '40px' : '50px',
    left: isMobile ? '12px' : '16px',
    textAlign: 'left',
    lineHeight: '1.1',
  };

  const cardNamePrefixStyle: React.CSSProperties = {
    fontSize: isMobile ? '12px' : isTablet ? '14px' : '18px',
    fontWeight: 'normal',
    color: '#f3e8dc',
    display: 'block',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const indicatorContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '12px' : '16px',
    left: isMobile ? '12px' : '16px',
    display: 'flex',
    gap: isMobile ? '6px' : '8px',
    zIndex: 3,
  };

  const indicatorStyle: React.CSSProperties = {
    width: isMobile ? '28px' : '32px',
    height: isMobile ? '28px' : '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  };

  const cartIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '12px' : '16px',
    right: isMobile ? '12px' : '16px',
    width: isMobile ? '32px' : '40px',
    height: isMobile ? '32px' : '40px',
    zIndex: 3,
  };

  const nutritionStyle: React.CSSProperties = {
    fontSize: isMobile ? '10px' : '12px',
    color: '#f3e8dc',
    lineHeight: '1.6',
    position: 'absolute',
    zIndex: 2,
    bottom: isMobile ? '8px' : '12px',
    left: isMobile ? '8px' : '10px',
    right: isMobile ? '-8px' : '-10px',
    display: 'flex',
    gap: '0px',
    justifyContent: 'flex-start',
  };

  const coldIconSVG = (
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#c9a78a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <line x1="24" y1="8" x2="24" y2="40"/>
    <line x1="8" y1="24" x2="40" y2="24"/>
    <line x1="12" y1="12" x2="36" y2="36"/>
    <line x1="36" y1="12" x2="12" y2="36"/>
    <line x1="20" y1="10" x2="24" y2="14"/>
    <line x1="28" y1="10" x2="24" y2="14"/>
    <line x1="20" y1="38" x2="24" y2="34"/>
    <line x1="28" y1="38" x2="24" y2="34"/>
    <line x1="10" y1="20" x2="14" y2="24"/>
    <line x1="10" y1="28" x2="14" y2="24"/>
    <line x1="38" y1="20" x2="34" y2="24"/>
    <line x1="38" y1="28" x2="34" y2="24"/>
  </g>
</svg>



  );

  const hotIconSVG = (
   <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">

  <g fill="none" stroke="#c9a78a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="
      M24 9
      C18 14, 13 19, 13 27
      C13 36, 19 40, 24 40
      C29 40, 35 36, 35 27
      C35 20, 31 18, 31 14
      C31 12, 28 11, 24 9
      Z
    "/>
    <path d="
      M24 21
      C21 25, 19.5 27.5, 19.5 31
      C19.5 34, 21.5 36, 24 36
      C26.5 36, 28.5 34, 28.5 31
      C28.5 28, 25.5 27, 25.5 24
      C25.5 23, 24.7 22, 24 21
      Z
    "/>

  </g>
</svg>

  );

  const breadIconSVG = (
    <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#c8a88b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer bread shape */}
        <path d="M8 27C9 19, 17 15, 24 15C31 15, 39 19, 40 27C40 30, 38 33, 34 33H14C10 33, 8 30, 8 27Z"/>
        {/* 4 segments (cuts) */}
        <path d="M16 17 C14 22, 14 28, 16 32"/>
        <path d="M21 16 C20 22, 20 28, 21 33"/>
        <path d="M27 16 C28 22, 28 28, 27 33"/>
        <path d="M32 17 C34 22, 34 28, 32 32"/>
      </g>
    </svg>
  );

  const cookieIconSVG = (
    <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#c8a88b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Cookie outline with smoother bite */}
        <path d="M30 16C21 16, 14 23, 14 32C14 41, 21 48, 32 48C43 48, 50 41, 50 32C45 32, 41 28, 41 24C38 26, 35 25, 30 16Z"/>
        {/* Chocolate chips (inside only) */}
        <circle cx="26" cy="33" r="1.6"/>
        <circle cx="35" cy="36" r="1.6"/>
        <circle cx="32" cy="27" r="1.4"/>
      </g>
    </svg>
  );

  const timeIconSVG = (
    <svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#c9a78a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Top bar */}
        <line x1="28" y1="12" x2="36" y2="12"/>
        {/* Stem */}
        <line x1="32" y1="12" x2="32" y2="16"/>
        {/* Outer circle */}
        <circle cx="32" cy="36" r="14"/>
        {/* Hand */}
        <line x1="32" y1="36" x2="38" y2="30"/>
        {/* Center dot */}
        <circle cx="32" cy="36" r="1.5"/>
      </g>
    </svg>
  );

  const caloriesIconSVG = (
    <svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#c9a78a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Back flame (slightly offset & bigger) */}
        <g opacity="0.7">
          <path d="M30 16C25 22, 23 25, 23 32C23 40, 28 45, 33 45C38 45, 43 40, 43 32C43 27, 38 25, 38 21C38 19, 35 18, 30 16Z"/>
          <path d="M30 28C27 32, 27 34, 27 37C27 40, 29 42, 33 42C36 42, 38 40, 38 37C38 34, 34 33, 34 30C34 29, 33 28.5, 30 28Z"/>
        </g>
        {/* Front flame (main) */}
        <path d="M26 20C22 25, 20 28, 20 34C20 40, 24 44, 28 44C32 44, 36 40, 36 34C36 30, 32 28, 32 24C32 22, 30 21, 26 20Z"/>
        <path d="M26 30C24 33, 24 35, 24 38C24 41, 26 42.5, 28 42.5C30 42.5, 32 41, 32 38.5C32 35, 29 34, 29 31C29 30, 28 29.5, 26 30Z"/>
      </g>
    </svg>
  );

  const proteinIconSVG = (
    <svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#c9a78a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Top leaf */}
        <path d="M32 18C26 18, 24 24, 27 28C30 32, 38 32, 40 26C42 22, 38 18, 32 18Z"/>
        {/* Center line (top) */}
        <path d="M32 20 L32 30"/>
        {/* Left leaf */}
        <path d="M24 32C18 32, 16 38, 20 42C24 46, 30 44, 32 40C34 36, 30 32, 24 32Z"/>
        {/* Center line (left) */}
        <path d="M22 34 L30 42"/>
        {/* Right leaf */}
        <path d="M40 32C46 32, 48 38, 44 42C40 46, 34 44, 32 40C30 36, 34 32, 40 32Z"/>
        {/* Center line (right) */}
        <path d="M42 34 L34 42"/>
      </g>
    </svg>
  );

  const footerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'space-between',
    alignItems: 'center',
    gap: isMobile ? '24px' : '32px',
    flexDirection: isMobile ? 'column' : 'row',
  };

  const footerTextStyle: React.CSSProperties = {
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '42px',
    color: '#ffffff',
    fontWeight: '500',
    margin: '0',
    flex: 1,
    textAlign: isMobile ? 'center' : 'left',
  };

  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>SIGNATURE ITEMS</h2>
          <p style={subtitleStyle}>Our best selling favorites.</p>
        </div>

        <div style={gridStyle}>
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  ...cardStyle,
                  // Remove the card scaling - card stays in place
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src={item.image} alt={item.name} style={{
                  ...cardImageStyle,
                  zIndex: hoveredCard === index ? 10 : 1,
                  opacity: hoveredCard === index ? 1 : 0.7,
                  // Only enlarge the image - no vertical movement
                  transform: hoveredCard === index 
                    ? 'translate(-50%, -50%) scale(1.2)' 
                    : 'translate(-50%, -50%) scale(1)',
                }} />
                {item.indicators && (
                  <div style={{
                    ...indicatorContainerStyle,
                    zIndex: hoveredCard === index ? 5 : 3,
                    transform: hoveredCard === index ? 'translateZ(-100px)' : 'translateZ(0)',
                    opacity: hoveredCard === index ? 0 : 1,
                    transition: 'opacity 0.4s ease, transform 0.4s ease, z-index 0.4s ease',
                  }}>
                    {item.indicators.cold && <div style={indicatorStyle}>{coldIconSVG}</div>}
                    {item.indicators.hot && <div style={indicatorStyle}>{hotIconSVG}</div>}
                    {item.indicators.bread && <div style={indicatorStyle}>{breadIconSVG}</div>}
                    {item.indicators.cookie && <div style={indicatorStyle}>{cookieIconSVG}</div>}
                  </div>
                )}
                <img src="/c.png" alt="cart" style={{
                  ...cartIconStyle,
                  zIndex: hoveredCard === index ? 5 : 3,
                  transform: hoveredCard === index ? 'translateZ(-100px)' : 'translateZ(0)',
                  opacity: hoveredCard === index ? 0 : 1,
                  transition: 'opacity 0.4s ease, transform 0.4s ease, z-index 0.4s ease',
                }} />
                <div style={{
                  ...cardContentStyle,
                  zIndex: hoveredCard === index ? 0 : 2,
                  transform: hoveredCard === index ? 'translateZ(-100px)' : 'translateZ(0)',
                  opacity: hoveredCard === index ? 0 : 1,
                  transition: 'opacity 0.4s ease, transform 0.4s ease, z-index 0.4s ease',
                }}>
                  <h3 style={cardNameStyle}>
                    {item.displayName ? (
                      <>
                        <span style={cardNamePrefixStyle}>{item.displayName.prefix}</span>
                        {item.displayName.main}
                      </>
                    ) : (
                      item.name
                    )}
                  </h3>
                  {item.nutrition && (
                    <div style={nutritionStyle}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {caloriesIconSVG}
                        {item.nutrition.calories}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {proteinIconSVG}
                        {item.nutrition.protein}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {timeIconSVG}
                        {item.nutrition.time}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={footerStyle}>
          <p style={footerTextStyle}>Smooth, layered & crafted to refresh</p>
          <Button 
            variant="primary" 
            size={isMobile ? "medium" : "large"}
            style={{ 
              backgroundColor: '#c7a88b', 
              color: '#ffffffff', 
              border: '2px solid #ffffff',
              minWidth: isMobile ? '140px' : '160px'
            }}
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureItems;