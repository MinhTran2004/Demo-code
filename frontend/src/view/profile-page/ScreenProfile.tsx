import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ComponentProfile from "@component/Component_Profile";

export default function ScreenProfile({navigation}:any) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* header */}
            <View style={styles.container_header}>
                <Image source={require('@images/user.png')} style={{ width: 70, height: 70, borderRadius: 50 }} />
                <Text style={styles.name_profile}>Trần Công Minh</Text>
                <Text style={{fontSize: 16}}>Thành viên</Text>
            </View>

            {/* body */}
            <View style={{ padding: 10 }}>
                <Text style={{marginTop: 10}}>Tài khoản</Text>
                <ComponentProfile.ItemProfile name={"Đăng kí cửa hàng"} icon={require("@images/icon_home.png")} navigation={navigation} screen={'StoreRegistrantion'}/>
                <ComponentProfile.ItemProfile name={"Thông tin tài khoản"} icon={require("@images/account.png")} navigation={navigation} screen={'Account'}/>
                <ComponentProfile.ItemProfile name={"Địa chỉ"} icon={require("@images/icon_location.png")} navigation={navigation} screen={'Address'}/>
                <ComponentProfile.ItemProfile name={"Đổi mật khẩu"} icon={require("@images/password.png")} navigation={navigation} screen={'ChangePassword'}/>
                <ComponentProfile.ItemProfile name={"Sản phẩm yêu thích"} icon={require("@images/icon_showFavourite.png")} navigation={navigation} screen={'Favourite'}/>
                <Text style={{marginTop: 10}}>Ứng dụng</Text>
                <ComponentProfile.ItemProfile name={"Bật thông báo"} icon={require("@images/icon_notification.png")} mode={true}/>
                <ComponentProfile.ItemProfile name={"Chế độ tối"} icon={require("@images/icon_light.png")} mode={true}/>
                <Text style={{marginTop: 10}}>Cài đặt</Text>
                <ComponentProfile.ItemProfile name={"Chính sách và quyền riêng tư"} icon={require("@images/icon_book.png")} navigation={navigation} screen={'ChangePassword'}/>
                <ComponentProfile.ItemProfile name={"Đăng xuất"} icon={require("@images/icon_logout.png")} navigation={navigation} screen={'Login'}/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    line: {
        height: 1.5,
        width: '100%',
        backgroundColor: '#e4e4e4',
        marginVertical: 15,
    },

    // header
    container_header:{
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
    },
    name_profile:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
});