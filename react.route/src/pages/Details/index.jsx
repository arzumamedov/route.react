import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    const [data, setData] = useState([]);
    const {id}=useParams()

    async function getProductFetch() {
        const dat = await fetch(`https://fakestoreapi.com/products/${id}`);
        const res = await dat.json();
        setData(res);
    }
    useEffect(() => {
        getProductFetch();
      }, []);

  return (
    <div>
        {data.title}
    </div>
  )
}

export default Details