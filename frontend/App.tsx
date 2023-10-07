import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

/*
 * Component for user to click on times
 * @param {Date} time
 */
function TimeBlock(time: Date) {
  return (
    <View style={styles.timeBlock}>
      <Text style={styles.timeBlockMetaData}>{time.getHours()}</Text>
      <View style={styles.timeBlockContainer}></View>
    </View>
  );
}

function TimeBlockRow() {

}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Choose your available times</Text>
      {
        for (let i: number = 0; i < 10; i++) {
          
        }
      }
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
  timeBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeBlockMetaData: {
    marginRight: 10,
  },
  timeBlockContainer: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
    height: 30,
    width: 300,
  },
});
