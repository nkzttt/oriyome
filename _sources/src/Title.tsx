import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: red;
`;

const Title: React.FC<{ title: string }> = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

export default Title;
