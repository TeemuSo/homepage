import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import network_visualization from "../python/network_visualization.json"
import JupyterViewer from "react-jupyter-notebook";

const cardStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

const Achievement = ({ header, body, href }) => {
    const classes = cardStyles()

    return (
        <div className="card">
            <h3>{header}</h3>
            <p>{body}</p>
            <a href={href}>{href}</a>
        </div>
    )
}

export default Achievement