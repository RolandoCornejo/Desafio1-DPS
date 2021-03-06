import { React, useState, useEffect } from "react";
import Item from "./Item";
import './App.css';

function App() {

  const [lista, setLista] = useState([]);
  const [select, setSelect] = useState(0);
  const [total,setTotal]=useState(0);

  useEffect(()=>calcTotal())

  const calcTotal=()=>{
    let total=0
    lista.forEach(element => {
      total+=element.cantidad*element.precio;
    });
    setTotal(total);
  }

  const addLista=async(index)=>{
    setLista([...lista, { nombre: abarrotes[index].nombre, precio: abarrotes[index].precio, cantidad: 1 }]);
  }

  const remove = (index) => {
    const newLista = [...lista];
    newLista.splice(index, 1);
    setLista(newLista);
  }

  const cambiarCantidad = (index, cantidad) => {

    const nuevaLista = [...lista];
    nuevaLista[index].cantidad = cantidad;
    setLista(nuevaLista);
  }

  const abarrotes = [
    { key: 0, nombre: 'Manzana', precio: .5, },
    { key: 1, nombre: 'Ketchup', precio: 3 },
    { key: 2, nombre: 'Peras', precio: 1 },
    { key: 3, nombre: 'Arroz', precio: 5 },
    { key: 4, nombre: 'Vino', precio: 10 },
    { key: 5, nombre: 'Pastel', precio: 15 },
    { key: 6, nombre: 'Aguacates', precio: 5 },
    { key: 7, nombre: 'Queso', precio: 3 },
    { key: 8, nombre: 'Jamón', precio: 5 },
    { key: 9, nombre: 'Naranjas', precio: 1.25},
  ]
  return (
    <div className='main'>
      <h1>Lista de compras</h1>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        {abarrotes.map((valor) =>
          <option key={valor.key} value={valor.key}>{valor.nombre}</option>
        )}
      </select>
      <button className='add' onClick={(e) => addLista(select)}>Agregar</button>
      <div className='list'>
      {lista.map((valor, index) =>
        <Item
          item={valor}
          key={index}
          index={index}
          eliminar={remove}
          cambiarCantidad={cambiarCantidad}
        />
      )}
      </div>
      <p className='total'>Total: ${total}</p>
    </div>
  )
}

export default App;
