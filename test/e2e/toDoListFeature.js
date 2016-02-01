describe('To Do List', function() {
  it('has a title', function() {
    browser.get('http://localhost:8081');

    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('add tasks', function() {

    element(by.model('toDoListCtrl.addTask')).sendKeys('Walk Cat');
    element(by.id('newTask')).click();

    expect(element(by.binding('task')).getText()).
    toContain('Walk Cat');
  });

  xit('can delete tasks', function() {

    element(by.model('toDoListCtrl.addTask')).sendKeys('Walk Cat');
    element(by.id('newTask')).click();
    element(by.id('deleteTask')).click();

    expect(element(by.binding('task')).getText()).
    toContain('Walk Cat');
  });
});
