# Testing guidance

Prior to reviewing with key stakeholders, it's recommended to perform this series of tests to build the confidence that you've met your customers' expectations.

## Quality checklist

1. Test each page for design and content issues
    1. Test screen sizes from viewport 1 to 6
    2. Test screen orientations
       1. Portrait
       2. Landscape
    3. Test word length and case
        1. Test smallest amount of text
        2. Test largest amount of text
        3. Case sensitivity
2. Test for localization (RTL, LTR)
    1. English
    2. Arabic
    3. Russian
    4. French
    5. Japanese
    6. Korean
3. Test for progressive enhancement
    1. Test complete browser matrix
    2. Test for zooming browser from 200% and 25% 
4. Test each component and pages for accessibility issues
    1. Test for keyboard accessibility
    2. Test for Mouse only interaction
    3. Test for Touch interaction
    4. Test with High Contrast of OS
    5. Test without images
    6. Test for text only
    7. Test with a screen reader
    8. Test with VoiceOver
5. Add component to a realistic page
    1. Import and initialize component as an outside user would
    2. Pass typical data to the component, including handled and unhandled props
    3. Ensure component works in typical real-world cases

## Manual testing

There is a [FAST-DNA documentation site for MSFT Components](https://msft-docs.fast-dna.net) that includes built in developer and testing tools to manually test.

Additionally, there are services included in FAST-DNA under `./build/testing` that can be used to assist in comprehensive testing. The configuration and tests are included as a starting point and as functional and UI testing matures these may become part of the CI/CD pipeline.  As of now, these can be ran manually and the cloud services dashboard can be used to evaluate your code changes prior to submitting for code review.

For those interested in using these services contact the project maintainers on discord to gain access.

### On physical devices

Testing local development code on physical devices in hand.

Localtunnel allows you to easily share a web service on your local development machine without messing with DNS and firewall settings.

Localtunnel will assign you a unique publicly accessible URL that will proxy all requests to your locally running web server.

Quickstart

+ Install Localtunnel globally (requires NodeJS).

```bash
npm install -g localtunnel
```

+ Start a web server on a local port (eg: http://localhost:8000) and use the command line interface to request a tunnel to the local server.

```bash
lt --port 8000
```

+ You will receive a URL, for example https://gqgh.localtunnel.me, that you can share with anyone for as long as your local instance remains active. Any requests will be routed to your local service at the specified port.

### With Sauce Labs

[Sauce Labs](https://saucelabs.com/beta/dashboard/builds) allows collaborators and contributors to execute automated tests against Selenium WebDriver on pre-configured browser matrix's.

The cross browser testing strategy focuses on the differences between browser rendering engines. There are three different [configuration files](https://github.com/Microsoft/fast-dna/tree/master/build/testing) based on feature maturity of ongoing work.

[Alpha](https://github.com/Microsoft/fast-dna/blob/master/build/testing/config-browsers.alpha.js) Immature feature development

```javascript
node build/testing/sauce-labs/test-browsers.js alpha
```

[Beta](https://github.com/Microsoft/fast-dna/blob/master/build/testing/config-browsers.beta.js) Stable feature development

```javascript
node build/testing/sauce-labs/test-browsers.js beta
```

[Release](https://github.com/Microsoft/fast-dna/blob/master/build/testing/config-browsers.release.js) Mature feature development

```javascript
node build/testing/sauce-labs/test-browsers.js release
```

### With Applitools

[Applitools](https://eyes.applitools.com/) can be used to visual regression test UI changes on your own branches allow  to execute automated tests against Selenium WebDriver. Currently, ChromeDriver and FirefoxDriver are supported.

Prior to beginning to make UI changes on a new branch it's recommended to run initially to create a baseline set of images.

1. The first time the test is executed on a new branch, screenshots are created as 'undefined' status. 
2. After the tests finish users should select all checkbox's and choose to save to generate the baseline image.
3. Next perform UI code changes
4. Rerun the first set of tests and for all snapshots that match the baseline they will turn green and show as 'passed' status. Any 'undefined' status would be additional UI changes added. Though to get into this scenario new test cases would be required in the `./run-msft-docs.js` file.  Any anomalies will be marked red as 'failed' status.
5. Manually review all UI changes and if the changes are desired select and choose to save the new baseline. Anything, else should be changed and retested.

```javascript
node build/testing/applitools/test-javascript.js
```

#### Visual Regression testing with Cypress SDK

Contributors can perform functional user interface and experience testing using [Cypress](https://www.cypress.io/). This does currently include visual regression testing, though, a feature that has been requested. Cypress is not based on Selenium WebDriver and instead is built completely on JavaScript enabling significant performance advantages.

To validate Cypress is configured correctly.

```node
npm run ui-tests:verify
```

Execute through Electron for real-time user interaction and debugging.

```node
npm run ui-tests:open
```

Execute using the CLI.

```node
npm run ui-tests:run
```

_When running as CLI, the results can be viewed as printed out to the command screen or in the cloud dashboard._

## Setup reviews

After development is complete it's a good idea to meet with key stakeholders for buy-in and acceptance. The following reviews can ensure everyone has time to evaluate and provide feedback prior to delivery.

+ Perform a design review
+ Perform a content review
+ Perform a functional review
+ Perform a performance review
+ Perform code reviews

Use [ngrok](https://ngrok.com/) to securely tunnel your localhost to send test links, test on virtual machines, or test on other physical devices. When tunneling react pages, use the following format (replacing 7001 with your port):
`ngrok http -host-header=localhost 7001`

## Finalization

Once you have finished the items above, your feature is complete and ready for completing the Pull Request.

## Mozilla guidance

You can read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction) on cross browser testing and processes.

## Code and test coverage

To ensure clarity around coverage, it's helpful to understand the differences between code coverage and test coverage.

### Code coverage

The quantitative measurement by some lines covered by all test cases that also reports a total number of lines in the code and lines executed.

+ Function coverage
+ Branch coverage
+ Condition coverage
+ Loop coverage
+ Statement coverage
+ Parameter value coverage

If all code functions include tests, functional coverage is said to be 100%.

### Test coverage

The qualitative measurement based on the effectiveness of testing determined by test cases written to cover complete functional requirements.

+ Unit testing
+ Functional testing
+ Performance testing
+ Integration testing
+ Acceptance testing

Unit tests are written at a granular level to check if a function performs as expected whereas functional testing is written to ensure all requirements are met.

### Code coverage vs. Test coverage

It's much easier to setup and measure code coverage, but, test coverage will give a more accurate picture of application functionality. Unfortunately, it's difficult to measure. Our philosophy is a blended approach where you can feel confident in the amount of testing that is taken place, but, with more quality meaning around code requirements and functionality.