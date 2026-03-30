import { router } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 items-center">
      <Text>Sign Up</Text>
      <Button title="Sign Up" onPress={() => router.push("/sign-up")}></Button>
    </SafeAreaView>
  );
};
export default SignUp;
