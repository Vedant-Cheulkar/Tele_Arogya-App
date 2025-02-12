import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const PatientHomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="person-circle" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={18} color="white" />
          <Text style={styles.locationText}>Kharghar</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="white" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for clinics and hospitals"
          placeholderTextColor="gray"
        />
      </View>

      {/* Booking Options */}
      <View style={styles.bookingContainer}>
        <TouchableOpacity style={styles.bookingOption}>
          <Image
            source={{ uri: "https://example.com/doctor1.png" }} // Replace with actual image
            style={styles.bookingImage}
          />
          <Text style={styles.bookingText}>Book In-Clinic Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity 
  style={styles.bookingOption}
  onPress={() => router.push('/')}
>
  <Image
    source={{ uri: "https://example.com/doctor2.png" }}
    style={styles.bookingImage}
  />
  <Text style={styles.bookingText}>Instant Video Consultation</Text>
</TouchableOpacity>
      </View>

      {/* Specializations */}
      <Text style={styles.sectionTitle}>Find a Doctor for your Health Problem</Text>
      <View style={styles.specializationsContainer}>
        {[
          { name: "General Physician", icon: "stethoscope" },
          { name: "Skin & Hair", icon: "face" },
          { name: "Women's Health", icon: "pregnant-woman" },
          { name: "Dental Care", icon: "tooth" },
          { name: "Child Specialist", icon: "child-care" },
          { name: "Ear, Nose, Throat", icon: "hearing" },
          { name: "Mental Wellness", icon: "spa" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.specializationItem}>
            <Ionicons name="person-circle" size={30} color="white" />
            <Text style={styles.specializationText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.specializationItem}>
          <Text style={styles.specializationMore}>20+</Text>
          <Text style={styles.specializationText}>More</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Services */}
      <Text style={styles.sectionTitle}>Featured Services</Text>
      <View style={styles.featuredContainer}>
        <TouchableOpacity style={styles.featuredCard}>
          <Text style={styles.featuredText}>Affordable Surgeries</Text>
          <Text style={styles.featuredSubText}>By Expert Surgeons</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4f46e5",
    padding: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "white",
    marginLeft: 5,
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: 15,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: "black",
    flex: 1,
  },
  bookingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  bookingOption: {
    alignItems: "center",
    flex: 1,
  },
  bookingImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  bookingText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
  sectionTitle: {
    margin: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  specializationsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  specializationItem: {
    alignItems: "center",
    margin: 10,
  },
  specializationText: {
    marginTop: 5,
    fontSize: 12,
  },
  specializationMore: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4f46e5",
  },
  featuredContainer: {
    margin: 15,
    backgroundColor: "#e7e7e7",
    borderRadius: 10,
    padding: 15,
  },
  featuredCard: {
    alignItems: "center",
  },
  featuredText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  featuredSubText: {
    fontSize: 14,
    color: "gray",
  },
});

export default PatientHomeScreen;
