import React from 'react';
/* import yoga_ico from '../../assets/ico/yoga.svg'; */
import yoga_ico from 'assets/ico/yoga.svg';
import swim_ico from 'assets/ico/swim.svg';
import bike_ico from 'assets/ico/bike.svg';
import bodybuild_ico from 'assets/ico/bodybuilding.svg';

import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar_container">
            <ul>
                <li>
                    <img alt={'navigation button'} src={yoga_ico} />
                </li>
                <li>
                    <img alt={'navigation button'} src={swim_ico} />
                </li>
                <li>
                    <img alt={'navigation button'} src={bike_ico} />
                </li>
                <li>
                    <img alt={'navigation button'} src={bodybuild_ico} />
                </li>
            </ul>
            <p>Copiryght, SportSee 2020</p>
        </div>
    );
}
export default Navbar;
