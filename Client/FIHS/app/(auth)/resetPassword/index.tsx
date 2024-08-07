import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Button,
  ButtonText,
  View,
  Text,
  HStack,
  VStack,
  Input,
  ImageBackground,
} from "@gluestack-ui/themed";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function index() {
  const router = useRouter();
  return (
    <ImageBackground
      style={{
        backgroundColor: "",
        height: "100%",
        width: "100%",
      }}
      source={require("@/assets/images/LoginBG.png")}
      alt='background image'
    >
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
          top: "35%",
          width: "100%",
          left: 0,
          //   marginLeft:"2%",
          right: 0,
          position: "absolute",
          height: 250,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            marginHorizontal: 15,
          }}
        >
          <Text
            textAlign='center'
            color='$000'
            fontSize={25}
            fontWeight='800'
            pt={30}
            pb={10}
          >
            {" "}
            اعاده تعيين كلمه المرور
          </Text>
          <View>
            <Text
              fontSize={14}
              fontWeight='400'
              color='$000'
              marginVertical={5}
              marginRight={15}
            >
              ادخل بريدك الالكتروني لاسترجاع حسابك
            </Text>
            <View
              style={{
                width: "92%",
                marginRight: 12,
                marginLeft: 12,
                height: 48,
                borderWidth: 1,
                borderTopEndRadius: 10,
                borderBottomStartRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                backgroundColor: "#fff",
                borderColor: "#000",
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  textAlign: "right",
                  padding: 8,
                }}
                placeholder='ادخل البريد الالكتروني '
              />
            </View>
          </View>

          <VStack
            justifyContent='center'
            alignItems='center'
            marginVertical={10}
          >
            <Button
              w={130}
              h={"$12"}
              backgroundColor='rgba(41, 133, 120,0.9)'
              mb={10}
              mt={10}
              borderBottomStartRadius={10}
              borderTopEndRadius={10}
              onPress={() => router.push("/(auth)/passwordCode/")}
            >
              <ButtonText color='#fff'>ارسال الكود</ButtonText>
            </Button>
          </VStack>
        </View>
      </SafeAreaView>
      {/* <View w={300} h={300} backgroundColor='rgba(41, 133, 120,0.9)' borderRadius={150} top={450} left={20} zIndex={2} flex={0} justifyContent='center'>
    <Text  padding={20} color='white'>
      سيتم ارسال الكود في رساله عبر الايميل الذي تم التسجيل به 
    </Text>
  </View>
  <View w={150} h={150} backgroundColor='rgba(41, 133, 120,0.9)' borderRadius={100} top={350} left={20} zIndex={1}>

  </View>
  <View w={150} h={150} backgroundColor='rgba(41, 133, 120,0.9)' borderRadius={100} top={0} left={250} zIndex={1}>

  </View> */}
    </ImageBackground>
  );
}
