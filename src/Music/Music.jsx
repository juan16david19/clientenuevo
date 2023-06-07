import { consultarCanciones } from "../services/servicioCanciones"
import { useState, useEffect } from "react"
import "./Music.css"
export function Music() {

    const [canciones, setCanciones] = useState(null)
    const [estacargando, setEscargando] = useState(true)
    useEffect(function () {

        consultarCanciones().then(function (respuesta) {
            console.log(respuesta.tracks)
            setCanciones(respuesta.tracks)
            setEscargando(false)
        })

    }, [])

    const renderTrackImage = (track) => {
        let imgs = track?.album?.images;
        return (
            imgs?.length !== 0 && (
                <img
                    key={imgs[1]?.url}
                    src={imgs[1]?.url}
                    width={imgs[1]?.width}
                    height={imgs[1]?.height}
                />
            )
        )
    }
    if (estacargando) {
        return (
            <>
                <h1>ESTOY CARGANDO</h1>
            </>
        )
    } else {

        return (
            <>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        canciones.map(function (cancion) {
                            return (
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold">{cancion.name}</h3>
                                        {renderTrackImage(cancion)}
                                        <audio controls src={cancion.preview_url}></audio>
                                        <h4 className="mt-3">{cancion.duration_ms}</h4>
                                        <p className="mt-3">{cancion.popularity}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </>
        )

    }

}