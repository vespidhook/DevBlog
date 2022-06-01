import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import CategoryPosts from './pages/CategoryPosts';
import Search from './pages/Search';

const Stack = createNativeStackNavigator();

function Routes(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: '#232630',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Category"
        component={CategoryPosts}
        options={{
          title: 'Categorias',
          headerStyle: {
            backgroundColor: '#232630',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Procurando algo?',
          headerStyle: {
            backgroundColor: '#232630',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;