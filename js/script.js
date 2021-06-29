Vue.config.devtools = true;

new Vue(
    {
        el:'#app',
        data: {
            toDoList: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],
            newTask: ''
        },
        methods: {
            addTask: function () {
                this.toDoList.push(this.newTask);
                this.newTask = '';
            }
        }
    }
)