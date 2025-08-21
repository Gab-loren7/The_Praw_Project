import React from 'react'
import Styles from '../Empresa/Empresa.module.css';
import Navbar from '../../components/Navbar/navbar';

let Empresa = () => {
    return(
        <div>
            <Navbar />

            <main className={Styles.Corpo}>
                <h1>Tela Empresa</h1>
            </main>
        </div>
    )
}

export default Empresa;