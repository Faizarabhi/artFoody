import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Spacing from '../../constants/Spacing'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
type Props = NativeStackScreenProps<RootStackParamList, "Welcom">;
const WelcomScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/pexels-william-choquette-2641886.jpeg')}>
      <View style={{ flex: 1, backgroundColor: Colors.text, opacity: .2 }}></View>
      <View style={{ position: "absolute", height: "100%", zIndex: 2, width: "100%", justifyContent: "flex-end", paddingHorizontal: Spacing * 2, paddingBottom: Spacing * 5 }}>
        <View>
          <Text style={{ color: Colors.onPrimary, fontWeight: "800", fontSize: Spacing * 4.5, textTransform: "capitalize" }}>Let your favorite food find you</Text>
          <Text style={{ color: Colors.onPrimary, fontWeight: "600", fontSize: Spacing * 1.5 }}>Let your favorite food find you Let your favorite food find you</Text>
          <TouchableOpacity style={{ padding: Spacing * 2, backgroundColor: Colors.onPrimary, borderRadius: Spacing * 2, alignItems: "center", marginTop: Spacing * 3 }}
           onPress={()=>navigate("Home")}>
            <Text style={{color:Colors.text,fontSize:Spacing*2,fontWeight:"700"}}>Explorer Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default WelcomScreen