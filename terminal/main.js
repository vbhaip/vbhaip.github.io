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

	switch(parsed.cmd){
		
	}


}