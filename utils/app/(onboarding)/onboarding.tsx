import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  PanResponder,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const onboardingSlides = [
  {
    title: 'Welcome to Telemedicine',
    description: 'Your healthcare companion for rural areas.',
    image: require('@/assets/images/onboarding(1).png'), // Add an image here
  },
  {
    title: 'Instant Consultations',
    description: 'Get medical help instantly through video calls.',
    image: require('@/assets/images/onboarding(2).png'), // Add an image here
  },
  {
    title: 'Secure and Confidential',
    description: 'Your privacy is our priority.',
    image: require('@/assets/images/onboarding(3).png'), // Add an image here
  },
];

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const pan = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current; // For button scale animation

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        pan.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50 && activeIndex < onboardingSlides.length - 1) {
          handleNext();
        } else if (gestureState.dx > 50 && activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
        }
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  const handleNext = async () => {
    if (activeIndex === onboardingSlides.length - 1) {
      await AsyncStorage.setItem('hasOnboarded', 'true');
      router.replace('/login');
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true');
    router.replace('/login');
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  React.useEffect(() => {
    fadeAnim.setValue(0); // Reset to opacity 0
    fadeIn();
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slideContainer,
          { opacity: fadeAnim, transform: [{ translateX: pan }] },
        ]}
        {...panResponder.panHandlers}
      >
        <Image source={onboardingSlides[activeIndex].image} style={styles.image} />
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
          {onboardingSlides[activeIndex].title}
        </Animated.Text>
        <Animated.Text style={[styles.description, { opacity: fadeAnim }]}>
          {onboardingSlides[activeIndex].description}
        </Animated.Text>
      </Animated.View>

      <View style={styles.pagination}>
        {onboardingSlides.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
              {
                transform: [
                  {
                    scale: index === activeIndex ? 1.3 : 1, // Scale animation for active dot
                  },
                ],
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {activeIndex < onboardingSlides.length - 1 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              animateButton();
              handleNext();
            }}
          >
            <Animated.Text
              style={[styles.buttonText, { transform: [{ scale: scaleAnim }] }]}
            >
              Next
            </Animated.Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              animateButton();
              handleNext();
            }}
          >
            <Animated.Text
              style={[styles.buttonText, { transform: [{ scale: scaleAnim }] }]}
            >
              Get Started
            </Animated.Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  slideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: width - 40,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipButton: {
    marginTop: 10,
  },
  skipText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#007BFF',
  },
});

export default OnboardingScreen;