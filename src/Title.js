import {useState} from "react";


function Title({cor}){

    const [texto, setTexto] = useState ("estado inicial do titulo");

    return (

        <div>
          <h4 style = { {color : cor} }> 
            {texto}
          </h4>
          
          <button onClick={() => {setTexto("Mudei via botão")}}>Mudar texto</button>
        </div>
      );
}

export default Title;