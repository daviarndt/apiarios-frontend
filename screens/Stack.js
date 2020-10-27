import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import CadastroUsuario from '../screens/CadastroUsuario'

const Stack = createStackNavigator()

export default function StackFunc (props) {
    return(
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{headerShown: true}}>
            <Stack.Screen 
                name = "Login"
                options={{ title:"Login do Usuário", headerShown: false }}
                component={Login}>
            </Stack.Screen>
            <Stack.Screen name = "Cadastro de Usuário"
                component={CadastroUsuario}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}