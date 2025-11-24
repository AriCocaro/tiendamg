
import CartWidget from "./CartWidget";

export default function NavBar(){
    return (
        <nav className="Encabezado">
            
            <img className="LogoInst"
                src="public\BotonSinFondo.png"
                alt="Logo"
            />

            <div className="PagesList">
                <div className="topnav">
                    <ul>
                        <li><a href="#">Indumentaria</a></li>
                        <li><a href="#">Suplementos</a></li>
                        <li><a href="#">Inscripción Carrera</a></li>
                    </ul>
                </div>
            </div>

            <CartWidget />
        </nav>
    );
}