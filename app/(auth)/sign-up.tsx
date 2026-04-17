import CustomButton from '@/components/CustomButton'
import CustomInput from "@/components/CustomInput"
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({email: '', password: '', name: ''})

        const submit = async () => {
            const { email, password, name } = form;

            if(!email || !password || !name) return Alert.alert('Error', 'Invalid email and password')
            setIsSubmitting(true)
            try {
                Alert.alert('succ')
                router.replace('/')

                }catch(error:any){
                    Alert.alert('Error', error.message)
                }finally {
                    setIsSubmitting(false)}


            }


  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
        <CustomInput
                    placeholder="Enter your name"
                    value={form.name}
                    onChangeText={(text)=>setForm((state)=>({...state, name:text}))}
                    label="Email"
                />
        <CustomInput
            placeholder="Enter your email"
            value={form.email}
            onChangeText={(text)=>setForm((state)=>({...state, email:text}))}
            label="Email"
            keyboardType="email-address"
        />
        <CustomInput
                    placeholder="Enter your email"
                    value={form.password}
                    onChangeText={(text)=>setForm((state)=>({...state, password:text}))}
                    label="Password"
                    secureTextEntry={true}
        />
        <CustomButton
            title="Sign Up"
        />

        <View className="flex justify-center mt-5 flex-row gap-2">
            <Text className="base-regular text-gray-100">
                Already have an account?
            </Text>
            <Link href="/sign-in" className="base-bold text-primary">
                Sign In
            </Link>
        </View>
    </View>
  );
};
export default SignUp;

