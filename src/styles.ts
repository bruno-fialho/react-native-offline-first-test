import {EdgeInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const CustomSafeAreaView = styled.View<EdgeInsets>`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #f9f7ff;
  padding-top: ${p => p.top}px;
  padding-bottom: ${p => p.bottom}px;
  padding-left: ${p => p.left}px;
  padding-right: ${p => p.right}px;
`;

export const CustomScrollView = styled.ScrollView`
  flex: 1;
  background-color: '#0ff';
`;
