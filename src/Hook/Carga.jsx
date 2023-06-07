import { useState,useEffect } from "react"
export function Carga(){
    const[estaCargando,setEstaCargando]=useState(true)
    const[tiempo,setTiempo]=useState(true)

    useEffect(function(){
        if(tiempo>0){
            setEstaCargando(false)
        }else{
            setEstaCargando(true)
        }
    },[tiempo])

    setTimeout(function(){
        setTiempo(1)
    },5000)

    if(estaCargando){
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Estamos cargando</h3>
                            <img src="../../src/assets/img/Eddie.gif" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        return(
            <>
            <h4>Ya cargamos ¡Bienvenido!</h4>
            </>
        )
    }

    return(
        <>
        </> 
    )
}