
describe('Home page',()=>{
    it.only('App deve estar online',()=>{
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('h3').should('have.text','Campo de Treinamento')
    } )
})