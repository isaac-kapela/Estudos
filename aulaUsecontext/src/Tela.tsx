
import { useEffect, useRef, useState } from "react"
function Tela() {
    const refCanvas = useRef<HTMLCanvasElement | null>(null);
    const [posicao, setPosicao] = useState({x: 150, y:75})
    useEffect(() =>{

        const canvas = refCanvas.current;
        if(!canvas) return;
        const ctx = canvas.getContext("2d");
        if(!ctx) return;
        ctx.fillStyle = "lighgreen";
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.ellipse(150, 75, 5,5,0,0,2*Math.PI, false);
        ctx.stroke();
        ctx.fill();

        

    })


    return (
        
<canvas ref={refCanvas} onClick={() =>{

}}/>
      
        
    )
}

export default Tela
