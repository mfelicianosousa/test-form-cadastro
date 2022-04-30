class SignupPage{

    go(){
        // Acessar a página do formulário de cadastro
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('h3').should('have.text','Campo de Treinamento') 
    }

    fillForm( pessoa ){

        // Preenchimento de cada um dos campos.
       
        const stub = cy.stub().as('alerta')
        cy.on('window:alert',stub)

        cy.get('#formCadastrar').click()
            .then(()=> expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))
        cy.get('#formNome').type(pessoa.nome)
        cy.get('#formCadastrar').click()
        .then(()=> expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
        cy.get('#formSobrenome').type(pessoa.sobrenome)
        cy.get('#formCadastrar').click()
        .then(()=> expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get(`[name=formSexo][value=${pessoa.sexo}]`).click()

        cy.get(`[name=formComidaFavorita][value=${pessoa.comida}]`).click()
        cy.get('#formEscolaridade').select(pessoa.escolaridade)
        cy.get('#formEsportes').select(pessoa.esportes)
        cy.get('#elementosForm\\:sugestoes').then($elemento =>{
            cy.wrap($elemento).type(pessoa.sujestoes)
        })

    }

    submit(){
        cy.get('#formCadastrar').click()
        
    }

    modalContentShoudBe( msg ){
        cy.get('#resultado > :nth-child(1)').should('contain',msg)
    }
}

export default new SignupPage ;