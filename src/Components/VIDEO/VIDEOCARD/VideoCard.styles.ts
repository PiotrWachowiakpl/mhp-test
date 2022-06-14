import styled from "styled-components";

export const VideoCardDiv = styled.div`
  --border-radius: 15px;
  --transition-time: 0.3s;
  height: 300px;
  width: 340px;
  overflow: hidden;
  margin: 25px;
  position: relative;
  box-shadow: 0px 16px 17px -5px #000;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);

  :hover {
    transform: scale(1.05);

    video {
      opacity: 100;
    }
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  video {
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    border-radius: var(--border-radius);
  }
`;
