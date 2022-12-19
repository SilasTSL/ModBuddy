import React from 'react';
import { Button } from 'antd';
import './CardHeader.css'

export const CardHeader = (props) => {
    return (
        <div className='TitleButtonContainer'>
            <h1 style={{color: 'black', fontSize: 15}} >{props.title}</h1>
            <Button className='TitleButton' shape='circle' style={{marginLeft: 20}}>+</Button>
        </div>        
    )
}