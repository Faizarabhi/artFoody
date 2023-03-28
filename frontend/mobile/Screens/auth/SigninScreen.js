import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SPACING, colors, DATA, FontSize } from '../../Restaurant'
import AppTextInput from "../../components/AppTextInput";
import { login, reset } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'

const SigninScreen = ({ navigation }) => {
    
    const dispatch = useDispatch();
    const [focused, setFocused] = useState(false);
    const [formData, setFormData] = useState({
        email: 'faiza@gmail.com',
        password: '12345',
    })


    const onSubmit = ()=>{
        console.log(formData)
        dispatch(login(formData));
    }
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
                    <TextInput value={formData.email} onChangeText={(value) => setFormData({ ...formData, email: value })} placeholder="Email" 
                     onFocus={() => setFocused(true)}
                     onBlur={() => setFocused(false)}
                     placeholderTextColor={colors.darkText}
                     style={[
                       styles.input,
                        focused && {
                          borderWidth: 3,
                          borderColor: colors.primary,
                          shadowOffset: { width: 4, height: SPACING },
                          shadowColor: colors.primary,
                          shadowOpacity: 0.2,
                          shadowRadius: SPACING,
                        },
                      ]}/>
                    <TextInput value={formData.password} onChangeText={(value) => setFormData({ ...formData, password: value })} placeholder="password"
                     onFocus={() => setFocused(true)}
                     onBlur={() => setFocused(false)}
                     placeholderTextColor={colors.darkText}
                     style={[
                       styles.input,
                        focused && {
                          borderWidth: 3,
                          borderColor: colors.primary,
                          shadowOffset: { width: 4, height: SPACING },
                          shadowColor: colors.primary,
                          shadowOpacity: 0.2,
                          shadowRadius: SPACING,
                        },
                      ]} />
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
                        onSubmit()
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
                                backgroundColor: colors.lightblue,
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
                                backgroundColor: colors.lightblue,
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
                                backgroundColor: colors.lightblue,
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

const styles = StyleSheet.create({
    input:  {
        fontSize: FontSize.small,
        padding: SPACING * 2,
        backgroundColor: colors.lightPrimary,
        borderRadius: SPACING,
        marginVertical: SPACING,
      },
     
});