import React from 'react'
import Styles from '../Home/Home.module.css';

import Navbar from '../../components/Navbar/navbar';

let Home = () => {
    return (
        <div>
            <Navbar />

            <main className={Styles.Corpo}>
            </main>
        </div>
    )
}

export default Home;