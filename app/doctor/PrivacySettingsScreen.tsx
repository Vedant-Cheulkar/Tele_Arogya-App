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

const PrivacySettingsScreen = () => {
  // State for toggles
  const [dataSharingEnabled, setDataSharingEnabled] = useState(false);
  const [locationTrackingEnabled, setLocationTrackingEnabled] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Data Sharing Section */}
      <View style={styles.section}>
        <Ionicons name="share-social" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Allow Data Sharing</Text>
        <Switch
          value={dataSharingEnabled}
          onValueChange={setDataSharingEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={dataSharingEnabled ? "#007AFF" : "#f4f3f4"}
        />
      </View>

      {/* Location Tracking Section */}
      <View style={styles.section}>
        <Ionicons name="location" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Enable Location Tracking</Text>
        <Switch
          value={locationTrackingEnabled}
          onValueChange={setLocationTrackingEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={locationTrackingEnabled ? "#007AFF" : "#f4f3f4"}
        />
      </View>

      {/* Privacy Policy Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => console.log("Navigate to Privacy Policy")}
      >
        <Ionicons name="document-text" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Terms of Service Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => console.log("Navigate to Terms of Service")}
      >
        <Ionicons name="document" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Terms of Service</Text>
        <Ionicons name="chevron-forward" size={24} color="#007AFF" />
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
});

export default PrivacySettingsScreen;