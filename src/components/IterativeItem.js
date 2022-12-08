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


export default function IterativeItem(props) {

    const img_site = process.env.PUBLIC_URL + "/" + "images/attain_home.png";
    const m1 = process.env.PUBLIC_URL + "/" + "images/m1.png";
    const m2 = process.env.PUBLIC_URL + "/" + "images/m2.png";
    const a1 = process.env.PUBLIC_URL + "/" + "images/a1.png";
    const a2 = process.env.PUBLIC_URL + "/" + "images/a2.png";
    const a4 = process.env.PUBLIC_URL + "/" + "images/a4.png";

	return (
        <div>
        <Stack spacing={2} alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 550,
            width: 1000,
            }}
            alt="Website"
            src={img_site}
        />
        <br></br>
        <Stack width={1000} alignItems={"flex-center"}>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Project Description
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        In this group project, we iteratively designed a website for a Y-Combinator 
        backed startup: Attain. 

        <br></br><br></br>
        Our design process was iterative, building on feedback from a 
        group of our peers as well as through a sample
        of users from an online user testing website.
        </Typography>
        <br></br><br></br>

        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        About the Startup
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        Attain is a marketplace that acts as a one-stop shop for convenience store owners to purchase inventory from a variety of suppliers.
        <br></br><br></br>
        We created our interface keeping in mind three sets of Attain users:
        </Typography>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="The first will be store owners (retailers) who will use the website to access a marketplace from which to order inventory. Additionally, the interface will sync with their in-store inventory system and provide store-owners with information about what inventory they currently have at their store.
                "
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="The second will be suppliers who list their items on Attain to be sold. They will use the website to add/remove items, keep track of orders, and access analytics about their sales."
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="The third will be users that have not yet signed up to Attain. They might use the interface to create an account (as either a supplier or retailer) or to generally find out more information about the company."
                />
            </ListItem>
        </List>
        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Initial Lo-Fi Prototypes
        </Typography>
        <br></br>
        <Stack alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 550,
            width: 800,
            }}
            alt="Prototype"
            src={m1}
        />
        <br></br>
        <Box
            component="img"
            sx={{
            height: 550,
            width: 800,
            }}
            alt="Prototype"
            src={m2}
        />
        </Stack>

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Interative Mockup
        </Typography>
        <br></br>

        <Typography variant="h6" align="left">
        Some Key Elements of our Design:
        </Typography>
        <br></br>
        <Stack alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 500,
            width: 800,
            }}
            alt="Prototype"
            src={a1}
        />
        <br></br>
        <Box
            component="img"
            sx={{
            height: 500,
            width: 800,
            }}
            alt="Prototype"
            src={a2}
        />
        <br></br>
        <Box
            component="img"
            sx={{
            height: 500,
            width: 800,
            }}
            alt="Prototype"
            src={a4}
        />
        </Stack>
        <br></br>
        <Link href="https://www.figma.com/proto/ZJ7qQimmRRJ3kfIpKg4sFK/Attain-Mock-Up?page-id=72%3A431&node-id=72%3A432&starting-point-node-id=72%3A432&scaling=scale-down" color="inherit" variant="h6">
            Click here to access our interactive mockup
        </Link>
        <br></br>

        </Stack>
        
        </Stack>
        </div>
      );
}

