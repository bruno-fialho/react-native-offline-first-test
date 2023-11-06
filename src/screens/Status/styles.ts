import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #f9fafb;
`;

export const HeaderLeftWrapper = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderCenterWrapper = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderRightWrapper = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderLeftContentButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderLeftContentText = styled.Text`
  width: 100%;
  text-align: left;
  color: #fff;

  font-size: 16px;
  font-weight: 600;
`;

export const HeaderCenterContentText = styled.Text`
  text-align: left;
  color: #fff;

  font-size: 16px;
  font-weight: 600;
  opacity: 0.8;
`;

export const Title = styled.Text``;

export const Content = styled.View`
  width: 100%;
  height: auto;
  padding: 20px;
  overflow-y: auto;
`;

export const Package = styled.View`
  width: 100%;
  height: 80px;
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #d1d5db;
`;

export const PackageTextContainer = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PackageTitle = styled.Text`
  text-align: left;
  color: #4b5563;

  font-size: 18px;
`;

export const PackageStatusText = styled.Text`
  text-align: left;
  color: #4b5563;

  font-size: 14px;
`;

export const PackageTimeWrapper = styled.View`
  height: 100%;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const PackageTime = styled.Text`
  text-align: right;
  color: #4b5563;

  font-size: 14px;
`;
