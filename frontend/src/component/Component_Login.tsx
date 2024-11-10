import { useState } from "react"
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"

export default class ComponentLogin {

    static InputTextLogin = ({ placeholder, icon, input, event }: any) => {
        const [isHovered, setIsHovered] = useState(false);
        return (
            <TouchableOpacity
                onPress={() => setIsHovered(true)}
                onPressOut={() => { setIsHovered(false) }}>
                <View style={[styles.container_input, isHovered && styles.container_input_hover]}>
                    <View style={styles.layout_icon_input}>
                        <Image source={icon} style={{ width: 20, height: 20 }} />
                    </View>
                    <TextInput placeholder={placeholder}
                        onFocus={() => setIsHovered(true)}
                        onBlur={() => setIsHovered(false)}
                        value={input}
                        onChangeText={(text) => event(text)}
                        style={styles.text_input} />
                </View>
            </TouchableOpacity>
        )
    }

    static LoginWidthProviders = ({ image }: any) => {
        return (
            <TouchableOpacity>
                <View style={styles.container_provider}>
                    <Image source={image} style={styles.icon_provider} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    // input_component
    container_input: {
        width: '100%',
        height: 50,
        backgroundColor: '#e7e7e7',
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 10,
    },
    container_input_hover: {
        borderColor: '#1bac4b',
        borderWidth: 2,
    },
    layout_icon_input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRightWidth: 1,
        borderColor: '#c1c1c1',
    },
    text_input: {
        width: '100%',
        paddingLeft: 10,
    },

    // provider_component
    container_provider: {
        height: 70,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#c1c1c1',
        marginRight: 20,
        borderRadius: 20
    },
    icon_provider: {
        height: 30,
        width: 30,
    }
})