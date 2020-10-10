import React,{useRef,useState} from "react";
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from "./VideoSidebar";

function Video({url,channel,description,song,likes,shares,messages}) {
const [play, setPlay] = useState(false)
    const videoRef = useRef(null)
const onVideoPress = () =>{
    if(play){
    videoRef.current.pause();
    setPlay(false);
    }else{
        videoRef.current.play();
        setPlay(true);
    }
}
  return (
    <div className="video">
      <video
        loop
        onClick={onVideoPress}
        className="video__player"
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter
         
          channel={channel}
          description={description}
          song={song}
      />
        <VideoSidebar
          likes={likes}
          shares={shares}
          messages={messages}
        />
    {/*   <VideoFooter
         
          channel="nabeela"
        description="memories bring back you"
        song="memories"
      />
       <VideoFooter
         
          channel="elaaf"
          description="could you find a way to let me down slowly"
          song="let me down slowly"

      />
       <VideoFooter
          
          channel="ali"
          description="guess iam just a play date for you"
          song="play-date"

      /> */}
    
    </div>
  );
}

export default Video;
