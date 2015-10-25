toDoList.controller('ToDoListController', [function() {

  var self = this;
  self.list = [];

  self.addTask = function() {
    self.list.push({
      name: self.newTask,
      completed: false
    });
    console.log(self.list);
    self.newTask = "";
  }

  self.removeTask = function(start) {
    self.list.splice(start, 1);
  }



  self.completedTasks = function() {
    self.list = self.list.filter(function(task) {
      return task.completed
    });
  }

  self.incompletedTasks = function() {
    self.list = self.list.filter(function(task) {
      return !task.completed
    });
  }

  function filterForIncomplete(task) {
    return task.completed === false;
  }

  self.countTasks = function() {
    return self.list.filter(filterForIncomplete).length;
  }

  self.clearAll = function() {
    self.list = [];
  }

}]);
