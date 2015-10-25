# Todo Challenge

This is a to do list that allows users to:
* add tasks to a list
* update items on the list
* delete items on the list
* filter the view by active, completed, and all tasks
* clear all tasks on the list
* shows remaining tasks on the list

Technology used
---------------
* Angular JS
* Node and Bower NPM
* Node express server
* Testing - Karma-Jasmine, PhantomJS and Protractor

Set up
-------

1. Clone this repo
2. Run ```bower install```
3. Run ```node server.js```
4. Go to your localhost:8282

Unit testing:
* run tests with ```karma start test/karma.conf.js```

Acceptance testing:
* run ```webdriver-manager start``` and ```node server.js```
* run tests with ```protractor test/e2e/conf.js```


Still to do
-----------

* Fix up bug in count for remaining tasks
* review testing
* styling
