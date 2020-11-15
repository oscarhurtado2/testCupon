import { useState,useEffect } from 'react';
import  Table from '../components/table'
import Search from '../components/search'

const Index = () => {
    const [data, setdata] = useState({
        search:null,
        autocomplete:'',
        busqueda:[]
    });

    useEffect(()=>{
        if(data.search!=null){           
            getResult();            
        }        
    });

    const getResult = async()=>{
      
        const result = await fetch('http://localhost:9290/cupon/back/search',{method: 'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify({ keyword:data.search})});
        const busqueda = await result.json();
        await setdata({busqueda});
    }

    const setSearch =(search)=>{
        setdata({
            search
        })
    }
    return(<>
        <Search searchVal = {setSearch}/> 
        <Table data ={data.busqueda}/>
        </>
    )
};
export default Index;