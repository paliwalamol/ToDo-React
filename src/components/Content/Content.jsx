import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs';
import './Content.css'
import List from '../List/List'
import { useState ,useEffect} from 'react';

const Content = () => {
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('todos'));
        if(data){
            setItems(data);
        }
    },[])
    let item = [];
    const [items, setItems] = useState(item);
    const [id, setId] = useState(0);
    const [message, setMessage] = useState('');

    const createItem = (id) => {
        let newArr;
        if (id && id !== 0) {
            console.log(id);
            newArr = items.map((itm) => {
                if (itm.id === id) {
                    itm.item = message;
                }
                return itm;
            });
            // console.log(newArr);
            // let n = [...items];
            setItems(newArr);
            // console.log(items);
        }
        else if (message !== '') {
            // let n = items.length;
            let d = [...items, { id: Date.now(), item: message }]
            setItems(d);
            newArr = d;
        }
        setMessage('');
        setId(0);
        localStorage.setItem('todos',JSON.stringify(newArr));
    }

    const getMessage = (e) => {
         setMessage(e.target.value);
    }

    const deleteElement = (i) => {
        let newArr = items.filter((itm) => { return itm.id !== i });
        console.log(newArr);
        setItems(newArr);
        localStorage.setItem('todos',JSON.stringify(newArr));
    }

    const updateElement = (i) => {
        let ele = items.filter((item) => { return item.id === i });
        console.log(ele[0].item);
        setMessage(ele[0].item);
        setId(ele[0].id);

    }

    return (
        <>
            <div className="content">
                <div className="additem">
                    <input type="text" className='inp' placeholder="Add your item here" value={message} onChange={(e) => getMessage(e)} />
                    <BsPlusCircleFill className='icon' onClick={() => { createItem(id) }} />

                </div>
                <div id="list">
                    {items?.map((itm) => {
                        return (
                            <List key={itm.id} itm={itm} handledelete={deleteElement} handleUpdate={updateElement} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Content