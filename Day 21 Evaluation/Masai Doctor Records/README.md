# JS101 Masai Doctors records

## Description
- use template provided below to write your code (MAndatory ^)
- <a href="./masai-doctor-record_662730.zip" download="Click Me"><button>Click me</button></a> 
### Some rule need to follow: - 
-  Before writing a single line of code please read the problem statement very carefully.
-  Don't change the already given ids or classes.
-  If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem  statement
- Your app consists a form which contain 5 input tags and 1 select tag
  - **Note** : HTML tags are already in template.
- Form will take
  - Name of the Doctor
  - Doctor ID
  - Specialization(select tag)
  - Experience in years
  - Email address
  - Mobile Number
- On form submit, display this data in form of table (thead is already in place just append to tbody)
- Input tags already in template, just finish script part.
- Each row should have 8 columns (td)
  - Name
  - Doctor ID
  - Specalization
  - Expericene
  - Email
  - Number 
  - Role
  - Delete
- Role should be given dynamically based on input (make sure role is written in same format, it is case sensitive)
**  Senior, if experience > 5 years
Junior, if experience is between 2 and 5 years
Trainee, if experience is less than or equal to 1 year**
- In each row, there should be a delete column and on clicking that **delete**, that particular row should be deleted.
- Another select tag (id: filter) is given to filter out the rows based on the Specialization. For example: If ENT is selected under specialization, so only those rows which have ENT should be visible.
- Make sure you follow all rules of forms.
- You can also create a separate script file.
- Your Output should look similar to this:
  
  <img src ="https://i.imgur.com/Dh3pFSn.jpg">

  