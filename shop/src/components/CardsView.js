import ListView from "./ListView"
import PropTypes from 'prop-types'
const CardsView = ({products, view}) => {
    return (
        <div className="product-list">
            {products.map((product) => <ListView key={product} view={view} product={product}/>)}
        </div>
    )
}

CardsView.propTypes = {
    products: PropTypes.array.isRequired
}

export default CardsView