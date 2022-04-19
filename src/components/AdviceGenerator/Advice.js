import classes from './Advice.module.css'

const Advice = (props) => {
    return (
        <>
            <h1 className={classes['advice-id']} id="advice-id">Advice #{props.id}</h1>
            <p className={classes['advice-text']} id="advice">{props.text}</p>
        </>
    )
}

export default Advice