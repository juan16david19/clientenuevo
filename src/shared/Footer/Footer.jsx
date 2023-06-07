import './Footer.css'
import { Route, Routes, Link } from "react-router-dom"
export function Footer() {
    return (
        <>
            <footer class="Footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <h3>Contacta con Nosotros</h3>
                        <p>Cl. 49 #41-9, La Candelaria, Medellín, La Candelaria, Medellín, Antioquia</p>
                        <p>Correo: juan16david19@gmail.com</p>
                        <p>Teléfono: 319 362 65 29</p>
                    </div>
                    <div class="footer-content">
                        <h3>Síguenos</h3>
                        <ul class="social-media">
                            <li><a href="https://www.facebook.com/PearlJam/?locale=es_LA"><i class="fab fa-facebook"></i>Facebook</a></li>
                            <li><a href="https://twitter.com/PearlJam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fab fa-twitter"></i>Twitter</a></li>
                            <li><a href="https://www.instagram.com/pearljam/feed/?hl=es-la"><i class="fab fa-instagram"></i>Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p> 2023 Tu Sitio Web. Todos los dechos reservados.</p>
                </div>
            </footer>
        </>
    )
}