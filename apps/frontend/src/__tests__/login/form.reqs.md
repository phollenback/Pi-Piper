# Login Form Requirements and Test Cases

## 1. Setup and Navigation
### 1.1 Initial Setup
- Navigate to the login page
- Render the login form component
- Initialize form with empty email and password fields
- Display "Sign in" button

### 1.2 Form Structure
- Email input field with placeholder "Email address"
- Password input field with placeholder "Password"
- Submit button labeled "Sign in"
- Error message containers for both fields

## 2. Email Validation Tests

### 2.1 Missing @ Symbol
**Input:** "invalidemail"
**Expected Result:** 
- Display error message: "Email must contain @ symbol"
- Form submission prevented

### 2.2 Insufficient Characters Before @
**Input:** "a@gmail.com"
**Expected Result:**
- Display error message: "Email must have at least 2 characters before @"
- Form submission prevented

### 2.3 Special Character Start
**Input:** "@test@gmail.com"
**Expected Result:**
- Display error message: "Email cannot start with special characters"
- Form submission prevented

### 2.4 Invalid Domain
**Input:** "test@invalid.com"
**Expected Result:**
- Display error message: "Email must be from gmail.com, yahoo.com, or pipiper.com"
- Form submission prevented

### 2.5 Valid Email
**Input:** "test@gmail.com"
**Expected Result:**
- No error message displayed
- Email validation passes

## 3. Password Validation Tests

### 3.1 Short Password
**Input:** "short"
**Expected Result:**
- Display error message: "Password must be at least 8 characters"
- Form submission prevented

### 3.2 No Uppercase Letters
**Input:** "lowercase123"
**Expected Result:**
- Display error message: "Password must contain at least one uppercase letter"
- Form submission prevented

### 3.3 Special Character Start
**Input:** "@password123"
**Expected Result:**
- Display error message: "Password cannot start with special characters"
- Form submission prevented

### 3.4 No Numbers
**Input:** "Password"
**Expected Result:**
- Display error message: "Password must contain at least one number"
- Form submission prevented

### 3.5 Valid Password
**Input:** "ValidPass123"
**Expected Result:**
- No error message displayed
- Password validation passes

## 4. Form Submission Tests

### 4.1 Successful Submission
**Input:**
- Email: "test@gmail.com"
- Password: "ValidPass123"
**Expected Result:**
- No error messages displayed
- Form submission allowed
- onLogin callback triggered
- Console logs successful submission

### 4.2 Multiple Validation Errors
**Input:**
- Email: "a@gmail.com"
- Password: "short"
**Expected Result:**
- Display email error: "Email must have at least 2 characters before @"
- Display password error: "Password must be at least 8 characters"
- Form submission prevented

## 5. Error Message Behavior

### 5.1 Error Message Display
- Error messages appear below respective input fields
- Messages displayed in red text
- Appropriate spacing between elements
- Clear visibility of error states

### 5.2 Error Message Clearing
- Error messages clear when user starts typing in the field
- Messages update immediately when validation rules change
- No error messages persist after successful submission

## 6. Test Implementation Status

### 6.1 Implemented Tests
- [x] Email validation tests
- [x] Password validation tests
- [x] Form submission tests
- [x] Multiple validation error tests


### 7.1 Plandned Improvements
- Implement rate limiting
- Add password visibility toggle
- Implement password strength indicator

