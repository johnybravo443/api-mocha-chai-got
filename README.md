## demo app - developing with Docker

This demo shows basic API testing in staging env only

#### To run the test

Step 1: Clone the project on your machine from github: https://github.com/johnybravo443/api-mocha-chai-got

Step 2: Install homebrew from https://brew.sh

Step 2: install node via terminal using homebrew

    brew install node

Step 3: Go to the project base directory (.i.e api-mocha-chai-got) and install the packages using below command:
    
    npm install  

Step 4: From the project base directory (.i.e api-mocha-chai-got), to run all the tests:

    npm run test

Step 5: To run specific test files

    npm run searchuser
    npm run createuser
    npm run listusers
    npm run updateuserpatch
    npm run updateuserput

Step 6: To open the report, go to _mochawesome-report_ folder under the project root folder and open _mochawesome.html_ in any browser.

#### Limitations
* Cannot run in multiple environment as of now (only in staging for now)
* To handle secrets/passwords/sensitive information effectively, its best to store it in GCP Key management system (KMS) or any such other service in encrypted form. During the execution read it from KMS, decrypt ait and use it in the test.
* To test whether a user exists in the list of users, just pass all the users as an array into listusers.spec.js and iterate over it calling the same as many times as there are users in the array. 
