import React from "react";
import { Pressable, View, Text, ScrollView } from "react-native";

const ToDoList = ({tasks}) => {
    return(
        <ScrollView>
            {tasks.map((task,index) => {
                <Pressable key={index}>
                    <View >
                        <Text>{task}</Text>
                    </View>
                </Pressable>
            })}
        </ScrollView>
    )

}

export default ToDoList;