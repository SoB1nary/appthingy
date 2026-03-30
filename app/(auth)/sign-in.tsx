import { router } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 items-center">
      <Text>Profile</Text>
      <Button title="Sign In" onPress={() => router.push("/sign-in")}></Button>
    </SafeAreaView>
  );
};
export default SignIn;
