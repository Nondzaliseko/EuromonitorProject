
//Test case 
describe('Unable to login with blank field - Negative', function () {
    it('Unable to login with blank field - Negative', function () {
        //url launched - login without entering credentials
        cy.visit("https://www.saucedemo.com")
           cy.get().click()

            })
//url launched - login with lock out user credentials
     it('locked out user unable to Login  ', () => {     
        cy.visit('https://www.saucedemo.com')
            cy.get ('form > #user-name').type('locked_out_user')
            cy.get('#password').type('secret_sauce')*
           cy.get('#login-button').click()

        })
          //url launched - login with valid credentials
        it('standard user able to Login successfully ', () => {     
           cy.visit('https://www.saucedemo.com')
               cy.get ('form > #user-name').type('standard_user')
               cy.get('#password').type('secret_sauce')
              cy.get('#login-button').click()

            })
            //Select item in the product page
          it('standard user able to Login successfully ', () => {     
             cy.visit('https://www.saucedemo.com')
                 cy.get ('form > #user-name').type('standard_user')
                 cy.get('#password').type('secret_sauce')
                cy.get('#login-button').click()
  
                cy.get('.inventory_item_name:eq(0)').click()

            })
            //Add product to cart
          it('standard user able to Login successfully ', () => {     
             cy.visit('https://www.saucedemo.com')
                 cy.get ('form > #user-name').type('standard_user')
                 cy.get('#password').type('secret_sauce')
                cy.get('#login-button').click()
  
                cy.get('#add-to-cart-sauce-labs-backpack').click()
                //Assertion -verify product is added
                cy.get('.shopping_cart_badge').contains('1')
            //Remove product from cart
                cy.get('#remove-to-cart-sauce-labs-backpack').click()

            })

})
