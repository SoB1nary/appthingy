import "@/app/global.css";
import { images, offers } from "@/constants";
import { clsx } from "clsx";
import React, { Fragment } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const OfferList = () => {
  return (
    <FlatList
      data={offers}
      renderItem={({ item, index }) => {
        const isEven: boolean = index % 2 == 1;

        return (
          <View>
            <Pressable
              className={clsx(
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
                    className={clsx(
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
        );
      }}
      contentContainerClassName="pb-28 px-5"
    />
  );
};
export default OfferList;
