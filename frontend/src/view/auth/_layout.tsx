import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenLogin from "@view/auth/ScreenLogin";
import ScreenRegister from "../auth/ScreenRegister";
import LayoutBottomTabs from "../bottom-tab/_layout";

const Stack = createNativeStackNavigator();

const LayoutAuth = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={ScreenLogin}/>
            <Stack.Screen name="Register" component={ScreenRegister}/>
            <Stack.Screen name="LayoutBottomTabs" component={LayoutBottomTabs}/>
        </Stack.Navigator>
    )
}

export default LayoutAuth;