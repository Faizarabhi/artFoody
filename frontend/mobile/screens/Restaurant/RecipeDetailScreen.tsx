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

import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
type Props = NativeStackScreenProps<RootStackParamList, "RecipeDetail">;


const RecipeDetailScreen: React.FC<Props> = ({ recipe }) => {
    return (
        <>
            <ScrollView>
                <View>
                    <ImageBackground
                        style={{
                            padding: Spacing * 2,
                            height: height / 2.5,
                            paddingTop: Spacing * 4,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            // padding: Spacing*2,
                        }}
                        source={{ uri: 'https://github.com/tugane/Food-Recipe-RN-App-Yt/blob/main/assets/restaurant/pexels-iina-luoto-1211887.jpeg?raw=true' }}
                    >
                        <TouchableOpacity
                            style={{
                                height: Spacing * 4.5,
                                width: Spacing * 4.5,
                                backgroundColor: Colors.lightPrimary,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: Spacing * 2.5,
                            }}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={Spacing * 2.5}
                                color={Colors.gray}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: Spacing * 4.5,
                                width: Spacing * 4.5,
                                backgroundColor: Colors.lightPrimary,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: Spacing * 2.5,
                            }}
                        >
                            <Ionicons name="share" size={Spacing * 2.5} color={Colors.gray} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View
                        style={{
                            padding: Spacing * 2,
                            paddingTop: Spacing * 3,
                            marginTop: -Spacing * 3,
                            borderTopLeftRadius: Spacing * 3,
                            borderTopRightRadius: Spacing * 3,
                            backgroundColor: Colors.lightPrimary,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: Spacing * 3,
                                alignItems: "center",
                            }}
                        >
                            <View style={{ width: "70%" }}>
                                <Text
                                    style={{
                                        fontSize: Spacing * 3,
                                        color: Colors.darkText,
                                        fontWeight: "700",
                                    }}
                                >
                                    {/* recipe.name */}
                                </Text>
                            </View>
                            <View
                                style={{
                                    padding: Spacing,
                                    paddingHorizontal: Spacing * 3,
                                    backgroundColor: Colors.yellow,
                                    flexDirection: "row",
                                    borderRadius: Spacing,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="star"
                                    color={Colors.darkText}
                                    size={Spacing * 1.7}
                                />
                                <Text
                                    style={{
                                        fontSize: Spacing * 1.6,
                                        fontWeight: "600",
                                        marginLeft: Spacing / 2,
                                        color: Colors.darkText,
                                    }}
                                >
                                    {/* recipe.rating */}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{ flexDirection: "row", justifyContent: "space-between" }}
                        >
                            <View
                                style={{
                                    padding: Spacing,
                                    paddingHorizontal: Spacing * 2,
                                    backgroundColor: Colors.lightPrimary,
                                    flexDirection: "row",
                                    borderRadius: Spacing,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="time"
                                    color={Colors.gray}
                                    size={Spacing * 1.7}
                                />
                                <Text
                                    style={{
                                        fontSize: Spacing * 1.6,
                                        fontWeight: "600",
                                        marginLeft: Spacing / 2,
                                        color: Colors.gray,
                                    }}
                                >
                                    {/* {recipe.time */}
                                </Text>
                            </View>
                            <View
                                style={{
                                    padding: Spacing,
                                    paddingHorizontal: Spacing * 2,
                                    backgroundColor: Colors.lightPrimary,
                                    flexDirection: "row",
                                    borderRadius: Spacing,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="bicycle"
                                    color={Colors.gray}
                                    size={Spacing * 1.7}
                                />
                                <Text
                                    style={{
                                        fontSize: Spacing * 1.6,
                                        fontWeight: "600",
                                        marginLeft: Spacing / 2,
                                        color: Colors.gray,
                                    }}
                                >
                                    {/* {recipe.del_time} */}
                                </Text>
                            </View>
                            <View
                                style={{
                                    padding: Spacing,
                                    paddingHorizontal: Spacing * 2,
                                    backgroundColor: Colors.lightPrimary,
                                    flexDirection: "row",
                                    borderRadius: Spacing,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="restaurant"
                                    color={Colors.gray}
                                    size={Spacing * 1.7}
                                />
                                <Text
                                    style={{
                                        fontSize: Spacing * 1.6,
                                        fontWeight: "600",
                                        marginLeft: Spacing / 2,
                                        color: Colors.gray,
                                    }}
                                >
                                    {/* {recipe.cooking_time} */}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: Spacing * 3 }}>
                            <Text
                                style={{
                                    fontSize: Spacing * 2,
                                    fontWeight: "700",
                                    color: Colors.darkText,
                                }}
                            >
                                Ingredients
                            </Text>
                            {/* {recipe.ingredients.map((ingredient) => ( */}
                            <View
                                style={{
                                    marginVertical: Spacing,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                                key={ingredient.id}
                            >
                                <View
                                    style={{
                                        width: Spacing,
                                        height: Spacing,
                                        backgroundColor: Colors.lightPrimary,
                                        borderRadius: Spacing,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: Spacing * 1.7,
                                        fontWeight: "600",
                                        color: Colors.gray,
                                        marginLeft: Spacing,
                                    }}
                                >
                                    {ingredient.title}
                                </Text>
                            </View>
                ))}
                        </View>
                        <Text
                            style={{
                                fontSize: Spacing * 2,
                                fontWeight: "700",
                                color: Colors.darkText,
                                marginBottom: Spacing,
                            }}
                        >
                            Description
                        </Text>
                        <Text
                            style={{
                                fontSize: Spacing * 1.7,
                                fontWeight: "500",
                                color: Colors.gray,
                            }}
                        >
                            {/* {recipe.description} */}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <SafeAreaView>
                <View style={{ padding: Spacing * 2 }}>
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            padding: Spacing * 2,
                            backgroundColor: Colors.darkText,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: Spacing * 2,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: Spacing * 2,
                                color: Colors.lightPrimary,
                                fontWeight: "700",
                            }}
                        >
                            Choose this for
                        </Text>
                        <Text
                            style={{
                                fontSize: Spacing * 2,
                                color: Colors.yellow,
                                fontWeight: "700",
                                marginLeft: Spacing / 2,
                            }}
                        >
                            {/* $ {recipe.price} */}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};

{/* export default RecipeDetailScreen; */ }

const styles = StyleSheet.create({});