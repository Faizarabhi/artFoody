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
import { SPACING, colors, DATA } from '../../Restaurant'
const { height } = Dimensions.get("window");
import { Share } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Ingredient from "../../components/Ingredient";


const RecipeDetailScreen = ({ route }) => {
    const { itemId, data } = route.params

    const [ingredient, setIngrediant] = useState([])
    console.log(data.image,'rrrrr')
    
    const onShare = (offerId) => {
        try {
            Share.share({
                message:
                    `http://autoMaroc.com/detailOffer/?offerId=${offerId}`,
            });
        } catch (error) {
            alert(error.message);
        }
    }
    useEffect(() => {
        setIngrediant(data.body.split('-'))
        console.log(ingredient, ingredient.length, 'ingredient')

    }, [])
    return (
        <View>
            <>
                {ingredient.length >= 0 ? <>
                    <ScrollView>
                        <View>
                            <ImageBackground
                                style={{
                                    padding: SPACING * 2,
                                    height: height / 2.5,
                                    padding: SPACING * 2,
                                    paddingTop: SPACING * 4,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            source={require('../../assets/restaurant/anna-pelzer-IGfIGP5ONV0-unsplash.jpeg')}
                            >
                                <TouchableOpacity
                                    style={{
                                        height: SPACING * 4.5,
                                        width: SPACING * 4.5,
                                        backgroundColor: colors.white,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: SPACING * 2.5,
                                    }}
                                    onPress={() =>
                                        navigation.navigate('/Home')
                                    }
                                >
                                    <Ionicons
                                        name="arrow-back"
                                        size={SPACING * 2.5}
                                        color={colors.gray}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        height: SPACING * 4.5,
                                        width: SPACING * 4.5,
                                        backgroundColor: colors.white,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: SPACING * 2.5,
                                    }}
                                    onPress={onShare}
                                >
                                    <Ionicons name="share" size={SPACING * 2.5} color={colors.gray} />
                                </TouchableOpacity>
                            </ImageBackground>
                            <View
                                style={{
                                    padding: SPACING * 2,
                                    paddingTop: SPACING * 3,
                                    marginTop: -SPACING * 3,
                                    borderTopLeftRadius: SPACING * 3,
                                    borderTopRightRadius: SPACING * 3,
                                    backgroundColor: colors.white,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        marginBottom: SPACING * 3,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{ width: "70%" }}>
                                        <Text
                                            style={{
                                                fontSize: SPACING * 3,
                                                color: colors.black,
                                                fontWeight: "700",
                                            }}
                                        >
                                            {data.title}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            padding: SPACING,
                                            paddingHorizontal: SPACING * 3,
                                            backgroundColor: colors.yellow,
                                            flexDirection: "row",
                                            borderRadius: SPACING,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Ionicons
                                            name="star"
                                            color={colors.black}
                                            size={SPACING * 1.7}
                                        />
                                        <Text
                                            style={{
                                                fontSize: SPACING * 1.6,
                                                fontWeight: "600",
                                                marginLeft: SPACING / 2,
                                                color: colors.black,
                                            }}
                                        >
                                            {/* {recipe.rating} */}
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{ flexDirection: "row", justifyContent: "space-between" }}
                                >
                                    <View
                                        style={{
                                            padding: SPACING,
                                            paddingHorizontal: SPACING * 2,
                                            backgroundColor: colors.light,
                                            flexDirection: "row",
                                            borderRadius: SPACING,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Ionicons
                                            name="time"
                                            color={colors.gray}
                                            size={SPACING * 1.7}
                                        />
                                        <Text
                                            style={{
                                                fontSize: SPACING * 1.6,
                                                fontWeight: "600",
                                                marginLeft: SPACING / 2,
                                                color: colors.gray,
                                            }}
                                        >
                                            {data.cookingTime} min
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            padding: SPACING,
                                            paddingHorizontal: SPACING * 2,
                                            backgroundColor: colors.light,
                                            flexDirection: "row",
                                            borderRadius: SPACING,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Ionicons
                                            name="bicycle"
                                            color={colors.gray}
                                            size={SPACING * 1.7}
                                        />
                                        <Text
                                            style={{
                                                fontSize: SPACING * 1.6,
                                                fontWeight: "600",
                                                marginLeft: SPACING / 2,
                                                color: colors.gray,
                                            }}
                                        >
                                            {data.del_time} 106 kcal
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            padding: SPACING,
                                            paddingHorizontal: SPACING * 2,
                                            backgroundColor: colors.light,
                                            flexDirection: "row",
                                            borderRadius: SPACING,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Ionicons
                                            name="restaurant"
                                            color={colors.gray}
                                            size={SPACING * 1.7}
                                        />
                                        <Text
                                            style={{
                                                fontSize: SPACING * 1.6,
                                                fontWeight: "600",
                                                marginLeft: SPACING / 2,
                                                color: colors.gray,
                                            }}
                                        >
                                            {data.cooking_time}fav
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ marginVertical: SPACING * 3 }}>
                                    <Text
                                        style={{
                                            fontSize: SPACING * 2,
                                            fontWeight: "700",
                                            color: colors.text,
                                        }}
                                    >
                                        Ingredients
                                    </Text>
                                    {ingredient?.map((item) => (
                                        <Ingredient item={item} />))}
                                </View>
                                <Text
                                    style={{
                                        fontSize: SPACING * 2,
                                        fontWeight: "700",
                                        color: colors.text,
                                        marginBottom: SPACING,
                                    }}
                                >
                                    Description

                                </Text>
                                <Text
                                    style={{
                                        fontSize: SPACING * 1.7,
                                        fontWeight: "500",
                                        color: colors.gray,
                                    }}
                                >
                                    {data.description}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>

                </>
                    : <Text>Loading ...</Text>}
            </>

        </View>
    )
}

export default RecipeDetailScreen