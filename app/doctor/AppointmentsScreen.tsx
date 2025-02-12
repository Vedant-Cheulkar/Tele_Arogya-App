import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import { router } from 'expo-router';

// Define the Appointment interface
interface Appointment {
    id: string;
    patient: string;
    time: string;
    reason: string;
    date: string;
}

const AppointmentsScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    // Dummy data for appointments
    const dummyAppointments: Appointment[] = [
        { id: '1', patient: 'John Doe', time: '10:00 AM', reason: 'Follow-Up', date: '2023-10-15' },
        { id: '2', patient: 'Jane Smith', time: '11:30 AM', reason: 'New Patient', date: '2023-10-15' },
        { id: '3', patient: 'Alice Johnson', time: '02:00 PM', reason: 'Routine Checkup', date: '2023-10-16' },
    ];

    useEffect(() => {
        // Filter appointments based on the selected date
        const filteredAppointments = dummyAppointments.filter(
            (appointment) => appointment.date === selectedDate
        );
        setAppointments(filteredAppointments);
    }, [selectedDate]);

    const handleDateSelect = (date: { dateString: string }) => {
        setSelectedDate(date.dateString);
    };

    const renderAppointmentItem = ({ item }: { item: Appointment }) => (
        <TouchableOpacity
            style={styles.appointmentItem}
            onPress={() => router.push(`/`)}
        >
            <Text style={styles.patientName}>{item.patient}</Text>
            <Text style={styles.appointmentTime}>{item.time}</Text>
            <Text style={styles.appointmentReason}>{item.reason}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Calendar View */}
            <Calendar
                onDayPress={handleDateSelect}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: '#007AFF' },
                }}
                theme={{
                    selectedDayBackgroundColor: '#007AFF',
                    todayTextColor: '#007AFF',
                    arrowColor: '#007AFF',
                }}
            />

            {/* Appointments List */}
            <Text style={styles.sectionTitle}>Appointments for {selectedDate}</Text>
            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={renderAppointmentItem}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No appointments for this date.</Text>
                }
            />

            {/* Add Appointment Button */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => router.push('/doctor/AddAppointmentScreen')}
            >
                <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8F9FA',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    appointmentItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    patientName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    appointmentTime: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    appointmentReason: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    emptyText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#007AFF',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
});

export default AppointmentsScreen;