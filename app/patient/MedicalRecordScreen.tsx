import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const MedicalRecordScreen = () => {
  const [records, setRecords] = useState([
    { id: "1", name: "Lab Report", date: "2023-10-01", type: "pdf" },
    { id: "2", name: "X-Ray Report", date: "2023-09-15", type: "image" },
  ]);

  const uploadRecord = () => {
    // Simulate file upload
    const newRecord = {
      id: String(records.length + 1),
      name: "New Report",
      date: new Date().toISOString().split("T")[0],
      type: "pdf",
    };
    setRecords([...records, newRecord]);
  };

  return (
    <View style={styles.container}>
      {/* Record List */}
      <FlatList
        data={records}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recordCard}>
            <Image
              source={
                item.type === "pdf"
                  ? require("@/assets/images/icon.png") // Replace with your PDF icon
                  : require("@/assets/images/icon.png") // Replace with your image icon
              }
              style={styles.recordIcon}
            />
            <View style={styles.recordDetails}>
              <Text style={styles.recordName}>{item.name}</Text>
              <Text style={styles.recordDate}>{item.date}</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.recordList}
      />

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadButton} onPress={uploadRecord}>
        <Text style={styles.uploadButtonText}>Upload Record</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  recordList: {
    paddingBottom: 80, // Space for the upload button
  },
  recordCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  recordIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  recordDetails: {
    flex: 1,
  },
  recordName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  recordDate: {
    fontSize: 14,
    color: "gray",
  },
  viewButton: {
    backgroundColor: "#4f46e5",
    padding: 10,
    borderRadius: 5,
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  uploadButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#4f46e5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MedicalRecordScreen;