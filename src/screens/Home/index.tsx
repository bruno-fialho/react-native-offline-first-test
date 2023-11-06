import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {CustomStatusBar, Header} from 'components';
import {
  ButtonText,
  ButtonsContainer,
  Container,
  Content,
  CustomButton,
  CustomSwitch,
  HeaderLeftContentText,
  HeaderLeftWrapper,
  HeaderRightContentButton,
  HeaderRightContentText,
  HeaderRightWrapper,
  IntervalContainer,
  IntervalTitle,
  ServiceContainer,
  ServiceStatus,
  ServiceTextContainer,
  ServiceTitle,
  SwitchWrapper,
  TitleContainer,
  TitleTextContainer,
  TitleTextMain,
  TitleTextStatus,
} from './styles';
import {AppScreenProps} from 'types/routes';
import {CompassIcon} from 'assets/compass';
import {usePackage} from 'context/package';

export function Home() {
  const {isOnline, interval, toggleIsOnline, updateInterval} = usePackage();

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
      <Content>
        <TitleContainer>
          <CompassIcon height={70} width={70} color="#000062" />

          <TitleTextContainer>
            <TitleTextMain>My GPS - Tracking</TitleTextMain>
            <TitleTextStatus isOnline={isOnline}>
              {isOnline ? 'Online' : 'Offline'}
            </TitleTextStatus>
          </TitleTextContainer>
        </TitleContainer>

        <ServiceContainer>
          <ServiceTextContainer>
            <ServiceTitle>Status do serviço</ServiceTitle>
            <ServiceStatus>
              {isOnline ? 'Serviço ativo' : 'Serviço inativo'}
            </ServiceStatus>
          </ServiceTextContainer>
          <SwitchWrapper>
            <CustomSwitch
              trackColor={{true: '#e5e7eb', false: '#d1d5db'}}
              thumbColor={isOnline ? '#16a34a' : '#ef4444'}
              ios_backgroundColor="#d1d5db"
              onValueChange={() => toggleIsOnline()}
              value={isOnline}
            />
          </SwitchWrapper>
        </ServiceContainer>

        <IntervalContainer>
          <IntervalTitle>Intervalo de comunicação</IntervalTitle>

          <ButtonsContainer>
            <CustomButton
              onPress={() => updateInterval(10)}
              isActiveInterval={interval === 10}>
              <ButtonText>10s</ButtonText>
            </CustomButton>
            <CustomButton
              onPress={() => updateInterval(5)}
              isActiveInterval={interval === 5}>
              <ButtonText>5s</ButtonText>
            </CustomButton>
            <CustomButton
              onPress={() => updateInterval(3)}
              isActiveInterval={interval === 3}>
              <ButtonText>3s</ButtonText>
            </CustomButton>
            <CustomButton
              onPress={() => updateInterval(1)}
              isActiveInterval={interval === 1}>
              <ButtonText>1s</ButtonText>
            </CustomButton>
          </ButtonsContainer>
        </IntervalContainer>
      </Content>
    </Container>
  );
}
