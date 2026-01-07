import React from 'react';
import Button from './Button';

interface StoreFormat {
  title: string;
  size: string;
  description: string;
  emoji: string;
}

const BranchPresence: React.FC = () => {
  const storeFormats: StoreFormat[] = [
    {
      title: 'Cafe',
      size: '100m² to 350m²',
      description: 'Full service coffee experience',
      emoji: '🏪'
    },
    {
      title: 'DT Cafe',
      size: '150m² to 350m²',
      description: 'Drive-through convenience',
      emoji: '🚗'
    },
    {
      title: 'Internal Kiosk',
      size: '15m² to 75m²',
      description: 'Compact premium service',
      emoji: '🏢'
    },
    {
      title: 'DT only Kiosk',
      size: '15m² to 40m²',
      description: 'Express drive-through',
      emoji: '⚡'
    }
  ];

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a',
    padding: '120px 0',
    position: 'relative',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c7a17a' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
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
    color: '#f3e8dc',
    marginBottom: '24px',
    letterSpacing: '2px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#c7a17a',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const formatsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
    marginBottom: '80px',
  };

  const formatCardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(199, 161, 122, 0.1)',
    border: '1px solid rgba(199, 161, 122, 0.2)',
    borderRadius: '12px',
    padding: '32px 24px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const formatEmojiStyle: React.CSSProperties = {
    fontSize: '48px',
    marginBottom: '16px',
    display: 'block',
  };

  const formatTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#f3e8dc',
    marginBottom: '8px',
  };

  const formatSizeStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#c7a17a',
    marginBottom: '12px',
    fontWeight: '500',
  };

  const formatDescriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#c7a17a',
    lineHeight: '1.5',
  };

  const mapSectionStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '60px 40px',
    backgroundColor: 'rgba(199, 161, 122, 0.05)',
    borderRadius: '16px',
    border: '1px solid rgba(199, 161, 122, 0.1)',
  };

  const mapStyle: React.CSSProperties = {
    width: '100%',
    height: '300px',
    backgroundColor: 'rgba(199, 161, 122, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    marginBottom: '32px',
    border: '2px dashed rgba(199, 161, 122, 0.3)',
  };

  const [hoveredFormat, setHoveredFormat] = React.useState<number | null>(null);

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
            <div
              key={index}
              style={{
                ...formatCardStyle,
                transform: hoveredFormat === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredFormat === index 
                  ? '0 20px 40px rgba(199, 161, 122, 0.2)' 
                  : '0 8px 24px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={() => setHoveredFormat(index)}
              onMouseLeave={() => setHoveredFormat(null)}
            >
              <span style={formatEmojiStyle}>{format.emoji}</span>
              <h3 style={formatTitleStyle}>{format.title}</h3>
              <p style={formatSizeStyle}>{format.size}</p>
              <p style={formatDescriptionStyle}>{format.description}</p>
            </div>
          ))}
        </div>

        <div style={mapSectionStyle}>
          <div style={mapStyle}>
            🗺️
          </div>
          <Button variant="outline" size="large">
            Locate Nearest Branch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BranchPresence;