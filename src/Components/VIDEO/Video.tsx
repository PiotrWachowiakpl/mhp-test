import { VideoDiv } from "./Video.styles";
import { VideoWrapper } from "./Video.styles";
import VideoCard from "./VIDEOCARD/VideoCard";

import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";

import video1 from "../../videos/video1.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
import video4 from "../../videos/video4.mp4";
import video5 from "../../videos/video5.mp4";
import video6 from "../../videos/video6.mp4";

const Video = () => {
  return (
    <VideoDiv>
      <VideoWrapper>
         
          <VideoCard img={img1} video={video1}/>
          <VideoCard img={img2} video={video2}/>
          <VideoCard img={img3} video={video3}/>
          <VideoCard img={img4} video={video4}/>
          <VideoCard img={img5} video={video5}/>
          <VideoCard img={img6} video={video6}/>





      </VideoWrapper>
    </VideoDiv>
  );
};

export default Video;
