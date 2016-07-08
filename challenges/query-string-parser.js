/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

// YOUR CODE HERE


function parseQueryString(queryString) {
    if(queryString === 'undefined' || queryString === '') {
        return false;
    } else {
        // Get rid of a leading '?' so that you can pass 'location.search' to this function
        if(queryString.substr(0, 1) == '?') { queryString = queryString.substr(1); }

        // Split up the querystring
        var components = queryString.split('&');

        // Assign each variable of the querystring to a new property of the final object
        var finalObject = new Object();
        var parts;
        for (var i = 0; i < components.length; i++) {
            parts = components[i].split('=');
            finalObject[parts[0]] = decodeURI(parts[1]);
        }

        return finalObject;
    }
}
