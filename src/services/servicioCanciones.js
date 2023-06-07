export async function consultarCanciones(){

    //RECETA PARA CONSUMIR APIS CON JS

    //1. PA' ONDE VAS OME
    // URL+ EP DEL SERVICIO
    const IDARTISTA="1w5Kfo2jwwIPruYS2UWh56"
    const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN="Bearer BQCfY54OTYKUuM6d8adFgBfkx9AVCC4sQ0d3L2SO22wqBroG8PC4JfX_RW7q2sKtUYh11flpcoGGllZM-DSTp2KsJHA_5iJiV6pNP_AUVlJ3nCK-LuI"

    //2. QUE VAS HACER ALLA OME...
    //CONFIGURO LA PETICION
    let peticion={
        method:"GET",
        headers:{
            "Authorization":TOKEN
        },
    }

    //3. PIDA EL TAXI
    //utilice la promesa FETCH para ir al back y consumir el API
    let respuesta=await fetch(URI,peticion)
    let canciones=await respuesta.json()

    return canciones


    


}