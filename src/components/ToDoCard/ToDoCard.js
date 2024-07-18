import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({ item, index, handleCompleteTask, handleEditTask }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        key={index}
        onPress={() => handleCompleteTask(index)}
        style={[styles.task, item.completed ? styles.taskCompleted : null]}
      >
        <Text style={item.completed ? styles.taskTextCompleted : styles.taskText}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleEditTask(index)} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoCard;
