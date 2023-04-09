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
  FlatList
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SPACING, colors, DATA } from '../../Restaurant'
const { width } = Dimensions.get("window");
import { AntDesign } from '@expo/vector-icons';
import Header from "../../components/Header";
import { getRecipes, recipesSlice, reset } from '../../features/recipes/recipesSlice'
import { useSelector, useDispatch } from 'react-redux'
const ITEM_WIDTH = width / 2 - SPACING * 3;
import PostCard from "../../components/PostCard";

const HomeScreen = ({ navigation }) => {
  const { recipes } = useSelector(state => state.recipe)
  const dispatch = useDispatch();
  const [activeCategory, setactiveCategory] = useState(0);
  useEffect(() => {
    dispatch(getRecipes())
  }, [])
  console.log("---------------------------------------------------------------------------------------------------------------------------------------",recipes, '----------------------------------------------------------------')
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: SPACING * 2 }}>

          <Header />
          <View style={{ width: "60%", marginTop: SPACING * 2 }}>
            <Text style={{ fontSize: SPACING * 3, fontWeight: "700" }}>
              What would you like to recipes?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.light,
              marginVertical: SPACING * 3,
              padding: SPACING * 1.5,
              borderRadius: SPACING,
            }}
          >
            <Ionicons name="search" color={colors.gray} size={SPACING * 2.7} />
            <TextInput
              placeholder="Want to .."
              placeholdertextColor={colors.gray}
              style={{
                color: colors.gray,
                fontSize: SPACING * 2,
                marginLeft: SPACING,
              }}
            />
          </View>
          <ScrollView horizontal
          >
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: SPACING * 3 }}
                key={index}
                onPress={() => setactiveCategory(index)}
              >
                <Text
                  style={[
                    {
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: colors.gray,
                    },
                    activeCategory === index && {
                      color: colors.black,
                      fontWeight: "700",
                      fontSize: SPACING * 1.8,
                    },
                  ]}
                >
                  
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: "row", 
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: SPACING * 2,
            }}
          >
             {recipes.map((item) => (<PostCard  data={item}/>))}
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});