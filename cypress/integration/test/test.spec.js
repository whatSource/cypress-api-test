/// <reference types="Cypress" />

describe( 'Mochas interface' ,  () => {
    context( 'it provides a way to keep tests easier to read and organized' ,  () => {
        it( 'This is your test case' ,  () => {
            expect(true).to.eq(true)
        });
    });
});