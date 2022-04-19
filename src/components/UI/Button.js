import classes from './Button.module.css'
import buttonImg from '../../assests/icon-dice.svg'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={classes['dice-btn']} id="dice">
            <img src={buttonImg} alt="" />
        </button>
    )
}

export default Button