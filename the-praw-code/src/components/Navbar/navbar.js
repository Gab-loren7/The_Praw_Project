import React from 'react'
import Styles from '../Navbar/navbar.module.css';
import LOGOMARCA from '../../img/logomarca.png';
import IconsLista from '../IconsLista';

const Navbar = () => {

    // Verifica se a tecla pressionada é "p" ou "P"
    document.addEventListener("keydown", function (event) {
        if (event.key === "p" || event.key === "P") {
            document.querySelector("#input-pesquisa").focus();
        }
    });

    return (
        <div>
            <div className={Styles.container_navbar}>

                <div className={Styles.input}>
                    <input type='text' placeholder='Digite P para pesquisar' id='input-pesquisa' />
                    <i class="bi bi-search" />
                </div>

                <img src={LOGOMARCA} className={Styles.logomarca} alt="Logomarca" />

            </div>

            <div className={Styles.container_subnavbar}>
                <IconsLista />
            </div>
        </div>
    )
}

export default Navbar;