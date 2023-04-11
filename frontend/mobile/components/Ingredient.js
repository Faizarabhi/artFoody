import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SPACING, colors, DATA } from '../Restaurant'
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons'; 


const Ingredient = ({ item }) => {
  return (
    <View
      style={{
        marginVertical: SPACING,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: SPACING,
          height: SPACING,
          backgroundColor: colors.light,
          borderRadius: SPACING,
        }}
      />
          <Octicons name="dot-fill" size={20} color={colors.gray} />
      <Text
        style={{
          fontSize: SPACING * 1.7,
          fontWeight: "600",
          color: colors.gray,
          marginLeft: SPACING,
        }}
      >
        {item}
      </Text>
    </View>
  )
}

export default Ingredient