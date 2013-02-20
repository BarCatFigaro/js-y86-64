// General constants and functions
var INSTRUCTION_LEN = [1, 1, 2, 6, 6, 6, 2, 5, 5, 1, 2, 2],
	num2reg = ['%eax', '%ecx', '%edx', '%ebx','%esp', '%ebp', '%esi', '%edu'],
	inst2num = {
		'halt': 0,
		'nop': 1,
		'rrmovl': 2,
		'irmovl': 3,
		'rmmovl': 4,
		'mrmovl': 5,
		'addl': 6,
		'subl': 6,
		'andl': 6,
		'xorl': 6,
		'jmp': 7,
		'jg': 7,
		'jge': 7,
		'je': 7,
		'jne': 7,
		'jl': 7,
		'jle': 7,
		'call': 8,
		'ret': 9,
		'pushl': 10,
		'popl': 11
	},
	inst2fn = {
		'addl': 0,
		'subl': 1,
		'andl': 2,
		'xorl': 3,
		'jmp': 0,
		'jg': 1,
		'jge': 2,
		'je': 3,
		'jne': 4,
		'jl': 5,
		'jle': 6,
	};

function print(x){
	return console.log(x);
}

function printRegisters(registers){
	for (r in registers) {
		if (r.length === 1) {
			print(num2reg[r] + ': ' + registers[r].toString(16));
		} else {
			print(r + ': ' + registers[r].toString(16));
		}
	}
}

function printMemory(){
	var i = 0,
		str = '';
	for(b in MEMORY){
		if (i % 4 === 0 && i > 0) {
			print('PC = ' + (i - 4) + ' | ' + str);
			str = '';
		}
		str += num2hex(MEMORY[b]);
		i++;
	} 
	//print(MEMORY);
}

function num2hex(num){
	var result = num.toString(16);
	return result.length % 2 === 1 ? '0' + result : result;
}

function toBigEndian(hexstr){
	var i, result = '';
	if(hexstr.length % 2 === 1){
		hexstr = '0' + hexstr;
	}
	for (i = hexstr.length; i > 0; i -= 2){
		result += hexstr.substr(i - 2, 2);
	}
	return result;
}

function toLittleEndian(hexstr){
	return toBigEndian(hexstr);
}

function hexstr2num(h){
	return parseInt(x, 16);
}

function padHex(num, width){
	var result = num ? num.toString(16) : '0';
	while (result.length < width) {
		result = '0' + result;
	}
	return result;
}