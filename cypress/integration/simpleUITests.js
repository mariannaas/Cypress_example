describe('Check UI elements on the page', function () {

    beforeEach(function () {
        cy.visit(Cypress.env("api_server"))
    })

    it('Check if all initial elements are visible on the page', function () {
        cy.get('#status').should('be.visible')
        cy.get('#start').should('be.visible')
        cy.get('#result').should('be.visible')
        cy.wait(3000)
    })

    it('Check if 3 symbols are displayed after pressing Start', function(){
        cy.get('#start').click()
        cy.get('#result').within(($result) => {
            cy.get('div').should(($symbol) =>{
                expect($symbol).to.have.length(3)
            })
        })

    })
})
