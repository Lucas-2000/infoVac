import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/menuVaccines.scss'

const MenuVaccines = () => {
    return (
        <div id="component-menuVaccines">
            <strong>Selecione abaixo para saber referente alguma vacina</strong>
            <main>
                <Link to='/vaccines/febretifoide'>
                    <button>Febre Tifoide</button>
                </Link>
                <Link to='/vaccines/hepatiteb'>
                    <button>Hepatite B</button>
                </Link>
                <Link to='/vaccines/febreamarela'>
                    <button>Febre Amarela</button>
                </Link>
                <Link to='/vaccines/poliomielite'>
                    <button>Poliomielite</button>
                </Link>
                <Link to='/vaccines/bcg'>
                    <button>BCG</button>
                </Link>
                <Link to='/vaccines/hpv'>
                    <button>HPV</button>
                </Link>
                <Link to='/vaccines/covid'>
                    <button>Covid</button>
                </Link>
            </main>
        </div>
    )
}

export default MenuVaccines
