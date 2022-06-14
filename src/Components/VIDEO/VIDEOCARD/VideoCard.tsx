import React from "react";
import { VideoCardDiv } from "./VideoCard.styles";


type Props = {
    img: string;
    video: string
}
const VideoCard: React.FC <Props>= ({img, video}) =>{

const handleOnMouseOver = (e:React.MouseEvent<HTMLVideoElement>) =>{
    e.currentTarget.play()
}

const handleOnMouseOut = (e:React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause()
}

return(
<VideoCardDiv>
<div className="Border"/>
<img src={img} alt="img"/>
<video
loop
preload="none"
muted
onMouseOver={handleOnMouseOver}
onMouseOut={handleOnMouseOut}
>
<source src={video} type="video/mp4"/>
</video>

</VideoCardDiv>

)
}

export default VideoCard