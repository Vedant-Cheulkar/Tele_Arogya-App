import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const medications = [
  { id: "1", name: "Medication A", dosage: "1 tablet daily", reminder: "8:00 AM" },
  { id: "2", name: "Medication B", dosage: "2 tablets twice daily", reminder: "12:00 PM" },
  { id: "3", name: "Medication C", dosage: "1 capsule at bedtime", reminder: "10:00 PM" },
];

const MedicationScreen = () => {
  const [refillRequested, setRefillRequested] = useState<string[]>([]);

  const handleRefill = (medicationId: string) => {
    if (!refillRequested.includes(medicationId)) {
      setRefillRequested([...refillRequested, medicationId]);
      alert(`Refill requested for ${medications.find((m) => m.id === medicationId)?.name}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medications</Text>
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.medicationCard}>
            <Text style={styles.medicationName}>{item.name}</Text>
            <Text style={styles.medicationDosage}>{item.dosage}</Text>
            <Text style={styles.medicationReminder}>Reminder: {item.reminder}</Text>
            <TouchableOpacity
              style={styles.refillButton}
              onPress={() => handleRefill(item.id)}
              disabled={refillRequested.includes(item.id)}
            >
              <Text style={styles.refillButtonText}>
                {refillRequested.includes(item.id) ? "Refill Requested" : "Request Refill"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.medicationList}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  medicationList: {
    paddingBottom: 20,
  },
  medicationCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  medicationDosage: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  medicationReminder: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },
  refillButton: {
    backgroundColor: "#4f46e5",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  refillButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default MedicationScreen;