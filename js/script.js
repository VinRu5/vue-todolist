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
            newTask: '',
            showMenu: false
        },
        mounted() {
            this.inputFocus();
        },
        methods: {
            addTask: function() {
                if (this.newTask !== '') {
                    this.toDoList.push(this.newTask);
                    this.newTask = '';
                }
                this.inputFocus();
            },
            deleteTask: function(index) {
                this.toDoList.splice(index, 1);
                this.inputFocus();
            },
            inputFocus: function() {
                const inputElement = document.getElementById('input-task');
                inputElement.focus();
            },
            
        }
    }
)