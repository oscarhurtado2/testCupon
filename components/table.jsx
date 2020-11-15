import Body from './body';
const Table = ({data}) => {
        
        
        
        return ( 
        <table>
                <thead>
                <tr>
                        <th>titulo</th>
                        <th>descripcion</th>
                        <th>fecha_inicio</th>
                        <th>fecha_termino</th>
                        <th>precio</th>
                        <th>imagen</th>
                        <th>vendidos</th>
                        <th>tags</th>
                </tr>
                </thead>
                <tbody>
                        <Body data = {data}/>
                </tbody>
                </table>)
                }
export default Table;