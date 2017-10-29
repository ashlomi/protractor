// Multiple spec files for CDD TAR wildcard import and execution
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('CDD TAR all TC PASS 02 A', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 02 A', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  it('should list todos 02 A', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
});

describe('CDD TAR all tc fail 02 A', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 02 A', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('FAIL A!');
  });

  it('should list todos 02 A', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('FAIL A');
  });
});

describe('CDD TAR all TC PASS 02 B', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 02 B', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  it('should list todos 02 B', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
});

describe('CDD TAR all tc fail 02 B', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 02 B', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('FAIL B!');
  });

  it('should list todos 02 B', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('FAIL B');
  });
});

describe('CDD TAR all TC PASS 02 C', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 02 C', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  it('should list todos 02 C', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
});

describe('CDD TAR all tc fail 02 C', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user 02 C', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('FAIL B!');
  });

  it('should list todos 02 C', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('FAIL B');
  });
});
