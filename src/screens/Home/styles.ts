import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #f9f7ff;
`;

export const HeaderLeftWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderCenterWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderRightWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderLeftContentText = styled.Text`
  width: 100%;
  text-align: left;
  color: #fff;

  font-size: 16px;
  font-weight: bold;
  opacity: 0.8;
`;

export const HeaderRightContentButton = styled.TouchableOpacity`
  width: 100%;
`;

export const HeaderRightContentText = styled.Text`
  width: 100%;
  text-align: right;
  color: #fff;

  font-size: 16px;
  font-weight: bold;
`;

export const Title = styled.Text``;
