import styled from "styled-components";

export const VideoDiv = styled.div`
min-height: 100vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
user-select: none;
border-radius: 15px;
padding-bottom: 30px;
padding-top:30px;
margin: 15px;
overflow: hidden;
box-shadow: 0 3px 5px rgb(0, 0, 0, 0.25);
transition: box-shadow 100ms;

`;

export const VideoWrapper = styled.div`
display: flex;
flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 20px;
  margin: 15px;
  // width: 100%;
  // height: auto;
  // padding: 20px, 60px;
  // border-sizing: borderbox;

  // @media (min-width: 992px) {
  //   grid-template-columns: repeat(6, 1fr);
  // }
`;
