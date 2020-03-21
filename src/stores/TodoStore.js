import { observable, action } from "mobx";

import TodoModel from './TodoModel'

class TodoStore {
    @observable todos = []
    @observable num = 0
    lastID = 0

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this , title , false , this.lastID++))
        document.getElementById('footer').style.display = 'block';
        this.num++;
    }

    @action
    removeTodo(first){
        for(let i = 0 ; i < this.todos.length ; i++){
            if(first === this.todos[i].id){
                this.todos.splice(i , 1);
            }
        }
        if(this.todos.length === 0){
            document.getElementById('footer').style.display = 'none';
        }
        for (let i = 0; i < this.todos.length; i++) {
            if(this.todos[i].completed){
                document.getElementById('clearCompleted').style.display = 'block';
                break;
            }else{
                document.getElementById('clearCompleted').style.display = 'none';
            }
        }
        this.countUnDo()
    }

    @action
    countUnDo(){
        this.num = 0;
        for(let i = 0 ; i < this.todos.length ; i++){
            if(this.todos[i].completed === false){
                this.num++;
            }
        }
    }
}

const store = new TodoStore();
export default store;