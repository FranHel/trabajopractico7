import React, { useState, useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";              
import { InputTextarea } from 'primereact/inputtextarea';
import './App.css';
import { Card } from 'react-bootstrap';
                                 
        

function TextoContador() {
  const [texto, setTexto] = useState('');
  const [charContador, setCharContador] = useState(0);
  const [palabrasContador, setpalabrasContador] = useState(0);

  useEffect(() => {
    setCharContador(texto.length);
    setpalabrasContador(texto.split(' ').filter((palabras) => palabras !== '').length);
  }, [texto]);

  return (
    <div className='container'>
      <Card className='p-card'>
        <h1>Ingresar Texto</h1>
              <div>
              <InputTextarea className='textarea'
                value={texto}
                onChange={(event) => setTexto(event.target.value)}
                maxLength={100}
              />
            </div>
              <p>Letras: {charContador}</p>
              {charContador>= 100 && (
                <p className='limite'>¡Has alcanzado el límite de caracteres!</p>
              )}
              <p> Palabras: {palabrasContador}</p>
      </Card>
    </div>
    
  );
}

export default TextoContador;
