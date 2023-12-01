import React, { useEffect, useState } from 'react'
import './style.css'
import { Link, useParams } from 'react-router-dom';
function Card() {
    let {id}=useParams()
    const [data, setData] = useState([]);
    async function getProductFetch() {
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        setData(res);
    }
    useEffect(() => {
        getProductFetch();
      }, []);
    return (
    <div className='data'>
    {data.map((x) => (
      <ul className="card" key={x.id}>
        <li>ID:{x.id}</li>
        <li>TITLE:{x.title}</li>
        <li>PRICES:{x.price}$</li>
        <li>DESCRIPTION:{x.description}</li>
        <button><Link to={`/Details/${x.id}`}>Detail</Link></button>
      </ul>
    ))}
  </div>
  )
}

export default Card