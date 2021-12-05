import React from 'react'
import '../styles/footer.scss'
import { i18n } from '../translate/i18n';

const Footer = () => {
    return(
        <footer className="footer">

            <p>{i18n.t('rodape.rodape')}</p>

        </footer>
    )
}

export default Footer