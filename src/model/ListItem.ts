export interface Item {
    id: string,
    desc: string,
    checked: boolean
}

export default class ListItem implements Item {
    constructor(
        private _id: string = '',
        private _desc: string = '',
        private _checked: boolean = false
    ) { }

    get id(): string {
        return this._id
    }
    set id(id: string) {
        this._id = id
    }

    get desc(): string {
        return this._desc
    }
    set desc(desc: string) {
        this._desc = desc
    }

    get checked(): boolean {
        return this._checked
    }
    set checked(checked: boolean) {
        this._checked = checked
    }
}