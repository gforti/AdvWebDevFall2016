AngularJS Workshop
==================

AngularJS is a JavaScript framework created by Google to build dynamic single page applications.  We will have a conceptual overview on how to use AngularJS.  We will cover controllers, Directives, filters, routing, services, scope and data model/binding. We will use NetBeans HTML5/PHP (OS independent)  for our IDE and reference Google's official AngularJS documentation. A good knowledge of JavaScript is preferred.  All code samples will be available on github.com.

##What you need

- [ ] NetBeans (OS independent)
	- HTML5 & PHP bundle (Free, 106 MB)
	- https://netbeans.org/downloads/
- [ ] A good understanding of JavaScript
	- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- [ ] Review the AngularJS website
	- https://angularjs.org/

Agenda
==================

1. Modules 
	- a container for the different parts of an app including controllers, services, filters, directives which configures the Injector
- Controllers 
	- the business logic behind views
- Scope 
	- context where the model is stored so that controllers, directives and expressions can access it
- Data-binding 
	- sync data between the model and the view
- Dependency Injection 
	- Creates and wires objects and functions
- Filters 
	- formats the value of an expression for display to the user
- Routing 
	- used for deep-linking URLs to controllers and views (HTML partials).
- Service 
	- reusable business logic independent of views
- Directives 
	- extend HTML with custom attributes and elements
- Build a simple application with Angular JS


Modules
==================

##What is a Module?
You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.

##Recommended Setup
* A module for each feature
* A module for each reusable component (especially directives and filters)
* And an application level module which depends on the above modules and contains any initialization code.

Reference: 
https://docs.angularjs.org/guide/module



Controllers
==================

##Use controllers to:
* Set up the initial state of the $scope object.
* Add behavior to the $scope object.

##Do not use controllers to:
* Manipulate DOM — Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability.
* Format input — Use angular form controls instead.
* Filter output — Use angular filters instead.
* Share code or state across controllers — Use angular services instead.
* Manage the life-cycle of other components (for example, to create service instances).

In general, a Controller shouldn't try to do too much. It should contain only the business logic needed for a single view.

The most common way to keep Controllers slim is by encapsulating work that doesn't belong to controllers into services and then using these services in Controllers via dependency injection. 

Reference: 
https://docs.angularjs.org/guide/controller


Scope 
==================

##What are Scopes?
scope is an object that refers to the application model. Scope is the glue between application controller and the view.  You can think of the scope and its properties as the data which is used to render the view. The scope is the single source-of-truth for all things view related. Scope as Data-Model.

Reference: 
https://docs.angularjs.org/guide/scope



Data-binding
==================

Data-binding in Angular apps is the automatic synchronization of data between the model and view components. The way that Angular implements data-binding lets you treat the model as the single-source-of-truth in your application. The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.

Reference: 
https://docs.angularjs.org/guide/databinding

Dependency Injection
==================
Dependency Injection (DI) is a software design pattern that deals with how components get hold of their dependencies.

The Angular injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.

Reference: 
https://docs.angularjs.org/guide/di


Filters
==================

##What is a Filter?
A filter formats the value of an expression for display to the user. They can be used in view templates, controllers or services and it is easy to define your own filter.

Filters can be applied to expressions in view templates using the following syntax:
```
{{ expression | filter }}
```

##Creating custom filters
Writing your own filter is very easy: just register a new filter factory function with your module. This factory function should return a new filter function which takes the input value as the first argument.

Reference: 
https://docs.angularjs.org/guide/filter


Routing
==================

$route is used for deep-linking URLs to controllers and views (HTML partials). It does not cause a full page reload when the browser URL is changed.  The $route service is usually used in conjunction with the ngView directive. The role of the ngView directive is to include the view template for the current route into the layout template.

Reference: 
https://docs.angularjs.org/api/ngRoute/service/$route#example


Services
==================
Angular services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.

##Angular services are:

- Lazily instantiated 
	– Angular only instantiates a service when an application component depends on it.
- Singletons 
	– Each component dependent on a service gets a reference to the single instance generated by the service factory.

Reference: 
https://docs.angularjs.org/guide/services



Directives
==================

##What are Directives?
At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform the DOM element and its children.

Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngClass. Much like you create controllers and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.

All of the Angular-provided directives match attribute name, tag name, comments, or class name. The following demonstrates the various ways a directive (myDir in this case) can be referenced from within a template:
```
<my-dir></my-dir>
<span my-dir="exp"></span>
<!-- directive: my-dir exp -->
<span class="my-dir: exp;"></span>
```

**Best Practice:** Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.

**Best Practice:** Unless your template is very small, it's typically better to break it apart into its own HTML file and load it with the templateUrl option.

Reference: 
https://docs.angularjs.org/guide/directive


==================
https://guides.github.com/features/mastering-markdown/