// import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native';
import SignUp from './Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './Screens/Login';
import Splash from './Screens/Splash';
import Onboarding from './Screens/Onboarding';
import Onboarding2 from './Screens/Onboarding2';
import Onboarding3 from './Screens/Onboarding3';
import Home from './Screens/Home';
// import MyDrawer from './navigation/Drawer.js';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName='Home' screenOptions={{
              animation: "slide_from_right",
              headerShown: false
            }}  >
              <Stack.Screen name='Splash' component={Splash} />
              <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false, headerLeft: () => null }} />
              <Stack.Screen name='Onboarding2' component={Onboarding2} options={{ headerShown: false, headerLeft: () => null }} />
              <Stack.Screen name='Onboarding3' component={Onboarding3} options={{ headerShown: false, headerLeft: () => null }} />
              <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: true, title: "Sign Up", headerBackVisible: false }} />
              <Stack.Screen name='Login' component={Login} options={{ headerShown: true, title: "Login In" }} />
              <Stack.Screen name='Home' component={Home} options={{ headerShown: false, title: "Home" }} />
            </Stack.Navigator>
            {/* <MyDrawer /> */}
          </SafeAreaView>
        </NavigationContainer >
      </GestureHandlerRootView>
    </>
  );
}


