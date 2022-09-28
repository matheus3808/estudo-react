import AvancandoEmPropsFilho from './AvancandoEmPropsFilho'

function AvancandoEmPropsPai(){
    return(
       <div>
       <h1>Minha lista para manipular props</h1>

       <ul>
        <AvancandoEmPropsFilho marca="gm" ano_lancamento={2020}/>
        <AvancandoEmPropsFilho marca="volkswagem" ano_lancamento={2022}/>
        <AvancandoEmPropsFilho marca="Fiat" ano_lancamento={2023}/>
        <AvancandoEmPropsFilho/>

       </ul>
       </div> 
    )
}

export default AvancandoEmPropsPai