import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const HelpSupportScreen = () => {
  const handleContactSupport = () => {
    Linking.openURL("mailto:support@telemedicineapp.com");
  };

  const handleVisitFAQ = () => {
    Linking.openURL("https://telemedicineapp.com/faq");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Contact Support Section */}
      <TouchableOpacity style={styles.section} onPress={handleContactSupport}>
        <Ionicons name="mail" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Contact Support</Text>
        <Ionicons name="chevron-forward" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* FAQ Section */}
      <TouchableOpacity style={styles.section} onPress={handleVisitFAQ}>
        <Ionicons name="help-circle" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>FAQ</Text>
        <Ionicons name="chevron-forward" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Report an Issue Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push("/doctor/ReportIssueScreen")}>
        <Ionicons name="bug" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>Report an Issue</Text>
        <Ionicons name="chevron-forward" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* User Guide Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push("/doctor/UserGuideScreen")}>
        <Ionicons name="book" size={24} color="#007AFF" />
        <Text style={styles.sectionTitle}>User Guide</Text>
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

export default HelpSupportScreen;