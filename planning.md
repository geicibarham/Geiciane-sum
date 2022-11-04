
# Sum and Have Fun!

<ul> 

<li>I started on cleaning up the app and deleting unecessary files.</li>
<br>
<li>Second I reset my CSS to reduce browser inconsistencies (border, margin, font of size headings and etc).</li>
<br>
<li>After that, utilizing my teacher knowledge on second grader students (their developmental stages and what they are able to do at this age). I then started thinking about what features this app needs to provide a great user experience. Next comes the knowledge on UX that I aquired trough courses, practice and what I do daily at work while building Investor Relations Websites.</li>

<li>I know The app would need to be fun, colorful, and the main way of communicating with the user would have to be trougt icons and images. </li>
<br>
<li>The next part will be the component tree and how to pass data between components. I will utilize a landing page that will have buttons for: entering the game or entering the score page that I will possibly build in the future. React Router will be utilized for switching between components. </li>
<br>

<li> On the next step, I went ahead I checked the documentation for the Math Api, it seems fairly simple and fun to use. After reading their documentation, I realized that the parameters for URL (the one we will utilize for the API call) will be encoded, so after the = sign will come our first random number, then "%2B" represents this character "+" and then we will put our last number in the end of the URL. I plan on using template literals for making the API call, template literals make it a lot easier to insert variables into the URL.</li>
<br>


## Component Tree and logic

<p>We the App component currently organized our routes and components: the HEADER and Footer components will always show on any component. The Landing page will be the first one to appear when the page first loads, then the user can choose if they want to view the high scores or if they want to plah the game. </p>

<p>The form component is the main component in this game, from that app we make the Api Call and give the user the feedback wether it is correct or not. </p>


## Form Component and Detailed logic

<p>To manage state in this application I used Use state and Use effect hooks, I also utilized Axios to make the API call cleaner. </p>
<ol>
<li>For the random numbers that will be generated, and added, I created two variables (number1 and number2) and utilized Math.Random (to generate random numbers) and Math.Floor (to round down number to the nearest integer). I also put those two numbers inside of the useEffect Hook, and added them to the dependency array. This way, whenever Javascript generates the random numbers, useEffect will take care of the state and make sure it is not out of pace with the User  Interface.</li> <br>

<li>Inside of the same useEffect hook, I placed the Api call with axuis</li>
 </ol>

 


</ul>