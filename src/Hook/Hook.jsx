import { useState, useEffect } from "react"

export function Hook(){
    
    //antes del retorno configuramos nuestras variables de estado
    const [contador,setContador]=useState(0)

    //programando el detector de ejecuciones
    useEffect(function(){
        setContador(contador+1)
    },[])

    //función para decir que hacer cuando le de clic al botón
    function incrementarCuenta(){
        setContador(contador+1)
    }

    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={incrementarCuenta}>clic</button>
                    <h2>la cuenta va en: {contador}</h2>
                </div>
            </div>
        </div>
        </>
    )
}