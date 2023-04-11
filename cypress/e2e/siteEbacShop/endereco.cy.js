///<reference types= "cypress"/>

const { faker } = require("@faker-js/faker");

//const perfil = require('../../fixtures/perfil.json');

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {  
        cy.visit('minha-conta')
   
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha, {log: false});
        });
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
      
    });
});