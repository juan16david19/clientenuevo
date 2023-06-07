export function Shop() {

    let productos = [
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Tienda%2FMicrofono.jpg?alt=media&token=3e838f1a-7347-4d02-9b80-0a9e15573c30",
            nombre: "Microfono",
            precio: "1000000",
            descripcion: "Microfono de Pearl Jam que funciona como traductor electroacústico que transforma ondas sonoras en señales eléctricas. Va a recibir la presión sonora en su membrana o diafragma y la envía sobre un convertidor mecánico eléctrico que la transforma en una señal eléctrica.",
            id: 1
        },
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Tienda%2FGuitarra.jpg?alt=media&token=64eb37c2-4840-446a-bd30-c487b6ab6b95",
            nombre: "Guitarra",
            precio: "2500000",
            descripcion: "Guitarra de Pearl Jam que cuenta con un electrófono de cuerdas de metal con uno o más transductores electromagnéticos, llamados pastillas (pickups, en inglés), que convierten las vibraciones de las cuerdas en señales eléctricas capaces de ser amplificadas y procesadas.",
            id: 2
        },
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Tienda%2FBajo.jpg?alt=media&token=669b70ae-2c06-4e04-ae1a-6831cdf76ade",
            nombre: "Bajo",
            precio: "1700000",
            descripcion: "Bajo de Pearl Jam que funciona como instrumento de cuerda pulsada, similar a la guitarra pero la zona en donde están las cuerdas es más larga. Tiene cuatro cuerdas y un sonido más grave que la guitarra.",
            id: 3
        },
        {
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Tienda%2FBateria.jpg?alt=media&token=f73d5de8-bd9b-43d1-bd0f-cb83c6a382ac",
            nombre: "Bateria",
            precio: "3000000",
            descripcion: "Bateria de Pearl Jam que funciona como conjunto de tambores, platillos y otros instrumentos de percusión, que se colocan en soportes para ser tocados por un solo músico,​ con baquetas en ambas manos y los pies accionando los pedales que controlan el platillo del hi-hat y el golpeador del bombo.",
            id: 4
        },
    ]


    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    productos.map(function (producto) {
                        return (
                            <div key={producto.id}>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold">{producto.nombre}</h3>
                                        <img src={producto.foto} alt="" className="img-fluid w-100 h-100" />
                                        <h4 className="mt-3">{producto.precio}</h4>
                                        <p className="mt-3">{producto.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

            </div>
        </>
    )
}