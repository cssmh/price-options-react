import PropTypes from 'prop-types';
const Link = ({ getLink }) => {
    const {path, name} = getLink
  return (
    <div className='hover:bg-orange-500'>
      <li className="mr-7"><a href={path}>{name}</a></li>
    </div>
  );
};

Link.propTypes = {
    getLink: PropTypes.object
}

export default Link;
