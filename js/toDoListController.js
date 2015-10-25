toDoList.controller('ToDoListController', [function() {

  var self = this;
  self.list = [];

  self.addTask = function() {
    if (self.newTask) {
      self.list.push({
        name: self.newTask,
        completed: false
      });
    }
    console.log(self.list);
    self.newTask = "";
  }

  self.removeTask = function(index) {
    self.list.splice(index, 1);
  }

  self.completedTasks = function() {
    self.list = self.list.filter(function(task) {
      return task.completed;
    });
  }

  self.incompletedTasks = function() {
    self.list = self.list.filter(function(task) {
      return !task.completed;
    });
  }

  self.showAll = function() {
    return self.list;
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
