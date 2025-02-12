import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const emergencyServices = [
  {
    id: "1",
    name: "Call Ambulance",
    icon: "🚑",
    description: "Call for immediate medical assistance.",
  },
  {
    id: "2",
    name: "Nearest Hospital",
    icon: "🏥",
    description: "Find the nearest hospital.",
  },
  {
    id: "3",
    name: "Emergency Contacts",
    icon: "📞",
    description: "View your emergency contacts.",
  },
];

const EmergencyServiceScreen = () => {
  const handleServicePress = (serviceName: string) => {
    alert(`You selected: ${serviceName}`);
  };

  return (
    <View style={styles.container}>
      {emergencyServices.map((service) => (
        <TouchableOpacity
          key={service.id}
          style={styles.serviceCard}
          onPress={() => handleServicePress(service.name)}
        >
          <Text style={styles.serviceIcon}>{service.icon}</Text>
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  serviceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  serviceIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  serviceDetails: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: "gray",
  },
});

export default EmergencyServiceScreen;