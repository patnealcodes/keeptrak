import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Routes from './Routes';


const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar color="primary" position="static">
        <Toolbar variant="dense">
          <img src="images/keeptrak-logo-white.png" style={{ width: '28px' }} />
          <div style={{ flexGrow: 1 }} />
          <IconButton edge="start" aria-label="menu">
            <FontAwesomeIcon color="white" icon={faBars} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '24px' }}>
        <Routes />
      </div>
    </ div>
  );
}

export default App;
