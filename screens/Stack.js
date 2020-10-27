import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import CadastroUsuario from '../screens/CadastroUsuario'

import ListApiarios from '../screens/lists/ListaApiarios'
import FormApiario from '../screens/forms/FormApiario'

import ListCaixas from '../screens/lists/ListCaixas'
import FormCaixa from '../screens/forms/FormCaixa'

import Menu from '../screens/Menu'

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
            <Stack.Screen name = "Lista de Apiários"
                component={ListApiarios}>
            </Stack.Screen>
            <Stack.Screen name = "Novo Apiário"
                component={FormApiario}>
            </Stack.Screen>
            <Stack.Screen name = "Lista de Caixas"
                component={ListCaixas}>
            </Stack.Screen>
            <Stack.Screen name = "Nova Caixa"
                component={FormCaixa}>
            </Stack.Screen>
            <Stack.Screen name = "Menu"
                options={{ title: "Bem-Vindo!" }}
                component={Menu}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}
