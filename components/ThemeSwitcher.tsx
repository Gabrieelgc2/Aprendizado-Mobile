import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View
      style={[
        styles.container,
        isDarkTheme ? styles.darkTheme : styles.lightTheme,
      ]}
    >
      <Text style={styles.text}>Tema {isDarkTheme ? "Escuro" : "Claro"}</Text>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  lightTheme: {
    backgroundColor: "#fff",
  },

  darkTheme: {
    backgroundColor: "#333",
  },

  text: {
    fontSize: 18,
    color: "orange",
    marginBottom: 20,
  },

});