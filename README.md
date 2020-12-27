
# Supertest demo 



## Introduction to API testing using SuperTest

  

What

How

Examples

  
  

### What is API testing and what is SuperTest?

  

With the advent of Microservice architecture, monolithic apps are becoming legacy. Also since digital evolution demands consumption of digital experiences across devices, it becomes more important to think about independent styled architecture, usually called Microservice architecture. The information exchanges with consumers in this architecture works via API. Some API’s generate data, some consume that data. Scalability level of these kinds of applications is very high as these apps can serve a large number of people who use different kinds of devices like tablets, mobile, wearable devices etc.

  

Testers need to make sure these communication channels called as API (Application programming interfaces) work seamlessly and data flow occurs without any external or internal errors. This kind of testing is called API testing, wherein schema, payload, security, validation of api are tested. Mostly, we have been using tools such as POSTMAN for testing apis. It is a GUI based tool and helps both developers and testers to test their API’s. Also it has got a good reporting mechanism.

  

SuperTest is a http based assertion library built using SuperAgent which is a client-side HTTP request library for Node.js. SuperTest allows users to test node.js based servers.

  

### How to set it up?

  

Supertest can be easily installed using the following command in the project root.

  

npm install supertest --save-dev


Modules installed till now:
chai
mocha
express

for mock api we have used mocky.io
