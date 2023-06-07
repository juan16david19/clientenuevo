import "./Members.css"
export function Members() {

    let integrantes = [
        {
            nombre: "Eddie Vedder",
            rol: "Voz, Guitarra, Armónica, Ukelele (1990-Presente)",
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Eddie%20Vedder.jpg?alt=media&token=94e17498-38a5-4a57-a1ba-054a6ed8417f",
            nacimiento: "Evanston, Illinois, 23 de diciembre de 1964",
            datos:"Edward Louis Severson III, más conocido como Eddie Vedder (Evanston, Illinois, 23 de diciembre de 1964), es un músico estadounidense, cantante, líder y uno de los tres guitarristas del grupo estadounidense de grunge Pearl Jam. Vedder también ha participado en la composición de soundtracks y en contribuciones en álbumes de otros artistas. Ha publicado dos álbumes como solista: Into the wild, lanzado en 2007 como banda sonora de la película homónima1​ y Ukulele Songs, lanzado en 2011 junto a un DVD en vivo llamado Water on the Road.",
            id:1
        },
        {
            nombre: "Mike McCready",
            rol: "Guitarra líder, Coro (1990-Presente)",
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Mike%20McCready.jpg?alt=media&token=1f75c07f-ba1f-4eda-9aeb-7dfb5e365e51",
            nacimiento: "5 de abril de 1966, Pensacola, Florida",
            datos:"Michael David McCready (5 de abril de 1966, Pensacola, Florida) es un músico estadounidense, conocido por ser el guitarrista principal y fundador de Pearl Jam, junto a Jeff Ament y Stone Gossard.",
            id:2
        },
        {
            nombre: "Stone Gossard",
            rol: "Guitarra Rítmica, Coro (1990-Presente)",
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Stone%20Gossard.jpg?alt=media&token=e6fdcae6-040f-40b8-b323-e404864b20ed",
            nacimiento: "20 de julio de 1966, Seattle, Washington",
            datos:"Stone Carpenter Gossard (20 de julio de 1966, Seattle, Washington) es guitarrista y, junto a Jeff Ament y Mike McCready, miembro fundador del grupo de rock estadounidense Pearl Jam. Gossard es bien conocido por su trabajo en grupos de grunge en la ciudad de Seattle durante la década de los 80's antes de Pearl Jam, y ha hecho contribuciones significativas a la industria musical junto a Pearl Jam o sin su compañía.",
            id:3
        },
        {
            nombre: "Jeff Ament",
            rol: "Bajo, Coro (1990-presente)",
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/JeffAment.jpg?alt=media&token=d1374033-e100-4f0a-bfbb-dcd505c3edbb",
            nacimiento: "10 de marzo de 1963, Havre, Montana",
            datos:"Jeffrey Allen Ament (10 de marzo de 1963, Havre, Montana) es un músico de rock de los Estados Unidos, el cual, junto a Stone Gossard y Mike McCready, es uno de los miembros fundadores de Pearl Jam.",
            id:4,
        },
        {
            nombre: "Matt Cameron",
            rol: "Batería (1998-presente)",
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/MattCameron.jpg?alt=media&token=c8fb166b-07b6-4622-a119-b67d0b6037be",
            nacimiento: "San Diego, California; 28 de noviembre de 1962",
            datos:"Matthew David Cameron (San Diego, California; 28 de noviembre de 1962) es un baterista estadounidense. Se hizo conocido por formar parte de la banda de grunge Soundgarden, y por sus posteriores trabajos con bandas como Pearl Jam, donde toca actualmente.",
            id:5
        },
        {
            nombre: "Boom Gaspar",
            rol: "Teclado (2004-presente)",
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/BoomGaspar.jpg?alt=media&token=3c1a4d03-9359-40d2-ba49-96f07caa547e",
            nacimiento: "Waimānalo, Hawái; 3 de febrero de 1953",
            datos:"Kenneth 'Boom' Gaspar (Waimānalo, Hawái; 3 de febrero de 1953) es un tecladista estadounidense que ha colaborado tanto en giras como en discos en estudio del grupo de rock estadounidense Pearl Jam desde 2002.",
            id:6
        },
        {
            nombre: "Josh Klinghoffer",
            rol: "Guitarra Rítmica, Teclado, Coro(2021-presente)",
            foto: "https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Josh%20Klinghoffer.jpg?alt=media&token=cc2225c8-b5f9-4e01-8bb7-985b94151804",
            nacimiento: "Los Ángeles, California; 3 de octubre de 1979",
            datos:"Josh Adam Klinghoffer (Los Ángeles, California; 3 de octubre de 1979) es un músico multiinstrumentista y productor estadounidense. Es principalmente reconocido por haber sido guitarrista de la banda de rock Red Hot Chili Peppers desde 2009 al 2019 , con quienes grabó dos álbumes de estudio, I'm with You (2011) y The Getaway (2016), y la compilación de b-sides I'm Beside You (2013). Klinghoffer tomó el lugar de su amigo y frecuente colaborador, John Frusciante, en el 2009, después de un periodo como miembro de giras. Klinghoffer fue inducido al Rock and Roll Hall of Fame con los Red Hot Chili Peppers en 2012 con 32 años de edad, convirtiéndose en el miembro vivo más joven en entrar al Salón de la Fama hasta ese momento, superando a Stevie Wonder.",
            id:7
        },
        {
            nombre:"Dave Krusen",
            rol:"Batería (1990-1991)",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Dave%20Krusen.jpg?alt=media&token=b02c2811-5f26-49fc-95f8-4e91f1048edd",
            nacimiento:"10 de marzo de 1966, Washington, Tacoma",
            datos:"Dave Krusen es un baterista norteamericano conocido por haber sido uno de los miembros fundadores de Pearl Jam, una de las más importantes bandas del grunge a comienzos de la década de los años noventa, además de ser el batería de su trabajo más laureado hasta el momento, Ten. Después de dejar la banda en 1991, Krusen ingresa en Hovercraft bajo el seudónimo de Karl 3-30. Además, también es conocido por haber sido el segundo batería de Candlebox en 1997, y por participar en el álbum homónimo de Unified Theory.",
            id:8

        },
        {
            nombre:"Matt Chamberlain",
            rol:"Batería (1990-1991)",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Matt%20Chamberlain.jpg?alt=media&token=8df0d642-bf0f-47e8-aaf4-be4c69ac6d3a",
            nacimiento:"17 de abril de 1967, en San Pedro, California",
            datos:"Matthew Chamberlain (17 de abril de 1967, en San Pedro, California) es un baterista, productor e ingeniero en sonido estadounidense.1​ Actualmente vive en Los Ángeles, California.",
            id:9
        },
        {
            nombre:"Dave Abbruzzese",
            rol:"Batería (1991-1994)",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Dave%20Abbruzzese.jpg?alt=media&token=474d5637-265e-446a-af35-504a10cd4bca",
            nacimiento:"17 de mayo de 1968, Connecticut, Estados Unidos",
            datos:"David James Abbruzzese (n. 17 de mayo de 1968) es un músico estadounidense, más conocido por haber sido durante tres años el baterista oficial de Pearl Jam, una de las bandas más influyentes del movimiento grunge de Seattle de mediados de los años 1990. Reemplazó a Matt Chamberlain en 1991, poco después de la edición del álbum Ten. Abbruzzese también participó en la grabación y composición de los dos siguientes álbumes de la banda, Vs. y Vitalogy.",
            id:10
        },
        {
            nombre:"Jack Irons",
            rol:"Batería (1994-1998)",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicajdea.appspot.com/o/Jack%20Irons.jpg?alt=media&token=f788b36e-2dad-4b25-9e9f-4090fcf23012",
            nacimiento:"18 de julio de 1962, Los Ángeles, California",
            datos:"Jack Irons (n. Los Ángeles, California; 18 de julio de 1962) es un reconocido baterista de la escena rock de Los Ángeles, miembro original de los Red Hot Chili Peppers, y de bandas como Eleven o Pearl Jam. También ha trabajado con Joe Strummer y The Latino Rockabilly War, Redd Kross, Raging Slab, y The Les Claypool Frog Brigade. En 2004, Irons lanzó su primer álbum en solitario, Attention Dimension. El 24 de agosto de 2010 lanzó el segundo, titulado No Heads Are Better Than One y en 2011 llegó un tercero, Blue Manatee.",
            id:11
        },
    ]

    function quehagocuandosedeelevento(evento){
        console.log("oe")
        evento.target.classList.add("blancoYnegro")
    }

    function quehagocuandosedeelotroevento(evento){
        console.log("adios")
        evento.target.classList.remove("blancoYnegro")
    }

    return (
        <>

            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    integrantes.map(function(integrante) {
                        return (
                            <div key={integrante.id}>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                                        <img src={integrante.foto} alt="" className="img-fluid w-100 h-100" onMouseOver={quehagocuandosedeelevento} onMouseLeave={quehagocuandosedeelotroevento}/>
                                        <h4 className="mt-3">{integrante.rol}</h4>
                                        <p className="mt-3">{integrante.datos}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

            </div>

        </>
    )
}