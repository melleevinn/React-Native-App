
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  AddMenuItem: undefined;
  Checkout: undefined;
};

type MenuScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Menu'
>;

type MenuScreenRouteProp = RouteProp<RootStackParamList, 'Menu'>;

type Props = {
  navigation: MenuScreenNavigationProp;
  route: MenuScreenRouteProp;
};

export default function MenuScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Menu</Text>
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem')} />
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}
