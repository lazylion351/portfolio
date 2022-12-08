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

export default function PersonasItem(props) {

    const img_src = process.env.PUBLIC_URL + "/" + "images/coffee.jpg";
    const sketch_src = process.env.PUBLIC_URL + "/" + "images/Sketch_Inverted.png";
    const p1 = process.env.PUBLIC_URL + "/" + "images/Persona_1-removebg-preview.png";
    const p2 = process.env.PUBLIC_URL + "/" + "images/Persona2.png";
    const s1 = process.env.PUBLIC_URL + "/" + "images/S1.png";
    const s2 = process.env.PUBLIC_URL + "/" + "images/S2.png";
    const s3 = process.env.PUBLIC_URL + "/" + "images/S3.png";
    const s4 = process.env.PUBLIC_URL + "/" + "images/S4.png";
    const s5 = process.env.PUBLIC_URL + "/" + "images/S5.png";
    const s6 = process.env.PUBLIC_URL + "/" + "images/S6.png";
	return (
        <div>
        <Stack spacing={2} alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 500,
            width: 1000,
            }}
            alt="Coffee Machine"
            src={img_src}
        />
        <Stack width={1000} alignItems={"flex-center"}>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Project Description
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        I observed and interviewed people using a coffee machine at my apartment building. 
        My goal was to observe real users
        interacting with this interface, create user personas based on my observations,
        and illustrate a storyboard for one of my personas.
        </Typography>
        <br></br><br></br>
        {/* <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Machine Description
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        The machine had several components:
        </Typography>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="Button: The button serves two functions – needs to be clicked to start dispensing coffee, and then again to stop dispensing
                "
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Flap: The flap opens the top of the machine upwards to allow you insert coffee pods"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Water Jug: Allows you to fill water to use for the coffee"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Used Pod Dispenser: Dispenser to remove waste pods after they have been used"
                />
            </ListItem>
        </List>

        <br></br><br></br> */}
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        My Observations
        </Typography>
        <br></br>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="​Users usually began by filling up the jug with water"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Users filled up the jug with different amounts of water (ranging from a third to the entire jug)​"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Users remembered that they needed a cup/glass at different stages (some right after filling water, some right before pressing the button)"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Users pressed the button to stop dispensing coffee at different times"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Some users struggled with differentiating between pressing the flap to put new pods and opening the used pod dispenser"
                />
            </ListItem>
        </List>

        {/* <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Interview Questions
        </Typography>
        <br></br>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="What do you think you will require to make coffee with this machine?"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Was it easy to figure out where the {water, pods, cup} went?​"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="What did you like and dislike about the machine?"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Was there anything you didn't find intuitive about making coffee with this machine?"
                />
            </ListItem>
        </List> */}

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Interview Responses
        </Typography>
        <br></br>
        <List sx = {{
            listStyleType: 'disc',
            pl: 4,
            }}>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} 
                primary="Before they began, most users forgot that they would require a cup"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Users found it easy to figure out where the water and cup went. However, some were confused about where to place the pods (i.e. differentiate between the flap and pod dispenser)"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Users liked the minimal aesthetic of the machine. However, they felt the size was rather large and the lack of prompts (such as to tell them to press the button to stop, to tell them what to open to place a new pod) made parts of the process confusing"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Users who were accustomed to alternate coffee machines that had options for pre-measured coffee sizes found it confusing to estimate when to stop pouring coffee"
                />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}
                primary="Some users did not know how much water would be sufficient and were expecting size markings on the jug"
                />
            </ListItem>
        </List>

        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Personas
        </Typography>
        <br></br>
        <Typography variant="h6" align="left">
        Persona 1: Never used this particular coffee machine, but experienced with a different type of machine
        </Typography>
        <br></br>
        <Stack alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 550,
            width: 900,
            }}
            alt="Persona 1"
            src={p1}
        />
        </Stack>

        <br></br>
        <Typography variant="h6" align="left">
        Persona 2: Never used a coffee machine; Making coffee for a friend
        </Typography>
        <br></br>
        <Stack alignItems='center'>
        <Box
            component="img"
            sx={{
            height: 550,
            width: 900,
            }}
            alt="Persona 2"
            src={p2}
        />
        </Stack>
        
        <br></br><br></br>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
        Storyboard
        </Typography>
        <br></br>

        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <Box sx={{ width: 475 }}> 
            <Card elevation={1} width={475}>
                <Stack>
                    <CardMedia
                        component="img"
                        sx={{ width: 475, height: 240}}
                        image={s1}
                        alt='s1'
                    />
                    <Typography variant="h6" align="left">
                    ​In the middle of studying, the user decides to go to the coffee machine and make a cup of coffee.                              
                    </Typography>
                </Stack>
            </Card>    
            </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box sx={{ width: 475 }}> 
            <Card elevation={1} width={475}>
                <Stack>
                    <CardMedia
                        component="img"
                        sx={{ width: 475, height: 240}}
                        image={s2}
                        alt='s2'
                    />
                    <Typography variant="h6" align="left">
                    The user takes the empty jar of water to the sink and fills the jar with water.
                    </Typography>
                </Stack>
            </Card>    
            </Box>
            </Grid>

            <Grid item xs={12} md={6}>
            <Box sx={{ width: 475 }}> 
            <Card elevation={1} width={475}>
                <Stack>
                    <CardMedia
                        component="img"
                        sx={{ width: 475, height: 240}}
                        image={s3}
                        alt='s3'
                    />
                    <Typography variant="h6" align="left">
                    The user returns to the coffee machine and attaches the jar of water to the coffee machine
                    </Typography>
                </Stack>
            </Card>    
            </Box>
            </Grid>

            <Grid item xs={12} md={6}>
            <Box sx={{ width: 475 }}> 
            <Card elevation={1} width={475}>
                <Stack>
                    <CardMedia
                        component="img"
                        sx={{ width: 475, height: 240}}
                        image={s4}
                        alt='s4'
                    />
                    <Typography variant="h6" align="left">
                    The user picks up a coffee pod lying nearby and tries to figure out where to put it. 
                    </Typography>
                </Stack>
            </Card>    
            </Box>
            </Grid>

            <Grid item xs={12} md={6}>
            <Box sx={{ width: 475 }}> 
            <Card elevation={1} width={475}>
                <Stack>
                    <CardMedia
                        component="img"
                        sx={{ width: 475, height: 240}}
                        image={s5}
                        alt='s5'
                    />
                    <Typography variant="h6" align="left">
                    The user presses the button to start the coffee dispensing. They then go talk to a friend while waiting for it to dispense.
                    </Typography>
                </Stack>
            </Card>    
            </Box>
            </Grid>

            <Grid item xs={12} md={6}>
            <Box sx={{ width: 475 }}> 
            <Card elevation={1} width={475}>
                <Stack>
                    <CardMedia
                        component="img"
                        sx={{ width: 475, height: 240}}
                        image={s6}
                        alt='s6'
                    />
                    <Typography variant="h6" align="left">
                    The user then comes back to the machine. Now that enough coffee has been poured, they press the same button a second time to stop dispensing.
                    </Typography>
                </Stack>
            </Card>    
            </Box>
            </Grid>
        </Grid>

        <br></br>
        </Stack>
        
        </Stack>
        </div>
      );
}

