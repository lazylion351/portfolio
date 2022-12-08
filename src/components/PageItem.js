import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from "react";
import WorkItem from "./WorkItem.js";
import PersonasItem from "./PersonasItem.js";
import RRItem from "./RRItem.js";
import IterativeItem from "./IterativeItem.js";
import DevItem from "./DevItem.js";
import AboutItem from "./AboutItem.js";

export default function PageItem(props) {

    if (props.curPage === "UIUX Portfolio") {
        return <WorkItem setCurPage={props.setCurPage} setCurTitle={props.setCurTitle}/>
    } else if (props.curPage === "Personas and Storyboarding") {
        return <PersonasItem/>
    } else if (props.curPage === "Responsive Redesign") {
        return <RRItem/>
    } else if (props.curPage === "Iterative Design") {
        return <IterativeItem/>
    } else if (props.curPage === "Development") {
        return <DevItem/>
    } else if (props.curPage === "About Me") {
        return <AboutItem/>
    } 
    
}