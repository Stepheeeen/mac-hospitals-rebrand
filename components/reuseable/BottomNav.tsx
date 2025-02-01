import React, {useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificatioIcon from '@mui/icons-material/Search';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const BottomNav: React.FC = () => {
   const [value, setValue]= useState<number>(0);

   // Event handler for value change
   const handleChange = (event:React.SyntheticEvent, newvValue:number)=>{
      setValue(newvValue);
   }
  return (
   <BottomNavigation
   value={value}
   onChange={handleChange}
   showLabels

   sx={{
      position:'fixed',
      bottom:0,
      left:0,
      right:0,
      backgroundColor:'white',
      boxShadow:'Opx -4px 10px rgba(0,0,0,0.1)',

   }}
   >

      <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
      <BottomNavigationAction label="Search" icon={<SearchIcon/>}/>
      <BottomNavigationAction label="Notification" icon={<NotificatioIcon/>}/>
   </BottomNavigation>
    
  )
}

export default BottomNav