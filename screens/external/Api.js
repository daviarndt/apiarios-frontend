import React from 'react';
import axios from 'axios';

export default class API extends React.Component {
    /* Caixas */
    async createCaixa(apiarioId, id, modelo, numeroRegistro) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/caixa";
        var data = {
            "apiarioId": apiarioId,
            "id": id,
            "modelo": modelo,
            "numeroRegistro": numeroRegistro
        };
        return await axios.post(url, data)
    }

    async buscarPorApiarioId(apiarioId) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/caixa/apiario/" + apiarioId;
        return await axios.get(url)
    }

    async ocultarCaixaPorId(id) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/caixa/ocultar/" + id;
        return await axios.post(url)
    }
    /* Caixas */

    /* Apiario */
    async createApiario(cidade, endereco, id, latitude, longitude, nome) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/apiario";
        var data = {
            "cidade": cidade,
            "endereco": endereco,
            "id": id,
            "latitude": latitude,
            "longitude": longitude,
            "nome": nome
        };
        return await axios.post(url, data)
    }

    async buscarApiariosPorUsuario(usuarioId) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/apiario/apiario/" + usuarioId;
        return await axios.get(url)
    }

    async ocultarApiarioPorId(id) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/apiario/ocultar/" + id;
        return await axios.post(url)
    }
    /* Apiario */

    /* Usuario */
    async authenticateUser(cpf, senha) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "auth";
        // alterar para senha ser enviada no campo senha
        var data = {
            "cpf": cpf,
            "senha": cpf
        };

        return await axios.post(url, data)
    }

    async createUser(nome, cpf, senha) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/usuario";
        // alterar para enviar senha para cadastro
        var data = {
            "cpf": cpf,
            "nome": nome,
            // "senha": senha
        };
        return await axios.post(url, data)
    }

    async buscarUsuarioPorId(id) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/usuario/" + id;
        return await axios.get(url)
    }

    async alterarSenhaUsuario(idUsuario, novaSenha, senhaAtual) {
        var url = 'https://apiarios-daviarndt.herokuapp.com/' + "api/usuario/senha";
        var data = {
            "idUsuario": idUsuario,
            "novaSenha": novaSenha,
            "senhaAtual": senhaAtual
        };
        return await axios.post(url, data)
    }
    /* Usuario */
}
