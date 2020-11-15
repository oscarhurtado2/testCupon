import { useState } from 'react';
const Search =({searchVal})=>{
    const [data, setdata] = useState();

    
    return(<><input type="text" className="search" onChange={e => setdata(e.target.value)}/><button onClick={_=>searchVal(data)}>Buscar</button></>)
}

export default Search;