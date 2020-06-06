import React from "react"
import { FaCheckCircle, FaHome } from "react-icons/fa"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import "./styles.css"


const Check = () => {
    return (
        <>
            <div className="shadow">
                <div className='concluido'>
                    <FaCheckCircle />
                    <h2>Cadastro concluído!</h2>
                    <div className="icon">
                        <Link to="/">
                            <FaHome />
                             Página Inicial
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Check