import React from 'react';
import './SemesterCard.css';
import { CardHeader } from '../cardheader/CardHeader';
import { Card } from 'antd';

export const SemesterCard = (props) => {
    return (
        <div className='HomeSemCardContainer'>
            <Card title={<CardHeader title={props.semDetails.title}/>}>
                <ul>
                    {props.semDetails.mods.map(mod => 
                        <li className='modCard' style={{padding: 5}}>{mod}</li>
                    )}
                </ul>
            </Card>   
        </div>        
    )
}