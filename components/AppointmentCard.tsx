import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import VideoCallButton from '@/components/VideoCallButton';

type AppointmentCardProps = {
  appointment: {
    id: string;
    patientName: string;
    date: string;
    time: string;
  };
  onStartConsultation: () => void;
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onStartConsultation }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.patientName}>Patient: {appointment.patientName}</Text>
      <Text style={styles.details}>Date: {appointment.date}</Text>
      <Text style={styles.details}>Time: {appointment.time}</Text>
      <View style={styles.buttonContainer}>
        <VideoCallButton appointmentId={appointment.id} />
        <TouchableOpacity style={styles.consultButton} onPress={onStartConsultation}>
          <Text style={styles.consultButtonText}>Start Consultation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  consultButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  consultButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AppointmentCard;
