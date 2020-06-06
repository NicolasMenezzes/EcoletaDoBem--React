import React from "react"
import {FaSignInAlt} from "react-icons/fa"
import logo from "../../assets/logo.svg"
import {Link} from "react-router-dom"
import "./styles.css"

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
               <p><img src={logo} alt="Ecoleta"/> Do bem</p> 
                
                </header>

                <main>
                    <h1>Seu Martkplace de coleta de Doações</h1>
                    <p>Ajudamos pessoas a encontrarem pontos para realizar sua doação de forma eficiente</p>
                    <Link to="/createpoint">
                        <span>
                            <FaSignInAlt/>
                        </span>
                        <strong>Cadastre um Ponto que precisa de Doações </strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home