import styled from '@emotion/styled';
import background from '../../Images/depositphotos_68233141-stock-illustration-contact-book-doodle-drawing-seamless.png';
export const HomePageBox = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
      to bottom,
      rgba(251, 255, 0, 0.863),
      rgba(0, 238, 255, 0.89)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
