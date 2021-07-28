describe("Home page actions",()=>{
    beforeEach(() => {
        cy.visit('https://test.briqstaging.net/');
      })
    it("Each functionalities asserted on homepage",()=>{
        let child=2;
        let adult=3
        let day ='28';
        let activityName = 'Test 2'
        cy.get('input[id=child]').type(child);
        cy.get('input[id=adult]').type(adult).type('{enter}');
        cy.get('button[data-filter-name=adult').should('be.visible');
        cy.get('button[data-filter-name=child').should('be.visible');
        cy.get('input[id=child]').should('contain.value', child);
        cy.get('input[id=adult]').should('contain.value', adult);
        cy.get('input[type=text]').first().click({ force: true });
        cy.get('span[class=flatpickr-next-month]').should('be.visible');
        cy.get('span[class=flatpickr-next-month]').click();
        cy.contains(day).first().click();
        cy.get('button[data-filter-name=date]').should('be.visible');
        cy.contains(activityName).click();
        cy.get("input[type=checkbox]").check({force: true});
        cy.get('span[class=irs-bar]').click(15,10,{force: true})
    }); 
});