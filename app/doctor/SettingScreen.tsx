import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const SettingsScreen = () => {
  // State for toggles
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Handle logout
  const handleLogout = () => {
    // Implement logout logic (e.g., clear authentication tokens)
    console.log("User logged out");
    router.push("/login"); // Navigate to the login screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push("/doctor/EditProfileScreen")}
      >
        <Ionicons name="person" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Profile</Text>
        <Ionicons name="chevron-forward" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Ionicons name="notifications" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#007AFF" : "#f4f3f4"}
        />
      </View>

      {/* Dark Mode Section */}
      <View style={styles.section}>
        <Ionicons name="moon" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#007AFF" : "#f4f3f4"}
        />
      </View>

      {/* Privacy Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push("/doctor/PrivacySettingsScreen")}
      >
        <Ionicons name="lock-closed" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Privacy</Text>
        <Ionicons name="chevron-forward" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Help Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push("/doctor/HelpSupportScreen")}
      >
        <Ionicons name="help-circle" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Help & Support</Text>
        <Ionicons name="chevron-forward" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: "#ff4444",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsScreen;