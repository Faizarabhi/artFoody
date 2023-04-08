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
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SPACING, colors, DATA } from '../../Restaurant'
const { width } = Dimensions.get("window");
import { AntDesign } from '@expo/vector-icons';
import Header from "../../components/Header";
import { getRecipes, recipesSlice, reset } from '../../features/recipes/recipesSlice'
import { useSelector, useDispatch } from 'react-redux'
const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = ({ navigation }) => {
  const { recipes } = useSelector(state => state.recipe)
  const dispatch = useDispatch();
  const [activeCategory, setactiveCategory] = useState(0);
  useEffect(() => {
    dispatch(getRecipes())
  }, [])
  console.log(recipes[1], 'data')
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
            {recipes.map((item) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details')
                }
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item.id}
              >
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                  source={item.image}
                  
                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    marginTop: SPACING,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}
                >
                  Categorie: {item.category}
                </Text>
                <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>

                  {item.price > 50 ?
                    <AntDesign name="heart" size={24} color="black" />
                    :
                    <AntDesign name="hearto" size={24} color="black" />
                  }
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});