import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CustomStatusBar, Header} from 'components';
import {
  Container,
  HeaderLeftContentText,
  HeaderLeftWrapper,
  HeaderRightContentButton,
  HeaderRightContentText,
  HeaderRightWrapper,
  Title,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {AppScreenProps} from 'types/routes';

export function Home() {
  const navigation = useNavigation<AppScreenProps>();
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <CustomStatusBar height={insets.top} />
      <Header>
        <HeaderLeftWrapper>
          <HeaderLeftContentText>Olá, bem-vindo!</HeaderLeftContentText>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <HeaderRightContentButton onPress={() => navigation.push('Status')}>
            <HeaderRightContentText>Status</HeaderRightContentText>
          </HeaderRightContentButton>
        </HeaderRightWrapper>
      </Header>
      <Title>Home</Title>
    </Container>
  );
}
