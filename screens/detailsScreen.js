
import React from 'react';
import { Text, View } from 'react-native';

function DetailsScreen({ route }) {
  
  const { message } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{message}</Text> 
    </View>
  );
}

export default DetailsScreen;
