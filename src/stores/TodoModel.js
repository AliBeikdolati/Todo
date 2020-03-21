import {observable , action} from 'mobx';

export default class TodoModel {
    store
    id
    @observable title
    @observable completed

    constructor(store , title , completed , id) {
        this.title = title;
        this.id = id;
        this.store = store;
        this.completed = completed;
    }

    @action
    changeToggle() {
        this.completed = !this.completed
    }
}
