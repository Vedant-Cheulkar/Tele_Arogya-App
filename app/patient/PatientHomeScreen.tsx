import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const PatientHomeScreen = () => {
  // Dummy data for demonstration
  const upcomingAppointments = [
    { id: "1", doctor: "Dr. Smith", time: "10:00 AM", date: "Tomorrow" },
  ];

  const medications = [
    { id: "1", name: "Medication A", dosage: "Take 1 daily" },
    { id: "2", name: "Medication B", dosage: "Take 2 daily" },
  ];

  const medicalRecords = [
    { id: "1", name: "Lab Report", date: "2023-10-01" },
    { id: "2", name: "X-Ray Report", date: "2023-09-15" },
  ];

  const healthData = {
    heartRate: 72,
    bloodPressure: "120/80",
    glucoseLevel: 90,
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/patient/PatientProfile")}>
          <Ionicons name="person-circle" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={18} color="white" />
          <Text style={styles.locationText}>Kharghar</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="white" />
        </View>
        <TouchableOpacity onPress={() => router.push("/patient/NotificationScreen")}>
          <Ionicons name="notifications" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for clinics, doctors, or health topics"
          placeholderTextColor="gray"
        />
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <TouchableOpacity
          style={styles.quickAction}
          onPress={() => router.push("/patient/AppointmentBookingScreen")}
        >
          <FontAwesome name="calendar" size={24} color="#4f46e5" />
          <Text style={styles.quickActionText}>Book Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quickAction}
          onPress={() => router.push("/patient/VideoCallScreen")}
        >
          <FontAwesome name="video-camera" size={24} color="#4f46e5" />
          <Text style={styles.quickActionText}>Video Consult</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quickAction}
          onPress={() => router.push("/patient/ChatScreen")}
        >
          <Ionicons name="chatbubbles" size={24} color="#4f46e5" />
          <Text style={styles.quickActionText}>Chat with Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quickAction}
          onPress={() => router.push("/patient/EmergencyServiceScreen")}
        >
          <FontAwesome name="ambulance" size={24} color="#4f46e5" />
          <Text style={styles.quickActionText}>Emergency</Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Appointments */}
      <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
      <FlatList
        data={upcomingAppointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointmentCard}>
            <Text style={styles.appointmentText}>
              {item.doctor} - {item.time}, {item.date}
            </Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Call</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Health Summary */}
      <Text style={styles.sectionTitle}>Health Summary</Text>
      <View style={styles.healthSummaryContainer}>
        <View style={styles.healthMetric}>
          <Text style={styles.healthMetricValue}>{healthData.heartRate}</Text>
          <Text style={styles.healthMetricLabel}>Heart Rate</Text>
        </View>
        <View style={styles.healthMetric}>
          <Text style={styles.healthMetricValue}>{healthData.bloodPressure}</Text>
          <Text style={styles.healthMetricLabel}>Blood Pressure</Text>
        </View>
        <View style={styles.healthMetric}>
          <Text style={styles.healthMetricValue}>{healthData.glucoseLevel}</Text>
          <Text style={styles.healthMetricLabel}>Glucose Level</Text>
        </View>
      </View>

      {/* Medications */}
      <Text style={styles.sectionTitle}>Medications</Text>
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.medicationCard}>
            <Text style={styles.medicationText}>
              {item.name} - {item.dosage}
            </Text>
            <TouchableOpacity style={styles.refillButton}>
              <Text style={styles.refillButtonText}>Refill</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Medical Records */}
      <Text style={styles.sectionTitle}>Medical Records</Text>
      <FlatList
        data={medicalRecords}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recordCard}>
            <Text style={styles.recordText}>
              {item.name} - {item.date}
            </Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#4f46e5" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => router.push("/patient/DoctorSearchScreen")}>
          <Ionicons name="search" size={24} color="gray" />
          <Text style={styles.navText}>Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/patient/HealthSummaryScreen")}>
          <Ionicons name="heart" size={24} color="gray" />
          <Text style={styles.navText}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => router.push("/patient/MedicalRecordScreen")}>
          <Ionicons name="time" size={24} color="gray" />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => router.push("/patient/MedicationScreen")}>
          <Ionicons name="menu" size={24} color="gray" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4f46e5",
    padding: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "white",
    marginLeft: 5,
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: 15,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: "black",
    flex: 1,
  },
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  quickAction: {
    alignItems: "center",
  },
  quickActionText: {
    marginTop: 5,
    fontSize: 12,
    color: "#4f46e5",
  },
  sectionTitle: {
    margin: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  appointmentCard: {
    backgroundColor: "white",
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  appointmentText: {
    fontSize: 16,
  },
  joinButton: {
    backgroundColor: "#4f46e5",
    padding: 10,
    borderRadius: 5,
  },
  joinButtonText: {
    color: "white",
    fontSize: 14,
  },
  healthSummaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    marginBottom: 15,
  },
  healthMetric: {
    alignItems: "center",
  },
  healthMetricValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  healthMetricLabel: {
    fontSize: 14,
    color: "gray",
  },
  medicationCard: {
    backgroundColor: "white",
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  medicationText: {
    fontSize: 16,
  },
  refillButton: {
    backgroundColor: "#4f46e5",
    padding: 10,
    borderRadius: 5,
  },
  refillButtonText: {
    color: "white",
    fontSize: 14,
  },
  recordCard: {
    backgroundColor: "white",
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  recordText: {
    fontSize: 16,
  },
  viewButton: {
    backgroundColor: "#4f46e5",
    padding: 10,
    borderRadius: 5,
  },
  viewButtonText: {
    color: "white",
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e7e7e7",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "gray",
  },
});

export default PatientHomeScreen;