describe('Check WIN statuses', function () {



        it('Check Big Win', function () {
            cy.server() // enable response stubbing
            cy.route({
                method: 'GET',
                url: '/outcome.json',
                response: {
                    value: [1, 1, 1]
                }
            })
            cy.visit(Cypress.env("api_server"))
            cy.get('#start').click()
            cy.wait(1000)
            cy.get('#status').then(($status) => {
                const text = $status.text()
                assert.equal(text, "Big win, congratulation.", "Win statuses are the same")
            })
        })

        it('Check Small Win', function () {
            cy.server() // enable response stubbing
            cy.route({
                method: 'GET',
                url: '/outcome.json',
                response: {
                    value: [1, 0, 1]
                }
            })
            cy.visit(Cypress.env("api_server"))
            cy.get('#start').click()
            cy.wait(1000)
            cy.get('#status').then(($status) => {
                const text = $status.text()
                assert.equal(text, "Small win, try again to win more.", "Win statuses are the same")
            })
        })

        it('Check No Win', function () {
            cy.server() // enable response stubbing
            cy.route({
                method: 'GET',
                url: '/outcome.json',
                response: {
                    value: [1, 0, 2]
                }
            })
            cy.visit(Cypress.env("api_server"))
            cy.get('#start').click()
            cy.wait(1000)
            cy.get('#status').then(($status) => {
                const text = $status.text()
                assert.equal(text, "No Win, try again.", "Win statuses are the same")
            })
        })
    })