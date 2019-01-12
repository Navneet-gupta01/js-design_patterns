# Adapter Pattern  

## It is a Structural Pattern

* Match interfaces of different classes  
* An “off the shelf” component offers compelling functionality that you would like to reuse, but its “view of the world” is not compatible with the philosophy and architecture of the system currently being developed.  

* How to use three pin Power plug with two pin Power Outlet

* Frequently used in the JQuery to handle Cross browser functionality

* One example of an adapter we may have used is the jQuery `jQuery.fn.css()` method. It helps normalize the interfaces to how styles can be applied across a number of browsers, making it trivial for us to use a simple syntax which is adapted to use what the browser actually supports behind the scenes:

```Javascript
// Cross browser opacity:
// opacity: 0.9; Chrome 4+, FF2+, Saf3.1+, Opera 9+, IE9, iOS 3.2+, Android 2.1+
// filter: alpha(opacity=90); IE6-IE8

// Setting opacity
$( ".container" ).css( { opacity: .5 } );

// Getting opacity
var currentOpacity = $( ".container" ).css('opacity');
```
