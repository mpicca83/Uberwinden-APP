import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'

export const AddModal = ({ isVisible, onConfirm, onCancel }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text>¿Estás seguro de cerrar sesión?</Text>
          <View style={styles.container3}>
            <TouchableOpacity onPress={onConfirm}>
              <Text style={styles.text1}>Sí</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel}>
              <Text style={styles.text2}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container1:{
    alignItems: 'center',
  },
  container2:{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  container3:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  text1:{
    color: 'red',
  },
  text2:{
    color: 'blue'
  },
})
