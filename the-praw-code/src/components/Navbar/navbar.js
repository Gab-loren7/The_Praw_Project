import React from 'react';
import '../Navbar/navbar.css';
import LOGOMARCA from '../../img/logomarca.png';

const Navbar = () => {
    document.addEventListener("keydown", function(event) {
        // Verifica se a tecla pressionada é "p" ou "P"
        if (event.key === "p" || event.key === "P") {
          document.querySelector("#input-pesquisa").focus();
        }
      });

    return (
        <div>
            <div className='container-navbar'>

                <div className='input'>
                    <input type='text' placeholder='Digite P para pesquisar' id='input-pesquisa'/>
                    <i class="bi bi-search" />
                </div>

                <img src={LOGOMARCA} className='logomarca' alt="Logomarca" />

            </div>

            <div className='container-subnavbar'>

            </div>
        </div>
    )
}

export default Navbar;