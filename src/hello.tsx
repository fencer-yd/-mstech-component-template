import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

interface IProps {
  title: string
  buttonText: string
  hideButton: boolean
  onButtonPress: () => void
}

const Hello: React.FC<IProps> = (props) => {
  const { title, buttonText, hideButton, onButtonPress } = props

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {!hideButton && <Button title={buttonText} onPress={onButtonPress}></Button>}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBottom: 10,
    textAlign: "center"
  }
})

export default Hello