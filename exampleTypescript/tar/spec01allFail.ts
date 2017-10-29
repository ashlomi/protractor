// Multiple spec files for CDD TAR wildcard import and execution
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings 01 A', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 01 A', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('FAIL A!');
  });

  it('should list todos 01 A', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('FAIL A');
  });
});

describe('protractor with typescript typings 01 B', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 01 B', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('FAIL B!');
  });

  it('should list todos 01 B', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('FAIL B');
  });
});
