export const config = {
    //runner: 'local',
    //port: 4723,
    
    user: 'oauth-camila.ldw-62a50',
    key: 'fdc10b8f-732c-4ea5-96d3-9f843acaf99c',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    
    specs: [
        './test/specs/**/*.js'
    ],
    
    maxInstances: 1,
    services: [
        ['appium', {
            command: 'appium',
            args: {
                '--relaxed-security': true,
                '--base-path': '/',
                '--log-level': 'debug'
            },
            logPath: './logs/appium/'
        }]
    ],
    
    capabilities: [
        {
        platformName: 'Android',
        'appium:deviceName': 'ebac',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutocompletion': true,
        }

       /*{
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Samsung Galaxy Tab S6 GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'EBAC Shop Test',
            deviceOrientation: 'PORTRAIT',
            appiumVersio: '2.0.0',
            },
        }*/
    ],
    
    logLevel: 'info',    
    connectionRetryTimeout: 50000,
    connectionRetryCount: 3, 
    waitforTimeout: 30000,

   /* before: async () => {
        // Método correto para definir timeouts no WDIO 9+
        await driver.setTimeout({
            'implicit': 15000,
            'pageLoad': 500000,
            'script': 30000
        });
        
        // Espera adicional para estabilização
        await driver.pause(500000);
    },*/
    

    framework: 'mocha',    
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
}
