import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, makeStyles, Button } from '@material-ui/core';
import { Mic, Videocam } from '@material-ui/icons';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { SocketContext } from '../Context';
import '../video_styles.css';

import Webcam from "react-webcam";

const useStyles = makeStyles((theme) => ({
  video: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  buttonGridContainer: {
    width: '400px',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      flexDirection: 'column',
    },
  },
  margin: {
    marginTop: 10,
  },
  padding: {
    padding: 10,
  },
  paper: {
    padding: '10px',
    border: '2px',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  // const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, toggleMic, toggleVideo } = useContext(SocketContext);
  // const classes = useStyles();

  // const [state, setState] = React.useState({
  //   mic: true,
  //   video: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <video playsInline muted autoPlay />
  );
};

export default VideoPlayer;
