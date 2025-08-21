import React from 'react'
import Navbar from '../../components/Navbar/navbar';
import Styles from '../Home/Home.module.css';

let Home = () =>  {
    return (
        <div>
            <Navbar />

            <main className={Styles.Corpo}>
                <h1>Tela Home</h1>
            </main>
        </div>
    )
}

export default Home;