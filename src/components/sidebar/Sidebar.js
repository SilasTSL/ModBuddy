import './Sidebar.css';
import { HomeOutlined, UserOutlined, MessageOutlined, CloseCircleOutlined } from "@ant-design/icons"

import React from 'react'

export const Sidebar = () => {
    return (
        <div className="sidebarContainer">
            <div className="sidebarTopContainer">
                <div className="sidebarProfileContainer">
                    <img className="sidebarProfilePicture" src={require("../../images/profile-pic.jpeg")} />
                </div>
                <div className="sidebarElement">
                    <HomeOutlined className="sidebarElementIcon" />
                    <h2>Home</h2>
                </div>
                <div className="sidebarElement">
                    <MessageOutlined className="sidebarElementIcon" />
                    <h2>Group Chats</h2>
                </div>
                <div className="sidebarElement">
                    <UserOutlined className="sidebarElementIcon" />
                    <h2>Profile</h2>
                </div>
            </div>
            <div className="sidebarElement sidebarBottomElement">
                <CloseCircleOutlined className="sidebarElementIcon" />
                <h2>Sign Out</h2>
            </div>
        </div>
    )
}
