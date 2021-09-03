import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import network_visualization from "../python/network_visualization.json"
import JupyterViewer from "react-jupyter-notebook";


const Achievement = ({ header, body, solution, techStack, href, image, gif }) => {

    return (

        <div className="row card">
            <div className="nine columns">
                <h3>{header}</h3>
                <a href={href}>{href}</a>
                <p><i>{body}</i></p>
                <p>{solution}</p>
                {techStack ? <p><b>Technology stack: </b>{techStack}</p> : <div />}
            </div>
            {image ? <img className="icon" src={"images/" + image} alt="loading.." /> : <div />}
            {gif ? <img className="icon" src={require("../assets/" + gif)} alt="loading.." /> : <div />}
        </div>
    )
}

export default Achievement