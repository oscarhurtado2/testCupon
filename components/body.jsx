import React from 'react';   
const Body =({data})=>{

    
    if(data!=undefined){
    const body = data.map((da)=>(
        <tr>
            <td>{da.titulo}</td>
            <td>{da.descripcion}</td>
            <td>{da.fecha_inicio}</td>
            <td>{da.fecha_termino}</td>
            <td>{da.precio}</td>
            <td>{da.imagen}</td>
            <td>{da.vendidos}</td>
            <td>{da.tags}</td>
        </tr>
    ));

    return body;
    }
    return true;
}

export default Body;