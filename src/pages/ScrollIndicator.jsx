import React from 'react';
import { Link } from "react-scroll";
import '../styles/scrollIndicator.scss';

const ScrollIndicator = () => {
    return (
        <Link to="page" smooth={true} duration={200}>
            <div class="scrolldown-wrapper">
                <div class="scrolldown">
                    <svg height="30" width="10" fill="white">
                        <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
                        <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}


export default ScrollIndicator;