var cobs = require('../..'),    fs = require('fs');var runtime = {    display: function() {        var result = '';        if (arguments && arguments.length)            for (var k = 0; k < arguments.length; k++)                if (arguments[k])                    result += arguments[k].toString();                            console.log(result);    }}function runFile(filename) {    var text = fs.readFileSync(filename).toString();    var parser = new cobs.Parser(text);    var program = parser.parseProgram();    cobs.run(program.command.compile(program), runtime, program);};process.argv.forEach(function(val) {    if (val.slice(-5) == ".cobs" || val.slice(-4) == ".cob")        runFile(val);});