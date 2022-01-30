import React from 'react'
import Footer from './components/Footer';

function App() {

  const nombre = 'Jairo', apellido='Ramirez Castaño'
  return (
    <>
      <h1>{nombre}</h1>
      <Footer apellidos= {apellido} />
    </>
  );
}

export default App;
