import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const navigate = useNavigate()
  return (
 <><div className='header'>

      <p className='headText'>Daemonlite</p>
      <Box sx={{ maxWidth: { xs: 320, sm: 480, marginLeft: "450px", marginTop: "-60px" }, bgcolor: 'background.paper' }} className='desk'>

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
      </Box>


    </div>
    <nav>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Daemonlite</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>


      </ul>
    </div>
  </div>
</nav>
      </nav></>
  );
}