import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export default function IngredientScreen({ route }) {
  const { dish } = route.params;

  return (
    <View style={style.main}>
      <Text style={style.dishname}>{dish.name}</Text>


      <View style={style.row}>

        <View style={style.textBox}>
          <Text style={style.description}>{dish.description}</Text>
        </View>


        <Image
          source={{
            uri: dish.image
              ? dish.image
              : dish.category?.image || "https://via.placeholder.com/150",
          }}
          style={style.image}
        />
      </View>

 
      <FlatList
        data={dish.ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={style.ingredientRow}>
            <View style={style.textBox}>
              <Text style={style.ingredientName}>{item.name}</Text>
              <Text style={style.ingredientQty}>{item.quantity}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    padding: 20,
  },
  dishname: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  textBox: {
    flex: 1,
    marginRight: 10,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  ingredientRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: "500",
  },
  ingredientQty: {
    fontSize: 14,
    color: "#555",
  },
});
