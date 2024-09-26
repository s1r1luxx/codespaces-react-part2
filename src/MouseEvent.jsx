export default function MouseEvent(){
    return (<h1 
        onClick={e=>console.log("onMouserClick")}
        onMouseEnter={e=>console.log("onMouseEnter")}
        onMouseDown={e=>console.log("onMouseDown")}
        onMouseOver={e=>console.log("onMouseOver")}
        onMouseUp={e=>console.log("onMouseUp")}
        >Click Me</h1>);
}