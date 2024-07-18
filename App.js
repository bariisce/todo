import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './src/components/ToDoCard/ToDoList';
import ToDoInput from './src/components/ToDoCard/ToDoInput';

function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1); // Düzenlenen taskin indeksini tutar
  const [editText, setEditText] = useState(''); // Düzenlenen taskin metnini tutar

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleAddTask = () => {
    if (editingIndex === -1) { // Yeni task ekleniyor
      setTaskItems([...taskItems, { text: task, completed: false }]);
      increaseCount();
    } else { // Mevcut task düzenleniyor
      const newTaskItems = [...taskItems];
      newTaskItems[editingIndex].text = editText;
      setTaskItems(newTaskItems);
      setEditingIndex(-1);
      setEditText('');
    }
    setTask('');
  };

  const handleCompleteTask = index => {
    if (index < 0 || index >= taskItems.length) {
      console.error('Invalid index: ', index);
      return;
    }

    const newTaskItems = [...taskItems];
    newTaskItems[index].completed = !newTaskItems[index].completed;

    if (newTaskItems[index].completed) {
      decreaseCount();
    } else {
      increaseCount();
    }

    setTaskItems(newTaskItems);
  };

  const handleEditTask = index => {
    setEditingIndex(index);
    setEditText(taskItems[index].text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>To Do</Text>
        <Text style={styles.title}>{count}</Text>
      </View>

      <ToDoList
        taskItems={taskItems}
        handleCompleteTask={handleCompleteTask}
        handleEditTask={handleEditTask} // Düzenleme fonksiyonunu ekliyoruz
      />

      <View style={styles.bottom_container}>
        <ToDoInput
          task={editingIndex === -1 ? task : editText}
          setTask={editingIndex === -1 ? setTask : setEditText}
          handleAddTask={handleAddTask}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3458',
  },
  top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D23369',
  },
  bottom_container: {
    justifyContent: 'flex-end',
  },
});

export default App;
