import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://example.com/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to send email");

      Alert.alert("Success", "Password reset email sent successfully!");
      router.push("/recovery-password");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text onPress={() => router.back()} style={styles.backButton}>
          ⬅
        </Text>
        <Text style={styles.title}>Forget Password</Text>
        <InputField
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Button
          title={loading ? "Sending..." : "Send Email"}
          onPress={handleSubmit}
          style={styles.button}
          disabled={loading}
        />
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text onPress={() => router.push("/login")} style={styles.linkText}>
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
    maxWidth: 400,
  },
  backButton: {
    color: "#6B7280",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#10B981",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  footerText: {
    marginTop: 16,
    textAlign: "center",
    color: "#6B7280",
  },
  linkText: {
    color: "#10B981",
    fontWeight: "500",
  },
});