/// <reference types = "cypress"/>
const { faker } = require("@faker-js/faker");

describe('Escolher produtos da loja Ebac-Shop', () => {
    beforeEach(() => {
        cy.visit('produtos');
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Escolher um produto da loja', () => {

        var mensagem_carrinho = 5;
        let login = 'Noemy.Pfeffer@yahoo.com'
        let senha = 123;
        var nome_produto = 'Abominable Hoodie';

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click();
        cy.get('#username').type(login);
        cy.get('#password').type(senha);
        cy.get('.woocommerce-form > .button').click();

        cy.get('#primary-menu > .menu-item-629 > a').click();


        cy.get('[class= "product-block grid"]').contains(nome_produto).click();
        cy.get('.button-variable-item-L').click();

        cy.get('.woocommerce-variation-add-to-cart > .quantity').clear().type(mensagem_carrinho);
        cy.get('.button-variable-item-Red').click();
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message').should('contain', mensagem_carrinho);

    });

    it.only('Remover o item do carrinho', () => {

        let login = 'Noemy.Pfeffer@yahoo.com'
        let senha = 123;
        var mensagem_carrinho = 5;
        var nome_produto = 'Abominable Hoodie';

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click();
        cy.get('#username').type(login);
        cy.get('#password').type(senha);
        cy.get('.woocommerce-form > .button').click();

        cy.get('#primary-menu > .menu-item-629 > a').click();

        cy.get('[class= "product-block grid"]').contains(nome_produto).click();
        cy.get('.button-variable-item-L').click();

        cy.get('.woocommerce-variation-add-to-cart > .quantity').clear().type(mensagem_carrinho);
        cy.get('.button-variable-item-Red').click();
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message').should('contain', mensagem_carrinho);

        cy.get('.woocommerce-message > .button').click();
        cy.get('.remove > .fa').click();
        cy.get('.woocommerce-message').should('contain', nome_produto);
    
    });

});