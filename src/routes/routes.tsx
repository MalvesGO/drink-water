import React from "react";
import { Text } from "react-native";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Dashboard } from "../screens/Dashboard";
import { ProfileScreen } from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";

type ITabRoutes = {
    Dashboard: undefined;
    Settings: undefined;
    Profile: undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

const Screen1 = () => <Text>Screen 1</Text>;
const Screen2 = () => <Text>Screen 2</Text>;

interface IMyTabs {}

export const Routes: React.FunctionComponent<IMyTabs> = () => {
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
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    title: "My Profile",
                    tabBarBadge: 3,
                    tabBarIcon: () => <Icon name="user" size={20} color="purple" />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );    
}