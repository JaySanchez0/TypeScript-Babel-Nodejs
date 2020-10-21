# NodeJs Babel


### Dependencies

~~~
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
~~~

### Create file .babelrc

~~~
    {
  "presets": [
    "@babel/preset-env"
  ]
}
~~~


### TypeScript

~~~
    npm install --save-dev @babel/preset-typescript
~~~

### Express server NodeJs
~~~
    npm install @types/express express
~~~

### Create Start script

Edit package.json and put into section script

**Only NodeJs**

~~~
    "start": "babel-node src/index.js"
~~~

**TypeScript**

~~~
    "start": "babel-node src/index.ts --extensions \".ts\""
~~~

### Create build script

~~~
    "build": "babel src -d build --extensions \".ts\""
~~~
