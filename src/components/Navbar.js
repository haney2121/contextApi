import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';

import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles';

const content = {
  english: {
    search: 'Search',
    flag: '🇺🇸'
  },
  french: {
    search: 'Recherche',
    flag: '🇫🇷'
  },
  german: {
    search: 'Suche',
    flag: '🇩🇪'
  }
}

const Navbar = props => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span role='img' aria-label={`Language Flag ${flag}`}>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit'>
            App Title
            </Typography>
          <Switch onChange={toggleDarkMode} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder={`${search}...`} classes={{ root: classes.inputRoot, input: classes.inputInput }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default withStyles(styles)(Navbar);