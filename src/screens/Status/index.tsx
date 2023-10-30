import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CustomStatusBar, Header} from 'components';
import {
  Container,
  HeaderCenterContentText,
  HeaderLeftContentButton,
  HeaderLeftContentText,
  HeaderLeftWrapper,
  HeaderCenterWrapper,
  HeaderRightWrapper,
  Title,
} from './styles';
import {AppScreenProps} from 'types/routes';

export function Status() {
  const navigation = useNavigation<AppScreenProps>();
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <CustomStatusBar height={insets.top} />
      <Header>
        <HeaderLeftWrapper>
          <HeaderLeftContentButton onPress={() => navigation.goBack()}>
            <HeaderLeftContentText>Voltar</HeaderLeftContentText>
          </HeaderLeftContentButton>
        </HeaderLeftWrapper>
        <HeaderCenterWrapper>
          <HeaderCenterContentText>Status</HeaderCenterContentText>
        </HeaderCenterWrapper>
        <HeaderRightWrapper />
      </Header>
      <Title>Status</Title>
    </Container>
  );
}
