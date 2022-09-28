import { useState } from 'react'

function FormComUseState(){
    
    function CadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name,setName]= useState()
    const [password,setPassword]= useState()
    

    
    return(
      <div>
        <h1>Meu cadastro</h1>
        <form onSubmit={CadastrarUsuario}>
           
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="digite seu nome"  onChange ={(e)=>setName(e.target.value) }  ></input>
            
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="digite sua senha"  onChange ={(e)=>setPassword(e.target.value) }  ></input>
          </div>
          <div>
            <input type="submit" value="cadastrar"></input>
          </div>
        </form>
        </div>
    )


}

export default FormComUseState