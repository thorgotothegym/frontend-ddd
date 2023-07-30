# Frontend DDD

## Project's Title

Sample Project

## Description

It is a project in which we will be able to call an API and be able to show all the comments that the API offers us.
What we are going to try to validate is being able to introduce a hexagonal architecture in the frontend and being able to decouple the technology, the business logic, add an anti-error layer in case the backend fails.

Note for me: i need to explain more about the project.

### What does the application do

### Technologies I use in the App

- React
- Typescript
- React testing library
- React-query

### Some challenge that I have faced

The first challenge I have had to face is whether to make a typical architecture or a hexagonal architecture. After evaluating it, I have been thinking about making it hexagonal, since in my point of view it has quite a few positive points such as:

- Abstraction of calls to apis: If you want to modify something in the call, you have to go directly to its file without having to touch anything in the first instance in the UI.
- If in the future, you want to migrate to another framework (such as vue or others) you just have to uninstall react, install vue and go to the ui directory and modify the template
- The classes that are at the Entity level are those that define the business and then, you create them only once and they are used for calls to the apis, their response, and in the UI and we do not have to create several interfaces and make them cross.

- Classes Vs Types Vs Interfaces => To be defined

## Architecture

- Domain

  - Entities: These are the classes that we will need to define in our domain. Are those that are identified about the business: For example a Book
  - useCases: The cases of uses, is a function that calls a repository (call to an API), since that same repository can be called for different cases of uses. In our case we are calling getPost from findPost.

- Infraestructure
  - builders:
  - repositories
- Common

- UI

## How to use the App

1.- Install all packages with `yarn`

2.- `yarn dev`

A browser window will open and you will be able to see the app:

you can see on the right, that you can search by zip code. To search by zip code you have to write at least 3 characters and then hit search and you can also introduce yourself through a registration form

## Install

Please to install use `yarn`:

```
npm install
```

## Run the application

```
npm run server
```

```
npm run start
```

## For testing

```
yarn testing
```

## Bibliography

- [React-query](https://react-query-v3.tanstack.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [react-hooks-testing-library](https://www.npmjs.com/package/@testing-library/react-hooks)
- [Axios](https://axios-http.com/)
- [Hexagonal architecture frontend github](https://github.com/juanm4/hexagonal-architecture-frontend)
- [Comparison | React Query vs SWR vs Apollo vs RTK Query vs React Router](https://react-query-v3.tanstack.com/comparison)
