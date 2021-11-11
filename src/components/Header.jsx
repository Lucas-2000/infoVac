import React from 'react'
import { Link } from 'react-router-dom'
import  '../styles/header.scss'

const Header = () => {
    return (
        <div id="component-header">
            <div className="title-info">
                <h1>InfoVac</h1>
                <p>Informativo sobre vacinas</p>
            </div>
            <div className="pages-button">
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/vaccines'>
                    <button>Vacinas</button>
                </Link>
            </div>
        </div>
    )
}

export default Header
