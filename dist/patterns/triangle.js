"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let i;
function triangle(n) {
    for (var i = 0; i < n; i++) {
        var str = '';
        for (var j = 1; j < n - i; j++) {
            str = str + ' ';
        }
        for (var k = 1; k <= (2 * i + 1); k++) {
            str = str + '*';
        }
        console.log(str);
    }
}
exports.default = triangle;
//# sourceMappingURL=triangle.js.map