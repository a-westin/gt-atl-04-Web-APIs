# Code-Quiz

## Installation
No installation is necessary; view the deployed application by clicking on this [link.](https://a-westin.github.io/gtatl-04-Code-Quiz/)

## Usage
This is a simple quiz game that was made utilizing HTML, CSS, and vanilla JavaScript. The game begins on a screen that allows the user to either begin the game by clicking on the start button, or they can choose to view any existing highscores by clicking that button instead. 

Once the game begins, a timer begins to countdown from 60 seconds throughout the duration of the game. If the player answers a question incorrectly, 10 seconds will be deducted from the clock, which also effects the final score! A caption appears on the screen when the player selects an answer, letting them know if their answer was right or wrong. However, I had an issue with toggling the visibility of the captions and have not been able to resolve it as of yet. Hopefully with more time and research, I will find a solution to that problem. 

The game ends when one of two things happens:
* All the questions have been answered
* The timer has reached zero 

At that point, the player is prompted to enter their initials for a highscores board. I had quite a bit of difficulty navigating local storage but was eventually able to successfully store and clear the data!

## Screenshots 


![Screen Shot 2020-10-04 at 5 31 28 PM](https://user-images.githubusercontent.com/69770137/95027700-8acd2e00-0668-11eb-931f-137b462b4beb.png)

![Screen Shot 2020-10-04 at 5 31 57 PM](https://user-images.githubusercontent.com/69770137/95027710-93256900-0668-11eb-930f-840000cbec90.png)

![Screen Shot 2020-10-04 at 5 31 44 PM](https://user-images.githubusercontent.com/69770137/95027696-84d74d00-0668-11eb-9def-7479593b4ba5.png)

![Screen Shot 2020-10-04 at 5 32 21 PM](https://user-images.githubusercontent.com/69770137/95027713-97ea1d00-0668-11eb-9ca5-fc55b09f0411.png)

![Screen Shot 2020-10-04 at 5 32 45 PM](https://user-images.githubusercontent.com/69770137/95027715-9c163a80-0668-11eb-8929-55795443f9ae.png)



#### Credits

As always, W3schools.com was quite helpful, especially when I was looking into local storage. Additionally, I found a very helpful [walkthrough] (https://www.taniarascia.com/how-to-use-local-storage-with-javascript/) that was particularly helpful for me to understand the methods and get the syntax down. 

When it came to creating my index.html skeleton and deciding how to define the quiz questions array, I looked to [this] (https://www.sitepoint.com/simple-javascript-quiz/) tutorial for assistance. 

##### License

Licensed via MIT License, 
Copyright (c) [2020] [Amanda Fici Westin]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
