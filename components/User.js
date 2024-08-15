import React from "react";
import {  View,  TextInput, Text } from "react-native";
import MyIcon from "./MyIcon";

export default function User() {
  return (
    <View >
    <Text style={{ fontSize : 20,textAlign :'center',color :'#2C3E50',marginTop : 50 }}>ข้อมูลผู้ใช้</Text>
    <View style={{  backgroundColor :'#ffffff',marginTop : 10,margin : 20, padding : 10, borderWidth : 1, borderRadius : 15,}}>
      {/* View ก้อนที่ 1 */}
      <View >
        <Text style={{ fontSize : 30,textAlign :'left',color :'#2C3E50' }}>อรทัย สิงห์จินดา</Text>
        <View style={{  backgroundColor :'#d1dddb',marginTop : 20,margin : 5, padding : 5, borderWidth : 1, borderColor : 'gray',borderRadius : 5,}}>
        <Text style={{ fontSize : 20,textAlign :'left',color :'#1d6a95' }}>ลักษณะผู้ใช้งาน : ผู้กู้</Text>
        </View>
      </View>
      </View>

      <View style={{  backgroundColor :'#ffffff',marginTop : 5,margin : 20, padding : 10, borderWidth : 1, borderRadius : 5,borderBlockColor:'orange'}}>
      <Text style={{ fontSize : 20,textAlign :'left',color :'#2C3E50' }}>รายละเอียดบัญชี</Text></View>

      

      


    </View>
  );
}