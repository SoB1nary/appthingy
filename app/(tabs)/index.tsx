import CartButton from "@/components/cartButton";

import "@/app/global.css";
import OffersList from "@/components/offersList";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
export default function Index() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-between flex-row w-full mb-2 px-5">
        <View className="flex-start">
          <Text className="text-success bold">DELIVER TO</Text>
          <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
            <Text className="paragraph-bold text-dark-100">
              Petropavlovsk, KZ
            </Text>
            <Image source={images.arrowDown} />
          </TouchableOpacity>
        </View>
        <CartButton />
      </View>
      <OffersList />
    </SafeAreaView>
  );
}
