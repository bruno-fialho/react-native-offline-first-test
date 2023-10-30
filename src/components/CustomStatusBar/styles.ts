import styled from 'styled-components/native';
import {CustomStatusBarProps} from '.';

export const Wrapper = styled.View<CustomStatusBarProps>`
  width: 100%;
  height: ${props => props.height}px;
  background-color: #000062;
`;
