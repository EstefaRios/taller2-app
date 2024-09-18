import React from 'react';
import './App.css';
import {
    Saludo,
    ListaDeProductos,
    ContadorFuncional,
    ContadorClase,
    DetalleProducto,
} from './ejercicios';


function App() {
    const productos = [
        { nombre: "Portatil", precio: "1.200.000" },
        { nombre: "Celular", precio: "800.000" },
        { nombre: "Impresora", precio: "300.000" },
    ];

    return (
        <div className="App">
            <Saludo nombre="Santiago" />
            <ListaDeProductos productos={productos} />
            <ContadorFuncional />
            <ContadorClase />
            <DetalleProducto nombre="Locion" precio={"1.000.000"} descripcion="Comprala, y oleras rico por el resto de tu vida!! :)" />
        </div>
    );
}

export default App;
