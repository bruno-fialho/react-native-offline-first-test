import styled from 'styled-components/native';
import {IntervalProps, OnlineProps} from 'types/packages';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #f9fafb;
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
  font-weight: 600;
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
  font-weight: 600;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 120px;
  padding: 24px 32px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #d1d5db;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

export const TitleTextContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;

export const TitleTextMain = styled.Text`
  text-align: left;
  color: #111827;

  font-size: 20px;
  font-weight: 600;
`;

export const TitleTextStatus = styled.Text<OnlineProps>`
  text-align: left;
  color: ${props => (props.isOnline ? '#16a34a' : '#ef4444')};

  font-size: 16px;
  font-weight: 300;
  font-style: italic;
`;

export const ServiceContainer = styled.View`
  width: 100%;
  height: 100px;
  padding: 24px 32px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ServiceTextContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const ServiceTitle = styled.Text`
  text-align: left;
  color: #4b5563;

  font-size: 18px;
`;

export const ServiceStatus = styled.Text`
  text-align: left;
  color: #4b5563;

  font-size: 14px;
`;

export const SwitchWrapper = styled.View``;

export const CustomSwitch = styled.Switch`
  transform: scale(1.2);
`;

export const IntervalContainer = styled.View`
  width: 100%;
  height: 120px;
  padding: 24px 32px;

  gap: 8px;
`;

export const IntervalTitle = styled.Text`
  text-align: left;
  color: #4b5563;

  font-size: 18px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CustomButton = styled.TouchableOpacity<IntervalProps>`
  width: 70px;
  height: 62px;

  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.isActiveInterval ? '#dcfce7' : '#f9fafb'};

  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isActiveInterval ? '#16a34a' : '#d1d5db')};
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  /* text-align: left; */
  color: #111827;

  font-size: 20px;
  font-weight: 600;
`;
