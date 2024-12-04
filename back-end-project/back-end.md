# Project notes

## Fundamental
- User verification
- User database (level system)
- Group database (list)
- Task database (assigned to either User or Group)
- Admin page, create new users, mark any tasks as complete/deleted
- New users created with random password

## Quantative testing
- Regular testing
- Error logging and review
- Responsive and fast interaction with the platform

## Databases
- userID (unique), taskID (unique)

# Pages

## Home
A basic landing page for the user
**Contents**
- Login popup modal
- Sign Up popup modal

### Login
Login modal will popup a form for the user to enter their username & password
Contain a link below to "Reset Password"
- Error message if User not found

### Sign Up
Sign Up modal will popup a form for the user to enter a username and email
Message below to validate if the username is taken
Minimum length requirements
Note "Password will be emailed to the user once verified by admin"
(This is to stop users creating multiple accounts and to also stop unwanted users from creating accounts in the system)
The system administrator or moderator will have to assign the user with a level and other details so that todo items appear correctly for their account

