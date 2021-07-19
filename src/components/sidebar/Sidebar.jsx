import React from 'react';
import "./sidebar.css";
import {Avatar} from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar　/>
                <h2>Daisuke Kawabuchi</h2>
                <h4>daisuke@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,534</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>

                <div className="sidebar__bottom">
                    <p>Recent</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
