import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BREAK_POINT } from '../../lib/styleUtils';

type StyledContainerProps = { readyToShow?: boolean; readyToHide?: boolean };
const getOpacity = (styledContainerProps: StyledContainerProps) => {
  if (styledContainerProps.readyToHide) return 0;
  if (styledContainerProps.readyToShow) return 1;
  return 0;
};
const getScale = (styledContainerProps: StyledContainerProps) => {
  if (styledContainerProps.readyToHide) return 1.05;
  if (styledContainerProps.readyToShow) return 1;
  return 1.05;
};
const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  opacity: ${getOpacity};
  transform: scale(${getScale});
  transition: all 600ms ease-out;
  transition-property: opacity, transform;
  @media screen and (max-width: ${BREAK_POINT}px) {
    transform: none;
  }
`;

type Props = {
  readyToHide?: boolean;
  onSceneIn?: () => void;
  onSceneOut?: () => void;
};
const SceneInOut: React.FC<Props> = ({
  readyToHide,
  onSceneIn,
  onSceneOut,
  children,
}) => {
  const [readyToShow, setReadyToShow] = useState(false);
  useEffect(() => setReadyToShow(true), []);
  const calledOnSceneIn = useRef<boolean>(false);
  const calledOnSceneOut = useRef<boolean>(false);
  return (
    <StyledContainer
      readyToShow={readyToShow}
      readyToHide={readyToHide}
      onTransitionEnd={() => {
        if (readyToShow && !calledOnSceneIn.current) {
          calledOnSceneIn.current = true;
          onSceneIn && onSceneIn();
        }
        if (readyToHide && !calledOnSceneOut.current) {
          calledOnSceneOut.current = true;
          onSceneOut && onSceneOut();
        }
      }}
    >
      {children}
    </StyledContainer>
  );
};

export default SceneInOut;
