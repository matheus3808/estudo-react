import styles from './EventoClick.module.css'

/*

#os eventos de react são os mesmo eventos do DOM
#ou seja, temos eventos para responder a um click por exemplo
#o evento é atrelado a uma tag que irá executá-lo
#geralmente um método é atribuído ao evento
#este métpdp deve ser criado no componente

*/ 
function EventoClick(){
    function EventoDesejado(){
        console.log("O evento foi disparado depois desse click, obrigado!!")
    }

    

return(
<div >
    <h1>Criando um evento de click</h1>
    <p> quando o botão abaixo for clicado irá disparar um evento, por favor clique nele!!!</p>
    <button className={styles.buttonConfig} onClick={EventoDesejado}>Button</button>
</div>
)

}

export default EventoClick