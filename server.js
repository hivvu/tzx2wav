var fs = require('fs');
// var constants = require('constants');
var wav = require("./src/wav.js");
var tzx = require("./src/tzx.js");

var file = fs.readFileSync("./roms/jswilly.tzx");
var tzxFile = {
	getLength: function() { return file.length; },
	getByte: function(index) {
		return file[index];
	}
};
var wave = wav.create(1, 44100, wav.SampleSize.EIGHT);

var details = tzx.convertTzxToAudio(tzx.MachineSettings.ZXSpectrum48, tzxFile, wave);

console.info('\x1b[32m', '✅ Convertido com sucesso.');
// console.log(details);


// Reset log color
console.info('\x1b[0m');

fs.writeFileSync("./converted/jswilly.wav", new Buffer.from(wave.toByteArray()));
