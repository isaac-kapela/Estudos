import React, { useRef, useState } from "react";

export default function Prompt(){
    const [entrada, setEntrada] = useState("");
    const [saida, setSaida] = useState("");
    const refInput = useRef<HTMLInputElement | null>(null);

    function onEntradaChange(e:React.ChangeEvent<HTMLInputElement>){
        setEntrada(e.target.value)
    }

    function onExecutarClique(){
        setSaida(entrada);
        if(!refInput.current) return;
        refInput.current.select();
    }

    return (
        <>
        <div>
            <input ref={refInput} value={entrada} onChange={onEntradaChange} />
            <button onClick={onExecutarClique}>Executar</button>
            <p>{saida}</p>
        </div>
        </>
    );
}