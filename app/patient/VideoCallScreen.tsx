import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from "react-native";
import { createAgoraRtcEngine, IRtcEngine, RtcSurfaceView } from "react-native-agora";
import { router } from "expo-router";

const APP_ID = "5aa70cdca8324154950228f159ef484e"; // Replace with your Agora App ID
const CHANNEL_NAME = "testChannel"; // Replace with your channel name
const TOKEN = "YOUR_AGORA_TOKEN"; // Replace with your Agora token (optional for testing)

const VideoCallScreen = () => {
  const [isJoined, setIsJoined] = useState(false); // Track if the user has joined the call
  const [remoteUid, setRemoteUid] = useState<number | null>(null); // Track the remote user's UID
  const [localUid, setLocalUid] = useState<number | null>(null); // Track the local user's UID
  const [agoraEngine, setAgoraEngine] = useState<IRtcEngine | null>(null); // Agora engine instance

  // Initialize Agora RTC Engine
  useEffect(() => {
    const initializeAgora = async () => {
      try {
        // Request camera and microphone permissions
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        // Create and initialize the RTC engine
        const engine = createAgoraRtcEngine();
        await engine.initialize({ appId: APP_ID });
        setAgoraEngine(engine);

        // Enable video and audio
        await engine.enableVideo();
        await engine.enableAudio();

        // Set up event listeners
        engine.registerEventHandler({
          onUserJoined: (connection, remoteUid) => {
            console.log("User joined:", remoteUid);
            setRemoteUid(remoteUid);
          },
          onUserOffline: (connection, remoteUid) => {
            console.log("User left:", remoteUid);
            setRemoteUid(null);
          },
          onJoinChannelSuccess: (connection, elapsed) => {
            console.log("Joined channel successfully:", connection.channelId, connection.localUid);
            setIsJoined(true);
            setLocalUid(connection.localUid ?? null);
          },
        });

        // Join the channel
        await engine.joinChannel(TOKEN, CHANNEL_NAME, 0, {});
      } catch (error) {
        console.error("Error initializing Agora:", error);
      }
    };

    initializeAgora();

    // Clean up on unmount
    return () => {
      if (agoraEngine) {
        agoraEngine.leaveChannel();
        agoraEngine.release();
      }
    };
  }, []);

  // Leave the call
  const leaveCall = async () => {
    try {
      if (agoraEngine) {
        await agoraEngine.leaveChannel();
        setIsJoined(false);
        setRemoteUid(null);
        setLocalUid(null);
        router.push("/patient/PatientHomeScreen"); // Navigate back to the home screen
      }
    } catch (error) {
      console.error("Error leaving call:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Video Feeds */}
      {isJoined && (
        <>
          {/* Local Video Feed */}
          {localUid !== null && (
            <RtcSurfaceView
              style={styles.localVideo}
              canvas={{ uid: localUid }}
            />
          )}

          {/* Remote Video Feed */}
          {remoteUid !== null && (
            <RtcSurfaceView
              style={styles.remoteVideo}
              canvas={{ uid: remoteUid }}
            />
          )}
        </>
      )}

      {/* Call Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton} onPress={leaveCall}>
          <Text style={styles.controlButtonText}>End Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  localVideo: {
    width: 100,
    height: 150,
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  remoteVideo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  controls: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  controlButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 30,
  },
  controlButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default VideoCallScreen;