class TestePage {

    acessarSite() {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom#edit')
    }
    clickBotaoAzul() {
        cy.get('a[class="button"]')
            .click()
    }

    clickBotaoVermelho() {
        cy.get('a[class="button alert"]')
            .click()
    }

    clickBotaoVerde() {
        cy.get('a[class="button success"]')
            .click()
    }

    clickBotaoEditar() {
        cy.get('table tbody tr td a').each(($el, index, $list) => {
            if ($el.text().includes('edit')) {
              cy.wrap($el).click()
            }
          })
    }

    clickBotaoDeletar() {
        cy.get('table tbody tr td a').each(($el, index, $list) => {
            if ($el.text().includes('delete')) {
              cy.wrap($el).click()
            }
          })
    }
}

export default new TestePage()