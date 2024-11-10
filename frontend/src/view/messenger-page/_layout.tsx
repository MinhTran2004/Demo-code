import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenMessenger from "./ScreenMessenger";
import ScreenMessengerDetail from "./ScreenMessengerDetail";

const Stack = createNativeStackNavigator();

const LayoutMessengerPage = () => {
    return (
        <Stack.Navigator initialRouteName="Messenger">
            <Stack.Screen name="Messenger" component={ScreenMessenger}/>
            <Stack.Screen name="MessengerDetail" component={ScreenMessengerDetail}/>
        </Stack.Navigator>
    )
}

export default LayoutMessengerPage;