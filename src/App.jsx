import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import styled from 'styled-components/native';
import {useState} from 'react';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const Stack = createNativeStackNavigator();

  const handleAddTask = task => {
    tasks.map(item => item.toLowerCase()).indexOf(task.toLowerCase()) > 0
      ? setTasks(tasks)
      : setTasks([...tasks, task]);
  };

  return (
    <NavigationContainer>
      <Wrapper>
        <SafeAreaView>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={handleAddTask} />
          <TasksList>
            {tasks.map(task => {
              return <TextContent >{task}</TextContent>;
            })}
          </TasksList>
        </SafeAreaView>
      </Wrapper>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const TasksList = styled.View`
  justify-content: center;
  align-items: center;
  background-color: pink;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
`;
const TextContent = styled.Text`
  font-size: 16px;
  color: gray;
  font-family: 'Franklin Gothic Medium';
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: pink;
`;
