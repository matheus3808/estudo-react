import {useState} from 'react'

function RenderizacaoCondicional(){

    const [email,setEmail]= useState()
    const[UserEmail,SetUserEmail]=useState()

    function AtivarEvento(e){
        e.preventDefault()
        console.log("o evento foi ativado")
        SetUserEmail(email)
        console.log(SetUserEmail)
    }

    function ApagarEvento(){
    
        SetUserEmail('')
    }

return(

    <div>
        <form onSubmit={AtivarEvento}>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="digite seu e-mail"></input>
            <button type="submit"  onClink={AtivarEvento}>enviar email</button>


            {UserEmail &&(
            <div>
            <p>A condição foi ativada e o email do usuario é: {UserEmail}</p>
            <button onClick={ApagarEvento}>apagar email</button>
            </div>
            
            )}
        </form>
    </div>

)
  
}
export default RenderizacaoCondicional