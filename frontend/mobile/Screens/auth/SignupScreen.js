import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SPACING, colors, DATA, FontSize } from '../../Restaurant'
import AppTextInput from "../../components/AppTextInput";

const SignupScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View
                style={{
                    padding: SPACING * 2,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: colors.primary,
                            // fontFamily: Font["poppins-bold"],
                            marginVertical: SPACING * 3,
                        }}
                    >
                        Create account
                    </Text>
                    <Text
                        style={{
                            // fontFamily: Font["poppins-regular"],
                            fontSize: FontSize.small,
                            maxWidth: "80%",
                            textAlign: "center",
                        }}
                    >
                        Create an account so you can explore all the existing jobs
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: SPACING * 3,
                    }}
                >
                    <AppTextInput placeholder="Email" />
                    <AppTextInput placeholder="Password" />
                    <AppTextInput placeholder="Confirm Password" />
                </View>

                <TouchableOpacity
                 onPress={() =>
                    navigation.navigate('Home')
                  }
                    style={{
                        padding: SPACING * 2,
                        backgroundColor: colors.primary,
                        marginVertical: SPACING * 3,
                        borderRadius: SPACING,
                        shadowColor: colors.primary,
                        shadowOffset: {
                            width: 0,
                            height: SPACING,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: SPACING,
                    }}
                >
                    <Text
                        style={{
                            // fontFamily: Font["poppins-bold"],
                            color: colors.onPrimary,
                            textAlign: "center",
                            fontSize: FontSize.large,
                        }}
                    >
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Login")}
                    style={{
                        padding: SPACING,
                    }}
                >
                    <Text
                     onPress={() =>
                        navigation.navigate('Signin')
                      }
                        style={{
                            // fontFamily: Font["poppins-semiBold"],
                            color: colors.text,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Already have an account
                    </Text>
                </TouchableOpacity>

                <View
                    style={{
                        marginVertical: SPACING * 3,
                    }}
                >
                    <Text
                        style={{
                            // fontFamily: Font["poppins-semiBold"],
                            color: colors.primary,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Or continue with
                    </Text>

                    <View
                        style={{
                            marginTop: SPACING,
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: SPACING,
                                backgroundColor: colors.gray,
                                borderRadius: SPACING / 2,
                                marginHorizontal: SPACING,
                            }}
                        >
                            <Ionicons
                                name="logo-google"
                                color={colors.text}
                                size={SPACING * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: SPACING,
                                backgroundColor: colors.gray,
                                borderRadius: SPACING / 2,
                                marginHorizontal: SPACING,
                            }}
                        >
                            <Ionicons
                                name="logo-apple"
                                color={colors.text}
                                size={SPACING * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: SPACING,
                                backgroundColor: colors.gray,
                                borderRadius: SPACING / 2,
                                marginHorizontal: SPACING,
                            }}
                        >
                            <Ionicons
                                name="logo-facebook"
                                color={colors.text}
                                size={SPACING * 2}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignupScreen

const styles = StyleSheet.create({})