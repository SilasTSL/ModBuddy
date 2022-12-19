import './Home.css';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { SemesterCard } from '../../components/semestercard/SemesterCard';

import React, { useState } from 'react'
import {Sidebar} from "../../components/sidebar/Sidebar";

export const Home = () => {

    const [sem, useSem] = useState([
        {title: "AY22/23 SEM 1",
         mods: ["CS2103T", "CS2103T", "CS2103T", "CS2103T", "CS2103T"]}, 
        {title: "AY22/23 SEM 2",
        mods: ["CS2103T", "CS2103T", "CS2103T", "CS2103T", "CS2103T"]},
        {title: "AY23/24 SEM 1",
         mods: ["CS2103T", "CS2103T", "CS2103T", "CS2103T", "CS2103T"]}]);

    return (
        <div className="homeContainer">
            <Header />
            <div className='MainContainer'>
                <Sidebar />
                <div className='CardContainer'>
                    <h2 style={{textAlign: 'left', paddingLeft: 70, paddingTop: 50}}>Module Planning</h2>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                        {sem.map((item) => {return <SemesterCard semDetails={item}/>})}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
