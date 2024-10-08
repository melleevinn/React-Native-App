import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'AddMenuItem'>;

const AddMenuItemScreen: React.FC<Props> = ({ navigation }) => {
  const [menuItem, setMenuItem] = useState('');

  const handleAdd = () => {
    
    console.log('Added item: ', menuItem);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add a Menu Item:</Text>
      <TextInput
        placeholder="Enter menu item name"
        value={menuItem}
        onChangeText={setMenuItem}
      />
      <Button title="Add Item" onPress={handleAdd} />
    </View>
  );
};

export default AddMenuItemScreen;
