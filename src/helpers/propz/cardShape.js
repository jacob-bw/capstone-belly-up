import PropTypes from 'prop-types';

const cardShape = PropTypes.shape({
  bellyword: PropTypes.string.isRequired,
  script: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { cardShape };
