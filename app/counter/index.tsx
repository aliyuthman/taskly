import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

// Set up notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function CounterScreen() {
  const [lastNotification, setLastNotification] =
    useState<Notifications.NotificationContent | null>(null);

  useEffect(() => {
    // Set up foreground notification listener
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received in foreground:", notification);
        setLastNotification(notification.request.content);
        Alert.alert(
          "Foreground Notification Received",
          `Title: ${notification.request.content.title}\nBody: ${notification.request.content.body || "No body"}`
        );
      }
    );

    // Clean up the listener on component unmount
    return () => subscription.remove();
  }, []);

  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync();
    if (result === "granted") {
      console.log(result);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Foreground Notification Test",
          body: "This notification was received while the app was open!",
        },
        trigger: {
          seconds: 5,
        },
      });
    } else {
      if (Device.isDevice) {
        Alert.alert(
          "Unable to schedule notification",
          "Enable the notification permission for Expo Go in settings"
        );
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>Schedule notification</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Counter</Text>
      {lastNotification && (
        <View style={styles.notificationInfo}>
          <Text style={styles.notificationTitle}>🕹️ Last Notification:</Text>
          <Text>Title: {lastNotification.title}</Text>
          <Text>Body: {lastNotification.body || "No body"}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },

  button: {
    alignSelf: "center",
    marginBottom: 18,
    backgroundColor: theme.colorOrange,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: theme.colorWhite,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  notificationInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  notificationTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
