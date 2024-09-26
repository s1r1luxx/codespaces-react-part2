import { useRef, useState } from "react";
function BmiText({bmi}){
    if(bmi<18.5) return <h1>Underweight</h1>;
    if(bmi>30) return <h1>Overweight</h1>;
    return <h1>Normal</h1>;
}
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi, setBmi] = useState(0.00);
    function handleClick(){
        let Weight= W_input.current.value;
        let Height= H_input.current.value/100;
        setBmi(Weight/Math.pow(Height,2));
    }
    return (<>
        Weight: <input ref={W_input}/> Kg
        <br/>
        Height: <input ref={H_input}/> Cm
        <br/>
        <button onClick={handleClick}>Calculate</button>
        <br/>
        BMI:{bmi.toFixed(2)}
        <br/>
        <BmiText bmi={bmi}/>
    </>);
}