
import './App.css';

import EventoClick from './componentes/EventoClick';
import AvancandoEmPropsPai from'./componentes/AvancandoEmPropsPai'
import FormComUseState from './componentes/FormComUseState'
import EventoClickTwo from './componentes/EventoClickTwo'
import RenderizacaoCondicional from './componentes/RenderizacaoCondicional'
import RenderizacaoDeListas from './componentes/RenderizacaoDeListas'
import ComponenteParaReceberProps from './componentes/ComponenteParaReceberProps'
import UseState from './componentes/UseState'
import EventoSubmit from'./componentes/EventoSubmit'
import StateLift from './componentes/StateLift'


function App() {

  const meusItens=['React','Vue','Angular']

  return (
    
   <div> 
    
    <h1>Olá mundo</h1> 
   <h2>testando eventos</h2>
   <EventoClick />
   <AvancandoEmPropsPai />
   <FormComUseState></FormComUseState>
   <EventoClickTwo/>
   <h1>Renderização condicional</h1>
   <RenderizacaoCondicional/>
   <h1>Renderização de listas</h1>
   <RenderizacaoDeListas itens={meusItens}/>
   <RenderizacaoDeListas itens={[]}/>
   <ComponenteParaReceberProps/>
   <UseState/>
   <EventoSubmit/>
   <RenderizacaoCondicional/>
   <StateLift/>
   
   </div>

   
      
  );
}

export default App;
