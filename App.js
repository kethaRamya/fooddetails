/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import FoodMenu from './src/FoodMenu'
 
 const Stack = createStackNavigator();
 
 function MyStack() {
   return (
     <Stack.Navigator
       initialRouteName="FoodMenu"
       screenOptions={{
         headerTitleAlign: 'center',
        
         //headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
       }}>      
      
        <Stack.Screen name="Food Details" component={FoodMenu} />
        
      
     </Stack.Navigator>
   );
 }
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     
    
       <NavigationContainer>
       <MyStack />
     </NavigationContainer>
    
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 