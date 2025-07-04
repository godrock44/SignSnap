import React, { useRef,useState,useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ()=> {
    const [brushSize,setBrushSize ]= useState(1);// default brush size 
    const sigCanvas = useRef(null);
    const SignatureClear = () => {
        sigCanvas.current.clear();
    };

    const SaveSignature = () => {
        const SignatureImage = sigCanvas.current.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = SignatureImage;
        link.download = 'signature.png'
        link.click();
    };

    return (
        <div className="signature">
            <h2>Draw Here</h2>
                <SignatureCanvas 
                ref = {sigCanvas}
                penColor = "black"
                minWidth= {brushSize}
                maxWidth={brushSize}
                canvasProps={{width: 500, height: 300, className: 'drawing-canvas',
                    style : {border :'2px solid black'},
                }} 
                />
                <br/>
                <label>Brush Thickness:{brushSize}px</label>
                <input type = "range"
                min= "1"
                max= "10"
                value ={brushSize}
                onChange = {(e)=> setBrushSize(Number(e.target.value))}

                
                />

                    <button onClick={SaveSignature}>save Signature</button>
                    <button onClick={SignatureClear}>clear</button>
     
        </div>
    );
};
export default SignaturePad;
