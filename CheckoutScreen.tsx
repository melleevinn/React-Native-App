import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'Checkout'>;

const CheckoutScreen: React.FC<Props> = ({ navigation }) => {
  const calculateTotal = () => {
   
    return 100; 
  };

  return (
    <View>
      <Text>Checkout</Text>
      <Text>Total Price: {calculateTotal()} ZAR</Text>
      <Button title="Go Back to Menu" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CheckoutScreen;
