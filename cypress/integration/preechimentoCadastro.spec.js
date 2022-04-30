///<reference types="cypress"/>

describe('home page',()=>{
  it('app deve estar online',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('h3').should('have.text','Campo de Treinamento')
     
  } )
})
describe('Testes - Preenchimento do formulario de cadastro', () => {
  it('Preenchimento dos dados via arquivo de dados',function(){
      cy.visit('https://wcaquino.me/cypress/componentes.html')
      // Preenchimento de cada um dos campos.
      cy.fixture('pessoaData').as('pessoa').then(() => {
          const stub = cy.stub().as('alerta')
          cy.on('window:alert',stub)
        cy.get('#formCadastrar').click()
            .then(()=> expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))
        cy.get('#formNome').type(this.pessoa.nome)
        cy.get('#formCadastrar').click()
          .then(()=> expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
        cy.get('#formSobrenome').type(this.pessoa.sobrenome)
        cy.get('#formCadastrar').click()
          .then(()=> expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))
       
        cy.get(`[name=formSexo][value=${this.pessoa.sexo}]`).click()

        cy.get(`[name=formComidaFavorita][value=${this.pessoa.comida}]`).click()
        cy.get('#formEscolaridade').select(this.pessoa.escolaridade)
        cy.get('#formEsportes').select(this.pessoa.esportes)
        cy.get('#elementosForm\\:sugestoes').then($elemento =>{
            cy.wrap($elemento).type(this.pessoa.sujestoes)
        })
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')

      })
     
   
   
  })
})
