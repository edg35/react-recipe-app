import React from 'react'
import { Paper, Typography, Avatar} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuisineCard = ({ src, text }) => {
  const navigate = useNavigate();
  return (
    <Paper sx={{ 
        width: 200, 
        height: 75, 
        marginLeft: '2vw', 
        marginBottom: '2vh', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'center' 
      }} 
      elevation={3}
      onClick={() => navigate(`/recipes/${text.toLowerCase()}`)}
    >
        <Avatar sx={{ width: 40, height: 40 }} src={src}></Avatar>
        <Typography variant="h5" component="h2">{text}</Typography>
    </Paper>
  )
}

export default QuisineCard