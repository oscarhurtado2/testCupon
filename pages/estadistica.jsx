import { useState,useEffect } from 'react';
import Lista from '../components/lista';
import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const Estadistica = () =>{
    const [data, setdata] = useState(null);
    useEffect(()=>{
        getResult();
    },[]);

    const getResult =async ()=>{
        const res = await fetch(publicRuntimeConfig.url+'/back/estadistica',{method: 'GET'});
        const json = await res.json();
       setdata(json);
    }
return (<ol><Lista data={data}/> </ol>);

}
export default Estadistica;