import React from 'react';

interface Stat {
  icon: string;
  number: string;
  label: string;
}

const Stats: React.FC = () => {
  const stats: Stat[] = [
    {
      icon: '/s1.png',
      number: '20M+',
      label: 'cups served annually'
    },
    {
      icon: '/s2.png',
      number: '3000',
      label: 'team members'
    },
    {
      icon: '/s3.png',
      number: '290',
      label: 'openings in 24 months'
    },
    {
      icon: '/s4.png',
      number: '98%',
      label: 'customer satisfaction'
    }
  ];

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#e9dbce',
    padding: '30px 0',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    textAlign: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '56px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '64px',
    letterSpacing: '1px',
  };

  const statsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '48px',
    marginBottom: '48px',
  };

  const statItemStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const statIconStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    marginBottom: '16px',
    display: 'block',
    margin: '0 auto 16px auto',
    objectFit: 'contain',
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '64px',
    fontWeight: 'bold',
    color: '#a48163',
    marginBottom: '8px',
    display: 'block',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#2b1b12',
    fontWeight: '500',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '24px',
    color: '#a48163',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>KEY FIGURES | BRAND IMPACT</h2>
        
        <div style={statsGridStyle}>
          {stats.map((stat, index) => (
            <div key={index} style={statItemStyle}>
              <img src={stat.icon} alt={stat.label} style={statIconStyle} />
              <span style={statNumberStyle}>{stat.number}</span>
              <p style={statLabelStyle}>{stat.label}</p>
            </div>
          ))}
        </div>

        <p style={descriptionStyle}>
          These numbers reflect a brand built on trust, discipline & continuous growth.
        </p>
      </div>
    </section>
  );
};

export default Stats;