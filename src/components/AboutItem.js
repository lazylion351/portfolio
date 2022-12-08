import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from "react";
import FavouritesItem from "./FavouritesItem.js";
import Stack from '@mui/material/Stack';
import ProjectItem from "./ProjectItem.js";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import data from "../assets/data.json";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

export default function AboutItem(props) {

    const d1 = process.env.PUBLIC_URL + "/" + "images/d1.png";

	return (
        <div>
        <Stack width={1000} alignItems={"flex-center"}>
        <Card sx={{ display: 'flex', justifyContent: 'space-between'}} elevation={1}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <br></br>
                <Typography variant="h4" sx={{ color: "#ffa726" }}>
                Hi there!
                </Typography>
                <br></br>
                <Typography component="div" variant="h5" align="left">
                &nbsp; &nbsp;
                I'm an undergrad at Brown University studying Computer Science
                and History.
                <br></br><br></br>
                &nbsp; &nbsp;
                I enjoy working on complex problems, and creating engaging and accessible systems.
                <br></br><br></br>
                &nbsp; &nbsp;
                On this website, I display a portfolio of projects that I created in a User Interfaces 
                and User &nbsp; &nbsp; Experience class. 
                <br></br><br></br>
                &nbsp; &nbsp;
                Through this portfolio, I want to showcase my development as a designer.
                Prior to this 
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;class, I had no experience with UIUX. With each project, 
                I reflect on my thought process 
                &nbsp;&nbsp;&nbsp;&nbsp;and key design decisions.

                <br></br><br></br>
                &nbsp; &nbsp;
                I hope you enjoy looking through my work!
                </Typography>
                <br></br><br></br>
                </Box>
                {/* <CardMedia
                    component="img"
                    sx={{ width: 161, height:187 }}
                    image={props.image}
                    alt={props.image}
                    style={{
                        justify: 'right',
                        alignContent: 'right',
                        alignItems: 'right'
                      }}
                /> */}
            </Card>
        </Stack>
        </div>
      );
}

