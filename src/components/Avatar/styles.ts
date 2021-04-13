import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 230px;
  margin: 2rem 0;

  > img {
    height: 200px;
    width: auto;

    display: block;
    margin: 0 auto;

    border-radius: 50%;
    box-shadow: 0 0 60px 10px ${(props) => props.theme.colors.shadow};

    transition: height 0.5s;
  }

  > img:hover {
    height: 225px;
    cursor: pointer;
  }
`;
