# Potato.js

The JavaScript Library that turn complicated code into something more joyful.<br>

Potato.js is a lightweight JavaScript library designed to simplify front-end development and streamline interactions with RESTful APIs on the backend. With Potato.js, you can easily perform HTTP GET, POST, PUT, and DELETE requests, making it effortless to communicate with your server and manipulate data.

<P>PotatoScript is the another way of coding the web application.<br> 
It extend the HTML code with custom tag.
It group the relevant code into one location (a html tag) to make the code much easier to maintain<br> 
and to let you write less code and keep your code simple to save your time on building application.</P>
<P>It is easy to learn and use and master.<br>

### Features

- **Simplified API Requests**: Potato.js simplifies the process of making API requests, allowing you to focus on building your application's logic without worrying about complex HTTP request handling.
- **Support for CRUD Operations**: Whether you need to retrieve data, create new resources, update existing ones, or delete records, Potato.js provides intuitive methods for performing CRUD operations.

- **Effortless Integration**: Integrating Potato.js into your project is straightforward. Simply include the library in your HTML file, and you're ready to start leveraging its functionality.

### Getting Started

1. **Installation**: To start using Potato.js, download the library file from the official repository and include it in your HTML file:

   ```html
   <script src="potato.2.0.0.min.js"></script>
   ```
   or
   ```html
   npm install potatoscript
   ```

3. **Performing API Requests**: Potato.js provides methods for performing HTTP GET, POST, PUT, and DELETE requests. Here's a quick overview of each method:

   - `potato.GET(url, callback)`: Send a GET request to the specified URL.
   - `potato.POST(url, data, callback)`: Send a POST request with data to the specified URL.
   - `potato.PUT(url, data, callback)`: Send a PUT request with data to the specified URL.
   - `potato.DELETE(url, callback)`: Send a DELETE request to the specified URL.

   Example:

   ```javascript
   // Perform a GET request
   potato.Get("model.php", function (response) {
     console.log("Response:", response);
   });

   // Perform a POST request
   var newData = { name: "John", age: 30 };
   potato.Post("model.php", newData, function (response) {
     console.log("Response:", response);
   });

   // Perform a PUT request
   var updatedData = { id: 1, name: "Jane", age: 35 };
   potato.Put("model.php", updatedData, function (response) {
     console.log("Response:", response);
   });

   // Perform a DELETE request
   var deleteData = { id: 1 };
   potato.Delete("model.php", deleteData, function (response) {
     console.log("Response:", response);
   });
   ```

# Rest API

## Semantics of each HTTP method:

1. **GET**: This method is used to retrieve data from the server. It should be idempotent, meaning that making the same request multiple times should produce the same result. GET requests are typically used for reading data and should not have side effects on the server.

2. **POST**: This method is used to submit data to be processed by the server. It is not idempotent, meaning that making the same request multiple times may produce different results. POST requests are typically used for creating or updating resources on the server, and they may have side effects.

3. **PUT**: This method is used to update an existing resource on the server. It is idempotent, meaning that making the same request multiple times has the same effect as making it once. PUT requests are typically used for updating resources with a complete representation of the resource.

4. **DELETE**: This method is used to delete a resource on the server. It is idempotent, meaning that making the same request multiple times has the same effect as making it once. DELETE requests are typically used for removing resources from the server.

While it's technically possible to use POST requests to perform actions similar to GET, PUT, and DELETE requests, doing so goes against the conventions and semantics of the HTTP methods.

Using the appropriate HTTP method for each action makes your API more predictable, easier to understand, and more consistent with RESTful principles.

# Getting Started

</P>
<P>The basic syntax of the code is looked like this:</P>
<PRE><CODE>< <I>[<b>system name</b>]</I>-<I>[<b>object type</b>]</I>-<I>[<b>object id</b>]</I>  <I>[attribute1 attribute2...]</I> /></CODE></PRE>
<P>
For example if you want to create a button to alert out "my potato button" you just write the following code on the html document:
</P>
<PRE><CODE>&ltpotato-button-buttonID
    value="Click Me"
    background="yellow"
    marginTop="10px"
    image="image/img-p.png 21 21"
    onclick="alert('my potato button)"
&gt &lt/potato-button-buttonID&gt
</CODE></PRE>
    
<p>※You can use the keyword "potato" or just "o" as the [system name] for example < o-button-mybutton /> also will do.
I call it <b>OButton</b></p> 
<p>Example 2: Create a text box object with input keypad (i.e. <b>OKeypad</b>)
<PRE><CODE>&ltpotato-keypad-okeypad 
    marginTop=-15px					    
    value="0"
    top=-220px
    left=-150px			    
    htm="htm/keypad.htm"
&gt&lt/potato-keypad-okeypad&gt
</CODE></PRE>

# Installing

1. <a target="_blank" href="https://github.com/potatoscript/potato.html.js/wiki/2.-Setup">Setup</a> <br>

# Built With

<br>
<a target="_blank" href="https://github.com/potatoscript/potato.js">potato.2.0.0.min.js</a>
<br><br>

# Contributing

Please read [Wiki](https://github.com/potatoscript/potato.html.js/wiki) for details on the library.

# Authors

I am K.S. Lim, the author. I graduated with a degree in Mechanical Engineering from Coventry University in the UK. While my academic background is in engineering, my final year project introduced me to the realm of programming. Specifically, I worked on developing software capable of determining the natural frequency and damping factor from input data obtained through vibration measurement devices. This project marked the culmination of my undergraduate studies, merging the domains of engineering and programming.

The outcome of this endeavor was favorable and served as a catalyst for furthering my proficiency in programming, a pursuit I have continued to pursue since then. Notably, this marked the inception of my first JavaScript library, which I initiated in 2010.

I affectionately refer to it as "Potato JavaScript" or simply "o script" (where 'o' symbolizes 'potato'), owing to its user-friendly nature akin to that of a potato.

# License

The library is licensed under the terms of the Apache License
