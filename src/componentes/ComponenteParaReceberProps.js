import Props from './Props'



/*

#As props são valores passados para componentes
# podemos deixa-los dinâmicos
#ou seja, mudando a execução por causa do valor da prop
#o valor é passado como um atributo na chamada do coponente
#e precisa ser resgatado dentro de uma propriedade/argumento chamada porps na função de definição do component
#As props são somente de leitura

*/ 


function ComponenteParaReceberProps(){
    return(
        <div>
            <h1>
                Olá mundo, vamos voltar com tudo!!!
            </h1>
            < Props marca="voks" modelo="Gol Quadrado" />
            
            < Props marca="Jac" modelo="J1" />

        </div>
    )
}

export default ComponenteParaReceberProps