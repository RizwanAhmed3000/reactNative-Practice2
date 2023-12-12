import { SafeAreaView, View, StatusBar } from 'react-native';
import SignUp from './Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Splash from './Screens/Splash';
import Onboarding from './Screens/Onboarding';
import Onboarding2 from './Screens/Onboarding2';
import Onboarding3 from './Screens/Onboarding3';
// import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <GestureHandlerRootView style={{ flex: 1 }}>
        <Ca />
      </GestureHandlerRootView> */}
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar animated={true} barStyle={'default'} showHideTransition={'slide'} />
          <Stack.Navigator initialRouteName='Splash' screenOptions={{
            animation: "slide_from_right",
            headerShown: false
          }}  >
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false, headerLeft: () => null }} />
            <Stack.Screen name='Onboarding2' component={Onboarding2} options={{ headerShown: false, headerLeft: () => null }} />
            <Stack.Screen name='Onboarding3' component={Onboarding3} options={{ headerShown: false, headerLeft: () => null }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: true, title: "Sign Up", headerBackVisible: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: true, title: "Login In" }} />
            {/* <SignUp /> */}
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer >
    </>
  );
}


