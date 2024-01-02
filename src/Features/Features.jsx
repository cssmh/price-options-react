import PropTypes from 'prop-types';
import { IoIosCheckmarkCircle } from "react-icons/io";
const Features = ({features}) => {
    return (
        <div>
            <p className='flex items-center'><IoIosCheckmarkCircle className='text-green-500 mr-1'></IoIosCheckmarkCircle>{features}</p>
        </div>
    );
};

Features.propTypes = {
    features: PropTypes.string
}

export default Features;