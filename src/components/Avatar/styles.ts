import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 260px;
  margin: 2rem 0;

  > img {
    height: 230px;
    width: auto;

    display: block;
    margin: 0 auto;

    border-radius: 50%;
    box-shadow: 0 0 60px 10px var(--light-shadow);

    transition: height 0.5s;
  }

  > img:hover {
    height: 250px;
  }
`;
