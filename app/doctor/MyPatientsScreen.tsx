import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

// Define the Patient interface
interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
}

const MyPatientsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [patients, setPatients] = useState<Patient[]>([
    { id: "1", name: "John Doe", age: 35, gender: "Male", lastVisit: "2023-10-15" },
    { id: "2", name: "Jane Smith", age: 28, gender: "Female", lastVisit: "2023-10-10" },
    { id: "3", name: "Alice Johnson", age: 42, gender: "Female", lastVisit: "2023-09-25" },
    { id: "4", name: "Bob Brown", age: 50, gender: "Male", lastVisit: "2023-09-20" },
  ]);

  // Filter patients based on search query
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderPatientItem = ({ item }: { item: Patient }) => (
    <TouchableOpacity
      style={styles.patientItem}
      onPress={() => router.push('/doctor/PatientProfileScreen')}
    >
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{item.name}</Text>
        <Text style={styles.patientDetails}>
          {item.age} years, {item.gender}
        </Text>
      </View>
      <Text style={styles.lastVisit}>Last Visit: {item.lastVisit}</Text>
      <Ionicons name="chevron-forward" size={24} color="#007AFF" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search patients..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Patients List */}
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id}
        renderItem={renderPatientItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No patients found.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  patientItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  patientDetails: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  lastVisit: {
    fontSize: 14,
    color: "#888",
    marginRight: 10,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default MyPatientsScreen;