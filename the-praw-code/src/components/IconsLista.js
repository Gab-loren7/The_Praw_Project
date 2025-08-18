import React from 'react'

const IconsLista = () => {
    return (
        <ul>
            {/* Inicio */}
            <li className='item-menu'>
                <a href='#'>
                    <span className='icon'><i class="bi bi-house-fill" /></span>
                    <span className='txt-link'>Início</span>
                </a>
            </li>

            {/* Promoções */}
            <li className='item-menu'>
                <a href='#'>
                    <span className='icon'><i class="bi bi-currency-dollar icons" /></span>
                    <span className='txt-link'>Promoções</span>
                </a>
            </li>

            {/* Perfil */}
            <li className='item-menu'>
                <a href='#'>
                    <span className='icon'><i class="bi bi-person-circle icons" /></span>
                    <span className='txt-link'>Perfil</span>
                </a>
            </li>

            {/* Compras */}
            <li className='item-menu'>
                <a href='#'>
                    <span className='icon'> <i class="bi bi-bag-fill" /></span>
                    <span className='txt-link'>Compras</span>
                </a>
            </li>

            {/* Empresa */}
            <li className='item-menu'>
                <a href='#'>
                    <span className='icon'> <i class="bi bi-building-fill icons" /></span>
                    <span className='txt-link'>Empresa</span>
                </a>
            </li>
        </ul>
    );
};

export default IconsLista;