import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Two test cases that pass 01', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 01 - Pass', () => {
    element(by.model('yourName')).sendKeys('Yonatan');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Yonatan!');
  });

  it('should list todos 01 - Pass', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
});
