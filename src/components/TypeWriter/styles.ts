import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 50vw;
  margin: 0 auto;

  display: flex;
  align-items: center;

  padding: 2rem;
  font-size: 1.5rem;
  font-family: "Fira Code", monospace;
`;

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkTextCursor = keyframes`
  from {
    border-right-color: ;
  }
  to {
    border-right-color: transparent;
  }
`;

export const Typing = styled.p`
  border-right: 2px solid ${(props) => props.theme.colors.text};
  font-size: 100%;
  white-space: nowrap;
  overflow: hidden;

  // Animation
  animation: ${typewriter} 4s steps(40) 1s 1 normal both,
      ${blinkTextCursor} 500ms steps(40) infinite normal;
  }
`;
