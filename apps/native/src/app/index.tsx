import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      <Progress value={40} size="md" orientation="horizontal">
        <ProgressFilledTrack />
      </Progress>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
