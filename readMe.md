## Inactive

This project is not presently active.  Some puppeteer code 
turned into a framework and I decided to make a library out
of it.  But in the end I should really be using an existing
testing framework such as Jest.

## Description

Just a simple testing tool to test javascript functions in both 
the client and server environments without having to write 
code for each.  

Gives execution time output.

## Status

The code works when run in this library itself.  It does not
work when used inside another library.  At present the error
is as follows:

    ReferenceError: http is not defined
    at startServer (...\OtherLibrary\node_modules\sctester\scTesterServer.js:122:5)