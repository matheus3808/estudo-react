
/*

#State Lift é uma técnica utilizada para compartlhar o state;
#é normal vários componentes depederem do mesmo estado;
#Então precisamos elevar o nível do mesmo a um componente pai
#então centralizamos o state no pai e definimos quem usa e quem define(setState)

*/
import {useState} from 'react'
import StateLiftFilho from './StateLiftFilho'
import StateLiftFilhoTwo from './StateLiftFilhoTwo'


function StateLift(){
    const [name,setName]=useState()

return(

    <div>
        <h1>State Lift</h1>
        <StateLiftFilho setName={setName}/>
        <StateLiftFilhoTwo name={name}/>
    </div>
)




}

export default StateLift