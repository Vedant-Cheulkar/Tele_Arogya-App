import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Notifications() {
  const handleViewNotification = (notificationId: number) => {
    // Logic for viewing the details of a specific notification
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.description}>Stay up to date with your latest updates and alerts.</Text>

      <ScrollView contentContainerStyle={styles.notificationsContainer}>
        {/* Placeholder for notifications */}
        <TouchableOpacity
          style={styles.notificationCard}
          onPress={() => handleViewNotification(1)}
        >
          <Text style={styles.notificationTitle}>Appointment Reminder</Text>
          <Text style={styles.notificationDetails}>Your appointment with Dr. Smith is tomorrow at 10:00 AM.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.notificationCard}
          onPress={() => handleViewNotification(2)}
        >
          <Text style={styles.notificationTitle}>Health Tip of the Day</Text>
          <Text style={styles.notificationDetails}>Drink at least 8 glasses of water daily to stay hydrated!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.notificationCard}
          onPress={() => handleViewNotification(3)}
        >
          <Text style={styles.notificationTitle}>Medical Record Update</Text>
          <Text style={styles.notificationDetails}>Your latest lab results are now available.</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  notificationsContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  notificationDetails: {
    fontSize: 14,
    color: '#777',
  },
});