import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #E9E9E9;
`;

export const Header = styled.View`
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5%;
`;

export const MenuBox = styled.TouchableOpacity`
  background-color: #FFF;
  elevation: 5;
  width: 47.5%;
  align-items: center;
  justify-content: center;
  padding: 8% 5%;
  border-radius: 8px;
  margin-bottom: 5%;
`;

export const MenuBoxPressed = styled.TouchableOpacity`
  background-color: #F5C429;
  elevation: 5;
  width: 47.5%;
  align-items: center;
  justify-content: center;
  padding: 8% 5%;
  border-radius: 8px;
  margin-bottom: 5%;
`;

export const MenuBoxImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const MenuBoxName = styled.Text`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const MenuBoxLocal = styled.Text`
  color: #BBB;
`;

export const MenuBoxLocalPressed = styled.Text`
  color: #000;
`;

export const ModalBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ModalButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #F5C429;
  width: 50%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ModalButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
`;