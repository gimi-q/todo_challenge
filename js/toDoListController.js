toDoList.controller('toDoListController', [function() {

  var self = this;

  self.tasks = [

  ]

  self.newTask = function() {
    self.tasks.push(self.addTask);
  };

  self.remove = function(item) {
    var index = self.tasks.indexOf(item);
    self.tasks.splice(index, 1);
  }


}]);
