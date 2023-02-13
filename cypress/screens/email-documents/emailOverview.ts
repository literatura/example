import { components } from '@cy/components'

class EmailOverviewScreen {
  readonly kv = Object.freeze({
    Save: 'Save',
  })

  getSelectOption(option: string) {
    return cy.contains('.ant-select-item-option-content', option)
  }

  getTableRow(index: number) {
    return cy.get(`.ant-table-row.ant-table-row-level-0:eq(${index})`)
  }
}

export const emailOverviewScreen = new EmailOverviewScreen()
