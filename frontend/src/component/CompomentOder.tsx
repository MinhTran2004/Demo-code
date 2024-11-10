
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default class CompmentOder{
    static ProductOder=()=>{
        return( 
            <View style={styles.KhungNen} >
                {/* //image */}
                <View style={styles.image}>
                    <Image source={require("@images/image_product_demo.png")} style={{width:120, height:100,borderRadius:10}}/>
                </View>
                {/* content */}
                <View style={styles.content}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginRight:10,flex:1,marginTop:10}}>
                        <Text style={{color:'black',fontWeight:"bold",fontSize:15,}}>Pizza Thập Cẩm</Text>
                        {/* <Text style={{color:'red',fontWeight:"bold"}}>Đang chờ</Text> */}
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10,flex:1}}>
                    <Text style={{fontWeight:"bold",fontSize:15,color:'#A6A1A1'}}>Loại đặc biệt</Text>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10,flex:1}}>
                        <Text style={{color:'#15FF00',fontWeight:"bold",fontSize:15}}>50.000 VNĐ</Text>
                        <Text style={{color:'#15FF00',fontWeight:"bold"}}>x6</Text>
                    </View>
                </View>
            </View> 
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:15,
        justifyContent:'center',
        
    },KhungNen:{
        
        width:'100%',
        height:130,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row',
        marginTop:10,
    },
    image:{
        margin:15,
        justifyContent:'center'
    },
    content:{
        // flexDirection:'',
        justifyContent:"center",
        flex:1
    },
    
})