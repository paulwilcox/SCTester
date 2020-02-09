Note that this package is still in version 0.  In other
words, it may not work and troubleshooting it might be 
difficult at this time.  

Don't worry, over time this becomes increasingly usable.
When it seems robust enough, I'll mark it as version 1.

## Description

Just a simple testing tool to test javascript functions in both 
the client and server environments without having to write 
code for each (in the cases where the code is not specific to a server or client need).    

- Works on the console, one line.
- Final output is in table form.
- Errors are organized for reference.
- Output includes execution time.
- Server is created and started for you.
- Use the --browser boolean switch to launch a browser and run tests manually 

## Example

### Code 

    npm install -g sctester

    scTester --td ./tests --port 8083

### Results 

Real output colorizes 'Starting SCTester', 'ERROR 0:', and
all the values of the 'success' column.

    Creating C:\.../scTesterServer.js
    from C:\.../scTesterTemplate.js

    Starting SCTester:

    server starting on 8083
    ERROR 0:
    test error string

    SCTester-Results:
    testName     location  success  hh:mm:ss.f  
    -----------  --------  -------  ------------     
    filter       client    true     00:00:00.35      
    filter       server    true     00:00:00.7       
    groupReduce  client    true     00:00:00.37      
    groupReduce  server    true     00:00:00.7       
    map          client    true     00:00:00.105     
    map          server    true     00:00:00.1       
    mrgImp.idb   client    err:0
    sort         client    true     00:00:00.28      
    sort         server    true     00:00:00.7   


## History

This project started with some server-side and puppeteer code 
and eventually started turning into a framework of sorts.  I 
decided to make a library out of it.  

## Troubleshooting

If powershell is blocking you, remember to:

    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
