# Rock-Paper-Scissors 
______________________________________________________  

### Abstract:
When you are bored and looking to pass the time, what better way than to play a game of rock-paper-scissors. Better yet, no friends required! The computer will prove to be an excellent opponent.
This application brings the joy of a classic game to anyone who has some time on their hands and a computer.

### Installation Instructions:
In order to access and clone the repository, a user can fork the repository from https://github.com/Speekins/rock-paper-scissors. From the forked repository, click the green 'code' button and copy the https link. In the local terminal, type "git clone" followed by the https link. At this stage the application can be opened in a local browser by typing in terminal "open index.html".

### Preview of App:
![gif of rock-paper-scissors game](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/116e35f3-5aa5-47b1-84c6-86dc64b155b8.gif?ClientID=vimeo-core-prod&Date=1664232343&Signature=296c3038f283fb25e777000eb983c821ca012f28)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
I am currently a student in module one (of four) of the Turing Front End Program. The project required about 6 days to complete, at approximately 2 hours a day for a total of 12 hours.

### Contributors:
Spencer Haka<br>
https://github.com/Speekins/

### Learning Goals:
1. Write solid and clean JavaScript that achieves the logic required for a game of rock-paper-scissors
2. Capture user events and appropriately delegate in order to effectively create a responsive webpage (via event listeners & handlers).
3. Use a "data model first" approach to write and maintain a data model that dictates the information portrayed on the DOM.
4. Build individual problem solving skills by breaking down problems into smaller parts so as to build something on my own without consulting outside sources.
5. Use HTML & CSS to replicate a given "website".Use HTML & CSS to replicate a given "website".

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
#### Wins
1. A significant win was being able to organize the page using CSS with relatively few headaches. This was a goal of mine because I have previous eperience with CSS, but the page layout has always proved to be the most challenging.
#### Challenges
1. The biggest struggle I had with this project was deciding what logic could be reserved to object properties and methods, and what logic had to live in the main javascript file. In order to write the cleanest code, I tried to reserve most logic for the properties and methods, and to automate as many actions as possible (e.g. when a new instance of game is invoked, the computer player object is automatically assigned its own icon source value). Yet I was unable to achieve this with the human player since the user's selections had to be hard-coded as variable re-assignments in the main file.
2. Another challenge came with the `displayWin` and `appendImage` functions. With `displayWin`, I was unsure how to avoid using nested for loops--though I know the index position of both players I could have avoided the outer for loop. But the way I wrote it (nested for loops) is the most dynamic in my opinion. I also wrote the `appendImage` function so that this logic did not have to be repeated (there are several places where images are added to new html elements), but the application varied quite a bit, and specifically when `appendImage` is called within `displayWin`--at the bottom of `appendImage` there is an if statement to handle the specific use of this function only when it is called within `displayWin`. This felt hacky, but the best way I could figure to get around the issue of special case scenarios for a function that is used several times throughout the application.
3. Finally, there are two arrays in the game.js file and the player.js file--`this.playerIcons` and `this.computerIcons` respectively. I wanted both of these to live within the player class, but the use of each is different, and so it made the most sense to put them in the different classes. `this.playerIcons` is referenced on line 97 of the main.js file within `populateIconChoices` and so it is most easily accessed as a property on the game object and not the human player object. I was unsure of how to approach this differently.
