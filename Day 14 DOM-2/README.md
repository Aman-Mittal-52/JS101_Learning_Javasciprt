# JS101 DOM-2


## DOM-2 problems
### DOM-2

#### 1. BMI Calc
- Create an application which calculates BMI (Body Mass Index)
- Your app should have 2 input boxes
  - take Weight in KG's from the User
  - take Height in Meters from the User
- Based on entered height and weight calculate BMI of that person
- Here is the formula for manually calculating BMI  **BMI = (weight) / (height * height)**
- From the obtained BMI result, display whether the person is
  - UnderWeight - **bmi <= 18.4**
  - Normal Weight - **bmi >= 18.5 && bmi <= 24.9**
  - Overweight - **bmi >= 25 && bmi <= 29.9**
  - Obese - **bmi >= 30**
- Hint : use if conditions 
 - **SAMPLE OUTPUT**
    <img src="https://i.imgur.com/EYWXeKW.png">


#### 2. LeaderBoard
- Create the file leaderboard.html so that it looks similar to the image below
- Functionality
  - By clicking on any number it shows up in the score box joined to any previous numbers already present (Eg: To enter a score of **423** you have to press **'4' '2' '3')**
  - Once the button **ENTER** is pressed the score gets compared with the **MIN** and **MAX** boxes, if the current score is less than the **MIN** score it gets updated with the current score, if the current score is greater than the **MAX** score it gets updated with the current score
  - The **SCORE** box will be reset with empty value
<img src="https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_03/day_3/templates/leaderboard.jpg">
### IW Dom-2

#### 1. Masai Working Calc
 -  Complete the functionality part of Masai calculator.

#### 2. Selectors
```
<html>
  <head>
    <title>Practise Selectors</title>
  </head>
  <body>
    <h1>First H1</h1>
    <h1>Second H1</h1>
    <h3>First H3</h3>
    <h3>Second H3</h3>
    <h5>First H5</h5>
    <h5>Second H5</h5>
    <h5>Third H5</h5>
    <div class="green">First DIV</div>
    <div class="red">Second DIV</div>
    <div class="blue">Third DIV</div>
    <p class="green">First P</p>
    <p class="red">Second P</p>
    <p class="blue">Third P</p>
    <hr />
    <button onClick="changeH1()">Change H1</button>
    <button onClick="changeH3()">Change H3</button>
    <button onClick="changeH5()">Change H5</button>
    <button onClick="changeGreen()">Change Green</button>
    <button onClick="changeRed()">Change Red</button>
    <button onClick="changeBlue()">Change Blue</button>
    <script>
      function changeH1() {
        // the colour of first <h1> should turn to red
      }

      function changeH3() {
        // the colour of all <h3> should turn to green
      }

      function changeH5() {
        // the colour of all <h5> should turn to blue
      }

      function changeGreen() {
        // all the elements with the class green should change to green
      }

      function changeRed() {
        // all the elements with the class red should change to red
      }

      function changeBlue() {
        // all the elements with the class blue should change to blue
      }
    </script>
  </body>
</html>
```



##### Complete the functionality in the file *selectors.html*
 - On clicking the button **Change H1** the colour of first **'h1'** should turn to **red**
 - On clicking the button **Change H3** the colour of all **'h3'** should turn to **green**
 - On clicking the button **Change H5** the colour of all **'h5'** should turn to **blue**
 - On clicking **Change Green** all the elements with the class green should change to **green**
 - On clicking **Change Blue** all the elements with the class blue should change to **blue**
 - On clicking **Change Blue** all the elements with the class blue should change to **blue**
 - On clicking **Change Red** all the elements with the class red should change to **red**

#### 3.Basic Styling With DOM
- Copy the template
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Masai School</h1>
    <button onClick="changeRed()">Change Text color to red</button>
    <button onClick="changeYellow()">Change Text color to yellow</button>
  </body>
</html>

<script>

  function changeRed(){
    // change text color of h1 to red
  }

  function changeYellow(){
    // change text color of h1 to yellow
  }
</script>
```
- On clicking on Change Text color to red, change color of h1 tag to red
- On clicking on Change Text color to yellow, change color of h1 tag to yellow