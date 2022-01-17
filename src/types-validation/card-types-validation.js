import PropTypes from 'prop-types';

const cardTypesValidation = PropTypes.shape({
  title: PropTypes.string,
  artNumber: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  picture: PropTypes.string,
  type: PropTypes.string,
  strings: PropTypes.number,
}).isRequired;

export {cardTypesValidation};
