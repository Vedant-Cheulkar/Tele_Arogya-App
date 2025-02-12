import React from "react";
import { View, Text, StyleSheet } from "react-native";

const healthData = {
  heartRate: 72,
  bloodPressure: "120/80",
  glucoseLevel: 90,
  steps: 5000,
  sleep: "7h 30m",
};

const HealthSummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Summary</Text>
      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{healthData.heartRate}</Text>
          <Text style={styles.metricLabel}>Heart Rate</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{healthData.bloodPressure}</Text>
          <Text style={styles.metricLabel}>Blood Pressure</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{healthData.glucoseLevel}</Text>
          <Text style={styles.metricLabel}>Glucose Level</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{healthData.steps}</Text>
          <Text style={styles.metricLabel}>Steps</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{healthData.sleep}</Text>
          <Text style={styles.metricLabel}>Sleep</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  metricsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  metricCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  metricLabel: {
    fontSize: 14,
    color: "gray",
  },
});

export default HealthSummaryScreen;