import React from "react";
import { View, Text ,StyleSheet} from "react-native";

export default function SummaryScreen({ route }) {
  const { selectedDishes } = route.params;
  return (
    <View style={styles.main}>
      <Text style={styles.summary}>Summary</Text>
      <Text>Total Selected: {selectedDishes.length}</Text>
      {selectedDishes.map((d) => (
        <Text key={d.id}>• {d.name}</Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
    main: {
        padding: 20
    },
    summary: {
        fontSize: 18,
        fontWeight: "bold"
    }
})
