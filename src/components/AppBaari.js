import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import Kyselylist from './Kyselylist';
import Kyselyvast from './Kyselyvast';
import Aloitus from './Aloitus';


function AppBaari(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  );
}

AppBaari.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab icon={<MenuIcon/>} label="Aloitus" {...a11yProps(0)} />
          <Tab icon={<CreateIcon/>} label="Kyselylista" {...a11yProps(1)} />
          <Tab icon={<CreateIcon/>} label="Kyselyyn vastaus" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <AppBaari value={value} index={0}>
        <Aloitus />
      </AppBaari>
      <AppBaari value={value} index={1}>
        <Kyselylist />
      </AppBaari>
      <AppBaari value={value} index={2}>
        <Kyselyvast />
      </AppBaari>
    </div>
  );
}