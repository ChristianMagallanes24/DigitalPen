import NavBar from "../Nav/Nav";
import robot from "../../assets/asistente-robot.gif";

function Header() {
    return (
        <>
            <NavBar />
            <div id="inicio" className="header">

                <div className="hi">
                    <img
                        src={robot}
                        alt="DigitalPen Logo"
                        className="robot"
                    />

                </div>
                <div className="header-informacion">
                    <h1 className="titulo">Somos una agencia digital enfocada en potenciar tu negocio</h1>
                    <p className="informacion">Nuestro objetivo principal es ayudarte a adaptarte a la era digital, lo cual implica mejorar y potenciar tu presencia online para alcanzar tus objetivos</p>
                    <a className="btn-header" href="https://calendly.com/digitalpen/digitalpen-reserva">Agendar una asesoria gratuita</a>
                </div>

            </div>
            <div className="header-bottom">
                <h2>Hacemos crecer tu negocio digital</h2>
            </div>
        </>
    )
}
export default Header;