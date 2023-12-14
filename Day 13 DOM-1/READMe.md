# Document Object Model (DAY 1)

## IW DOM-1
### Ring Bell --> OnClick()
- onClick Event:
- Copy the given template in 'events.html'
```
  <!DOCTYPE html>
<html>
  <head>
    <title>Events</title>
  </head>
  <body>
    <button> Ring Bell </button>
  </body>
</html>
<script>
  // Write js here
</script>

```
-Add an event to button such that, whenever user clicks on button, a message saying that "Please open the door" should be shown in console.

### Ring Bell Alert
- Alert Event
- Copy the given template in 'scam.html'
```
  <!DOCTYPE html>
<html>
  <head>
    <title>Events</title>
  </head>
  <body>
    <img
      src="https://miro.medium.com/max/1400/1*mdcu3Ku9r44HMtraHUqu5g.jpeg"
      alt=""
    />
  </body>
</html>
<script>
  // Write js here
</script>

```
- Add an event to image such that, whenever user clicks on that image, an alert should be displayed saying that "The website you are going to visit may harm your computer, do you still want to redirect?"

### Show Quote
- DOm Manupulation
- Copy the given template in 'quote.html'
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <button>Show Quote in console</button>
  <p id="quote">Talk is cheap Show me the code</p>
</body>
</html>
<script>
  //write js here
</script>
```
- On clicking on button, display the quote given in p tag in console

### LOGIN AND LOGOUT BASIC DOM
- DOM manupulation
- Copy the given template in 'login.html'
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>This example demonstrates how we can change text content when clicking on button</h1>
  <hr>
  <h1 id="display">Click on Login to continue</h1>
  <button onClick="login()">Login</button>
  <button onClick="logout()">Logout</button>
</body>
</html>
<script>
  function login() {
    //complete this function
  }

  function logout() {
    //complete this function
  }
</script>
```
- Complete the given functions such that
- When Login button is clicked, text in h1 tag should be changed to "Login Success"
- When Logout button is clicked, text in h1 tag should be changed to "Logout Success"
- Also check in dev tools for the change

### Masai Application
- Copy the given template in 'masai.html'
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>Masai School Application</h1>
  <p>Enter Your name and gender to apply for masai school</p>
  <h2 id="display">Display entered name and gender here</h2>
  <hr>
  <input type="text" id ="name" placeholder="Enter your name">
  <select id="gender">
    <option value="Male">Male</option>
    <option value="Female">Male</option>
  </select>
  <button>Apply</button>
</body>
</html>
<script>

</script>
```
- Design an application such that when user clicks on Apply button, he should take entered values from both input and select tags and display it in h2 tag with id "display"


## DOM -1 

### Mini Calc
- Create a mini calculator application, which has following functionalities 
  - Addition
  - Subtraction
  - Division
  - Multiplication

- Your app should have
    - Two input boxes which should take two numbers from the user.
    - Four Buttons with following text content
      - Add
      - Subtract
      - Divide
      - Multiply


- When user enter 2 and 4 and clicks on multiply button, an alert should come with 8 as ans
- When user enter 8 and 4 and clicks on Divide button,an alert should come with 2 as ans

<img src="https://i.imgur.com/NnT7dfp.png">


### Registeration

- Complete all the functions by creating a copy of the above template with the file name 'registration.html'
```<!DOCTYPE html>
<html>
<head>
	<title>Registration</title>
</head>
<body>
	<input type="text" name="name" id="name">
	<select id="gender">
		<option value="">--</option>
		<option value="male">M</option>
		<option value="female">F</option>
	</select>
	<input type="text" name="email" id="email">
	<input type="text" name="mobile" id="mobile">
	<hr>
	<h1 id="dName">NAME</h1>
	<h2 id="dGender">GENDER</h2>
	<h3 id="dEmail">EMAIL</h3>
	<h4 id="dMobile">MOBILE</h4>
	<hr>
	<button onclick="showName()">NAME</button>
	<button onclick="showGender()">GENDER</button>
	<button onclick="showEmail()">EMAIL</button>
	<button onclick="showMobile()">MOBILE</button>
	<button onclick="resetForm()">RESET FORM</button>
	<button onclick="resetDisplay()">RESET DISPLAY</button>
	<script type="text/javascript">
		function showName() {
			// Show filled name inside h1
		}

		function showGender() {
			// Show the selected gender inside h2
		}

		function showEmail() {
			// Show the filled email inside h3
		}

		function showMobile() {
			// Show the filled mobile inside h4
		}

		function resetForm() {
			// Reset all the form elements to default values (blank "")
		}

		function resetDisplay() {
			// Reset all the headings (h1, h2, h3, h4) to blank values
		}
	</script>
</body>
</html>
```

### Alerts

- Complete all the functions by creating a copy of the above template with the file name alerts.html
```<!DOCTYPE html>
<html>
	<head>
		<title>Showing Alerts</title>
	</head>
	<body>
		<button onclick="showFirstName()">FIRSTNAME</button>
		<button onclick="showLastName()">LASTNAME</button>
		<button onclick="showFullName()">FIRSTNAME NAME</button>
		<script type="text/javascript">
            function showFirstName() {
			    // Complete to show an alert with your first name 
			}

            function showLastName() {
                // Complete to show an alert with your last name             
            }

            function showFullName() {
                // Complete to show an alert with your full name (firstname lastname)
                                
            }
        </script>
	</body>
</html>
```