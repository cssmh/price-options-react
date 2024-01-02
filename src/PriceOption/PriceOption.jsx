import PropTypes from 'prop-types';
import Features from '../Features/Features';
const PriceOption = ({getPrice, toastFunction}) => {
    const {name, price, features} = getPrice
    return (
        <div className='bg-blue-500 text-white flex flex-col rounded-md p-6 '>
            <h2 className='text-center space-y-4'>
                <span className='text-5xl font-bold'>{price}</span>
                <span>/mon</span>
            <p className='text-2xl pb-5'>{name}</p>
            </h2>
            <div className='flex-grow'>
            {
                features.map((solo, idx) => <Features key={idx} features={solo}></Features>)
            }
            </div>
            <button onClick={() => toastFunction()} className='w-full bg-green-500 py-2 mt-4 rounded-md font-medium'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    getPrice: PropTypes.object,
    toastFunction: PropTypes.func
}

export default PriceOption;