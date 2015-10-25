describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController')
  }));

  it('initialises with an empty task list and empty task field', function() {
    expect(ctrl.list).toEqual([]);
    expect(ctrl.newTask).toBeUndefined();
  });

  describe('adding and editing tasks on the to-do list', function() {
    var item = [
      { name: "pick up parcel",
        completed: false }
    ]

    beforeEach(function() {
      ctrl.newTask = 'pick up parcel';
      ctrl.addTask();
    });

    it('displays the task added to the list', function() {
      expect(ctrl.list).toEqual(item);
    });

    it('can clear all tasks on the page', function() {
      ctrl.clearAll();
      expect(ctrl.list).toEqual([]);
      expect(ctrl.list.length).toEqual(0);
    });

    it('counts the number of incomplete tasks', function() {
      expect(ctrl.countTasks()).toEqual(1);
    });

    it('allows users to delete tasks', function() {
      ctrl.removeTask();
      expect(ctrl.list).toEqual([]);
    })

    // it('allows users to edit the task selected', function() {
    //   ctrl.editTask();
    //   expect(ctrl.list).toEqual(item2);
    // });

  });




  // it('will adjust the completed status to true and false', function() {
  //   ctrl.newTask = 'buy groceries';
  //   ctrl.addTask();
  // });

});
