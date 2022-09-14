import React from 'react'
import './List.css'
import { MdDelete } from 'react-icons/md';
import { RiEditBoxFill } from 'react-icons/ri';

const List = (props) => {
  const {itm,handledelete,handleUpdate} = props;
  // console.log(itm);
  return (
    
      <li>
        <span>{itm.item}</span>
        <div className="buttons">
          <button><MdDelete className="delete" onClick={()=>{handledelete(itm.id)}}></MdDelete></button>
          <button><RiEditBoxFill className='edit' onClick={()=>{handleUpdate(itm.id)}}></RiEditBoxFill></button>
        </div>
      </li>
    
  )
}

export default List