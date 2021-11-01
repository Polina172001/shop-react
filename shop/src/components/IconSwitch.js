import PropTypes from 'prop-types'
const IconSwitch = ({ icon, onSwitch}) => {
    return(
        <div className="switcher">
            <span onClick={onSwitch} className='material-icons'>
                {icon}
            </span>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch;