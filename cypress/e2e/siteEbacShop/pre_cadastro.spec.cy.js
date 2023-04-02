/// <reference types = "cypress"/>
const { faker } = require("@faker-js/faker");

describe('Realizar um novo cadastro!', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });


it('Realizar o novo cadastro', () => {
    let email = faker.internet.email();
    let password = 123;

    cy.get('#reg_email').type(email)    
    cy.get('#reg_password').type(password)

    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    
});

it('Adicionar o nome e sobrenome ', () => {
    let login = 'Noemy.Pfeffer@yahoo.com'
    let senha = 123;
    let nome = faker.name.firstName();
    let sobrenome = faker.name.firstName();

    cy.get('#username').type(login);
    cy.get('#password').type(senha);
    cy.get('.woocommerce-form > .button').click();


    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.get('#account_first_name').type(nome);
    cy.get('#account_last_name').type(sobrenome);

    cy.get('.woocommerce-Button').click();
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.');

});

}); 