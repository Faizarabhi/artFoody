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
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import DATA from "../../config/Restaurant/DATA";
import categories from "../../config/Restaurant/DATA";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - Spacing * 3;

function HomeScreen({ navigation }: HomeScreenProps) {
    const handleRecipePress = (recipeId: number) => {
        // console.log(DATA[0].recipes[1])
    navigation.navigate('RecipeDetail', { recipe: DATA[0].recipes[1] })
    //  return <RecipeDetailScreen recipe={DATA[0].recipes[1]} />

    };
    const [activeCategory, setActiveCategory] = useState(0)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: Spacing * 2 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../../assets/images/icon.png')} style={{ width: Spacing * 4.5, height: Spacing * 4.5, borderRadius: Spacing * 3, marginRight: Spacing }} />
                            <Text style={{ fontSize: Spacing * 1.7, fontWeight: "800", color: Colors.text }}>Faiza RABHI</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity>
                                <Ionicons name="notifications-outline" size={Spacing * 3.5} style={{ color: Colors.text }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="menu" size={Spacing * 3.5} style={{ color: Colors.text }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: "60%", marginTop: Spacing * 2 }}>
                        <Text style={{ fontSize: Spacing * 3, fontWeight: "700" }}>What Would Like to order?</Text>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: Colors.lightPrimary, marginVertical: Spacing * 3, borderRadius: Spacing, padding: Spacing * 1.5 }}>
                        <Ionicons name="search" color={Colors.darkText} size={Spacing * 2.5} />
                        <TextInput placeholder="Want To ..." placeholderTextColor={Colors.darkText} style={{ color: Colors.gray, fontSize: Spacing * 2, marginLeft: Spacing }} />
                    </View>
                    <View>
                        <ScrollView horizontal >
                            {DATA.map((categories, index) => (
                                <TouchableOpacity style={{ marginRight: Spacing * 3 }} key={index} onPress={() => setActiveCategory(index)}>
                                    <Text style={[{ fontSize: Spacing * 1.7, fontWeight: "600", color: Colors.darkText }, activeCategory === index && { color: Colors.text, fontWeight: "700", fontSize: Spacing * 1.8 }]}>{categories.title}</Text>
                                </TouchableOpacity>
                            ))}

                        </ScrollView>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginVertical: Spacing * 2 }}>
                            {DATA[activeCategory].recipes.map(item => (
                                <TouchableOpacity key={item.id} style={{ width: ITEM_WIDTH, marginBottom: Spacing * 2 }} onPress={() => handleRecipePress(123)}>
                                    <Image style={{ width: "100%", height: ITEM_WIDTH + Spacing * 3, borderRadius: Spacing * 2 }} source={item.image} />
                                    <Text style={{ fontSize: Spacing * 2, fontWeight: "700", marginTop: Spacing }}>{item.name}</Text>
                                    <Text style={{ fontSize: Spacing * 1.3, color:Colors.darkText,marginVertical:Spacing/2 }}>Today discount {item.discount}</Text>
                                    <Text style={{ fontSize: Spacing * 2, fontWeight: "700" }}>${item.price}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});