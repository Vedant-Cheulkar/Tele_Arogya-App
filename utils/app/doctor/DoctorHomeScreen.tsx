import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const DoctorDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <View style={styles.container}>
            {/* Sidebar */}
            <View style={[styles.sidebar, isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed]}>
                <Text style={styles.logo}>Health Monitoring</Text>
                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="home" size={24} color="#007AFF" />
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/doctor/MyPatientsScreen')}>
                    <Ionicons name="people" size={24} color="#007AFF" />
                    <Text style={styles.menuText}>My Patients</Text>
                </TouchableOpacity>








                <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/doctor/notifications')}>
                    <Ionicons name="notifications" size={24} color="#007AFF" />
                    <Text style={styles.menuText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}onPress={() => router.push('/doctor/notifications')}>
                    <Ionicons name="calendar" size={24} color="#007AFF" />
                    <Text style={styles.menuText}>Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="chatbubble" size={24} color="#007AFF" />
                    <Text style={styles.menuText}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="settings" size={24} color="#007AFF" />
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
            </View>

            {/* Main Content */}
            <View style={styles.mainContent}>
                <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
                    <Ionicons name="menu" size={28} color="#007AFF" />
                </TouchableOpacity>

                <ScrollView contentContainerStyle={styles.dashboardContent}>
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
                        <Text style={styles.greeting}>Good morning, Doctor!</Text>
                        <Text style={styles.subText}>Check your dashboard for updates.</Text>
                    </View>

                    {/* Dashboard Cards */}
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>My Patients</Text>
                            <Text style={styles.cardValue}>89</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>New Patients</Text>
                            <Text style={styles.cardValue}>1</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Unread Messages</Text>
                            <Text style={styles.cardValue}>7</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Unread Notifications</Text>
                            <Text style={styles.cardValue}>2</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Today's Appointments</Text>
                            <Text style={styles.cardValue}>6</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Pending Appointments</Text>
                            <Text style={styles.cardValue}>4</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Cancelled Appointments</Text>
                            <Text style={styles.cardValue}>1</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F8F9FA',
    },
    sidebar: {
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 10,
        borderRightWidth: 1,
        borderRightColor: '#ddd',
        position: 'absolute',
        height: '100%',
        zIndex: 2,
    },
    sidebarOpen: {
        width: 220,
    },
    sidebarClosed: {
        width: 0,
        overflow: 'hidden',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#007AFF',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
    },
    menuText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#333',
    },
    mainContent: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    menuButton: {
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    dashboardContent: {
        alignItems: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#007AFF',
    },
    greeting: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    subText: {
        fontSize: 14,
        color: '#666',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        width: '45%',
        margin: 10,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        color: '#555',
    },
    cardValue: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#007AFF',
    },
});

export default DoctorDashboard;