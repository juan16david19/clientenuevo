import axios from "axios"
export async function consultarConAxios() {

    //URI=URL+EP (END POINT) DEL SERVICIO
    const IDARTISTA = "3YcBF2ttyueytpXtEzn1Za"
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`

    const TOKEN = "Bearer BQCL4AbpdgYMcx5eB_8l6VYPp0I_I_MYVZBK22m-QWMguGPamQe5MoKMt3zXaZDIc5L6QvaWcSN744r8wCRdF_YbLgo4t72SAnNszN6OUVyiODTS85s"

    //CONSTRUYO LA PETICIÓN
    const PETICION = {
        headers: {
            "Authorization": TOKEN
        }
    }



    //ORDENAR MI RESPUESTA
    try {
        //UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API
        let respuesta = await axios.get(URI, PETICION)
        let canciones=respuesta.data
        return canciones
    } catch(error){
        throw new Error("upsss fallamos "+error)
    }

}