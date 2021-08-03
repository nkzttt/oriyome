import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BREAK_POINT, convertHexToRGB } from '../../lib/styleUtils';

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
const getTranslate = (styledContainerProps: StyledContainerProps) => {
  if (styledContainerProps.readyToHide) return '15px';
  if (styledContainerProps.readyToShow) return 0;
  return '15px';
};
const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  position: relative;
  opacity: ${getOpacity};
  transform: scale(${getScale});
  transition: all 600ms ease-out;
  transition-property: opacity, transform;
  &::before {
    content: '';
    display: block;
    height: 15px;
    position: absolute;
    top: -15px;
    left: 0;
    right: 0;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.thinner},
      ${({ theme }) => convertHexToRGB(theme.thinner, 0)}
    );
  }
  @media screen and (max-width: ${BREAK_POINT}px) {
    transform: translateY(${getTranslate});
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
