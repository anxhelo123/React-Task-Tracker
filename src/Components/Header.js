import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {
const location = useLocation()

    return (
        <header>
            <h1>
                {title}
            </h1>
            {location.pathname==='/' && (
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}/>)}
        </header>
    )
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}
Header.defaultProps = {
    title: 'Task Tracker'
}
//Heading style using objects
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header