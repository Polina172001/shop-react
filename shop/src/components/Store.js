import {useState} from 'react'
import CardsView from './CardsView'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch'

const Store = ({products}) => {
    const cardView = 'view_module'
    const listView = 'view_headline'

    const [view, setView] = useState(cardView)

    const onSwitch = () => {
        setView((prev) => {
            return (prev === cardView ? listView : cardView)
        })
    }

    return (
        <div className="store">
            <IconSwitch icon={view} onSwitch={onSwitch}/>
            <CardsView products={products} view={view}/>
        </div>
    )
}

Store.propTypes = {
    products: PropTypes.array.isRequired,
}

export default Store;