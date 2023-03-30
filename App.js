
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverView from './screens/MealsOverView';
import CategoryDetailScreen from './screens/CategoryDetailScreen';

const Stack =  createStackNavigator()

export default function App() {
  return (
    <>
        <StatusBar style='dark' />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
             headerStyle:{backgroundColor:'#351401'}
             ,headerTintColor:'white',
          }}>
            <Stack.Screen name='Meals Catogories' component={CategoriesScreen}/>
            <Stack.Screen name='Meals OverView' component={MealsOverView} />
            <Stack.Screen name='CategoryDetailScreen' component={CategoryDetailScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
