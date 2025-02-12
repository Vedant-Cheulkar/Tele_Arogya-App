 import React, { useState } from 'react';
 import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';

 const MyPatientsScreen = () => {
   const [searchQuery, setSearchQuery] = useState('');

   const patients = [
     {
       id: 1,
       name: 'Sarah Johnson',
       age: 45,
       condition: 'Hypertension',
       nextAppointment: '2024-01-30',
       status: 'Active'
     },
     {
       id: 2,
       name: 'Michael Chen',
       age: 32,
       condition: 'Diabetes Type 2',
       nextAppointment: '2024-02-01',
       status: 'Active'
     },
   ];

   return (
     <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.title}>My Patients</Text>
         <View style={styles.searchBar}>
           <Ionicons name="search" size={20} color="#666" />
           <TextInput
             style={styles.searchInput}
             placeholder="Search patients..."
             value={searchQuery}
             onChangeText={setSearchQuery}
           />
         </View>
       </View>

       <View style={styles.filterContainer}>
         <TouchableOpacity style={styles.filterButton}>
           <Text style={styles.filterButtonText}>All Patients</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.filterButton, styles.filterButtonOutline]}>
           <Text style={styles.filterButtonTextOutline}>Active</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.filterButton, styles.filterButtonOutline]}>
           <Text style={styles.filterButtonTextOutline}>Pending</Text>
         </TouchableOpacity>
       </View>

       <ScrollView style={styles.patientList}>
         {patients.map(patient => (
           <TouchableOpacity key={patient.id} style={styles.patientCard}>
             <View style={styles.patientInfo}>
               <View style={styles.patientHeader}>
                 <Text style={styles.patientName}>{patient.name}</Text>
                 <View style={styles.statusBadge}>
                   <Text style={styles.statusText}>{patient.status}</Text>
                 </View>
               </View>
              
               <View style={styles.patientDetails}>
                 <View style={styles.detailItem}>
                   <Ionicons name="person" size={16} color="#666" />
                   <Text style={styles.detailText}>Age: {patient.age}</Text>
                 </View>
                 <View style={styles.detailItem}>
                   <Ionicons name="medical" size={16} color="#666" />
                   <Text style={styles.detailText}>{patient.condition}</Text>
                 </View>
                 <View style={styles.detailItem}>
                   <Ionicons name="calendar" size={16} color="#666" />
                   <Text style={styles.detailText}>Next: {patient.nextAppointment}</Text>
                 </View>
               </View>
             </View>
             <Ionicons name="chevron-forward" size={24} color="#666" />
           </TouchableOpacity>
         ))}
       </ScrollView>

       <TouchableOpacity style={styles.fab}>
         <Ionicons name="add" size={24} color="#fff" />
       </TouchableOpacity>
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F8F9FA',
   },
   header: {
     padding: 20,
     backgroundColor: '#fff',
     borderBottomWidth: 1,
     borderBottomColor: '#eee',
   },
   title: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 15,
   },
   searchBar: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#f5f5f5',
     padding: 10,
     borderRadius: 10,
   },
   searchInput: {
     marginLeft: 10,
     flex: 1,
   },
   filterContainer: {
     flexDirection: 'row',
     padding: 15,
     backgroundColor: '#fff',
   },
   filterButton: {
     backgroundColor: '#007AFF',
     paddingHorizontal: 15,
     paddingVertical: 8,
     borderRadius: 20,
     marginRight: 10,
   },
   filterButtonOutline: {
     backgroundColor: 'transparent',
     borderWidth: 1,
     borderColor: '#007AFF',
   },
   filterButtonText: {
     color: '#fff',
     fontSize: 14,
   },
   filterButtonTextOutline: {
     color: '#007AFF',
     fontSize: 14,
   },
   patientList: {
     padding: 15,
   },
   patientCard: {
     backgroundColor: '#fff',
     borderRadius: 10,
     padding: 15,
     marginBottom: 10,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.1,
     shadowRadius: 3,
     elevation: 3,
   },
   patientInfo: {
     flex: 1,
   },
   patientHeader: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginBottom: 10,
   },
   patientName: {
     fontSize: 16,
     fontWeight: 'bold',
   },
   statusBadge: {
     backgroundColor: '#E8F5E9',
     paddingHorizontal: 10,
     paddingVertical: 4,
     borderRadius: 12,
   },
   statusText: {
     color: '#2E7D32',
     fontSize: 12,
   },
   patientDetails: {
     gap: 5,
   },
   detailItem: {
     flexDirection: 'row',
     alignItems: 'center',
     gap: 8,
   },
   detailText: {
     color: '#666',
     fontSize: 14,
   },
   fab: {
     position: 'absolute',
     right: 20,
     bottom: 20,
     backgroundColor: '#007AFF',
     width: 56,
     height: 56,
     borderRadius: 28,
     alignItems: 'center',
     justifyContent: 'center',
     elevation: 4,
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 4,
   },
 });

 export default MyPatientsScreen;