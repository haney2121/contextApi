import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FormStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const words = {
  english: {
    email: 'Email',
    signIn: 'Sign In',
    password: 'Password',
    remember: 'Remember Me'
  },
  french: {
    email: 'Adresse électronique',
    signIn: 'Se connecter',
    password: 'Mot de passe',
    remember: 'Souviens-toi de moi'
  },
  german: {
    email: 'E-Mail-Addresse',
    signIn: 'Einloggen',
    password: 'Passwort',
    remember: 'Erinnere dich an mich'
  }
}

const Form = props => {
  const { isDarkMode } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  const { classes } = props;
  const { email, signIn, password, remember } = words[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='german'>German</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' require='true' fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' require='true' fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' />
          </FormControl>
          <FormControlLabel control={<Checkbox color='primary' />} label={remember} />
          <Button variant='contained' type='submit' fullWidth color={isDarkMode ? 'default' : 'primary'} className={classes.submit}>{signIn}</Button>
        </form>
      </Paper>
    </main>
  )
}

export default withStyles(styles)(Form);