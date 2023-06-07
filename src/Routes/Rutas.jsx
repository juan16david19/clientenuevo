import { Route, Routes, Link} from "react-router-dom"
import { Home } from '../Home/Home'
import { Members } from '../Members/Members'
import { Menu } from '../shared/Menu/Menu'
import { Footer } from '../shared/Footer/Footer'
import { Shop } from '../Shop/Shop'
import { Carga } from '../Hook/Carga'
import { Music } from '../Music/Music'
import { Discography } from "../Discography/Discography"


export function Rutas() {
    return(
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/integrantes" element={<Members />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/hooks" element={<Carga />} />
                <Route path="/musica" element={<Music />} />
                <Route path="/discografia" element={<Discography />} />
            </Routes>
        </>
    )
}