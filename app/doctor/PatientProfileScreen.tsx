import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";

// Define the type for the route parameters
type PatientProfileScreenRouteProp = RouteProp<
  { PatientProfile: { patientId: string } },
  "PatientProfile"
>;

// Define the props for the component
interface PatientProfileScreenProps {
  route: PatientProfileScreenRouteProp;
}

const PatientProfileScreen = ({ route }: PatientProfileScreenProps) => {
  const { patientId } = route.params;

  // Fetch patient data based on patientId (to be implemented)
  const patient = {
    id: patientId,
    name: "John Doe",
    age: 35,
    gender: "Male",
    lastVisit: "2023-10-15",
    medicalHistory: "Hypertension, Diabetes",
    prescriptions: ["Metformin", "Lisinopril"],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{patient.name}</Text>
      <Text style={styles.details}>
        {patient.age} years, {patient.gender}
      </Text>
      <Text style={styles.lastVisit}>Last Visit: {patient.lastVisit}</Text>

      {/* Medical History */}
      <Text style={styles.sectionTitle}>Medical History</Text>
      <Text style={styles.sectionContent}>{patient.medicalHistory}</Text>

      {/* Prescriptions */}
      <Text style={styles.sectionTitle}>Prescriptions</Text>
      {patient.prescriptions.map((prescription, index) => (
        <Text key={index} style={styles.sectionContent}>
          - {prescription}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  lastVisit: {
    fontSize: 14,
    color: "#888",
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
  },
});

export default PatientProfileScreen;