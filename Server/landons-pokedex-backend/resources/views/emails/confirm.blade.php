<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign Up Confirmation</title>
</head>
<body>
    <h1>Thanks for signing up</h1>
<p>We just need you to <a href='{{ url("api/v1/testregister/confirm/{$user->email_token}") }}'> confirm your email address</a>real quick</p>
</body>
</html>

