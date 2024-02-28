'use strict';

// Video element where stream will be placed.
const localVideo = document.querySelector('video');

const mediaStreamConstraints = {
    video: {video:true, audio:true},
  };
 
let localStream;

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then((mediaStream)=>{
    localVideo.srcObject = mediaStream;
    localStream = mediaStream;
  }).catch(error=>{
    console.log('navigator.getUserMedia error: ', error);
  });