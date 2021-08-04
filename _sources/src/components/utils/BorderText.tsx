import React from 'react';
import styled from 'styled-components';

const StyledBorderText = styled.div`
  color: ${({ theme }) => theme.thinner};
  font-weight: bold;
  text-shadow:
          // 斜め4方向 1px
    1px 1px ${({ theme }) => theme.thick},
    1px -1px ${({ theme }) => theme.thick},
    -1px 1px ${({ theme }) => theme.thick},
    -1px -1px ${({ theme }) => theme.thick},
    // 4方向 2px
    2px 0 ${({ theme }) => theme.thick},
    0 2px ${({ theme }) => theme.thick}, -2px 0 ${({ theme }) => theme.thick},
    0 -2px ${({ theme }) => theme.thick},
    // 斜め8箇所間埋め
    2px 1px ${({ theme }) => theme.thick},
    1px 2px ${({ theme }) => theme.thick},
    2px -1px ${({ theme }) => theme.thick},
    1px -2px ${({ theme }) => theme.thick},
    -2px 1px ${({ theme }) => theme.thick},
    -1px 2px ${({ theme }) => theme.thick},
    -2px -1px ${({ theme }) => theme.thick},
    -1px -2px ${({ theme }) => theme.thick};
`;

const BorderText: React.FC = ({ children }) => (
  <StyledBorderText>{children}</StyledBorderText>
);

export default BorderText;
