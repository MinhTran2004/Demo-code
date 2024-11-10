
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ComponentLogin from "@component/Component_Login";
import { ViewModelAccount } from "@viewmodel/VM_Account";

export default function ScreenLogin({ navigation }: any) {
    const viewModel = ViewModelAccount(navigation);
    // const [isChecked, setIsChecked] = useState(true);

    return (
        <View style={styles.main}>
            <Image source={require("@images//logo_app.png")} style={styles.img_logo} />
            <Text style={styles.text_title}>Đăng Nhập Vào Tài Khoản Của Bạn</Text>

            <View style={{ marginTop: 50, width: '100%' }}>
                <ComponentLogin.InputTextLogin 
                    placeholder={"Nhập tài khoản"} 
                    icon={require("@images//account.png")} 
                    input={viewModel.account} 
                    event={viewModel.setAccount} 
                />
                <ComponentLogin.InputTextLogin 
                    isPasssword 
                    placeholder={"Nhập mật khẩu"} 
                    icon={require("@images/password.png")} 
                    input={viewModel.password} 
                    event={viewModel.setPassword} 
                />
            </View>

            <View style={styles.container_status_account}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <CheckBox
                        value={isChecked}
                        onValueChange={setIsChecked}
                    /> */}
                    <Text>Ghi nhớ đăng nhập</Text>
                </View>
                <TouchableOpacity>
                    <Text>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.layout_btn_login} onPress={()=>{
                viewModel.getAccountByAccountAndPassword()
            }
            }>
                <Text style={styles.text_btn_login}>Đăng Nhập</Text>
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

            <View style={{ flexDirection: 'row', marginTop: 70 }}>
                <Text style={{ fontSize: 18 }}>Bạn đã có tài khoản? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                    <Text style={{ color: '#2eb55a', fontWeight: '500', fontSize: 18 }}> Đăng ký</Text>
                </TouchableOpacity>
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