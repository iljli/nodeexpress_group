import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const MenuCard = ({ text, color, icon }) => {
  const location = `/${text.toLowerCase()}`
  return (
    <Card className="menucard" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" component="h4">
          {text}
        </Typography>

      </CardContent>
      <CardActions>
        <Link className="menucard__link" to={location} color={color} >
          <Button size="small" variant="outlined" color={color} startIcon={icon} size="large">
            Open the {text}
          </Button>
        </Link>
      </CardActions>
    </Card >
  );
}

export default MenuCard;