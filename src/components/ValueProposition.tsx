import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

const ValueProposition: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const valueCards: ValueCard[] = [
    {
      icon: '/1.png',
      title: 'Quality You Can Trust',
      description: 'A unified taste standard in every branch.'
    },
    {
      icon: '/2.png',
      title: 'Fast Services',
      description: 'Designed for efficiency every cup on time.'
    },
    {
      icon: '/3.png',
      title: 'Strong Identity',
      description: 'One brand. One feeling. One experience.'
    },
    {
      icon: '/4.png',
      title: 'Customer Culture',
      description: 'Warm, respectful service at every touchpoint.'
    }
  ];

  const sectionStyle: React.CSSProperties = {
    background: 'linear-gradient(to bottom, #c7a88b 0%, #c7a88b 50%, transparent 50%), url(/vbg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: isMobile ? '40px 0 80px 0' : isTablet ? '50px 0 100px 0' : '50px 0 120px 0',
    position: 'relative',
    minHeight: isMobile ? '800px' : isTablet ? '900px' : '1000px',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: isMobile ? '100%' : isTablet ? '768px' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 24px',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: isMobile ? 'center' : 'left',
    marginBottom: isMobile ? '50px' : isTablet ? '70px' : '100px',
    paddingLeft: isMobile ? '0px' : isTablet ? '40px' : '150px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '28px' : isTablet ? '42px' : '64px',
    fontWeight: 'bold',
    color: '#2b1b12',
    marginBottom: isMobile ? '16px' : '25px',
    lineHeight: isMobile ? '1.3' : '1.2',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '18px' : isTablet ? '26px' : '36px',
    color: '#ffffff',
    fontWeight: '600',
  };

  const cardsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '16px' : isTablet ? '20px' : '32px',
    marginBottom: isMobile ? '50px' : isTablet ? '70px' : '80px',
    maxWidth: isMobile ? '320px' : isTablet ? '600px' : '800px',
    margin: isMobile ? '0 auto 50px auto' : isTablet ? '0 auto 70px auto' : '0 auto 80px auto',
    marginTop: isMobile ? '0px' : isTablet ? '-20px' : '-40px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#9e7c5f',
    padding: isMobile ? '16px 16px 16px 20px' : '6px 12px 6px 24px',
    borderRadius: isMobile ? '16px' : '20px',
    textAlign: isMobile ? 'center' : 'left',
    border: 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    minHeight: isMobile ? '180px' : isTablet ? '210px' : '255px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  const cardIconStyle: React.CSSProperties = {
    width: isMobile ? '50px' : isTablet ? '60px' : '80px',
    height: isMobile ? '50px' : isTablet ? '60px' : '80px',
    marginBottom: isMobile ? '12px' : isTablet ? '8px' : '8px',
    display: 'block',
    objectFit: 'contain',
    margin: isMobile ? '0 auto 12px auto' : isTablet ? '0 auto 8px auto' : '0 auto 8px auto',
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '16px' : isTablet ? '20px' : '25px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: isMobile ? '8px' : '6px',
    lineHeight: '1.1',
  };

  const cardDescriptionStyle: React.CSSProperties = {
    fontSize: isMobile ? '12px' : isTablet ? '14px' : '18px',
    color: '#f3e8dc',
    lineHeight: isMobile ? '1.4' : '1.2',
    margin: '0',
    paddingBottom: isMobile ? '8px' : '12px',
  };

  const beliefSectionStyle: React.CSSProperties = {
    textAlign: isMobile ? 'center' : 'left',
    color: '#f3e8dc',
    paddingLeft: isMobile ? '0px' : isTablet ? '40px' : '150px',
    paddingRight: isMobile ? '0px' : '0px',
  };

  const beliefTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '32px' : isTablet ? '44px' : '56px',
    fontWeight: 'bold',
    marginBottom: isMobile ? '-10px' : '-20px',
    color: '#ffffff',
    letterSpacing: isMobile ? '1px' : '2px',
  };

  const beliefSubtitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
    color: '#ffffff',
    marginBottom: '0px',
    fontWeight: '300',
  };

  const valuesStyle: React.CSSProperties = {
    fontSize: isMobile ? '16px' : isTablet ? '20px' : '24px',
    color: '#f3e8dc',
    fontWeight: '400',
    margin: '0',
  };

  const valuesFirstPStyle: React.CSSProperties = {
    margin: isMobile ? '24px 0 0 0' : '36px 0 0 0',
    color: '#c7a17a',
  };

  const valuesSecondPStyle: React.CSSProperties = {
    margin: '0',
  };

  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            WHY COFFEE ADDRESS?<br />
            VALUE PROPOSITION
          </h2>
          <p style={subtitleStyle}>Consistency. Speed. Identity. Experience.</p>
        </div>

        <div style={cardsGridStyle}>
          {valueCards.map((card, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === index 
                  ? '0 20px 40px rgba(199, 161, 122, 0.2)' 
                  : '0 8px 24px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={card.icon} alt={card.title} style={cardIconStyle} />
              <h3 style={cardTitleStyle}>{card.title}</h3>
              <p style={cardDescriptionStyle}>{card.description}</p>
            </div>
          ))}
        </div>

        <div style={beliefSectionStyle}>
          <h3 style={beliefTitleStyle}>WE BELIEVE IN</h3>
          <p style={beliefSubtitleStyle}>simplicity, honesty & consistency.</p>
          <div style={valuesStyle}>
            <p style={valuesFirstPStyle}>Every team member embodies the values of:</p>
            <p style={valuesSecondPStyle}><strong>Quality | Discipline | Respect | Learning | Professionalism</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;