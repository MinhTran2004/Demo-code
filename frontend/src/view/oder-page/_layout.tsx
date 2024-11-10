import ScreenOrderWaiting from "./ScreenOrderWaiting";
import ScreenOrderCompleted from "./ScreenOrderCompleted";
import ScreenOrderCancelled from "./ScreenOrderCancelled";
import ScreenDetailOder from "./ScreenDetailOder";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTabs = createMaterialTopTabNavigator();

const LayoutOdersPage= () => {
    return (
        <TopTabs.Navigator>
            <TopTabs.Screen name="OrderWaiting" component={ScreenOrderWaiting}/>
            <TopTabs.Screen name="OrderCompleted" component={ScreenOrderCompleted}/>
            <TopTabs.Screen name="OrderCancelled" component={ScreenOrderCancelled}/>
            <TopTabs.Screen name="DetailOder" component={ScreenDetailOder}/>
        </TopTabs.Navigator>
    )
}

export default LayoutOdersPage;