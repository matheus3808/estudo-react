import { useState } from "react"

/*

# O UseState é um hook do React
#Com ele conseguimos manusearo estado de um componente de forma simples
#esse hok funciona muito bem com eventos
#podemos atrelarum evento a mudança de estado

*/

function UseState(){

   

    function EnviarInfoTwo(e){
        e.preventDefault()
        console.log(`o suario ${name} foi cadastrado com a senha ${password}`)
    }


    const [name,setName]= useState()
    const [password,setPassword]= useState()

    return(
        <div>
        <form onSubmit={EnviarInfoTwo}>
        

            <div>
            <label htmlFor="name">nome:</label>
            <input onChange={(e)=>setName(e.target.value)} id="nameTwo" name="name" type="text" placeholder="digite seu nome"></input>
            </div>

            <div>
            <label htmlFor="password">senha:</label>
            <input onChange={(e)=>setPassword(e.target.value)} id="passwordTwo" name="password" type="password" placeholder="digite sua senha"></input>
            </div>
            
            <div>
                
            <input  type="submit" value="enviar"></input>

            </div>

       </form>
       </div>
    )
}

export default UseState