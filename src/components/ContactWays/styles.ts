import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;
