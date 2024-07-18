import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './ToDoCard.styles'

const ToDoInput = ({ task, setTask, handleAddTask }) => {
    return (
        <View style={styles.card}>
            <TextInput
                style={styles.text_input}
                value={task}
                onChangeText={setTask}
                placeholder='Duties...'
                placeholderTextColor={'#FF0000'}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDoInput;
