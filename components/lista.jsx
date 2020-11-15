
const Lista =({data})=>{

    if(data!=null){
        const lista = data.map(d=>{
            return(<li>{d.producto.titulo}</li>)
            });
            return lista;
    }
    return true;
}
export default Lista;