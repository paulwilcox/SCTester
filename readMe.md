## Description

Just a simple testing tool to test javascript functions in both 
the client and server environments without having to write 
code for each.  

Gives execution time output.

## Maintenance Warning

This project started with some server-side and puppeteer code 
and eventually started turning into a framework of sorts.  I 
decided to make a library out of it.  

It is built with my own purposes in mind, but if in the end 
it seems like a pretty generalizable project, I'll update this
Readme to reflect that.

## Status

The code works when run in this library itself.  It does not
work when used inside another library.  At present the error
is as follows:

    ReferenceError: http is not defined
    at startServer (...\OtherLibrary\node_modules\sctester\scTesterServer.js:122:5)