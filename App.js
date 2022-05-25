import React, { useState, useEffect } from "react"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import Torch from "react-native-torch"
import RNShake from "react-native-shake"

import imageOff from "./assets/icons/eco-light-off.png"
import imageOn from "./assets/icons/eco-light.png"

import logoDioWhite from "./assets/icons/logo-dio-white.png"
import logoDioColor from "./assets/icons/logo-dio.png"

function App() {
  const [toggle, setToggle] = useState(false)

  useEffect(()=>{
    Torch.switchState(toggle)
  },[toggle])

  useEffect(()=>{
    // QUANDO O CELULAR FOR CHACOALHADO:
    const subscription = RNShake.addListener(()=>{
      setToggle(!toggle)

    // FINALIZAR O OUVINTE:
      return () => subscription.remove()
    })
  })

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={()=>{ setToggle(!toggle) }}>
        <Image source={toggle ? imageOn : imageOff} style={toggle ? style.lightingOn : style.lightingOff} />
        <Image source={toggle ? logoDioColor : logoDioWhite} style={style.dioLogo} />

      </TouchableOpacity>
    </View>
  )
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  lightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150
  },
  lightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
    tintColor: "white"
  },
  dioLogo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 250,
    height: 250
  }
})