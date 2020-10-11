https://medium.com/@sangeetha_venkatesan/hulu-react-is-super-fun-if-you-are-consistent-enough-to-react-towards-it-9d418a82de07

In this blog, we will see how we can build a Hulu clone(react application) with data pulled from movie DB through axios. App developed for learning and I will be sharing insights and takeaways. Seems like a lot of terms!

Break it down and keep it simple on what we want to achieve component by component!

A lot of small packages added in order to enhance the experience.

Functionality:
Get the movie lists from TMDB movie Database through API
Hover over the video card to get the information about the movie.
Clicking on the options in navbar will fetch the movie results.
Make the experience count by including react flip move that throws animated effect when switching navbar options.

Let's get started, 🚀

Create a react application. Not going to cover these as there are endless articles. The main purpose is to document the points that are often brushed away. For a full stack like MERN build, give the names such that it clearly displays the front end and backend split.

Visualize what you are going to build and split the application into different components. Focus on one component(logic part and CSS) at a time.

Start the app by commenting on how the application page will be dissected

The apps can look simple but rich experience can be incorporated just by understanding what it needs through CSS. Your REACT world may be bogged with styled-components and other complex styling techniques. Just sticking to attacking the elements in the corresponding CSS can take the app come along with good structure.

Naming the classNames for CSS: Loved the BEM naming convention ❤

There are only two hard problems in Computer Science: cache invalidation and naming things — Phil Karlton

BEM naming convention
In the above snippet, the root component is VideoCard, the className given is videoCard(camel casing), the next child element under the component will be given vidoCard__stats.

https://github.com/getbem/getbem.com — Give a star to them if they have made you disciplined in naming :)

Keep the structure clean and manageable. When adding a header, keep the react component and its CSS. Data layer(redux) and much more can be added as and when we extend the application.This allows better styling for each component

For fetching the movie results through API, used axios. Don't configure the requests URL initialization in the react component though its just one line of code. Create a separate file and configure the BASE URL instance. Further endpoints can be extended from the BASE URL instance created. This method is pure gold ❤

I love the ES6 imports. It makes what we do look simple. I personally feel javascript is as simple when it is in ES6. Personally, I don't like using
var axios = require(‘axios’) — It just doesn't explicitly connect with me what am doing with the package.

Came across this package (React-text-truncate) — wonderful for bloggers website and to show the trimmed content.
Let's see the difference:
Wrapping the movie overview(<p> tag in <TextTruncate>)
Text truncate
  
Just pushing the information:
<p>{movie.overview}</p>

Using hover over CSS styling intelligently. Just displaying the video card will all the information when the page loads will settle user with too much information. Hovering over will create a minuscule user experience to let him know the information we provide.

react-flip-move: This creates a very smooth and seamless experience when we switch between different tabs and when the video card loads. Without the flip move, though video card load absolutely fine, but it would look like a website trying to get the data and just loads. Clever way, making apps seem faster sometimes does the trick to the user than creating faster loading apps :)

Above are little takeaways when creating the above application, hope you find it useful! Understand what the user might perceive when using the application a bit more than what the user may see! Thinking simple is the key!

https://drive.google.com/file/d/1KXwykufEkU91bAbtnHSgRyVSuDF2zrVd/preview

Try visualizing the current component, the complex application will come through in cohesion with small visualizations mapped.
