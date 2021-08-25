import React from "react";

const Item=({item,index,eliminar,cambiarCantidad})=>{
    return(
        <div>
        <h4>{item.nombre}</h4>
        <p>${item.precio}</p>
        <input type="number" min={1} value={item.cantidad} onChange={e=>cambiarCantidad(index,e.target.value)} />
        <button onClick={()=>eliminar(index)}>x</button>
        </div>
    );
};  
export default Item