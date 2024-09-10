// screens/HomeScreen.js
import React from 'react';
import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { message: 'Hello from Home!' })}
      />
    </View>
  );
}

export default HomeScreen;
