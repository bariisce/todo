import React from 'react';
import { ScrollView } from 'react-native';
import ToDoCard from './ToDoCard';

const ToDoList = ({ taskItems, handleCompleteTask, handleEditTask }) => { // handleEditTask'i ekliyoruz
  return (
    <ScrollView>
      {taskItems.map((item, index) => (
        <ToDoCard
          key={index}
          item={item}
          index={index}
          handleCompleteTask={handleCompleteTask}
          handleEditTask={handleEditTask} // handleEditTask'i ekliyoruz
        />
      ))}
    </ScrollView>
  );
};

export default ToDoList;
