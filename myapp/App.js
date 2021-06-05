import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const App = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch("http://10.0.2.2:3000/users", {
        method: "GET",
      });

      const data = await res.json();
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  };

  const saveUser = async () => {
    try {
      const res = await fetch("http://10.0.2.2:3000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
        }),
      });

      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222f3e" />

      <Text style={styles.title}>Users App</Text>

      {/* Divider */}
      <View style={styles.divider} />

      <TextInput
        style={styles.input}
        placeholder="Write your username"
        placeholderTextColor="#576574"
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="youremail@someurl.tld"
        placeholderTextColor="#576574"
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Write your phone number"
        placeholderTextColor="#576574"
        value={user.phone}
        onChangeText={(text) => setUser({ ...user, phone: text })}
      />

      <TouchableOpacity style={styles.button} onPress={saveUser}>
        <Text style={styles.buttonText}>Save User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getUsers}>
        <Text style={styles.buttonText}>View Data</Text>
      </TouchableOpacity>

      <ScrollView>
        {users.map((user) => (
          <View style={{ flexDirection: "row" }} key={user._id}>
            <Text style={{ color: "#fff" }}>{user._id}</Text>
            <Text>{user.name}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.phone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    backgroundColor: "#222f3e",
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginTop: 10,
    width: "90%",
  },
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 30,
    color: "#ffffff",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default App;
