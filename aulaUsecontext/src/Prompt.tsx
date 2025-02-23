import React, { useRef, useState } from "react";

type PromptProps = {
    onPosicaoChange: (posicao:{x:number; y:number}) => void;
}

export default function Prompt({onPosicaoChange}:PromptProps){
    const [entrada, setEntrada] = useState("");
    const [saida, setSaida] = useState("");
    const refInput = useRef<HTMLInputElement | null>(null);

    function onEntradaChange(e:React.ChangeEvent<HTMLInputElement>){
        setEntrada(e.target.value)
    }

    function onExecutarClique(){
        setSaida(entrada);
        const tokens = entrada.split(" ");
        if(tokens[0] === "mover"){
            const x = Number(tokens[1]);
            const y = Number(tokens[2]);
            onPosicaoChange({x,y});
        }
        if(!refInput.current) return;
        refInput.current.select();
    }

    return (
        <div>
            <input ref={refInput} value={entrada} onChange={onEntradaChange} />
            <button onClick={onExecutarClique}>Executar</button>
            <p>{saida}</p>
        </div>
    );
}