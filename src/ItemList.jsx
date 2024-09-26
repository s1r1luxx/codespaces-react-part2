import { useState, useEffect, Component } from "react";

function Item({name,isPacked=false}){
    return (<li>
        {name} {isPacked && '✓'}
    </li>)
}
//✓
export default function ItemList(){
    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
        console.log("This component is loaded!")
        return ()=>{
            alert("Component Unloaded!");
        }
    },[]);
    const items=[{name:"Sunglasses", isPacked:false}, 
        {name:"Power Bank", isPacked:false},
        {name:"Swimming Suit", isPacked:false},
        {name:"Towel", isPacked:false},
        {name:"Sunblock", isPacked:true}];

    const filterList = items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()))
    const itemList = filterList.map(i=><Item key={i.name} 
        name={i.name} isPacked={i.isPacked}/> );
    return (<>       
        <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}></input>
        <ul>
            {itemList}
        </ul>
    </>);
}