import React, { useState } from 'react';

// Ejercicio 1: Componente Saludo
export const Saludo = ({ nombre }) => {
    return <h1>¡Hola, {nombre}!</h1>;
};

// Ejercicio 2: Componente Producto
export const Producto = ({ nombreProducto, precio }) => {
    return (
        <div>
            <h2>{nombreProducto}</h2>
            <p>Precio: ${precio}</p>
        </div>
    );
};

// Ejercicio 3: Componente Funcional Contador
export const ContadorFuncional = () => {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <h2>Contador Funcional: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
};

// Ejercicio 3: Componente de Clase Contador
export class ContadorClase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contador: 0 };
    }

    incrementar = () => {
        this.setState({ contador: this.state.contador + 1 });
    };

    render() {
        return (
            <div>
                <h2>Contador Clase: {this.state.contador}</h2>
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        );
    }
}

// Ejercicio 4: Componente ListaDeProductos
export const ListaDeProductos = ({ productos }) => {
    return (
        <div>
            {productos.map((producto, index) => (
                <Producto key={index} nombreProducto={producto.nombre} precio={producto.precio} />
            ))}
        </div>
    );
};

// Ejercicio 5: Componente DetalleProducto
export const DetalleProducto = ({ nombre, precio, descripcion }) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>{descripcion}</p>
        </div>
    );
};
