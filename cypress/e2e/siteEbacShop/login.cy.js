///<reference types= "cypress"/>
const perfil = require('../../fixtures/perfil.json');
context('Acessar a plataforma Ebac-Shop', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Preenchendo os dados corretamente', () => {
        let nome = 'aluno_ebac@teste.com';
        let senha = 'teste@teste.com';
        cy.get('#username').type(nome)
        cy.get('#password').type(senha)
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()

        // realizado o login
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Aluno (não é Aluno?')
    });
    it('Deve fazer o login corretamente - arquivo de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
    });

    it.only('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados =>{

            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('#rememberme').click()
            cy.get('.woocommerce-form > .button').click()

        });
    });

    it('Usuário incorreto', () => {

        cy.get('#username').type('teste@teste')
        cy.get('#password').type('teste@teste.com')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
    });

    it('Senha Incorreta', () => {

        cy.get('#username').type('teste@teste.com')
        cy.get('#password').type('senha')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()

    });


});