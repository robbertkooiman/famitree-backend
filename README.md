# Famitree (backend)

This backend was build with NodeJS and runs on Google's Firebase technology.

It's a very quick API that makes it possible to run this application on two different clients and continuously see the same results. Everything synchronizes immediately.

# Things to look for

The /functions folder is where the project source is. The /public folder is the compiled frontend application, which is hosted by the backend as well. The rest of the files are mainly project configuration and generated files.

- ```/functions/src/index.ts``` describes the main application
- ```/functions/src/person.ts``` describes the data model for Persons

Eventually, I chose to use both these manually defined functions as well as Firebase's Angular library, which made it possible for me to expand upon these functions in an easy way, which is why not every object had to be described in the functions files.
