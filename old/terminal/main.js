folder_tree = {
	'projects':{
		'glaucoma-detection': 'https://github.com/vb42/glaucoma-cnn'
	},
	'work':{
		'hi': '2017-2018'
	},
	'fun':{
		'debate': "hi"
	}
	//'about'

}

current_loc = ''

//returns the tree loc given the loc
function parse_loc(loc){
	//console.log(loc);
	temp = folder_tree;

	var loc_list = current_loc.split("/").filter(x => x);

	for(var i = 0; i < loc_list.length; i++){
		temp = temp[loc_list[i]];
	}

	return temp;
}

function parse(to_be_parsed){
	var parsed = to_be_parsed.split(' ');
	var command = parsed[0];
	var args = parsed.slice(1)

	return {"cmd": command, "args": args}
}


function input(input){
	if(input.length == 0){
		return;
	}

	var parsed = parse(input);

	var output = '';

	cmd = parsed.cmd;
	args = parsed.args;

	switch(cmd){
		case 'ls':
			//console.log(current_loc);
			// console.log(parse_loc(current_loc));
			//console.log(parse_loc(current_loc))
			var lslist = Object.keys(parse_loc(current_loc));
			returnstr = "";
			for(var i = 0; i < lslist.length; i++){
				returnstr += (lslist[i] + "\n\n")
			}
			return returnstr;
			break;
		case 'cd':
			if(Object.keys(parse_loc(current_loc)).includes(args[0])){
				current_loc += ("/" + args[0])
			}
			return;
			break;

		case 'cat':

		case 'pwd':
			return current_loc
		// case 'clear':

		case 'exit':

		case 'help':


	}


}


//console.log((input("ls")))

input("cd work")


input("cd hi")

console.log(current_loc)

console.log((input("ls")))

