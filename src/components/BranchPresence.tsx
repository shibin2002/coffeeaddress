import React from 'react';
import Button from './Button';
import { useResponsive } from '../hooks/useResponsive';

interface StoreFormat {
  title: string;
  size: string;
  description: string;
  image: string;
}

// Add animation styles
const animationStyle = `
  @keyframes sparkle {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
    }
    25% {
      transform: translateY(-20px) translateX(10px);
    }
    50% {
      transform: translateY(-40px) translateX(-10px);
    }
    75% {
      transform: translateY(-20px) translateX(15px);
    }
  }
  
  .map-sparkle {
    position: relative;
  }
  
  .map-sparkle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(2px 2px at 60% 70%, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.9), transparent),
      radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(2px 2px at 90% 60%, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(1px 1px at 30% 80%, rgba(255, 255, 255, 0.6), transparent);
    background-size: 200% 200%;
    background-position: 0% 0%;
    animation: sparkle 3s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }
`;

// Inject animation into document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationStyle;
  document.head.appendChild(style);
}

const BranchPresence: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const storeFormats: StoreFormat[] = [
    {
      title: 'Cafe',
      size: '100m² to 350m²',
      description: 'Full service coffee experience',
      image: '/b1.png'
    },
    {
      title: 'DT Cafe',
      size: '150m² to 350m²',
      description: 'Drive-through convenience',
      image: '/b2.png'
    },
    {
      title: 'Internal Kiosk',
      size: '15m² to 75m²',
      description: 'Compact premium service',
      image: '/b3.png'
    },
    {
      title: 'DT only Kiosk',
      size: '15m² to 40m²',
      description: 'Express drive-through',
      image: '/b4.png'
    }
  ];

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#37261c',
    padding: isMobile ? '40px 0 20px 0' : isTablet ? '60px 0 30px 0' : '80px 0 40px 0',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '768px' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: isMobile ? 'center' : 'left',
    marginBottom: isMobile ? '32px' : isTablet ? '50px' : '80px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '32px' : isTablet ? '48px' : '64px',
    fontWeight: 'bold',
    color: '#f3e8dc',
    marginBottom: isMobile ? '16px' : '24px',
    letterSpacing: isMobile ? '1px' : '2px',
    lineHeight: isMobile ? '1.2' : '1.1',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: isMobile ? '14px' : isTablet ? '18px' : '26px',
    color: '#c7a17a',
    lineHeight: '1.6',
    maxWidth: isMobile ? '100%' : isTablet ? '600px' : '800px',
    margin: isMobile ? '0 auto' : '0',
  };

  const formatsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '16px' : isTablet ? '12px' : '8px',
    marginBottom: isMobile ? '40px' : isTablet ? '50px' : '80px',
    maxWidth: isMobile ? '300px' : 'none',
    margin: isMobile ? '0 auto 40px auto' : isTablet ? '0 auto 50px auto' : '0 auto 80px auto',
  };


  const formatImageStyle: React.CSSProperties = {
    width: '100%',
    height: isMobile ? '120px' : isTablet ? '140px' : '150px',
    objectFit: 'contain',
    borderRadius: isMobile ? '8px' : '12px',
    display: 'block',
  };

  const mapStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0px',
    display: 'block',
    position: 'relative',
    zIndex: 0,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>BRANCH PRESENCE</h2>
          <p style={descriptionStyle}>
            More than 290 branches serving customers nationwide 
            with a unified standard of quality in every cup.
          </p>
        </div>

        <div style={formatsGridStyle}>
          {storeFormats.map((format, index) => (
            <img 
              key={index}
              src={format.image} 
              alt={format.title} 
              style={formatImageStyle}
            />
          ))}
        </div>
      </div>

      <div className="map-sparkle" style={{ 
        position: 'relative', 
        width: '100vw', 
        height: isMobile ? '200px' : isTablet ? '300px' : '450px', 
        marginLeft: 'calc(-50vw + 50%)', 
        marginBottom: '0px' 
      }}>
        <video 
          src="/bv.mp4" 
          style={mapStyle} 
          autoPlay 
          muted 
          loop 
          playsInline
        />
      </div>

      <div style={containerStyle}>
        <div style={{ 
          textAlign: isMobile ? 'center' : 'left', 
          marginTop: isMobile ? '24px' : isTablet ? '32px' : '40px' 
        }}>
          <Button 
            variant="outline" 
            size={isMobile ? "medium" : "large"}
            style={{ 
              fontSize: isMobile ? '14px' : isTablet ? '18px' : '24px', 
              padding: isMobile ? '10px 24px' : isTablet ? '12px 28px' : '12px 32px',
              minWidth: isMobile ? '200px' : 'auto'
            }}
          >
            Locate Nearest Branch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BranchPresence;