import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const notifications = [
  {
    id: "1",
    title: "Appointment Reminder",
    message: "You have an appointment with Dr. Smith tomorrow at 10:00 AM.",
    timestamp: "2023-10-10 09:00 AM",
  },
  {
    id: "2",
    title: "Medication Alert",
    message: "It's time to take your medication: Medication A.",
    timestamp: "2023-10-09 08:00 AM",
  },
  {
    id: "3",
    title: "New Message",
    message: "Dr. Johnson sent you a message: 'How are you feeling today?'",
    timestamp: "2023-10-08 07:00 AM",
  },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
          </View>
        )}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  notificationList: {
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  notificationTimestamp: {
    fontSize: 12,
    color: "gray",
  },
});

export default NotificationsScreen;