

## React + Github Api
This is a react-github app that allows you to list users and viethe most starred Github repos that were created in the last 30 days

by fetching the sorted JSON data directly from the Github API.

### `npm install`

run npm install to set the envirement for the application , you will need the node_modeles to run the application that's why this command is requered.

### `npm start`

after the npm install use this to start a local server to test things out.

### `Important packages to install and why`

1-bootstrap
```bash
npm install bootstrap
```
use this to install boostrap package , i used bootstrap to stylish things a little bit in an easy and fast way.bootstrap is always a good choise .


2-axios
```bash
npm install axios
```
use this to install axios , axios is used to make http requests from node.js 

3-momentJs
```bash
npm install moment --save
```
use this to install momentJs , a javascript library used to interact with the date and time ina smooth and easy way , i used it to halp me get the -30 last day and use it in the github api 

### `Side notes`

the search input is working just by typing the name of a repo (using the onChange).
if you load more repos with text on the input , there is a chance that more repos won't show up , cause the filtering is still working.
so if you want to load more repos clear the search field first.