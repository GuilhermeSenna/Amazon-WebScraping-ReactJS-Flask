/* eslint-disable import/no-anonymous-default-export */
import classes from './Card.module.css'

const Card = props => {

    return <div
        onClick={props.onClick}
        className={`${classes.card} ${props.className}`}
        style={{
            margin: props.margin || '',
            backgroundColor: props.color || '',
            width: props.width || ''
        }}> {props.children}</div >
}

export default Card;