import Advice from "./Advice"
import Button from "../UI/Button"
import classes from './AdviceGenerator.module.css'
import decorationImage from '../../assests/pattern-divider-desktop.svg' 

const AdviceGenerator = (props) => {
    return (
    <div className={classes.container}>
        <div className={classes.card}>
            <Advice 
                id={props.id}
                text={props.text}
            />
            <img src={decorationImage} alt="" className="divider" />
            <Button onClick={props.getAdvice}/>
        </div>
    </div>
    )
}

export default AdviceGenerator