import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignUp from "./sign-up";

export default function _Layout() {
  return (
    <SafeAreaView className="bg-white flex-1 items-center">
      <Text>Layout Auth</Text>
      <SignUp></SignUp>
    </SafeAreaView>
  );
}
