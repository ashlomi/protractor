import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Two test cases that fail 01', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 01 - Fails', () => {
    element(by.model('yourName')).sendKeys('Yonatan');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('FAIL A!');
  });

  it('should list todos 01 - Fails', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('FAIL A');
  });
});
