import React, { useState } from 'react';
import { ScrollView, Modal } from 'react-native';
import {
  Container,
  Header,
  HeaderTitle,
  Content,
  MenuBox,
  MenuBoxPressed,
  MenuBoxImage,
  MenuBoxName,
  MenuBoxLocal,
  MenuBoxLocalPressed,
  ModalBox,
  ModalTitle,
  ModalButton,
  ModalButtonText
} from './styles';

export default function Discovery() {

  const [modalVisible, setModalVisible] = useState(false);
  const [pressed, setPressed] = useState(null);
  const [pressedName, setPressedName] = useState(null);
  const [menuOptions, setMenuOptions] = useState([
    {
      key: '0',
      image: require('../../assets/restaurant.png'),
      name: 'Bars & Hotels',
      local: '42 Place',
    },
    {
      key: '1',
      image: require('../../assets/tray.png'),
      name: 'Fine Dining',
      local: '15 Place',
    },
    {
      key: '3',
      image: require('../../assets/coffee-break.png'),
      name: 'Cafes',
      local: '28 Place',
    },
    {
      key: '4',
      image: require('../../assets/location.png'),
      name: 'Nearby',
      local: '34 Place',
    },
    {
      key: '5',
      image: require('../../assets/fast-food.png'),
      name: 'Fast Foods',
      local: '29 Place',
    },
    {
      key: '6',
      image: require('../../assets/pizza.png'),
      name: 'Featured Foods',
      local: '21 Place',
    },
  ])

  function handleControl(data, key) {
    setModalVisible(true);
    setPressedName(data.name);
    setPressed(key);
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Header>
          <HeaderTitle>Discovery</HeaderTitle>
        </Header>

        <Content>
          {menuOptions.map((item, key) => {
            return (
              <>
                {pressed == key ? (
                  <MenuBoxPressed key={key} activeOpacity={0.7} onPress={() => handleControl(item, key)}>
                    <MenuBoxImage source={item.image} />
                    <MenuBoxName>{item.name}</MenuBoxName>
                    <MenuBoxLocalPressed>{item.local}</MenuBoxLocalPressed>
                  </MenuBoxPressed>
                ) : (
                  <MenuBox key={key} activeOpacity={0.7} onPress={() => handleControl(item, key)}>
                    <MenuBoxImage source={item.image} />
                    <MenuBoxName>{item.name}</MenuBoxName>
                    <MenuBoxLocal>{item.local}</MenuBoxLocal>
                  </MenuBox>
                )
                }
              </>
            );
          })
          }
        </Content>

      </ScrollView>

      <Modal animationType="slide" visible={modalVisible}>
        <ModalBox>
          <ModalTitle>{pressedName}</ModalTitle>
          <ModalButton activeOpacity={0.7} onPress={() => setModalVisible(false)}>
            <ModalButtonText>Voltar</ModalButtonText>
          </ModalButton>
        </ModalBox>
      </Modal>

    </Container>
  );
}