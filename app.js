new Vue({
    el: '#app',
    data: {
      newTask: '',
      tasks: [],
    },
    methods: {
      addTask() 
      {
        if (this.newTask.trim() === '') return;
  
        this.tasks.push({
          text: this.newTask,
          completed: false,
        });
  
        this.newTask = '';
      },
      completeTask(index) 
      {
        this.tasks[index].completed = !this.tasks[index].completed;
      },
      deleteTask(index) 
      {
        this.tasks.splice(index, 1);
      },
    },
    watch: {
      tasks: {
        handler() {
          this.completedTasks = this.tasks.filter(task => task.completed).length;
          this.pendingTasks = this.tasks.length - this.completedTasks;
        },
        deep: true,
      },
    },
  });