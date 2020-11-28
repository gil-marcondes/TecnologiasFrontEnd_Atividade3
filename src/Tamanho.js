import React, { useState, useEffect } from 'react';

function Tamanho() {
  
 
   const [texto, setTexto]=useState('');
  
  
  return (
    <div>
	
	<input 
            onChange={(event)=> setTexto(event.target.value)}
           
          />
		  
		   <Tela tamanho= {texto.length}/>
		   
		  </div>
  );
}

function Tela(props){
  return(<div>
  <table> 
  <tr>
  <h3>Este texto contém {props.tamanho} caracteres</h3>
  </tr>
  </table>
  </div>);
}
export default Tamanho;