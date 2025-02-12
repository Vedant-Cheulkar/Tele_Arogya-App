import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

const doctors = [
  { id: "1", name: "Dr. Smith", specialty: "General Physician", location: "New York" },
  { id: "2", name: "Dr. Johnson", specialty: "Dermatologist", location: "Los Angeles" },
  { id: "3", name: "Dr. Lee", specialty: "Cardiologist", location: "Chicago" },
  { id: "4", name: "Dr. Brown", specialty: "Pediatrician", location: "Houston" },
];

const DoctorSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(query.toLowerCase()) ||
        doctor.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for doctors..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.doctorCard}>
            <Text style={styles.doctorName}>{item.name}</Text>
            <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
            <Text style={styles.doctorLocation}>{item.location}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.doctorList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  doctorList: {
    paddingBottom: 20,
  },
  doctorCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  doctorLocation: {
    fontSize: 12,
    color: "gray",
  },
});

export default DoctorSearchScreen;