import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, SafeAreaView, Pressable, View } from "react-native";
import AuthOptionsModal from "../components/UI/AuthOptionsModal";

import { useDispatch } from "react-redux";
import useApi from "../hooks/useApi";
import { setDoctors, setPatients } from "../store/data";

const LandingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openModal = (mode: "login" | "register") => {
    setAuthMode(mode);
    setModalVisible(true);
  };
  const apiHandlers = useApi();
  const dispatch = useDispatch();
  const callApiHandlers = async () => {
    const retrievedDoctors = await apiHandlers
      .retrieveAllDoctors()
      .then((res: any) => {
        return res.data;
      });

    const retrievedPatients = await apiHandlers
      .retrieveAllPatients()
      .then((res: any) => {
        return res.data;
      });

    dispatch(setDoctors(retrievedDoctors));
    dispatch(setPatients(retrievedPatients));
  };
  useEffect(() => {
    setTimeout(() => {
      callApiHandlers();
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Vita Track</Text>
      <LottieView
        source={{
          uri: "https://lottie.host/0f0e8d12-dbd2-489a-b76b-6f3b90285834/QH7ihMCyOo.json",
        }}
        autoPlay
        loop
        style={{ width: "100%", height: 400 }}
      />
      <View style={styles.btnContainer}>
        <Pressable style={styles.btns} onPress={() => openModal("login")}>
          <Text style={styles.btnTxt}>Log In</Text>
        </Pressable>
        <Pressable style={styles.btns} onPress={() => openModal("register")}>
          <Text style={styles.btnTxt}>Register</Text>
        </Pressable>
      </View>
      <AuthOptionsModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        navigation={navigation}
        authMode={authMode}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#B2D8D8",
  },
  appTitle: {
    fontSize: 40,
    fontWeight: "900",
    color: "#008080",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btns: {
    width: 220,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#008080",
    borderRadius: 5,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
export default LandingScreen;
