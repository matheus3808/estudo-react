function StateLiftFilho({setName}){


    return(
        <div>
            <p>Digite seu nome por favor:</p>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="digite seu nome"></input>
        </div>
    )
}

export default StateLiftFilho