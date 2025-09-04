import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
 
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from "react-native-vector-icons/AntDesign";
import dishes from "../data/Dishes.json";
import DishCard from "../components/DishCard";
import SearchBar from "../components/Searchbar";
import CategoryTabs from "../components/CategoryTabs";

export default function MenuScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [searchText, setSearchText] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);

  const filteredDishes = dishes.filter(
    (d) =>
      d.mealType === selectedCategory &&
      d.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleDish = (dish) => {
    if (selectedDishes.find((d) => d.id === dish.id)) {
      setSelectedDishes(selectedDishes.filter((d) => d.id !== dish.id));
    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  return (
    <SafeAreaView style={style.main}>
      <SearchBar value={searchText} onChange={setSearchText} />
      <CategoryTabs selected={selectedCategory} onChange={setSelectedCategory} />
          <View style={style.categoryHeader}>
    <Text style={style.categoryText}>North Indian</Text>
    <AntDesign name="up" size={18} color="black" />
  </View>

     
      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            onToggle={() => toggleDish(item)}
            onViewIngredients={() =>
              navigation.navigate("Ingredients", { dish: item })
            }
            isSelected={!!selectedDishes.find((d) => d.id === item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={style.footer}>
        <Text style={style.totaldishes}>
          Total Dishes Selected: {selectedDishes.length}
        </Text>
     <TouchableOpacity
  style={style.button}
  onPress={() => navigation.navigate("Summary", { selectedDishes })}
>
  <Text style={style.buttonText}>Continue</Text>
</TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  categoryHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: 16,
  marginVertical: 8,
},
categoryText: {
  fontSize: 16,
  fontWeight: "bold",
},

  footer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "#FFFAF4",
  },
  totaldishes: {
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    paddingVertical: 12,
    width: "100%", 
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
