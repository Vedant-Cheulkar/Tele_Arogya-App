import React from "react";
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UserGuideScreen = () => {
  const handleOpenGuide = () => {
    Linking.openURL("https://telemedicineapp.com/user-guide");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Guide</Text>

      {/* Introduction Section */}
      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.sectionContent}>
        Welcome to the Telemedicine App! This guide will help you navigate the app and make the most of its features.
      </Text>

      {/* Getting Started Section */}
      <Text style={styles.sectionTitle}>Getting Started</Text>
      <Text style={styles.sectionContent}>
        - Sign up or log in to your account.
        - Complete your profile to get started.
        - Navigate through the app using the bottom menu.
      </Text>

      {/* Appointments Section */}
      <Text style={styles.sectionTitle}>Appointments</Text>
      <Text style={styles.sectionContent}>
        - Schedule new appointments with your patients.
        - View and manage upcoming, past, and canceled appointments.
      </Text>

      {/* Patients Section */}
      <Text style={styles.sectionTitle}>Patients</Text>
      <Text style={styles.sectionContent}>
        - View a list of your patients.
        - Access patient profiles and medical history.
      </Text>

      {/* Settings Section */}
      <Text style={styles.sectionTitle}>Settings</Text>
      <Text style={styles.sectionContent}>
        - Customize app preferences, including notifications and dark mode.
        - Manage your privacy settings.
      </Text>

      {/* Additional Sections for More Guidance */}
      <Text style={styles.sectionTitle}>Managing Prescriptions</Text>
      <Text style={styles.sectionContent}>
        - Create and send e-prescriptions to your patients.
        - View prescription history for each patient.
      </Text>

      <Text style={styles.sectionTitle}>Video Consultations</Text>
      <Text style={styles.sectionContent}>
        - Conduct virtual consultations with your patients.
        - Use screen sharing and call recording features.
      </Text>

      <Text style={styles.sectionTitle}>Analytics</Text>
      <Text style={styles.sectionContent}>
        - View health trends and consultation analytics.
        - Generate custom reports for specific time periods.
      </Text>

      {/* Open Full Guide Button */}
      <TouchableOpacity style={styles.openGuideButton} onPress={handleOpenGuide}>
        <Text style={styles.openGuideButtonText}>Open Full User Guide</Text>
        <Ionicons name="open-outline" size={20} color="#007AFF" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures the content can scroll
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    lineHeight: 24, // Improves readability
  },
  openGuideButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40, // Adds space at the bottom
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  openGuideButtonText: {
    fontSize: 16,
    color: "#007AFF",
    marginRight: 10,
  },
});

export default UserGuideScreen;