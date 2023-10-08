import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ITimeBlock {
  time: Date;
}

/*
 * Component for user to click on times
 * @param {Date} time
 */
function TimeBlock(props: ITimeBlock) {
  let hour: number = props.time.getHours();
  let suffix: string = "AM";

  if (hour == 12) {
    suffix = "PM";
  } else if (hour > 12) {
    hour -= 12;
    suffix = "PM";
  }

  return (
    <View style={styles.timeBlock}>
      <Text style={styles.timeBlockMetaData}>
        {hour} {suffix}
      </Text>
      <View style={styles.timeBlockContainer}></View>
    </View>
  );
}

interface ISubmitButton {
  action: any;
}

function SubmitButton(props: ISubmitButton) {
  return (
    <Pressable style={styles.submitButton} onPress={props.action}>
      <Text style={styles.submitButtonText}>Submit</Text>
    </Pressable>
  );
}

export default function App() {
  const startHour: number = 9;
  const endHour: number = 22;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose your available times.</Text>
      {[...Array(endHour - startHour)].map((x, i) => {
        let time: Date = new Date();
        time.setHours(startHour + i);
        return <TimeBlock time={time} />;
      })}
      <View style={{ marginTop: 20 }}>
        <SubmitButton action={() => {}} />
      </View>
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
    width: 42,
    textAlign: "right",
    marginRight: 10,
  },
  timeBlockContainer: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    height: 30,
    width: 300,
  },
  header: {
    fontWeight: "900",
    fontSize: 30,
    width: 300,
    textAlign: "center",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
  },
  submitButtonText: {
    fontWeight: "700",
    color: "white",
  },
});
