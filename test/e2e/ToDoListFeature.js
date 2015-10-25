describe('To Do List', function() {

  var inputBox = element(by.model('listCtrl.newTask'))
  var checkBox = element(by.model('task.completed'))
  var addButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
    inputBox.sendKeys('get lunch');
    addButton.click();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To do list');
  });

  it('displays items added to the list', function() {
    expect(element(by.binding('task')).getText()).toEqual('get lunch Edit task');
    expect(inputBox.isSelected()).toBe(false);
  });


});
