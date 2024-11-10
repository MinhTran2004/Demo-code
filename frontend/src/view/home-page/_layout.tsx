import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenHome from "./ScreenHome";
import ScreenDetailProduct from "./ScreenDetailProduct";
import ScreenCart from "./ScreenCart";
import ScreenSearch from "./ScreenSearch";
import ScreenPayment from "./ScreenPayment";
import ScreenAddress from "./ScreenAddress";
import ScreenEditAddress from "./ScreenEditAddress";

const Stack = createNativeStackNavigator();

const LayoutHomePage = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={ScreenHome}/>
            <Stack.Screen name="Search" component={ScreenSearch}/>
            <Stack.Screen name="DetailProduct" component={ScreenDetailProduct}/>
            <Stack.Screen name="Cart" component={ScreenCart}/>
            <Stack.Screen name="Payment" component={ScreenPayment}/>
            <Stack.Screen name="Address" component={ScreenAddress}/>
            <Stack.Screen name="EditAddress" component={ScreenEditAddress}/>
            {/* <Stack.Screen name="LayoutBottomTabs" component={}/> */}

        </Stack.Navigator>
    )
}

export default LayoutHomePage;