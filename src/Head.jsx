import React from 'react'

function Head() {
  return (
    <>
       <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Landing Page - Start Bootstrap Theme</title>
        {/* <!-- Favicon--> */}
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* <!-- Bootstrap icons--> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" type="text/css" />
        {/* <!-- Google fonts--> */}
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        {/* <!-- Core theme CSS (includes Bootstrap)--> */}
        <link href="css/styles.css" rel="stylesheet"/>
    </head>
    </>
  )
}

export default Head
