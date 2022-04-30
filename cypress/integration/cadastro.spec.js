///<reference types="cypress"/>
import signup from '../pages/SignupPage'

describe('Testes - Preenchimento do formulario de cadastro', () => {

  beforeEach(function() {
    
      cy.fixture('pessoaData').then((p)=> {
        this.pessoa = p
      })
  })


  it('Preenchimento dos dados via arquivo de dados',function(){

    signup.go() 
    signup.fillForm( this.pessoa.signup )
    
    signup.submit()
    signup.modalContentShoudBe('Cadastrado!')      
       

  })

})
