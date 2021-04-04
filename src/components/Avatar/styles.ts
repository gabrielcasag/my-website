import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 260px;
  padding: 2rem;

  > img {
    height: 230px;

    display: block;
    margin: 0 auto;

    border-radius: 50%;
    box-shadow: 0 0 60px 20px rgba(0, 0, 0, 0.4);

    transition: height 0.5s;
  }

  > img:hover {
    height: 250px;
  }
`;
