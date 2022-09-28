/*
#para redenrizar uma lista vamos primeiramente precisar de um array;
#depois de utilizamos a função map, para percorrer cada um dos itens
#podemos assim renderizaralgo na tela;
#e possível unir operadores condicionais com a redenrização de listas


*/

function RenderizacaoDeListas({itens}){

    return(
        <div >
        <h2>listas de coisas boas:</h2>
        {itens.length > 0 ?(
            itens.map((item) =>(

                <p>{item}</p>
            ))) :(
                <p>
                    não existe itens
                </p>
            )
        }
        </div>
    )
}

export default RenderizacaoDeListas