describe('toDoListController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoListController');
  }));

  it('initialises with an empty to do input field', function() {
    expect(ctrl.toDoListInput).toBeUndefined();

  });

  describe('when adding a to do task', function() {

  var tasks =
    {
      "task": "Walk Dog"

    }



  it('displays the new to do task', function() {
    ctrl.addTask = 'Walk Dog'
    ctrl.newTask();
    expect(ctrl.tasks).toEqual(tasks);
  });
});


});
