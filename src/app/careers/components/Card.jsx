import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon, position, description }) => {
  return (
    <div className="card h-100 text-center shadow-sm" style={{ borderRadius: '8px', paddingTop: '60px', paddingBottom: '20px', position: 'relative', minHeight: '350px' }}>
      <div className="position-absolute" style={{ top: '-30px', left: '50%', transform: 'translateX(-50%)' }}>
        <img src={icon} alt={`${position} icon`} style={{ width: '60px', height: '60px' }} />
      </div>
      <div className="card-body mt-4 d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{position}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
        <a href="#" className="btn bg-golden text-white">Apply</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
