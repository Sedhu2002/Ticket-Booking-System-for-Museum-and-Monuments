<?php
		// Establish database connection
		$db_host = 'localhost';
		$db_user = 'root';
		$db_pass = '';
		$db_name = 'example_database';
		$db_conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
		if (!$db_conn) {
			die('Failed to connect to database: ' . mysqli_connect_error());
		}

		// Handle login form submission
		if (isset($_POST['login-username']) && isset($_POST['login-password'])) {
			$login_username = mysqli_real_escape_string($db_conn, $_POST['login-username']);
			$login_password = mysqli_real_escape_string($db_conn, $_POST['login-password']);
			$sql = "SELECT * FROM users WHERE username='$login_username' AND password='$login_password'";
			$result = mysqli_query($db_conn, $sql);
			if (mysqli_num_rows($result) > 0) {
				echo '<p>Login successful!</p>';
			} else {
				echo '<p>Incorrect username or password.</p>';
			}
		}

		// Handle sign-up form submission
		if (isset($_POST['signup-username']) && isset($_POST['signup-email']) && isset($_POST['signup-password'])) {
			$signup_username = mysqli_real_escape_string($db_conn, $_POST['signup-username']);
			$signup_email = mysqli_real_escape_string($db_conn, $_POST['signup-email']);
			$signup_password = mysqli_real_escape_string($db_conn, $_POST['signup-password']);
			$sql = "INSERT INTO users (username, email, password) VALUES ('$signup_username', '$signup_email', '$signup_password')";
			if (mysqli_query($db_conn, $sql)) {
			
