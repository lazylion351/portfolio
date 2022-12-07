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

export default function ProjectItem(props) {

    const handleClick = (event) => {
        props.setCurPage(props.name)
        props.setCurTitle(props.name)
    };

	return (
        <div>
            <Card sx={{ display: 'flex', justifyContent: 'space-between'}} elevation={1}>
                <Stack>
                    <CardMedia
                        component="img"
                        sx={{ width: 540, height: 240}}
                        image={props.image}
                        alt={props.image}
                        style={{
                            justify: 'right',
                            alignContent: 'right',
                            alignItems: 'right'
                        }}
                    />
                    <Button 
                    color="warning"
                    size="large" 
                    variant="text"
                    onClick={handleClick}
                    >
                    {props.name}
                    </Button>
                </Stack>
            </Card>
        </div>
      );
}
