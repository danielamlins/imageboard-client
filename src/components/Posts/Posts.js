import Post from "./Post/Post";
import useStyles from "./styles";

import { useSelector, useEffect } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

const Posts = ({setCurrentId}) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {!posts.length ? <CircularProgress /> : 
      <>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </>
      }
    </Grid>
  );
};

export default Posts;
