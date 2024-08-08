import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, events, description }) => {
  return (
    <div className="card h-100 text-center shadow-sm" style={{ backgroundImage: url(`${image}`), borderRadius: '8px', paddingTop: '60px', paddingBottom: '20px', position: 'relative', minHeight: '350px' }}>
      <div className="card-body mt-4 d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{events}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
        <a href="#" className="btn bg-golden text-white">go</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  events: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
