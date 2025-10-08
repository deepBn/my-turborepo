import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Center } from "@/components/ui/center";

export default function Native() {
  return (
    <View className="flex-1 items-center justify-center bg-white w-full">
      <Center className="w-[300px]">
        <Text style={styles.header}>Native</Text>
        <Button
          onClick={() => {
            console.log("Pressed!");
            alert("Pressed!");
          }}
          text="Boop"
        />
        <Progress value={40} size="md" orientation="horizontal" className="mt-10">
          <ProgressFilledTrack />
        </Progress>
        <StatusBar style="auto" />
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
