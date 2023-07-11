import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='header'>
      <p className='headText'>Daemonlite</p>
      <Box
        sx={{
          maxWidth: { xs: 320, sm: 480, marginLeft: '450px', marginTop: '-60px' },
          bgcolor: 'background.paper',
        }}
      >
        {isMobile ? (
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            centered
          >
            <Tab label="Services" onClick={() => navigate('/')} />
            <Tab label="Products" onClick={() => navigate('/products')} />
            <Tab label="Blog" onClick={() => navigate('/blog')} />
          </Tabs>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label="Services" onClick={() => navigate('/')} />
            <Tab label="Products" onClick={() => navigate('/products')} />
            <Tab label="Blog" onClick={() => navigate('/blog')} />
          </Tabs>
        )}
      </Box>
    </div>
  );
}
