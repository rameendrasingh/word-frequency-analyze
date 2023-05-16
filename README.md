# Project Title and it is hosted on NETLIFY

A brief description on word frquency analyzer [View This Project Hosted on Netlify](https://ramendra-word-frequency-analyze.netlify.app).

This project is a Word Frequency Analyzer that fetches text data, processes it, and provides word frequency analysis along with a bar chart representation.


## Overview of this project

* First create a react app.
* Then add dependencies to your project.
* Create a submit button.
* Then Create two button one to fetch the content from the given link and other one to process the content entered manually.
* Now after getting the content, Parse the content
* Get the frequency of the word and store the frequency in the tabular format
* Parse the table and get the top 20 most words frequently occurring words.
* With those words we will create a Histogram of the most occurring words, on the X- axis frequently occuring words will be there whereas on the y-axis frequncy numbers will be there.
* Analyze the graph, and export the data in the .CSV format by clicking on the Export button.

## Visually the project looks like with the Screenshots
* After clicking on the submit button
![first](https://github.com/rameendrasingh/word-frequency-analyze/blob/main/images/Screenshot%201.png?raw=true)

* After parsing text word-frequency table
![table](https://github.com/rameendrasingh/word-frequency-analyze/blob/main/images/Screenshot%202.png?raw=true)

* Histogram for top 20 most occuring words will look like this
![histogram](https://github.com/rameendrasingh/word-frequency-analyze/blob/main/images/Screenshot%203.png?raw=true)

* Exported file which is in the .CSV file looks like this
![exported](https://github.com/rameendrasingh/word-frequency-analyze/blob/main/images/Screenshot%204.png?raw=true)


## Command Used

*
```shell
npx create-react-app project-name
```
This command is used to create a react app

*
```shell
cd project-name
```
It is used to change the current working directory in a command-line interface (CLI) to a specific directory named "project_name." The "project_name" represents the name of the directory you want to navigate into.

*
```shell
npm install axios react-chartjs-2 file-saver
```

#### axios:
Axios is a popular JavaScript library used for making HTTP requests from a browser or Node.js. It provides an easy-to-use API to send asynchronous HTTP requests and handle responses. It is commonly used to fetch data from APIs or perform AJAX operations in web applications.
#### react-chartjs-2:
React Chart.js 2 is a React wrapper for the Chart.js library. Chart.js is a flexible and feature-rich JavaScript charting library that allows you to create various types of interactive charts and graphs, such as line charts, bar charts, pie charts, etc. React Chart.js 2 simplifies the integration of Chart.js into React applications by providing React components that can be easily used to create and customize charts.
#### file-saver:
FileSaver.js is a JavaScript library that helps you save files from the browser to the user's device. It provides a simple API to create and save files locally. It is often used in web applications when you need to generate and download files, such as exporting data in CSV or PDF format.

*
```shell
npm install chart.js@latest
```
It ensures that you have the most up-to-date version of the Chart.js library installed in your project. It fetches the latest version available on the npm registry and installs it along with its dependencies.

*
```shell
npm install chartjs-adapter-date-fns
```
This adapter allows you to leverage the features of date-fns, such as date formatting, date parsing, date calculations, and time zone handling, within your Chart.js charts. It enhances the flexibility and functionality of your charts by enabling you to work with dates and times in a convenient and consistent manner.

*
After completing the code then enter the command in the terminal
```shell
npm start
```
it typically executes a predefined script specified in the "scripts" section of the project's package.json file. By convention, the script associated with the "start" command is used to start the application or development server for the project.
