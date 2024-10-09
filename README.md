#### JS PRACTICE SCOPE
### JavaScript Scope Practice - Real-World Examples
## 1. Budget Tracker: Local and Global Variables
# Problem:
You are building a simple budget tracking application. The app has a function to track the user’s total spending, and another function to track individual expenses. The total budget should be tracked using a global variable, while individual expenses should be handled within the scope of a function.
Your task is to write two functions:
addExpense: This function should take an expense (a number) as a parameter and add it to the global budget.
getExpenseDetails: This function should accept an expense description and cost, and it should log the description and cost to the console. These variables should be scoped within the function only.
Key requirements:
Ensure the global budget variable can be accessed and updated by addExpense.
Ensure that the variables used inside getExpenseDetails are not accessible outside the function.
# Challenge:
Write a function that resets the budget to zero. How can you do this without resetting local expenses recorded in getExpenseDetails?
# Test Case:
Text
1. addExpense(100);
2. addExpense(50);
3. getExpenseDetails("Groceries", 30);
4. console.log(totalBudget); // Expected Result: 150
## 2. User Authentication System: Block vs. Function Scope
# Problem:
You’re working on a user authentication system for a website. The system should check if a username exists in the database and whether the provided password matches. The user credentials should be handled using function-level scope. However, the logic that checks for user role access (admin or regular user) should use block scope to avoid exposing sensitive information.
Your task is to:
loginUser: This function should check the username and password (both provided as arguments). It should also check if the user is an admin (using a block scope variable). If the user is an admin, it should return a message saying “Admin access granted”; otherwise, it should return “User access granted”.
# Key requirements:
Ensure the user credentials are only accessible within the function scope of loginUser.
Use block scope (e.g., let or const) to define the admin role check inside the login process, and ensure this block-scope variable is not accessible outside.
Challenge:
Extend the system to handle multiple roles (e.g., "admin", "editor", "viewer") using block scope to control access to different sections of the system.
# Test Case:
Text
1. console.log(loginUser("admin", "1234")); // Expected Result: "Admin access granted"
2. console.log(loginUser("user", "password")); // Expected Result: "User access granted"
3. Event Manager: Closures and Nested Scope
# Problem:
You’re building an event management system where users can register for events and then check their registration status. The system should remember which users have registered for which event, but it should not expose the registration list globally.
Your task is to:
createEvent: This function should initialize a new event and return two nested functions:
registerUser: This nested function should accept a username and add it to the event's list of registered users.
checkRegistration: This nested function should take a username and return whether that user is registered for the event.
# Key requirements:
Use closure to keep the list of registered users private within the createEvent function.
Ensure the registration list is not directly accessible from outside createEvent.
The returned registerUser and checkRegistration functions should be able to access the list via closure, but it should not be modified directly from outside.
## Challenge:
Enhance the system to support multiple events, each with its own private list of registered users, by invoking createEvent multiple times.
# Test Case:
Text

1. const event = createEvent("JavaScript Conference");
2. event.registerUser("Alice");
3. console.log(event.checkRegistration("Alice")); // Expected Result: true
4. console.log(event.checkRegistration("Bob")); // Expected Result: false
