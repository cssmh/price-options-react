import PropTypes from 'prop-types';
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = ({toastFunction}) => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "Extended gym hours",
                "Group fitness classes",
                "Access to locker room"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "Platinum Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "24/7 gym access",
                "Personal training sessions",
                "Access to sauna and spa",
                "Access to locker room",
                "Towel service"
            ],
            "price": 80.00
        }
    ];

    return (
        <div>
            <h1 className="text-4xl text-center font-medium my-6">Best Prices in The Town</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1270px] mx-2 lg:mx-auto">
            {
                priceOptions.map(soloPrice => <PriceOption 
                    toastFunction={toastFunction} 
                    key={soloPrice.id} 
                    getPrice={soloPrice}
                    ></PriceOption>)
            }
        </div>
        </div>
    );
};

PriceOptions.propTypes = {
    toastFunction: PropTypes.func
}

export default PriceOptions;