import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { GenderGenderqueer } from "tabler-icons-react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  var actorGender;
// if (actor.gender == 1) {
//   actorGender = "Female"
// } else if (actor.gender == 2) {
//   actorGender = "Male"
// } else if (actor.gender == 3) {
//   actorGender = "Non-Binary"
// }

// Link for a non-binary person to text
// http://localhost:3000/actors/1776040

switch(actor.gender) {
  case 1:
    actorGender = "Female"
    break;
  case 2:
    actorGender = "Male"
    break;
  case 3:
    actorGender = "Non-Binary"
    break;
  default:
    actorGender = "Not Specified"  
    break;
}

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={root}>
        <Chip
          icon={<StarRate />}
          label={`Popularity: ${actor.popularity}`}
        />
        <Chip
        icon={<CalendarIcon/>} 
        label={`Birthday: ${actor.birthday}`} 
        />
        <Chip
          icon= {
            actorGender === "Female" ? <FemaleIcon/> :
            actorGender === "Male" ? <MaleIcon/> :
            actorGender === "Non-Binary" ? <GenderGenderqueer/> :
            actorGender === "Not Specified" ? <QuestionMarkIcon/> : null
                }
          label={`${actorGender}`}      
        />
        
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
              </Fab>
    </>
  );
};

export default  ActorDetails ;