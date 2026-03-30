
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";
import { offers, images } from "../constants";
import React, { Fragment } from "react";
import { cn } from "@sglara/cn";
import { FlatList, Image, Pressable, Text, View, TouchableOpacity } from "react-native";
import CartButton from "@/components/cartButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-yellow-600 flex-1">
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
      <FlatList data = {offers}
                renderItem={

                    ({item, index}) => {
                        const isEven: boolean = index % 2 == 1;
                        return (
                            <View>
                                        <Pressable
                                          className={cn(
                                            "offer-card",
                                            isEven ? "flex-row-reverse" : "flex-row",
                                          )}
                                          style={{ backgroundColor: item.color }}
                                        >
                                          {({ pressed }) => (
                                            <Fragment>
                                              <View className="h-full w-1/2">
                                                <Image
                                                  source={item.image}
                                                  className="size-full"
                                                  resizeMode={"contain"}
                                                />
                                              </View>
                                              <View
                                                className={cn(
                                                  "offer-card__info",
                                                  isEven ? "pl-10" : "pr-10",
                                                )}
                                              >
                                                <Text
                                                  className="h1-bold  leading-tight"
                                                  style={{ color: item.textColor }}
                                                >
                                                  {item.title}
                                                </Text>
                                                <Image
                                                  source={images.arrowRight}
                                                  className="size-10"
                                                  resizeMode="contain"
                                                  tintColor="#ffffff"
                                                />
                                              </View>
                                            </Fragment>
                                          )}
                                        </Pressable>
                                      </View>
                            )
                        }
                    }/>

    </SafeAreaView>
  );
}
