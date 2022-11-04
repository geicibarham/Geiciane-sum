
# Sum and Have Fun!


## Summary about components and Application organization
<p>Form component: gets input from the user, makes the API call, changes CSS classes after comparing Api data and user-entered answer.</p>

<p>App: organizes components and routes</p>

<p>Header and Footer: Add style and make accessibility on the App better for screen readers. It also improves user experience by providing links for navigating between pages.</p>

<p>Landing Page: Displays buttons for entering the game or viewing high scores. (Score is hard coded, for now, see enhancements section.) </p>

### CSS 

<p>I usually like using CSS modules on bigger applications. With this app, however, I am utilizing vanilla CSS: descriptive names for classes and IDs and keeping the files separated for each component. It is a lot easier to go through 30 lines of CSS to find a problem than go through 400 lines of code.</p>

### Planning
<ul> 

<li>I started on cleaning up the app and deleting unnecessary files.</li>
<br>
<li>Second, I reset my CSS to reduce browser inconsistencies (border, margin, font of size headings and etc).</li>
<br>
<li>After that, utilizing my teacher's knowledge of second-grader students (their developmental stages and what they are able to do at this age). I then started thinking about what features this app needs to provide a great user experience. Next comes the knowledge on UX that I acquired through courses, practice, and what I do daily at work while building Investor Relations Websites.</li> <br>

<li>I know The app would need to be fun, and colorful, and the main way of communicating with the user would have to be through icons and images. </li>
<br>
<li>The next part will be the component tree and how to pass data between components. I will utilize a landing page that will have buttons for entering the game or entering the score page that I will possibly build in the future. React Router will be utilized for switching between components. </li>
<br>

<li> On the next step, I went ahead and checked the documentation for the Math API; it seems fairly simple and fun to use. After reading their documentation, I realized that the parameters for URL (the one we will utilize for the API call) will be encoded, so after the = sign will come our first random number, then "%2B" represents this character "+" and then we will put our last number at the end of the URL. I plan on using template literals for making the API call, template literals make it a lot easier to insert variables into the URL.</li>
<br>


## Component Tree and logic

<p>We will have the App component currently organized in our routes and components: the HEADER and Footer components will always show on any component. The Landing page will be the first one to appear when the page first loads, then the user can choose if they want to view the high scores or if they want to play the game. </p>

<p>The form component is the main component in this game; from that app, we make the API Call and give the user feedback on wether it is correct or not. </p>


## Form Component and Detailed logic

<p>To manage state in this application, I will use mainly Use state and Use effect hooks, I also utilized Axios to make the API call cleaner. </p>
<ol>
<li>For the random numbers that will be generated and added, I will create two variables (number1 and number2) and utilize Math. Random (to generate random numbers) and Math.Floor (to round down the number to the nearest integer). I will also put those two numbers inside of the use effect Hook and add them to the dependency array. This way, whenever Javascript generates the random numbers, useEffect will take care of the state and make sure it is not out of pace with the User  Interface.</li> <br>

<li>Inside of the same use effect hook, I will the API call with Axios and use the Use state hook to keep track of the state of the data coming from the API.</li>
<br>
<li>To Track the state of the answer entered by the user, I will use the useState hook again and put the input type as "number", this way, if the user attempts to enter text in the input, it will not work. The function handle Change will track the change in the input and set the value of the variable "answer" to whatever the user entered. </li>

<br>
<li>I will also create a function that submits the form and calls the "check answer function." The check answer function will compare the data coming from the API with the answer provided by the user. If they match, it will provide feedback for the user and also set the background color to red/green, depending on whether the answer is correct or not. </li>

<li>Lastly, I will create a function to enable users to play the game again. That will also restart the feedback message and classes for right/wrong answer</li>
</ul>


## Enhancements


### High Scores
I would love to implement the possibility for the user to have their score saved to local storage. This score would be displayed on the top right of the page and just be 0 if the user had no score/had never played that game before. To create that functionality, I would start by <ul>
<li>Creating a state for the score, which would start at 0</li>
<li>Creating a state for an array to be saved to local storage</li>
<li>Every time the user gets the question correctly, the score would increase by 5</li>
<li>those numbers would be pushed to that initial array, which would also have to be converted to a string since local storage only allows strings</li>
<li>Use the use Effect hook to first convert the data from local storage to a Javascript object, then get the score from local storage and display it on the page.</li>
</ul>
</p>