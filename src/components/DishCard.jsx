import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DishCard({ dish, onToggle, onViewIngredients, isSelected }) {
  return (
    <View style={styles.card}>
      {/* Left Side */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>
          {dish.description}{" "}
          <Text style={styles.readMore}>Read more</Text>
        </Text>

        <TouchableOpacity onPress={onViewIngredients}>
          <Text style={styles.ingredient}> <Icon name="sack" style={styles.ingredient} /> Ingredient</Text>
        </TouchableOpacity>
      </View>

  
      <View style={styles.rightContainer}>
        {/* CASE 1: Only Added box (when selected & VEG) */}
        {isSelected && dish.type === "VEG" && (
          <TouchableOpacity style={styles.addedBox} onPress={onToggle}>
            <Text style={styles.addedText}>Remove</Text>
          </TouchableOpacity>
        )}

        {/* CASE 2: Show image + Add/Remove button */}
        {(!isSelected || dish.type !== "VEG") && (
          <>
            <Image
              source={{
                uri: dish.image
                  ? dish.image
                  : dish.category?.image || "https://via.placeholder.com/80",
              }}
              style={styles.image}
            />

            <TouchableOpacity
              style={[
                styles.actionButton,
                isSelected ? styles.removeBtn : styles.addBtn,
              ]}
              onPress={onToggle}
            >
              <Text
                style={[styles.actionText, isSelected && styles.removeText]}
              >
                {isSelected ? "Remove" : "Add +"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C1C1C"
  },
  desc: {
    fontSize: 13,
    color: "#7E7E7E",
    marginVertical: 4,
    fontWeight: 600
  },
  readMore: {
    color: "black",
    fontWeight: "600",
  },
  ingredient: {
    color: "#FF8800",
    marginTop: 6,
    fontWeight: "500",
  },
  rightContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 6,
  },
  actionButton: {
    width: "74",
    paddingVertical: 6,
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addBtn: {
    backgroundColor: "#73AE78", 
  },
  removeBtn: {
    backgroundColor: "#fff3e0", 
    borderWidth: 1,
    borderColor: "#ff9800",
  },
  actionText: {
    fontWeight: "bold",
    color: "white",
  },
  removeText: {
    color: "#ff9800",
  },
  addedBox: {
    backgroundColor: "#1C1C1C26",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  addedText: {
    color: "#FF941A",
    fontWeight: "bold",
  },
});
