import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageBackground, SafeAreaView} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import styled from 'styled-components/native';
import {useState} from 'react';
import MainLayout from '../layouts/MainLayout';

const ContentScreen = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const Stack = createNativeStackNavigator();

  const handleAddTask = task => {
    tasks.map(item => item.toLowerCase()).indexOf(task.toLowerCase()) > 0
      ? setTasks(tasks)
      : setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
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
    </MainLayout>
  );
};
export default ContentScreen;

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
