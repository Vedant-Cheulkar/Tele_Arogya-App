import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

const PatientProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "patients", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name);
          setAge(data.age);
          setMedicalHistory(data.medicalHistory);
          setProfilePic(data.profilePic);
        }
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, "patients", user.uid), {
        name,
        age,
        medicalHistory,
        profilePic
      });
      alert("Profile Updated!");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePic }} style={styles.profileImage} />
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Medical History" value={medicalHistory} onChangeText={setMedicalHistory} multiline />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10, fontSize: 16 },
  profileImage: { width: 100, height: 100, borderRadius: 50, alignSelf: "center" },
});

export default PatientProfile;
