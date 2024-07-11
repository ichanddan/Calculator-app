import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [displayValue, setDisplayValue] = useState("");
  const handleEqual = () => {
    setDisplayValue(eval(displayValue));
    console.log(eval(displayValue));
  };
  return (
    <View className="flex-1 p-4 mt-10 items-center justify-center bg-black">
      <StatusBar style="auto" />
      <Text className="p-5 w-full h-1/4 text-right font-semibold text-5xl text-white rounded-xl">
        {displayValue}
      </Text>
      <View className="flex-col">
        <View className="flex-row justify-between items-center gap-8 mt-1">
          <TouchableOpacity
            className="py-4 px-20 bg-[#A5A5A5] rounded-2xl"
            onPress={() => {
              setDisplayValue("");
            }}
          >
              <Text className="text-4xl text-black">C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6 bg-[#A5A5A5] rounded-2xl"
            onPress={() => {
              setDisplayValue(displayValue + "%");
            }}
          >
            <Text className="text-4xl text-black">%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6 rounded-2xl bg-[#F89B10] text-white"
            onPress={() => {
              setDisplayValue(displayValue + "*");
            }}
          >
            <Text className="text-4xl  text-white">x</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center gap-8 mt-1">
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "9");
            }}
          >
            <Text className="text-4xl text-white">9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "8");
            }}
          >
            <Text className="text-4xl text-white">8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "7");
            }}
          >
            <Text className="text-4xl text-white">7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl  bg-[#F89B10]"
            onPress={() => {
              setDisplayValue(displayValue + "/");
            }}
          >
            <Text className="text-4xl px-0.5 text-white">/</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center gap-8 mt-1">
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "6");
            }}
          >
            <Text className="text-4xl text-white">6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "5");
            }}
          >
            <Text className="text-4xl text-white">5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "4");
            }}
          >
            <Text className="text-4xl text-white">4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6 rounded-2xl bg-[#F89B10]"
            onPress={() => {
              setDisplayValue(displayValue + "-");
            }}
          >
            <Text className="text-4xl px-1 text-white">-</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center gap-8 mt-1">
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "3");
            }}
          >
            <Text className="text-4xl text-white">3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "2");
            }}
          >
            <Text className="text-4xl text-white">2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "1");
            }}
          >
            <Text className="text-4xl text-white">1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6 rounded-2xl bg-[#F89B10]"
            onPress={() => {
              setDisplayValue(displayValue + "+");
            }}
          >
            <Text className="text-4xl text-white">+</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center gap-8 mt-1">
          <TouchableOpacity
            className="py-4 px-20 rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + "0");
            }}
          >
            <Text className="text-4xl text-white">0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6  rounded-2xl bg-[#333333]"
            onPress={() => {
              setDisplayValue(displayValue + ".");
            }}
          >
            <Text className="text-4xl px-1 text-white">.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 px-6 rounded-2xl bg-[#F89B10]"
            onPress={handleEqual}
          >
            <Text className="text-4xl text-white">=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
