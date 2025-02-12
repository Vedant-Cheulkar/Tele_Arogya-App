import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const DoctorDashboard = () => {
  // Dummy data for demonstration
  const patients = [
    { id: "1", name: "John Doe", lastVisit: "2023-10-01" },
    { id: "2", name: "Jane Smith", lastVisit: "2023-09-28" },
  ];

  const notifications = [
    { id: "1", message: "Lab results for John Doe are ready" },
    { id: "2", message: "New message from Jane Smith" },
  ];

  const appointments = [
    { id: "1", patient: "John Doe", time: "10:00 AM", reason: "Follow-Up" },
    { id: "2", patient: "Jane Smith", time: "11:30 AM", reason: "New Patient" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <TouchableOpacity onPress={() => router.push("/doctor/SettingScreen")}>
          <Ionicons name="settings" size={24} color="#4f46e5" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.profileImage} />
        <Text style={styles.greeting}>Good morning, Doctor!</Text>
        <Text style={styles.subText}>Here's your daily overview.</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/doctor/MyPatientsScreen")}>
          <Ionicons name="people" size={28} color="#4f46e5" />
          <Text style={styles.actionText}>Patients</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/doctor/AppointmentsScreen")}>
          <Ionicons name="calendar" size={28} color="#4f46e5" />
          <Text style={styles.actionText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/doctor/notifications")}>
          <Ionicons name="notifications" size={28} color="#4f46e5" />
          <Text style={styles.actionText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Patients */}
      <Text style={styles.sectionTitle}>Recent Patients</Text>
      <View style={styles.sectionContainer}>
        {patients.map((patient) => (
          <TouchableOpacity key={patient.id} style={styles.patientCard} onPress={() => router.push(`/doctor/PatientProfileScreen`)}>
            <Text style={styles.patientName}>{patient.name}</Text>
            <Text style={styles.patientLastVisit}>Last Visit: {patient.lastVisit}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notifications */}
      <Text style={styles.sectionTitle}>Notifications</Text>
      <View style={styles.sectionContainer}>
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationCard} onPress={() => router.push("/doctor/notifications")}>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Upcoming Appointments */}
      <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
      <View style={styles.sectionContainer}>
        {appointments.map((appointment) => (
          <TouchableOpacity key={appointment.id} style={styles.appointmentCard} onPress={() => router.push("/doctor/AppointmentsScreen")}>
            <Text style={styles.appointmentPatient}>{appointment.patient}</Text>
            <Text style={styles.appointmentTime}>{appointment.time}</Text>
            <Text style={styles.appointmentReason}>{appointment.reason}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4f46e5",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4f46e5",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  subText: {
    fontSize: 14,
    color: "#666",
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "30%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  actionText: {
    fontSize: 14,
    color: "#4f46e5",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4f46e5",
  },
  sectionContainer: {
    marginBottom: 20,
  },
  patientCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  patientLastVisit: {
    fontSize: 14,
    color: "#666",
  },
  notificationCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  notificationMessage: {
    fontSize: 16,
  },
  appointmentCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  appointmentPatient: {
    fontSize: 16,
    fontWeight: "bold",
  },
  appointmentTime: {
    fontSize: 14,
    color: "#666",
  },
  appointmentReason: {
    fontSize: 14,
    color: "#666",
  },
});

export default DoctorDashboard;