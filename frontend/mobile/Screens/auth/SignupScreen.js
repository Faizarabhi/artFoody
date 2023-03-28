import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from "react-native";
import React,{useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import { SPACING, colors, DATA, FontSize } from '../../Restaurant'
import AppTextInput from "../../components/AppTextInput";
import { register, reset } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'

const SignupScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [focused, setFocused] = useState(false);
    const [formData, setFormData] = useState({
        "name": "",
        "email":"",
        "password": ""
    })
    const onSubmit = ()=>{
        console.log(formData)
        formData.password === formData.confirmepassword ? 
        dispatch(register(formData))
        :   Alert.alert(
            "Register",
            "You passwords is not compatible",
            [
              {
                text: "Ok",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
            ]
          );
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
                    {/* <AppTextInput placeholder="Email" />
                    <AppTextInput placeholder="Password" />
                    <AppTextInput placeholder="Confirm Password" /> */}
                     <TextInput value={formData.name} onChangeText={(value) => setFormData({ ...formData, name: value })} placeholder="name" 
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
                       <TextInput value={formData.confirmepassword} onChangeText={(value) => setFormData({ ...formData, confirmepassword: value })} placeholder="confirmepassword"
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

                <TouchableOpacity
                  onPress={() => {
                    onSubmit()
                    navigation.navigate('Home')
                }}
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
}

export default SignupScreen

const styles = StyleSheet.create({
    input:  {
        fontSize: FontSize.small,
        padding: SPACING * 2,
        backgroundColor: colors.lightPrimary,
        borderRadius: SPACING,
        marginVertical: SPACING,
      },
     
});