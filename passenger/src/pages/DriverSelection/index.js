import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import logo from "../../../assets/icon.png";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import firebase from "firebase";
import "firebase/firestore";

export default function DriverSelection() {
  const navigation = useNavigation();
  const firestore = firebase.firestore();
  const user = firebase.auth().currentUser.uid;

  function navigateBack() {
    navigation.goBack();
  }

  const [turno, setTurno] = useState("");

  const [list, setList] = useState([]);
  const [uid, setUid] = useState("");

  useEffect(() => {
    makeDriversList();
  }, [turno]);

  function makeDriversList() {
    getPassengerTurn();
    firestore
      .collection("motorista")
      .where("turno", "==", turno)
      .get()
      .then((querySnapshot) => {
        var li = [];
        querySnapshot.forEach((doc) => {
          li.push({
            id: doc.id,
            nome: doc.data().nome,
            turno: doc.data().turno,
            local: doc.data().local,
            nota: doc.data().nota,
          });
        });
        setList(li);
      });
  }

  function getPassengerTurn() {
    firestore
      .collection("passageiro")
      .doc(user)
      .get()
      .then((doc) => {
        setTurno(doc.data().turno);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <FontAwesome name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.main}>
        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          Motoristas
        </Text>

        <FlatList
          style={{ height: "100%" }}
          data={list}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  padding: 3,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 100,
                    width: 300,
                    backgroundColor: "white",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPressIn={() => {
                    setUid(item.id);
                  }}
                  onPress={() => {
                    navigation.navigate("ServiceDetails", {
                      uid: uid,
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    {item.nome}
                  </Text>
                  <Text>{item.turno}</Text>
                  <Text>{item.local}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        paddingLeft: 240,
                        paddingRight: 5,
                        fontWeight: "bold",
                      }}
                    >
                      {item.nota.toExponential(2).slice(0, 4)}
                    </Text>
                    <FontAwesome name="star" size={18} color={"black"} />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
