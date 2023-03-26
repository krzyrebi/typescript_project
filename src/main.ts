import './style.css'
import EntireList from './model/List'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
    const entireList = EntireList.instance
    const template = ListTemplate.instance

    const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement
    itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
        event.preventDefault()
        const input = document.getElementById('newItem') as HTMLInputElement
        const newEntryText: string = input.value.trim()
        if (!newEntryText.length) return
        const itemId: number = entireList.list.length
            ? parseInt(entireList.list[entireList.list.length - 1].id) + 1
            : 1
        const newItem = new ListItem(itemId.toString(), newEntryText)
        entireList.addItem(newItem)
        template.render(entireList)
    })

    const clearItems = document.getElementById('clearItemsButton') as HTMLButtonElement
    clearItems.addEventListener('click', (): void => {
        entireList.clearList()
        template.clear()
    })

    entireList.load()
    template.render(entireList)

}

document.addEventListener('DOMContentLoaded', initApp)

