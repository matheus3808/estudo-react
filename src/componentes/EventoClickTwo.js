
import Button from './Button'

function EventoClickTwo(){

    function AtivarClick(){
console.log(`O botão foi clicado e o evento ativado!! `)
}



return(
<div >
<p>clique para disparar o evento</p>
<Button event={AtivarClick} text="primeiro evento"/>


</div>
)
}

export default EventoClickTwo