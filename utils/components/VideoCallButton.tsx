// components/VideoCallButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface VideoCallButtonProps {
  appointmentId: string; // Pass the appointment ID as a prop
}

const VideoCallButton: React.FC<VideoCallButtonProps> = ({ appointmentId }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({ pathname: '/video-call/[id]', params: { id: appointmentId } });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Video Call</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default VideoCallButton;