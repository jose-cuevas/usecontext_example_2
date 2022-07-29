import React from 'react'


export default function Product( {id,name,color, handleAdd}) {
  return (
    <>
    <div>Product</div>
    <p>{name} - {color}</p>
    <button onClick={()=>handleAdd({id,name,color})}>Add</button>
    </>
  )
}
