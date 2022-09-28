import PropTypes from 'prop-types'
function AvancandoEmPropsFilho({marca,ano_lancamento}){
    return(
       <div>
        <li>
        {marca}-{ano_lancamento}
        </li>
       </div> 
    )
}

export default AvancandoEmPropsFilho

AvancandoEmPropsFilho.propTypes ={
marca: PropTypes.string,
}

AvancandoEmPropsFilho.defaultProps={
    marca:'preencha a marca por favor!'
}