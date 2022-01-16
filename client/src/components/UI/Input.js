import React, {useState} from 'react';
import styles from './Input.module.css'

const Input = props => {

    const [value, setValue] = useState('');

    const onChangeHandler = (event) => {
        const {value} = event.target
        
        setValue(value);
        props.value(value);
    }

    return (
    <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>

        <input {...props.input} 
        value={value} 
        onChange={ event => {onChangeHandler(event)} } />
    </div>
    )
};

export default Input;