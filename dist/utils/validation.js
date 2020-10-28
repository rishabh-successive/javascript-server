"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("./helpers.js");
function ValidateUsers(users) {
    let valid = 0;
    let invalid = 0;
    //console.log(users);
    users.forEach(({ traineeEmail, reviewerEmail }) => {
        if (helpers_js_1.default(traineeEmail) && helpers_js_1.default(reviewerEmail)) {
            valid++;
        }
        else {
            invalid++;
        }
    });
    console.log(`valid ${valid}`);
    console.log(`invalid ${invalid}`);
}
exports.default = ValidateUsers;
//# sourceMappingURL=validation.js.map