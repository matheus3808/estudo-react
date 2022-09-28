
/*

#Os eventos de React são os mesmo eventos do DOM
#ou seja, temos eventos para responder a um click
#o evento é atrelado a uma tag que irá executá-lo
#geralmente um método é atribuído ao evento
#este método deve ser criado no componente

***Vamos fazer um exemplo de evento submit que é utilizado em formulários***

*/

function EventoSubmit(){

    function EnviarInfo(event){
        event.preventDefault()
        console.log("a Mensagem foi enviada com sucesso")
    }

    return(
       <form onSubmit={EnviarInfo}>
            <p>Meu cadastro</p>

            <div>
            <input type="text" placeholder="digite seu nome"></input>
            </div>
            
            <div>
            <input  type="submit" value="enviar"></input>

            </div>




       </form>
       
    )
}

export default EventoSubmit