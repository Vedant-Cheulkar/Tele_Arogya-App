import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type NotificationCardProps = {
  type: 'info' | 'alert' | 'reminder'; // Different types of notifications
  message: string; // Notification message
  timestamp: string; // Notification time
};

const NotificationCard: React.FC<NotificationCardProps> = ({ type, message, timestamp }) => {
  // Dynamic styling based on notification type
  const getTypeStyle = () => {
    switch (type) {
      case 'info':
        return styles.info;
      case 'alert':
        return styles.alert;
      case 'reminder':
        return styles.reminder;
      default:
        return styles.info;
    }
  };

  return (
    <View style={[styles.card, getTypeStyle()]}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  info: {
    backgroundColor: '#d1ecf1',
    borderColor: '#bee5eb',
  },
  alert: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  reminder: {
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 14,
    color: 'gray',
  },
});

export default NotificationCard;
