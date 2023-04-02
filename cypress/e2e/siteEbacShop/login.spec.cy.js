///<reference types= "cypress"/>

context('Acessar a plataforma Ebac-Shop', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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