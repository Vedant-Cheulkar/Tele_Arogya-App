import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function AppointmentManagement() {
  const handleViewAppointments = () => {
    // Handle view appointments logic
  };

  const handleRescheduleAppointment = () => {
    // Handle reschedule appointment logic
  };

  const handleCancelAppointment = () => {
    // Handle cancel appointment logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Management</Text>

      <TouchableOpacity style={styles.button} onPress={handleViewAppointments}>
        <Text style={styles.buttonText}>View Appointments</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRescheduleAppointment}>
        <Text style={styles.buttonText}>Reschedule Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={handleCancelAppointment}>
        <Text style={styles.buttonTextSecondary}>Cancel Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#FF4C4C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonTextSecondary: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});