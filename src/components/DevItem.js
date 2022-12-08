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

export default function DevItem(props) {

    const d1 = process.env.PUBLIC_URL + "/" + "images/d1.png";

	return (
        <div>
        <Stack spacing={2} alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 500,
            width: 1000,
            borderTop: 0.00001,
            borderLeft: 0.00001,
            borderRight: 0.00001,
            borderBottom: 0.00001,
            }}
            alt="Website"
            src={d1}
        />
        <br></br>
        <Stack width={1000} alignItems={"flex-center"}>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Project Description
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        In this project, I designed an interactive application that
        provides information about Formula 1 Drivers from the on-going 2022 season. 
        It displays the top 12 drivers of the season, showing their team, current points and current race wins.
        <br></br><br></br>
        It allows fans to quickly access data about their favourite drivers, filtering and sorting based on various
        parameters.
        Users can create a collection of their favourite drivers and the application will display the sum of their favourite drivers' points field.
        </Typography>
        <br></br><br></br>

        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Usability Principles
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        I thought of a conceptual model of how users would interact with the application:
        </Typography>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="Users would likely want to see all the information about a given driver in the 
                same location, and it would make sense to have the ability to add/remove a driver 
                from the favourites list alongside an individual driver's information. "
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary=" Within each card, I thought it would make sense to have a hierachy where the name 
                has the largest text and the other information (team name, points, race wins), has a 
                smaller font size and a lighter (less prominent) color."
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary=" I also thought that it made 
                sense to have all the buttons related to sorting/filtering data in the same location 
                (as a vertical bar to the left of the driver cards). Within this buttons bar, I thought 
                it would make sense to group buttons based on the 'type' of operation they were carrying out: sorting, 
                filtering by team etc. "
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="I also tried to use different types of 
                buttons to signal different functionality: square buttons allow for selecting multiple options, 
                like a checkbox, while round buttons only allow you to select a single option from each group."
                />
            </ListItem>
        </List>
        <br></br><br></br>

        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Organization of Components
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        In addition to my App.js, I had three components: OptionsItem, DriverItem, FavouritesItem.
        </Typography>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="DriverItem consisted of an individual card displaying each driver's information. It consisted of text information, an image of the driver as well as a single FavouritesItem.                "
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary=" FavouritesItem is a button that allows a user to add/remove a particular driver from their collection of favourites. It has two forms depending on whether the individual driver is already in the favourites list or not.                "
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary=" OptionsItem has a card consisting of three groups of buttons. The first first button group has the sort buttons, the second the team filtering options, and the third has the other filtering options (Racewinners, Favourites).                "
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Within App.js, I first had two AppBars: the first with the logo and heading, and the second displaying the favourites points. This was followed by a container having a single OptionsItem on the left and a collection of DriverItems on the right.                "
                />
            </ListItem>
        </List>

        <br></br><br></br>

        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Final Application
        </Typography>
        <br></br>
        <Link href="https://lazylion351.github.io/development/" color="inherit" variant="h6">
            Click here to access the final application
        </Link>
        
        <br></br><br></br>

        </Stack>
        
        </Stack>
        </div>
      );
}

