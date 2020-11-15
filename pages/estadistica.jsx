import { useState,useEffect } from 'react';
import Lista from '../components/lista'

const Estadistica = () =>{
    const [data, setdata] = useState(null);
    useEffect(()=>{
        getResult();
    },[]);

    const getResult =async ()=>{
        const res = await fetch('http://localhost:9290/cupon/back/estadistica',{method: 'GET'});
        const json = await res.json();
       setdata(json);
    }
return (<ol><Lista data={data}/> </ol>);

}
export default Estadistica;