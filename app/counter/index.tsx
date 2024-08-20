import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { intervalToDuration, isBefore } from "date-fns";
import { TimeSegment } from "../../components/TimeSegment";

// Set up notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// 10 seconds from now
const timeStamp = Date.now() + 10 * 1000;
type CountdownStatus = {
  isOverdue: boolean;
  distance: ReturnType<typeof intervalToDuration>;
};

export default function CounterScreen() {
  const [status, setStatus] = useState<CountdownStatus>({
    isOverdue: false,
    distance: {},
  });

  // const [secondElapsed, setSecondElapsed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isOverdue = isBefore(timeStamp, Date.now());
      const distance = intervalToDuration(
        isOverdue
          ? { start: timeStamp, end: Date.now() }
          : {
              start: Date.now(),
              end: timeStamp,
            }
      );
      setStatus({ isOverdue, distance });
      // setSecondElapsed((val) => val + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
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
    <View
      style={[
        styles.container,
        status.isOverdue ? styles.containerLate : undefined,
      ]}
    >
      {/* <Text style={styles.secondText}>{secondElapsed}</Text> */}

      {status.isOverdue ? (
        <Text style={[styles.heading, styles.whiteText]}>Thing overdue by</Text>
      ) : (
        <Text style={styles.heading}>Thing due in</Text>
      )}

      <View style={styles.timer}>
        {/* <TimeSegment unit="Months" number={status.distance.months ?? 0} /> */}
        <TimeSegment
          unit="Days"
          number={status.distance.days ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Hours"
          number={status.distance.hours ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Mintes"
          number={status.distance.minutes ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Seconds"
          number={status.distance.seconds ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>Schedule notification</Text>
      </TouchableOpacity>
      <Text style={[styles.heading, styles.whiteText]}>Counter</Text>
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

  button: {
    alignSelf: "center",
    marginBottom: 18,
    backgroundColor: theme.colorBlack,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
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
  // secondText: {
  //   fontSize: 96,
  // },
  timer: {
    flexDirection: "row",
    marginBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  containerLate: {
    backgroundColor: theme.colorRed,
  },

  whiteText: {
    color: theme.colorWhite,
  },
});
