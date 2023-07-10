<!DOCTYPE html>
<html>
<head>
  <title>Login Form</title>
  <style>
    html, body {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    form {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 40px;
      max-width: 700px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    form label,
    form input[type="text"],
    form input[type="password"],
    form input[type="submit"] {
      display: block;
      width: 100%;
      margin-bottom: 20px;
    }
    form input[type="submit"] {
      width: auto;
      cursor: pointer;
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 3px;
      margin-bottom: 0; 
      align-self: center; 
    }
  </style>
</head>
<body>
  <form id="loginForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <input type="submit" value="Login">
  </form>
</body>
</html>
