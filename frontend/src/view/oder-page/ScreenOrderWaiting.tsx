import CompmentOder from "@component/CompomentOder";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreenOrderWaiting ({navigation}:any) {

    const ItemOderWating = () => {
        return (
            <View style={styles.container}>
                <View style={{ margin: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, margin: 10 }}>Trạng thái:</Text>
                        <Text style={{ fontSize: 15, color: 'red', marginTop: 10 }}>(Chờ xác nhận)</Text>
                        </View>
                        
                        <TouchableOpacity onPress={() => navigation.navigate('DetailOder')} style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Xem chi tiết</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: 2, backgroundColor: 'gray', marginTop: 10 }}></View>

                    <ScrollView style={{ maxHeight: 500 }} nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 0 }}>
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                        <CompmentOder.ProductOder />
                    </ScrollView>

                    <View style={{ width: '100%', height: 2, backgroundColor: 'gray', marginTop: 10 }}></View>

                    <View style={styles.tongTien}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Tổng tiền: </Text>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>100.000 VND </Text>
                    </View>



                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Hủy đơn</Text>
                    </TouchableOpacity>

                    

                </View>
            </View>
        )
    }
    return(
        <ScrollView>
                <ItemOderWating/>
                <ItemOderWating/>
                <ItemOderWating/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10
    }, tongTien: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,


    }
    ,
    button: {
        backgroundColor: '#FE941A',  
        width: '100%',               
        height: 50,                 
        justifyContent: 'center',    
        alignItems: 'center',        
        borderRadius: 5,
        marginTop:10
    },
    buttonText: {
        color: 'white',              
        fontSize: 16,                
        fontWeight: 'bold',          
    }

})