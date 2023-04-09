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
import React from "react";
import { SPACING, colors, DATA } from '../../Restaurant'
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { getOneRecipe } from '../../features/recipes/recipesSlice'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'



const RecipeDetailScreen = async ({ navigation, route }) => {

  const id = route.params
  const dispatch = useDispatch();
  console.log(id, 'id')
  // let data = dispatch(getOneRecipe(id))

  const res = await axios.get('http://172.20.10.2:3000/api/posts/' + `${id}`)
  const data = res.data
  const searchItem = {
    text: "Search",
    placeholder: "Search ItsJavaScript",
    autocomplete: true
}

  console.log(data, 'hello data')

  return (
    <>
    </>
    // <>
    //   {data.length > 0 ? <>
    //     <ScrollView>
    //       <View>
    //         <ImageBackground
    //           style={{
    //             padding: SPACING * 2,
    //             height: height / 2.5,
    //             padding: SPACING * 2,
    //             paddingTop: SPACING * 4,
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //           }}
    //         // source={recipe.image}
    //         >
    //           <TouchableOpacity
    //             style={{
    //               height: SPACING * 4.5,
    //               width: SPACING * 4.5,
    //               backgroundColor: colors.white,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               borderRadius: SPACING * 2.5,
    //             }}
    //           // onPress={() =>
    //           //   navigation.navigate('/Home')
    //           // }
    //           >
    //             <Ionicons
    //               name="arrow-back"
    //               size={SPACING * 2.5}
    //               color={colors.gray}
    //             />
    //           </TouchableOpacity>
    //           <TouchableOpacity
    //             style={{
    //               height: SPACING * 4.5,
    //               width: SPACING * 4.5,
    //               backgroundColor: colors.white,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               borderRadius: SPACING * 2.5,
    //             }}
    //           >
    //             <Ionicons name="share" size={SPACING * 2.5} color={colors.gray} />
    //           </TouchableOpacity>
    //         </ImageBackground>
    //         <View
    //           style={{
    //             padding: SPACING * 2,
    //             paddingTop: SPACING * 3,
    //             marginTop: -SPACING * 3,
    //             borderTopLeftRadius: SPACING * 3,
    //             borderTopRightRadius: SPACING * 3,
    //             backgroundColor: colors.white,
    //           }}
    //         >
    //           <View
    //             style={{
    //               flexDirection: "row",
    //               marginBottom: SPACING * 3,
    //               alignItems: "center",
    //             }}
    //           >
    //             <View style={{ width: "70%" }}>
    //               <Text
    //                 style={{
    //                   fontSize: SPACING * 3,
    //                   color: colors.black,
    //                   fontWeight: "700",
    //                 }}
    //               >
    //                 {data.title}name
    //               </Text>
    //             </View>
    //             <View
    //               style={{
    //                 padding: SPACING,
    //                 paddingHorizontal: SPACING * 3,
    //                 backgroundColor: colors.yellow,
    //                 flexDirection: "row",
    //                 borderRadius: SPACING,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //               }}
    //             >
    //               <Ionicons
    //                 name="star"
    //                 color={colors.black}
    //                 size={SPACING * 1.7}
    //               />
    //               <Text
    //                 style={{
    //                   fontSize: SPACING * 1.6,
    //                   fontWeight: "600",
    //                   marginLeft: SPACING / 2,
    //                   color: colors.black,
    //                 }}
    //               >
    //                 {/* {recipe.rating} */}
    //               </Text>
    //             </View>
    //           </View>
    //           <View
    //             style={{ flexDirection: "row", justifyContent: "space-between" }}
    //           >
    //             <View
    //               style={{
    //                 padding: SPACING,
    //                 paddingHorizontal: SPACING * 2,
    //                 backgroundColor: colors.light,
    //                 flexDirection: "row",
    //                 borderRadius: SPACING,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //               }}
    //             >
    //               <Ionicons
    //                 name="time"
    //                 color={colors.gray}
    //                 size={SPACING * 1.7}
    //               />
    //               <Text
    //                 style={{
    //                   fontSize: SPACING * 1.6,
    //                   fontWeight: "600",
    //                   marginLeft: SPACING / 2,
    //                   color: colors.gray,
    //                 }}
    //               >
    //                 {data.createAt}aa
    //               </Text>
    //             </View>
    //             <View
    //               style={{
    //                 padding: SPACING,
    //                 paddingHorizontal: SPACING * 2,
    //                 backgroundColor: colors.light,
    //                 flexDirection: "row",
    //                 borderRadius: SPACING,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //               }}
    //             >
    //               <Ionicons
    //                 name="bicycle"
    //                 color={colors.gray}
    //                 size={SPACING * 1.7}
    //               />
    //               <Text
    //                 style={{
    //                   fontSize: SPACING * 1.6,
    //                   fontWeight: "600",
    //                   marginLeft: SPACING / 2,
    //                   color: colors.gray,
    //                 }}
    //               >
    //                 {data.del_time} calories
    //               </Text>
    //             </View>
    //             <View
    //               style={{
    //                 padding: SPACING,
    //                 paddingHorizontal: SPACING * 2,
    //                 backgroundColor: colors.light,
    //                 flexDirection: "row",
    //                 borderRadius: SPACING,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //               }}
    //             >
    //               <Ionicons
    //                 name="restaurant"
    //                 color={colors.gray}
    //                 size={SPACING * 1.7}
    //               />
    //               <Text
    //                 style={{
    //                   fontSize: SPACING * 1.6,
    //                   fontWeight: "600",
    //                   marginLeft: SPACING / 2,
    //                   color: colors.gray,
    //                 }}
    //               >
    //                 {data.cooking_time}fav
    //               </Text>
    //             </View>
    //           </View>
    //           <View style={{ marginVertical: SPACING * 3 }}>
    //             <Text
    //               style={{
    //                 fontSize: SPACING * 2,
    //                 fontWeight: "700",
    //                 color: colors.text,
    //               }}
    //             >
    //               Ingredients
    //             </Text>
    //             {/* {recipe.ingredients.map((ingredient) => ( */}
    //             <View
    //               style={{
    //                 marginVertical: SPACING,
    //                 flexDirection: "row",
    //                 alignItems: "center",
    //               }}
    //             // key={ingredient.id}
    //             >
    //               <View
    //                 style={{
    //                   width: SPACING,
    //                   height: SPACING,
    //                   backgroundColor: colors.light,
    //                   borderRadius: SPACING,
    //                 }}
    //               />
    //               <Text
    //                 style={{
    //                   fontSize: SPACING * 1.7,
    //                   fontWeight: "600",
    //                   color: colors.gray,
    //                   marginLeft: SPACING,
    //                 }}
    //               >
    //                 {data.body}
    //                 1 pound oats
    //               </Text>
    //             </View>
    //             {/* ))} */}
    //           </View>
    //           <Text
    //             style={{
    //               fontSize: SPACING * 2,
    //               fontWeight: "700",
    //               color: colors.text,
    //               marginBottom: SPACING,
    //             }}
    //           >
    //             Description

    //           </Text>
    //           <Text
    //             style={{
    //               fontSize: SPACING * 1.7,
    //               fontWeight: "500",
    //               color: colors.gray,
    //             }}
    //           >
    //             {data.description}
    //             Nulla incididunt magna in sit. Magna aliquip cillum mollit est ad in tempor ea. Duis aliqua id sit anim duis enim qui dolor adipisicing quis tempor aliquip officia reprehenderit. Pariatur consectetur laboris culpa sunt occaecat laboris aute proident ex dolore aliquip culpa dolore. Eu proident ipsum sunt ex nulla dolor exercitation reprehenderit ipsum mollit aute proident ea minim. Tempor occaecat adipisicing dolor pariatur officia eiusmod. Elit elit quis ullamco elit mollit occaecat.
    //           </Text>
    //         </View>
    //       </View>
    //     </ScrollView>
    //     <SafeAreaView>
    //       <View style={{ padding: SPACING * 2 }}>
    //         <TouchableOpacity
    //           style={{
    //             width: "100%",
    //             padding: SPACING * 2,
    //             backgroundColor: colors.black,
    //             flexDirection: "row",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             borderRadius: SPACING * 2,
    //           }}
    //         >
    //           <Text
    //             style={{
    //               fontSize: SPACING * 2,
    //               color: colors.white,
    //               fontWeight: "700",
    //             }}
    //           >
    //             Choose this for
    //           </Text>
    //           <Text
    //             style={{
    //               fontSize: SPACING * 2,
    //               color: colors.yellow,
    //               fontWeight: "700",
    //               marginLeft: SPACING / 2,
    //             }}
    //           >
    //             {/* $ {recipe.price} */}
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     </SafeAreaView>
    //   </>
    //     : <Text>Loading ...</Text>}
    // </>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({});