import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LayoutHomePage from "../home-page/_layout";
import LayoutOdersPage from "../oder-page/_layout";
import LayoutMessengerPage from "../messenger-page/_layout";
import LayoutNotificationPage from "../notification-page/_layout";
import LayoutProfilePage from "../profile-page/_layout";

const BottomTabs = createBottomTabNavigator();

const LayoutBottomTabs = () => {
    return(
        <BottomTabs.Navigator initialRouteName="LayoutHome" screenOptions={{headerShown: false}}>
            <BottomTabs.Screen name="LayoutHome" component={LayoutHomePage}/>
            <BottomTabs.Screen name="Oder" component={LayoutOdersPage}/>
            <BottomTabs.Screen name="Messenger" component={LayoutMessengerPage}/>
            <BottomTabs.Screen name="Notification" component={LayoutNotificationPage}/>
            <BottomTabs.Screen name="Profile" component={LayoutProfilePage}/>
        </BottomTabs.Navigator>
    )
}

export default LayoutBottomTabs;