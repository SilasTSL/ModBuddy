import './FirstUse.css';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Footer } from '../../components/footer/Footer';

import React from 'react'

export const FirstUse = () => {
    return (
        <div className="pageContent">
            <Header />
            <div className="firstUseRow">
                <Sidebar />
                <div className="firstUseContainer">
                    <div className="firstUseStepsRow">
                        <div className="firstUseStep">1</div>
                        <div className="firstUseStepDivider">-</div>
                        <div className="firstUseStep">2</div>
                        <div className="firstUseStepDivider">-</div>
                        <div className="firstUseStep">3</div>
                    </div>
                    <h1 className="firstUseHeader">Personal Details</h1>
                    <form className="firstUseFormContainer">
                        <div className="firstUseFormRow">
                            <label>Name: </label><input className="firstUseFormRowInput" type="text" />
                        </div>
                        <div className="firstUseFormRow">
                            <label>Email: </label><input className="firstUseFormRowInput" type="text" />
                        </div>
                        <div className="firstUseFormRow">
                            <label>Year of Study: </label><input className="firstUseFormRowInput" type="number" />
                        </div>
                        <div className="firstUseFormRow">
                            <label>Course of Study: </label><input className="firstUseFormRowInput" type="text" />
                        </div>
                        <button className="firstUseNextButton">NEXT</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
