import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { SPACING, colors, DATA} from '../Restaurant'
  import { useSelector } from 'react-redux';
const Header = () => {
    const user = useSelector((state) => state) 
  return (
    <View
    style={{ flexDirection: "row", justifyContent: "space-between" }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{
          width: SPACING * 4.5,
          height: SPACING * 4.5,
          borderRadius: SPACING * 3,
          marginRight: SPACING,
        }}
        source={require("../assets/restaurant/avatar.jpg")}
      />
      <Text
        style={{
          fontSize: SPACING * 1.7,
          fontWeight: "800",
          color: colors.text,
        }}
      >
        Erikaasav
      </Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity style={{ marginRight: SPACING }}>
        <Ionicons
          name="notifications-outline"
          size={SPACING * 3.5}
          color={colors.text}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="menu"
          size={SPACING * 3.5}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Header