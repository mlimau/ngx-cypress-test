import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onNavigationPage }  from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('32 Lesson POM first simple test ', () => {
    beforeEach('openning main page', () => {
        cy.openHomePage()
    })

    it('Navigation accros the page', () => {
        onNavigationPage.formLayoutsPage()
        onNavigationPage.formDatepickerPage()
        onNavigationPage.smartTablePage()
        onNavigationPage.toastrPage()
        onNavigationPage.tooltipPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(100)
    

    })

    it('33 lesson - should submit Inline and Basic form and select tommorow date in calendar', () => {
        // onNavigationPage.formLayoutsPage()
        // onFormLayoutsPage.submitInlineFormWithNameAndEmail('Nika', 'tast@gmail.com')
        // onFormLayoutsPage.submitBasicFormWithEmailAndPassword('ozon@gmail.com', '123123')

        onNavigationPage.formDatepickerPage()

        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(5, 10)
        onDatePickerPage.selectDatepickerWithDisabledMonMaxValue(3)

        
        onNavigationPage.smartTablePage()
        onSmartTablePage.addNewrecordWithFirstAndLastName('Mary', 'Gu')
        onSmartTablePage.updateAgeByName('Mary', '45')
        onSmartTablePage.deleteRowByIndex(2)

        

        

    })


})





cy.contains('nb-card', 'Using the Grid')//get our entire window by tag and text (tag found 20 objects, but text defined our)
                .find('[type="radio"]').then(radioButtons => {//находим все radiobuttons (siblings) в этом поле, и делаем assertion для проверки
                cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')//оборачиваем в cypress, eq(0) - индекс элемента, кликаем на неё (check), , - и проверяем статус 
                
            cy.wrap(radioButtons).eq(1).check({force: true})//теперь нажимаем вторую checkbox и дальше проверяем что первая стала unchecked
            cy.wrap(radioButtons).eq(0).should('not.be.checked')//should be automatikly deselected since eq(1) is checked        
            cy.wrap(radioButtons).eq(2).should('be.disabled')//проверим третью checkbox - она должна быть disabled так как к ней никто не прикасался        
            
        })