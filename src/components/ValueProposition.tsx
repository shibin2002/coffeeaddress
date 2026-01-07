import React from 'react';

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

const ValueProposition: React.FC = () => {
  const valueCards: ValueCard[] = [
    {
      icon: '/1.png',
      title: 'Quality You Can Trust',
      description: 'A unified taste standard in every branch.'
    },
    {
      icon: '/2.png',
      title: 'Fast Service',
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
    background: 'linear-gradient(to bottom, #c7a17a 0%, #c7a17a 50%, transparent 50%), url(/vbg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '1px 0 120px 0',
    position: 'relative',
    minHeight: '800px',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'left',
    marginBottom: '80px',
    paddingLeft: '150px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '64px',
    fontWeight: 'bold',
    color: '#2b1b12',
    marginBottom: '-35px',
    lineHeight: '1.2',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '36px',
    color: '#ffffff',
    fontWeight: '600',
  };

  const cardsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    marginBottom: '80px',
    maxWidth: '800px',
    margin: '0 auto 80px auto',
    marginTop: '-40px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#a68968',
    padding: '6px 12px',
    borderRadius: '20px',
    textAlign: 'left',
    border: 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    minHeight: '255px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  const cardIconStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    marginBottom: '-35px',
    display: 'block',
    objectFit: 'contain',
    margin: '0 auto -35px auto',
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '6px',
  };

  const cardDescriptionStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#f3e8dc',
    lineHeight: '1.2',
    margin: '0',
    paddingBottom: '12px',
  };

  const beliefSectionStyle: React.CSSProperties = {
    textAlign: 'left',
    color: '#f3e8dc',
    paddingLeft: '150px',
  };

  const beliefTitleStyle: React.CSSProperties = {
    fontSize: '56px',
    fontWeight: 'bold',
    marginBottom: '-65px',
    color: '#ffffff',
    letterSpacing: '2px',
  };

  const beliefSubtitleStyle: React.CSSProperties = {
    fontSize: '48px',
    color: '#ffffff',
    marginBottom: '0px',
    fontWeight: '300',
  };

  const valuesStyle: React.CSSProperties = {
    fontSize: '24px',
    color: '#f3e8dc',
    fontWeight: '400',
    margin: '0',
  };

  const valuesFirstPStyle: React.CSSProperties = {
    margin: '36px 0 0 0',
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