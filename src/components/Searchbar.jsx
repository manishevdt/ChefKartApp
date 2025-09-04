import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ value, onChange }) {
  return (
    <View style={styles.container}>

      <AntDesign name="arrowleft" size={28} color="black" />

 
      <TextInput
        style={styles.input}
        placeholder="Search dish for your party……"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChange}
      />

  
      <EvilIcons name="search"  style={styles.iconRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",  
    borderWidth: 1,
    borderColor: "#ADADAD",     
    borderRadius: 8,
    paddingHorizontal: 12,
    width: 328,                
               
    marginLeft: 30,               
              
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 8,
    color: "#333",
    marginTop : 0
  },
  iconRight: {
    marginLeft: 8,
    width:  12,
    height: 12,
    color: "#1C1C1C"
  },
});
