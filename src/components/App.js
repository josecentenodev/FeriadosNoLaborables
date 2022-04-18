import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import ListaFeriados from "./ListaFeriados";

function App() {
  return (
    <div>
      <Header />
      <ListaFeriados />
      <Footer />
    </div>
  );
}

export default App;


// PARA HACER XMLHTTPREQUEST
// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//   if(this.readyState === 4 && this.status === 200) {
//       // 0 = UNSER, no se ha llamado al metodo open
//       // 1 = OPENED, se ha llamado al metodo open
//       // 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
//       // 3 = LOADING, está cargando, es decir, está recibiendo la respuesta
//       // 4 = DONE, se ha completado la operación
//       const data = JSON.parse(this.response)
//       console.log(data)
//   }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open('GET', `${API_URL}`);
// xhr.send();
