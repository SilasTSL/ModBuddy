import './Home.css';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

import React from 'react'
import {Sidebar} from "../../components/sidebar/Sidebar";

export const Home = () => {
    return (
        <div className="homeContainer">
            <Header />
            <Sidebar />
            <h1>THIS IS HOME</h1>
            <Footer />
        </div>
    )
}
