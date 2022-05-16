class Model {
    constructor() {
        this.todos = [];
        this.id = 0;
    }

    addTodo(todoText){
        const todo = {
            id:this.id++,
            text:todoText,
            complete:false,
            edit:false,
        };
        this.todos.push(todo);
    }

    deletTodo(id){
        this.todos = this.todos.filter((todo) => todo.id != id)
    }

    editTodo(id, updateText){
        this.todos = this.todos.map((todo) => {
            if(todo.id === id) {
                todo.edit = !todo.edit;
                todo.text = updateText;

            }
        })
    }

}

class View {
    constructor() {}
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}


const app = new Controller(new Model(), new View())