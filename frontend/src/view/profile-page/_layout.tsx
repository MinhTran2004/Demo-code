import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenAccount from "./ScreenAccount";
import ScreenFavourite from "./ScreenFavourite";
import ScreenProfile from "./ScreenProfile";

const Stack = createNativeStackNavigator();

const LayoutProfilePage = () => {
    return (
        <Stack.Navigator initialRouteName="Notification">
            <Stack.Screen name="Account" component={ScreenAccount}/>
            <Stack.Screen name="Favourite" component={ScreenFavourite}/>
            <Stack.Screen name="Profile" component={ScreenProfile}/>
        </Stack.Navigator>
    )
}

export default LayoutProfilePage;