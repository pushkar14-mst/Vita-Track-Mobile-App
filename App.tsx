import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./screens/LandingScreen";
import DoctorRegistration from "./screens/Registeration/DoctorRegisteration";
import { DefaultTheme } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import DoctorDashboard from "./screens/Dashboard/DoctorDashboard";
import AppointmentsScreen from "./screens/AppointmentsScreen/AppointmentsScreen";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PatientListScreen from "./screens/PatientsListScreen.tsx/PatientsListScreen";
import PatientRegisteration from "./screens/Registeration/PatientRegisteration";
import PatientDashboard from "./screens/Dashboard/PatientDashboard";
import ExploreDoctorsScreen from "./screens/ExploreDoctorsScreen/ExploreDoctorsScreen";
import DoctorDetails from "./screens/DoctorDetails/DoctorDetails";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#008080", //  primary color
    accent: "#B2D8D8", // Accent color
    background: "#F0FFFF", // Background color
    surface: "#E0FFFF", // Surface color
    text: "#333333", // Text color
    disabled: "#A9A9A9", // Disabled color
    placeholder: "#B2B2B2", // Placeholder color
    error: "#FF0000", // Error color
  },
};
export default function App() {
  useEffect(() => {
    const setTestDoctorId = async () => {
      try {
        await AsyncStorage.setItem("doctorId", "1");
        await AsyncStorage.setItem("patientId", "1");
        console.log("Doctor ID set to 1 for testing.");
      } catch (error) {
        console.error("Error setting doctor ID:", error);
      }
    };

    setTestDoctorId();
  }, []);
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#008080",
              },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Doctor Registration"
              component={DoctorRegistration}
              options={{ headerBackAccessibilityLabel: "Back" }}
            />
            <Stack.Screen
              name="Patient Registration"
              component={PatientRegisteration}
              options={{
                headerBackAccessibilityLabel: "Back",
                title: "Patient Registration",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Doctor Dashboard"
              component={DoctorDashboard}
              options={{
                headerBackAccessibilityLabel: "Back",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Patient Dashboard"
              component={PatientDashboard}
              options={{
                headerBackAccessibilityLabel: "Back",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="explore-doctors-screen"
              component={ExploreDoctorsScreen}
              options={{
                headerBackAccessibilityLabel: "Back",
                title: "Explore Doctors",
              }}
            />
            <Stack.Screen
              name="doctor-details"
              component={DoctorDetails}
              options={{
                headerBackAccessibilityLabel: "Back",
                title: "Doctor Details",
              }}
            />

            <Stack.Screen
              name="appointments-screen"
              component={AppointmentsScreen}
              options={{
                headerBackAccessibilityLabel: "Back",
                title: "Appointments",
              }}
            />
            <Stack.Screen
              name="patients-list-screen"
              component={PatientListScreen}
              options={{
                headerBackAccessibilityLabel: "Back",
                title: "Patients",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}
