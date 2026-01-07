import React from 'react';
import Button from './Button';

interface MenuItem {
  name: string;
  description: string;
  emoji: string;
}

const SignatureItems: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      name: 'THE COLD',
      description: 'Rich cold brew perfection',
      emoji: '🥤'
    },
    {
      name: 'THE AMAZING BELLINI',
      description: 'Signature fruit blend',
      emoji: '🍑'
    },
    {
      name: 'THE PISTACHIO COOKIES',
      description: 'Handcrafted sweet treats',
      emoji: '🍪'
    },
    {
      name: 'THE PRETZEL WITH MINT',
      description: 'Savory meets fresh',
      emoji: '🥨'
    },
    {
      name: 'THE PISTACHIO LATTE',
      description: 'Creamy nutty delight',
      emoji: '☕'
    },
    {
      name: 'THE SPANISH LATTE',
      description: 'Traditional European style',
      emoji: '🥛'
    },
    {
      name: 'THE SALTED CARAMEL',
      description: 'Sweet and salty harmony',
      emoji: '🍮'
    },
    {
      name: 'THE SPICY TUNA PANINI',
      description: 'Gourmet sandwich experience',
      emoji: '🥪'
    }
  ];

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#f3e8dc',
    padding: '120px 0',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '80px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '16px',
    letterSpacing: '2px',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#2b1b12',
    fontWeight: '300',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    marginBottom: '64px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(199, 161, 122, 0.3)',
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    border: '1px solid rgba(199, 161, 122, 0.2)',
  };

  const cardEmojiStyle: React.CSSProperties = {
    fontSize: '64px',
    marginBottom: '24px',
    display: 'block',
  };

  const cardNameStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '12px',
    letterSpacing: '1px',
  };

  const cardDescriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#2b1b12',
    lineHeight: '1.5',
  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const footerTextStyle: React.CSSProperties = {
    fontSize: '24px',
    color: '#2b1b12',
    marginBottom: '32px',
    fontWeight: '300',
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
            <div
              key={index}
              style={{
                ...cardStyle,
                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredCard === index 
                  ? '0 20px 40px rgba(199, 161, 122, 0.4)' 
                  : '0 8px 24px rgba(199, 161, 122, 0.2)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span style={cardEmojiStyle}>{item.emoji}</span>
              <h3 style={cardNameStyle}>{item.name}</h3>
              <p style={cardDescriptionStyle}>{item.description}</p>
            </div>
          ))}
        </div>

        <div style={footerStyle}>
          <p style={footerTextStyle}>Smooth, layered & crafted to refresh</p>
          <Button variant="primary" size="large">
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureItems;