describe('Check requests to the game page', function () {

    it('Check if the game server is started', function () {
        cy.request("http://127.0.0.1:8000")
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.be.ok
            })
    })
})