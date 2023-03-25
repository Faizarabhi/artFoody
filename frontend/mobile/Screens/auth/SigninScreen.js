import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SPACING, colors, DATA, FontSize } from '../../Restaurant'
import { useDispatch } from "react-redux";
import AppTextInput from "../../components/AppTextInput";


const SigninScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Authenticate user here
        const user = { email, password };
        console.log(user)
        // console.log(login(user),'user')
        // dispatch(login(user));
    };
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
                        Login here
                    </Text>
                    <Text
                        style={{
                            // fontFamily: Font["poppins-semiBold"],
                            fontSize: FontSize.large,
                            maxWidth: "60%",
                            textAlign: "center",
                        }}
                    >
                        Welcome back you've been missed!
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: SPACING * 3,
                    }}
                >
                    <AppTextInput placeholder="Email" value={email} onChangeText={setEmail} />
                    <AppTextInput placeholder="Password" value={password} onChangeText={setPassword} />
                </View>

                <View>
                    <Text
                        style={{
                            // fontFamily: Font["poppins-semiBold"],
                            fontSize: FontSize.small,
                            color: colors.primary,
                            alignSelf: "flex-end",
                        }}
                    >
                        Forgot your password ?
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        handleLogin()
                        navigation.navigate('Home')
                    }
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
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Signup')
                    }
                    style={{
                        padding: SPACING,
                    }}
                >
                    <Text
                        style={{
                            // fontFamily: Font["poppins-semiBold"],
                            color: colors.text,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Create new account
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
};

export default SigninScreen;

const styles = StyleSheet.create({});