# QA_Education_HW
## Description
Homework for online training of autotests using <a href="https://webdriver.io">WebdriverIO</a> <br>
Link to tutorials on [youtube]( https://www.youtube.com/watch?v=cSQxQpIlVgo&list=PLP1-M5OhC7yjAZ1-llDH45nxLfKKbcxGe&index=3)
###Usage
Before using a progressive automation framework WebdriverIO, you need to install [node.js](https://nodejs.org/en/) version at least v12.16.1 or higher
and install all the dependencies for doing the full operation of the node.js.
>**WARNING**: Only releases that are or will become an LTS release are officially supported

Also, to create, support project with WebdriverIO CLI,that provides to install dependencies in your project, we need to run setup command [getting-started](https://v5.webdriver.io/docs/gettingstarted.html).

Check WebdriverIO CLI is installed
```console
npx wdio --version
```
Download the project from the [repository](https://github.com/Diankavoy19/QA_Education_HW),open the project folder in the console
and run commands "npm i --save-dev @wdio/cli" and "./node_modules/.bin/wdio config -y"in console. Wait until all modules are installed.
```console
npm i --save-dev @wdio/cli
```
```console
./node_modules/.bin/wdio config -y
```
After that we can run our tests.

```console
npx wdio run ./wdio.conf.js
```
![](https://res.cloudinary.com/practicaldev/image/fetch/s--co5LdVu9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i2.wp.com/grantnorwood.com/app/uploads/2017/07/webdriver-io-logo.png%3Fw%3D1680%26ssl%3D1)


