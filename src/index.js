import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { About } from "./components/about";
import { error } from "./components/error";
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Link,
   Outlet,
 } from "react-router-dom";
import { Contact } from "./components/Contact";
import { RestaurantMenu } from "./components/ResturantMenu";
import { Shimmer } from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore  from "./common/appStore";
import { Cart } from "./components/Cart";
// import { Grocery } from "./components/Grocery";
// normal way to create react element 

// const parent = React.createElement("div", { id: "parent"} , [
//     React.createElement("div", {id : " child"}, [
//         React.createElement("h1",{}, "This is React learning")
//     ])
// ])

// creating react element using JSX 

// const jsxtest = <h1 class='heading'>This is for JSX test</h1>
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root.render(parent);
// root2.render(jsxtest)



// Note : always create functional component with first letter as capital
//REACT functional component
// const FunctionalComp1 = () => {
//    return <p class="heading">This is first functional component</p>
// }
// const root3 = ReactDOM.createRoot(document.getElementById("root3"));
// root3.render(<FunctionalComp1/>)


//React functional component with return 
// const FunctionalComp2 = () => {
//    return <p>This is second functional component</p>
// }
// const root4 = ReactDOM.createRoot(document.getElementById("root4"))
// root4.render(<FunctionalComp2/>)


//React functional component composition
// const CompositionComponent = () => (
//     <div>
//     <FunctionalComp1/>
//     <FunctionalComp2/>
//     </div>
// )

// const root5 = ReactDOM.createRoot(document.getElementById("root5"))
// root5.render(<CompositionComponent/>)



// creating the food app 
/**
 * Header
 * - Logo
 * - Nav Items
 * 
 * Body 
 * - Search
 * - ResturantContatiner
 *    - Resturantcard
 * 
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 */


// lazy loading Grocery component in react 
let Grocery = lazy(() => import("./components/Grocery"))

// wrapping whole app inside redux provider 
const AppLayout = () => {
   return (
      <Provider store={appStore}>
         <div className="app">
                  <Header />
                  <Outlet />
               </div>
      </Provider>
      
   )
}

const appRouter = createBrowserRouter([
   {
      path:'/',
      element : <AppLayout></AppLayout>,
      children :[
         {
            path:'/',
            element : <Body/>
         },
         {
            path:'/about',
            element : <About/>
         },
         {
            path:'/contact',
            element : <Contact/>
         },
         {
            path:'/resturantmenu/:resId',
            element : <RestaurantMenu/>
         },
         {
            path:'/cart',
            element : <Cart/>
         },
         {
            path:'/grocery',
            element : (<Suspense fallback={<h1>Loading..</h1>}>
               <Grocery/>
            </Suspense>)
         }
      ],
   }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)