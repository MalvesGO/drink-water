import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Dashboard } from "../screens/Dashboard";
import Icon from "react-native-vector-icons/FontAwesome";


const Tab = createMaterialBottomTabNavigator();

const Screen1 = () => <Text>Screen 1</Text>;
const Screen2 = () => <Text>Screen 2</Text>;

export function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Dashboard" component={Dashboard} options={{
                    tabBarIcon: () => <Icon name="dashboard" size={20} color="purple" />
                }}
                />
                <Tab.Screen name="Settings" component={Screen1} options={{
                    tabBarIcon: () => <Icon name="gear" size={20} color="purple" />
                }}/>
                <Tab.Screen name="Profile" component={Screen2} options={{
                    tabBarIcon: () => <Icon name="user" size={20} color="purple" />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}