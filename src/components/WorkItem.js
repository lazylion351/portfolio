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
import AboutItem from "./AboutItem.js"

export default function WorkItem(props) {

	return (
        <div>
        <Stack spacing={2} alignItems='center'>
        <Container>
          <Container>
              <Grid container spacing={3}>
                {data.map((item, index) => ( 
                  <Grid item xs={12} md={6}>
                    <ProjectItem name={item.name} image={item.image} 
                    setCurPage={props.setCurPage} setCurTitle={props.setCurTitle}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Container>
          <br></br><br></br>
          <AboutItem></AboutItem>
          </Stack>
        </div>
      );
}

