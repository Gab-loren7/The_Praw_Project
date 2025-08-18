import React from 'react'
import '../Navbar/navbar.css';
import LOGOMARCA from '../../img/logomarca.png';
import IconsLista from '../IconsLista';

const Navbar = () => {

    // Verifica se a tecla pressionada é "p" ou "P"
    document.addEventListener("keydown", function (event) {
        if (event.key === "p" || event.key === "P") {
            document.querySelector("#input-pesquisa").focus();
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        let subNavbar = document.querySelector('.container-subnavbar');

    });

    return (
        <div>
            <div className='container-navbar'>

                <div className='input'>
                    <input type='text' placeholder='Digite P para pesquisar' id='input-pesquisa' />
                    <i class="bi bi-search" />
                </div>

                <img src={LOGOMARCA} className='logomarca' alt="Logomarca" />

            </div>

            <div className='container-subnavbar'>
                <IconsLista />
            </div>
        </div>
    )
}

export default Navbar;