import React, { useState } from "react";

import { View, Text, StyleSheet, Switch,TouchableOpacity } from "react-native";
import Dishes from '../data/Dishes.json'
const categories = ["Starter", "MAIN COURSE", "Dessert", "Sides"];

export default function CategoryTabs({selected, onChange})    
{          const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [greenSwitch, setGreenSwitch] = useState(false);
  const [redSwitch, setRedSwitch] = useState(false); 


  const filteredDishes = Dishes.filter((item) => {
    if (item.mealType !== selectedCategory) return false;

    if (greenSwitch && !redSwitch) return item.type === "VEG";
    if (!greenSwitch && redSwitch) return item.type === "NONVEG";
    if (greenSwitch && redSwitch) return true; 
    return true; 
  });
  return (
    <View>
   
     <View style={styles.wrapper}>
  {categories.map((cat) => (
    <TouchableOpacity
      key={cat}
      style={[
        styles.selector,
        { backgroundColor: selected === cat ? "#FF941A" : "gray" },
      ]}
      onPress={() => onChange(cat)}
    >
      <Text style={styles.selectorText}>{cat}</Text>
    </TouchableOpacity>
  ))}
</View>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>
          Main Courses Selected ({filteredDishes.length})
        </Text>


        <Switch
          trackColor={{ false: "#ccc", true: "#4CAF50" }}
          thumbColor={greenSwitch ? "#4CAF50" : "#f4f3f4"}
          onValueChange={() => setGreenSwitch((prev) => !prev)}
          value={greenSwitch}
        />

 
        <Switch
          trackColor={{ false: "#ccc", true: "#F44336" }}
          thumbColor={redSwitch ? "#F44336" : "#f4f3f4"}
          onValueChange={() => setRedSwitch((prev) => !prev)}
          value={redSwitch}
        />
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 5,
  },    wrapper: {
    flexDirection: "row",

    alignItems: "center",
    marginVertical: 10,
   
  },
  selector: {
    flex: 1,                      
    borderRadius: 6,
    paddingVertical: 10,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  selectorText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },

  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
   
    borderColor: "#000",
    paddingVertical: 5,
  },
});
