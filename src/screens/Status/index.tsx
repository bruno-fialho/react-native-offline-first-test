import React, {useEffect, useRef} from 'react';
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
  Content,
  Package,
  PackageStatusText,
  PackageTextContainer,
  PackageTime,
  PackageTitle,
  PackageTimeWrapper,
} from './styles';
import {AppScreenProps} from 'types/routes';
import {usePackage} from 'context/package';
import {FlatList} from 'react-native';
import {PackageStatus} from 'types/packages';

export function Status() {
  const {packages, updatePackages} = usePackage();

  const flatListRef = useRef<FlatList | null>(null);
  const userScrolling = useRef(false);

  const navigation = useNavigation<AppScreenProps>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    updatePackages();
  }, [updatePackages]);

  useEffect(() => {
    function scrollToTop() {
      if (flatListRef.current && !userScrolling.current) {
        flatListRef.current.scrollToIndex({index: packages.length - 1});
      }
    }

    if (packages.length > 0) {
      scrollToTop();
    }
  }, [packages]);

  const getItemLayout = (
    _data: ArrayLike<any> | null | undefined,
    index: number,
  ) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const ITEM_HEIGHT = 80;

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
      <Content>
        {packages.length > 0 && (
          <FlatList
            inverted
            ref={flatListRef}
            data={packages}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Package>
                <PackageTextContainer>
                  <PackageTitle>Pacote ID: {item.id}</PackageTitle>
                  <PackageStatusText>
                    {item.status === PackageStatus.PENDING
                      ? 'Pendente sincronizar'
                      : 'Sincronizado'}
                  </PackageStatusText>
                </PackageTextContainer>
                <PackageTimeWrapper>
                  <PackageTime>
                    {String(new Date(Number(item.time)).getHours()).padStart(
                      2,
                      '0',
                    )}
                    :
                    {String(new Date(Number(item.time)).getMinutes()).padStart(
                      2,
                      '0',
                    )}
                  </PackageTime>
                </PackageTimeWrapper>
              </Package>
            )}
            ListEmptyComponent={
              <PackageTitle>
                Nenhum pacote foi criado até o momento.
              </PackageTitle>
            }
            onScroll={() => {
              userScrolling.current = true;
            }}
            onMomentumScrollEnd={() => {
              userScrolling.current = false;
            }}
            getItemLayout={getItemLayout}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Content>
    </Container>
  );
}
