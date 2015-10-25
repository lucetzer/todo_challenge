describe('To Do List', function() {

  var inputBox = element(by.model('listCtrl.newTask'));
  var tasks = element.all(by.repeater('task in listCtrl.list'));
  var checkBox = $('[type="checkbox"]');
  var addButton = element(by.id('add-btn'));
  var allButton = element(by.id('showall-btn'));
  var activeButton = element(by.id('active-btn'));
  var completedButton = element(by.id('completed-btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
    inputBox.sendKeys('pay rent');
    addButton.click();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To do list');
  });

  it('displays items added to the list and status is incomplete', function() {
    // expect(tasks.get(0).getText()).toEqual('pay rent');
    expect(inputBox.isSelected()).toBe(false);
    expect(tasks.count()).toEqual(1);
  });

  it('registers completed status as true when user checks item', function() {
    checkBox.click();
    expect((tasks).isDisplayed()).toBeTrue;
  });

  it('displays count for incomplete items', function() {
    expect(element(by.className('task-count')).getText()).toEqual('Remaining tasks: 1');
  });

  it('displays active tasks only', function() {
    inputBox.sendKeys('call gas company');
    addButton.click();
    checkBox.click();
    activeButton.click();
    expect(inputBox.isSelected()).toBe(false);
    expect(tasks.count()).toEqual(1);
  });

  it('displays completed tasks only', function() {
    inputBox.sendKeys('call gas company');
    addButton.click();
    checkBox.click();
    completedButton.click();
    expect((tasks).isDisplayed()).toBeTrue;
    expect(tasks.count()).toEqual(1);
  });

  it('displays all tasks', function() {
    inputBox.sendKeys('call gas company');
    addButton.click();
    checkBox.click();
    activeButton.click();
    allButton.click();
    expect(tasks.count()).toEqual(2);
  });

});
