import PropTypes from 'prop-types';

const cardShape = PropTypes.shape({
  imgUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  half1: PropTypes.string.isRequired,
  half2: PropTypes.string.isRequired,
});

export default { cardShape };
