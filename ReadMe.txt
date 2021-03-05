id, name, email
1000,mike,mike@mail.com

ES6 & 7


client scripting
object based
interpreter
loosely typed
functional paradigm
single threaded

multi threading : async & callbacks

core, dom, bom

var a; // global scope

function test(){
    var a; // local scope
}

{
    var a;
}

{
    var a;
}

a={
    b:{
        c:{
            d:E,
            f:G
        }
    }
}

const {d,f}=a.b.c

a.b.c.d
a.b.c.f

friend 1 : yes : process the closure of loan
         : no : friend 2 : yes

friend => request => wait : yes
                            : no

callbacks : chat
promise : server request

promise : resolved/rejected

axios.get().then().catch()

weather forecast

get users location : 
        get weather data based on location

// promise chaining
getUserLocation()
    .then((coords)=>{
       return getWeatherData(coords)
    })
    .then((data)=>populate the weather data)
    .catch()

try{
    const coords=await getUserLocation();
    const data=await getWeatherData(coords);
    // data to display
}catch{

}

promise : pending => fulfilled/rejected

modules : library

mylib.js
main.js/index.js : entry file

NODE JS
1. runtime env : scripts
2. dependency manager

package.json

node -v

npm init : package.json

npm install library-name --flags

--flags

--global/-g : global install/system level install : CLI (npm)

local install/application level install
--save/-S : default : dependency : both in prod & dev : compiler
--save-dev/-D : dev dependency : only in dev : packaging/unit testing

npm install webpack
npm install webpack-cli -D

ignored from source commit
package-lock.json : log file
node_modules

npm install

npm update

webpack.config.js

npm install -D css-loader

REACT JS
1. CRA : create react app cli

2. React devtools
3. Redux devtools

npx create-react-app my-app --template typescript

Virtual DOM

server : db transactions, io operations
client : 
1. rendering
2. dom manipulation

document.getElementById

asp.net

abc.com => request => server => processing => html => response

server
1. logical

client : html
2. presentation


facebook.com
wall
list of posts

on load : a set of posts are fetched & displayed

POST 1




POST 10

on scroll down : another set of posts are fetched & displayed

POST 11



POST 20

on scroll down : 10 posts

<p id="test" class="test"></p>

<p id="test" class="demo"></p>

Virtual DOM => RECONCILATION

JS DOM: 10 POSTS => 20 POSTS (Virtual DOM)

on data change => a clone of existing JS DOM is created with the updated data
                => a comparison between the JS DOM(current state) & the clone(new state) was performed (20POSTS - 10POSTS)
                 => identify the difference between both the DOM's : 10 POSTS
                  => only the difference was patched to the JS DOM  : 10 POSTS


                  a={
                      b:{
                          c:d
                      }
                  }

                  a={
                      b:{
                          c:e
                      }
                  }

    cd my-app
    npm run start

    <p></p>
    <Test></Test>

    COMPONENTS
    1. file name & component name should be same : code maintenance
    2. name of component should be Titlecase/PascalCase : Test

    1. Class
    2. Function


    outside my-app directory
    npx create-react-app shop-app --template typescript

cd shop-app
npm run start

component : atomic desgin
1. smallest reusable entity
2. SRP

src
    components
        Product.tsx


Product
1. presentation

2. fetch data
3. add to cart
4. add to wishlist (conditional)
5. no button

list of products
    Product : add to cart

list of products
    Product : add to wishlist

list of products
    Product : catalogue view (no button)


use as is : reusable


Product
    - how to display
    - what should be the button text
    - should the button be displayed or not
    - notify the parent component about button click


A : add to cart
    Product (cart) 

B : add to wishlist
    Product (wishlist)

C :(cart & wishlist)
    Product 

SMART : logical : containers
DUMB : presentation : components

SMART : fetch data, pass on data to DUMB
    DUMB : collect the data & display


App
    ProductList : pList
        Product : pData

    PARENT TO CHILD : props (properties/attributes) : value
    CHILD TO PARENT : props (events) : function

    <button class="myclass" onclick="func()">Test<button>
    
    <p class="red" id="" style="" test=""></p>
    <Product pData="" wishlist=""></Product>


type Props={

}

const Comp:React.FC<Props>=(props)=>{

}

button={
    id:'',
    class:'',
    style:'',
    onclick:function(){}
}

Virtual DOM

html : 1000
css : 1001
javascript : 1002



html : 1000
json : 1003
css : 1001
javascript : 1002


A : 0
B : 1
C : 2
D : 3


A : 0
B : 1
C : 2
E : 3


APP
    Currency : selecting the currency : start
    ProductList
            Product : code + price : finish


Currency => App => ProductList => Product

ui update - re-rendered (V-DOM)

stack : execution : ref : detect a ref change

heap : memory allocation

dynamic
 monitor the changes in heap : whenever anything in heap is changed : run the V-DOM (RECONCILATION)


 immutability

 COMPONENTS
 1. props : communication
 2. state : ui update

 class : stateful : SMART
 function : stateless : no state, no LIFECYCLE, pure component : DUMB

STATE
1. state should always be initialized
2. state should be immutable : 

update state : setState : async is nature
1. keeps the state immutable internally
2. calls the render function automatically

npm install axios

src
    services
        ProductService.ts

COMPONENT LIFECYCLE HOOKS : class

1. mounting
    constructor
    render : 1st render
    componentDidMount : on load

2. updating
    render : future renders : setState
    shouldComponentUpdate : gets triggered after setState is called

3. unmounting
    componentWillUnmount : un load


COMPONENT

SMART
DUMB

class
function : no state, no LIFECYCLE, purecomponent

stateful
stateless

RENDER : 
component
purecomponent

FORMS
controlled : recommended
state => virtual dom => within react env

uncontrolled 
ref <=> V-DOM <=> JS DOM <=> document.getElementById

wrapper : UI

class : col-size

own lib : grid-size

<Tag />
<img src=""/>

<Tag>
    CONTENT
</Tag>

<h1>
    CONTENT
</h1>
<p>

</p>

<div>
    <img />
    <h2></h2>
    <h3></h3>
</div>

PASSING THE DATA
1. props : parent to child

2. context API : v15
    provider : 1
    consumer : many
    only the descendants of the provider can consume the data

3. redux : application state management

APP : provider
    ThemeSwitch : state : class
    Currency
    ProductList 
        Product 
            Column: consumer : 4 col

change the bg color
change the text color to lighter shade : context API

REACT HOOKS : 16.8 
allows you to hook a functionality available only in class based component to a functional component

const {}=this.props
let []=useState

let [variable, setState]=React.useState({name:'mike',age:12});

<button onClick={()=>setState({...variable,name:'test'})}>

Virtual DOM

JS DOM

always run ur side effects within a LIFECYCLE hook

1. ajax calls
2. timer functions : setTimeout, setInterval
3. dom manipulation

npm install react-router-dom
npm install @types/react-router-dom

APP : root
    Header

    Main : ROUTER : dynamic

    Footer


    request => client => server => process => response

    request <=> client


FLUX & REDUX

FLUX : concept : uni directional data flow
store : data repository


REDUX : library
1. define actions :
actions are functions which return a dispatcher object

2. define reducer :
reducers are functions which analyse the type of dispatcher & returns the updated data to the store

3. create store : once/app
store is created by combining all the data returned from the reducers

4. provide the store to app (application)

5. connect the component to the store : SMART

npm install redux react-redux @types/react-redux

src
    store
        actions
        reducers
        index.ts : store config file