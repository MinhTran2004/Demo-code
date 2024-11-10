import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenNotification from "./ScreenNotification";

const Stack = createNativeStackNavigator();

const LayoutNotificationPage = () => {
    return (
        <Stack.Navigator initialRouteName="Notification">
            <Stack.Screen name="Notification" component={ScreenNotification}/>
        </Stack.Navigator>
    )
}

export default LayoutNotificationPage;