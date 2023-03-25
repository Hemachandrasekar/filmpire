import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Actors, Movies, MovieInformation, NavBar, Profile } from './components';
import useStyles from './components/styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Switch>
            <Route exact path="/movie/:id" component={MovieInformation} />
            <Route exact path="/actors/:id" component={Actors} />
            <Route exact path="/" component={Movies} />
            <Route exact path="/profile/:id" component={Profile} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default App;
