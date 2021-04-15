import React, { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { getPosts } from "./actions/posts";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import useStyles from "./styles";
import camera from "./images/camera.png";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  const posts = useStore();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Imageboard
        </Typography>
        <img className={classes.image} src={camera} alt="icon"  height={60}/>
      </AppBar>
      <Grow in >
        <Container>
          <Grid
          className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={10} md={7} >
              <Posts setCurrentId={setCurrentId}/>
            </Grid>

            <Grid item xs={12} sm={10} md={4}>
              <Form currentId={currentId} setcurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
