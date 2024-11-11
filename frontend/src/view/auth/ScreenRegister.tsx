import ComponentLogin from "@component/Component_Login";
import { ViewModelRegister } from "@viewmodel/VM-Account/Register";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreenRegister({ navigation }: any) {
    const viewModel = ViewModelRegister(navigation);
    return (
        <View style={styles.main}>
            <Image source={require("@images//logo_app.png")} style={styles.img_logo} />
            <Text style={styles.text_title}>Tạo tài khoản mới</Text>

            <View style={{ width: '100%', marginTop: 20 }}>
                <ComponentLogin.InputTextLogin 
                    placeholder={"Nhập tên người dùng"} 
                    icon={require("@images//account.png")} 
                    input={viewModel.username} 
                    event={viewModel.setUsername} 
                />
                <ComponentLogin.InputTextLogin 
                    placeholder={"Nhập tài khoản"} 
                    icon={require("@images//mail.png")} 
                    input={viewModel.account} 
                    event={viewModel.setAccount} 
                />
                <ComponentLogin.InputTextLogin 
                    placeholder={"Nhập mật khẩu"} 
                    icon={require("@images//password.png")} 
                    input={viewModel.password} 
                    event={viewModel.setPassword} 
                    secureTextEntry={true} // Use secure text entry for password input
                />
            </View>
            
            <TouchableOpacity style={styles.layout_btn_login} onPress={viewModel.createAccount}>
                <Text style={styles.text_btn_login}>Đăng ký</Text>
            </TouchableOpacity>

            <View style={styles.container_line}>
                <View style={styles.line} />
                <Text style={styles.text_line}>hoặc tiếp tục với</Text>
                <View style={styles.line} />
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <ComponentLogin.LoginWidthProviders image={require("@images/facebook.png")} />
                <ComponentLogin.LoginWidthProviders image={require("@images/google.png")} />
                <ComponentLogin.LoginWidthProviders image={require("@images/github.png")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fefefe',
        paddingHorizontal: 10,
    },
    img_logo: {
        width: 200,
        height: 180,
    },
    text_title: {
        fontSize: 30,
        fontWeight: '500',
        color: '#414141',
        marginTop: 30
    },
    container_status_account: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    layout_btn_login: {
        width: "100%",
        backgroundColor: '#1bac4b',
        borderRadius: 50,
        marginTop: 15
    },
    text_btn_login: {
        textAlign: 'center',
        paddingVertical: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    container_line: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 50,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#c1c1c1'
    },
    text_line: {
        fontSize: 19,
        paddingHorizontal: 10,
        color: '#757575'
    },
})