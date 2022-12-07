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


export default function RRItem(props) {

    const img_site = process.env.PUBLIC_URL + "/" + "images/Desktop-RR.png";
    const dl = process.env.PUBLIC_URL + "/" + "images/Desktop.png";
    const pl = process.env.PUBLIC_URL + "/" + "images/Phone.png";
    const tl = process.env.PUBLIC_URL + "/" + "images/Tablet.png";
    const dh = process.env.PUBLIC_URL + "/" + "images/Desktop-HF.png";
    const tr = process.env.PUBLIC_URL + "/" + "images/Tablet-RR.png";
    const og = process.env.PUBLIC_URL + "/" + "images/Railway_Screenshot.png";

	return (
        <div>
        <Stack spacing={2} alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 500,
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
        In this project I redesigned a website I often visit: the Indian Railways Website.
        Through the redesign, I kept in mind principles of Efficiency, Learnability, Memorability and Accesibility.
        <br></br><br></br>
        This is a website that I have personally been frustrated using. 
        Given that its used by a large number of people daily to book train tickets (including my friends and family), I thought it would be particularly meaningful to try and redesign this website.
        </Typography>

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Original Website
        </Typography>
        <br></br>
        <Stack alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 500,
            width: 800,
            }}
            alt="Original"
            src={og}
        />
        </Stack>
        <br></br>
        <Link href="#" color="inherit" variant="h6">
            {'https://indianrail.gov.in/'}
        </Link>

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Finding Problems
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        Efficiency:
        </Typography>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="The moving banners make it hard to efficiently gather information – you have to wait for the entire loop to end before you can have a look at what information you need."
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="The titles in the navbar are not particularly clear and there is significant overlap between categories (for example, Reserved Train Between Stations vs Reserved Train Schedule). It would be more efficient to group categories together so that users don't end up looking at multiple pages if it's not clear which category has the information they need."
                />
            </ListItem>
        </List>

        <Typography variant="h6" align="left">
        Learnability:
        </Typography>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="It's difficult to differentiate between what is an advertisement and what's not."
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="It would be hard to formulate (and remember) a mental model of where to look. The navigation bar has a particular subset of services (perhaps the most common ones), while the Services button actually drops down to an extended list of services (there's nothing indicating that the service button is a drop-down button)."
                />
            </ListItem>
        </List>

        <Typography variant="h6" align="left">
        Memorability:
        </Typography>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Here too the moving banners would pose a difficulty – the lack of any organization amongst them would make it hard to remember where different pieces of information are."
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="It also seems like the content of the banners as well as rectangular bars seems to keep changing making it hard to remember."
                />
            </ListItem>
        </List>

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Accesibility
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        Looking at WebAIM WAVE, the website had several accesibility issues:
        </Typography>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="There were 8 images that did not have alternate text making it hard for users with screen-readers."
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="There were also 5 cases where images were linked that did not have alt text."
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="There was a case of an empty link where a link was present but there was no text indicating what the link was supposed to do."
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Lastly, the WAVE software also identified the moving banners (marque elements) as a massive issue for users with screen-readers."
                />
            </ListItem>
        </List>

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Lo-Fidelity Wireframing
        </Typography>
        <br></br>
        <Stack alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 600,
            width: 1000,
            }}
            alt="Desktop"
            src={dl}
        />
        <br></br>
        <Grid container justify="space-around" spacing={8}>
        <Grid item xs >
            <Box
                component="img"
                sx={{
                height: 600,
                width: 350,
                }}
                alt="Phone"
                src={pl}
            />
        </Grid>
        <Grid item xs >
            <Box
                component="img"
                sx={{
                height: 600,
                width: 400,
                }}
                alt="Tablet"
                src={tl}
            />
        </Grid>
        </Grid>
        </Stack>

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Hi-Fidelity Prototyping
        </Typography>
        <br></br>
        <Stack alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 600,
            width: 1000,
            }}
            alt="Desktop"
            src={dh}
        />
        </Stack>

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Redesigned Website
        </Typography>
        <br></br>
        <Stack alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 650,
            width: 500,
            }}
            alt="Redesigned"
            src={tr}
        />
        </Stack>
        <br></br>
        <Link href="#" color="inherit" variant="h6">
            {'https://lazylion351.github.io/responsive-redesign/'}
        </Link>
        
        <br></br>
        
        </Stack>
        
        </Stack>
        </div>
      );
}

