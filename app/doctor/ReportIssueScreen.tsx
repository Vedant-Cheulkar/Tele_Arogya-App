import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReportIssueScreen = () => {
  const [issueDescription, setIssueDescription] = useState("");

  const handleSubmit = () => {
    if (issueDescription.trim() === "") {
      Alert.alert("Error", "Please describe the issue before submitting.");
      return;
    }

    // Submit the issue (to be implemented)
    console.log("Issue submitted:", issueDescription);
    Alert.alert("Success", "Your issue has been submitted.");
    setIssueDescription("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report an Issue</Text>

      {/* Issue Description Input */}
      <TextInput
        style={styles.input}
        placeholder="Describe the issue..."
        value={issueDescription}
        onChangeText={setIssueDescription}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    height: 150,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ReportIssueScreen;