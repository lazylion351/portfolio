import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function OptionsItem(props) {
    
	return (
        <div>
            <Card sx={{ display: 'flex', flexDirection: 'column'}} elevation={1}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Stack spacing={2}>
                <Button 
                    size="small" 
                    variant="text"
                    // onClick={handleClick}
                    >
                    Work
                </Button>
                <Button 
                    size="small" 
                    variant="text"
                    // onClick={handleClick}
                    >
                    About me
                </Button>
            </Stack>
            </CardContent>
            </Card>
        </div>
      );
}
