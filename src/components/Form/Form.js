import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useState, useEffect } from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { createPost, updatePost } from "../../actions/posts";
import { useDispatch, useSelector } from "react-redux";

const Form = ({ currentId, setcurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
      // same as createPost(postData)(dispatch);
    }
    clear();
  };

  const clear = () => {
    setcurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    })
  }

  return (
    <Paper className={classes.paper} maxwidth="lg">
      <Typography variant="h6">{ currentId ? "Editing" : "Creating"} Image Card</Typography>

      <form
        className={`${classes.root} ${classes.form}`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          className={classes.input}
          name="creator"
          variant="outlined"
          label="creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />

        <TextField
          className={classes.input}
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          className={classes.input}
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <TextField
          className={classes.input}
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags.join(", ")}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(", ") })
          }
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Send
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={() => clear()}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
