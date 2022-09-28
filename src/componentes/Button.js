import styles from './EventoClick.module.css'
function Button(props){
    return(
        <button className={styles.buttonConfig} onClick={props.event}>
            {props.text}
        </button>
    )



    
}

export default Button