import React from 'react';
import "./widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LnkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React JS is awesome!!", "Top news - 1000 readers")}
            {newsArticle("COVID-19 update", "Top news - 800 readers")}
            {newsArticle("Bitcoin breakes 22k", "Top news - 500 readers")}
            {newsArticle("Tesla hits new high", "Top news - 600 readers")}
            {newsArticle("Hive is down 50%", "Top news - 200 readers")}
        </div>
    )
}

export default Widgets
