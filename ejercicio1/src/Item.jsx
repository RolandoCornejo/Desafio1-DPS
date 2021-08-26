import React from "react";
import "./App.css";

const Item = ({ item, index, eliminar, cambiarCantidad }) => {
  return (
    <div>
      <div className="item">
        <div>
          <p className='item-title'>{item.nombre}</p>
          <p>${item.precio}</p>
        </div>
        <div>
          <input
            type="number"
            min={1}
            value={item.cantidad}
            onChange={(e) => cambiarCantidad(index, e.target.value)}
          />
          <button className='delete' onClick={() => eliminar(index)}>x</button>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Item;
