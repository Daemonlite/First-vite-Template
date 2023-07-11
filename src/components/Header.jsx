import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const navigate = useNavigate()
  return (
 <div className='header'>
   <p className='headText'>Daemonlite</p>
    <Box sx={{ maxWidth: { xs: 320, sm: 480,marginLeft:"450px",marginTop:"-60px" }, bgcolor: 'background.paper' }}>
      
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Services" onClick={()=> navigate('/services')} />
        <Tab label="Products" />
        <Tab label="Blog" />
      </Tabs>
    </Box>
    <Button variant='contained' style={{marginLeft:'75rem',marginTop:'-65px'}}>Learn More</Button>

 </div>
  );
}