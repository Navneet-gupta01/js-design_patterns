/**
 * Created by navneetgupta on 1/6/19.
 */
class Logger {
    constructor () {
        this.logs = [];
    }

    get count() {
        "use strict";
        return this.logs.length;
    }

    log(message) {
        "use strict";
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp});
        console.log(`${timestamp} - ${message}`);
    }
}

module.exports = new Logger();
