import React from 'react';
import axios from 'axios';
import Cache from './Cache.js';

const cache = new Cache();
const apiUrl = 'https://cors-anywhere.herokuapp.com/https://apiarios-daviarndt.herokuapp.com/';

export default class API extends React.Component {
    /* Caixas */
    async createCaixa(apiarioId, modelo, numeroRegistro) {
        console.log(apiarioId)
        console.log(modelo)
        console.log(numeroRegistro)
        var url = apiUrl + "api/caixa";
        var data = {
            "apiarioId": apiarioId,
            // "id": id,
            "modelo": modelo,
            "numeroRegistro": numeroRegistro
        };
        return await axios.post(
            url,
            data,
            {
                headers: {
                    'Authorization': 'Bearer ' + cache.get('token') + '',
                    'Access-Control-Allow-Origin': window.location.host,
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                }
            }
        )
    }

    async buscarPorApiarioId(apiarioId) {
        var url = apiUrl + "api/caixa/apiario/" + apiarioId;
        return await axios.get(
            url,
            {
                headers: {
                    'Authorization': 'Bearer ' + cache.get('token') + '',
                    'Access-Control-Allow-Origin': window.location.host,
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                }
            }
        )
    }

    async ocultarCaixaPorId(id) {
        var url = apiUrl + "api/caixa/ocultar/" + id;
        return await axios.post(
            url,
            {
                headers: {
                    'Authorization': 'Bearer ' + cache.get('token') + '',
                    'Access-Control-Allow-Origin': window.location.host,
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                }
            }
        )
    }
    /* Caixas */

    /* Apiario */
    async createApiario(cidade, endereco, latitude, longitude, nome) {
        var url = apiUrl + "api/apiario";
        var data = {
            "cidade": cidade,
            "endereco": endereco,
            // "id": id,
            "latitude": latitude,
            "longitude": longitude,
            "nome": nome
        };

        return await axios.post(
            url,
            data,
            {
                headers: {
                    'Authorization': 'Bearer ' + cache.get('token') + '',
                    'Access-Control-Allow-Origin': window.location.host,
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                }
            }
        )

    }

    async buscarApiariosPorUsuario(usuarioId) {
        var url = apiUrl + "api/apiario/usuario/" + usuarioId;
        return await axios.get(
            url,
            {
                headers: {
                    'Authorization': 'Bearer ' + cache.get('token') + '',
                    'Access-Control-Allow-Origin': window.location.host,
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                }
            }
        )
    }

    async ocultarApiarioPorId(id) {
        var url = apiUrl + "api/apiario/ocultar/" + id;
        return await axios.post(
            url,
            {
                headers: {
                    'Authorization': 'Bearer ' + cache.get('token') + '',
                    'Access-Control-Allow-Origin': window.location.host,
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                }
            }
        )
    }
    /* Apiario */

    /* Usuario */
    async authenticateUser(cpf, senha) {
        var url = apiUrl + "auth";
        // alterar para senha ser enviada no campo senha
        var data = {
            "cpf": cpf,
            "senha": cpf
        };

        return await axios.post(url, data)
    }

    async createUser(nome, cpf, senha) {
        var url = apiUrl + "api/usuario";
        // alterar para enviar senha para cadastro
        var data = {
            "cpf": cpf,
            "nome": nome,
            // "senha": senha
        };
        return await axios.post(url, data)
    }

    async buscarUsuarioPorId(id) {
        var url = apiUrl + "api/usuario/" + id;
        return await axios.get(
            url,
            {
                headers: {
                    'Authorization': 'Bearer ' + cache.get('token') + '',
                    'Access-Control-Allow-Origin': window.location.host,
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                }
            }
        )
    }

    async alterarSenhaUsuario(idUsuario, novaSenha, senhaAtual) {
        var url = apiUrl + "api/usuario/senha";
        var data = {
            "idUsuario": idUsuario,
            "novaSenha": novaSenha,
            "senhaAtual": senhaAtual
        };
        return await axios.post(
            url,
            data,
            {
                headers: {
                    'Authorization': 'Bearer ' + cache.get('token') + '',
                    'Access-Control-Allow-Origin': window.location.host,
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                }
            }
        )
    }
    /* Usuario */
}
