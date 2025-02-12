// components/PrescriptionModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

interface PrescriptionModalProps {
  visible: boolean;
  onClose: () => void;
  onSend: (prescription: string) => void;
}

const PrescriptionModal: React.FC<PrescriptionModalProps> = ({ visible, onClose, onSend }) => {
  const [prescription, setPrescription] = useState<string>('');

  const handleSend = () => {
    if (prescription.trim()) {
      onSend(prescription);
      setPrescription('');
    } else {
      Alert.alert('Error', 'Please enter a prescription.');
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Write Prescription</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter prescription"
            multiline
            value={prescription}
            onChangeText={setPrescription}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} color="#dc3545" />
            <Button title="Send" onPress={handleSend} color="#28a745" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PrescriptionModal;