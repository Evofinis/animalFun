var level = 1;


// ******************* START FUNCTION DEFINITIONS *******************


// Function that plays an audio file
function playAudio (a){
	var s = new Audio (a);
	s.play();
};



function showDialog(){
	$("#dialog").dialog({
		resizable: false,
		width: 300,
		height: 65,
		position: {my: "center",
				   at: "center center", 
				   of: "#gameBG"},
		modal: true
	});


	setTimeout(function(){$('#dialog').dialog('close');}, 1500);	
};

function showSuccessDialog(){

	if (level == 1){
		$("#dialog2").html("That's right! Cows go 'mooooooo' and they love eating grass! " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 2){
		$("#dialog2").html("Good job! Cats go 'meow' and they love milk! " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 3){
		$("#dialog2").html("You got it! Puppies love two things - Barking and Playing! " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 4){
		$("#dialog2").html("Wow! Roosters are always up at sun rise! " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 5){
		$("#dialog2").html("Correct! Monkeys tend to.. monkey around, a lot :) " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 6){
		$("#dialog2").html("Amazing! Dolphins are actually mammals, not fish. And they are very intelligent! " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 7){
		$("#dialog2").html("Fantastic! Elephants tend to remember everything. Be nice to them! " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 8){
		$("#dialog2").html("Hoot hoot! Owls are often a representation of wisdom! " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 9){
		$("#dialog2").html("You rock! Goats are more bite than baaaaaa! " +
						   "Let's move on to level " + (level+1) + ".");
	} else if (level == 10){
		$("#dialog2").html("Winner! The Lion is known as the King of the Jungle! " +
						   "This was the last level! Good job!");
	};


	$("#dialog2").dialog({
		resizable: false,
		width: 300,
		height: 100,
		position: {my: "center",
				   at: "center center", 
				   of: "#gameBG"},
		modal: true
	});

	setTimeout(function(){$('#dialog2').dialog('close');}, 4000);

};


function currLevel(){
	$("#currentLevel").html("Level " + level);
	$("#currentLevel").show();
}



// This function shows the Level 1 assets
function showLv1(){
	$("#cowimg").show();
	$("#lv1horseimg").show();
	$("#pigimg").show();

	currLevel();

	$("#cowimg").click(function(){
			setTimeout(showLv2, 4000);
			showSuccessDialog();

			level +=1;

			soundLevel();
		});

	$("#pigimg").click(function(){
			 showDialog();

	 });

	$("#lv1horseimg").click(function(){
			 showDialog();

	 });
};

// This function shows the Level 2 assets & hides the Level 1


function showLv2(){
	$("#cowimg").hide();
	$("#pigimg").hide();
	$("#lv1horseimg").hide();

	$("#lv2horseimg").show();
	$("#catimg").show();
	$("#dogimg").show();

	currLevel();

	$("#catimg").click(function(){
			setTimeout(showLv3, 4000);
			showSuccessDialog();

			level +=1;

			soundLevel();
		});

	$("#dogimg").click(function(){
				showDialog();		  
		 });

	$("#lv2horseimg").click(function(){
				showDialog();		  
		 });
};

function showLv3(){
	$("#lv2horseimg").hide();
	$("#catimg").hide();
	$("#dogimg").hide();

	$("#lv3dogimg").show();
	$("#lv3cowimg").show();
	$("#lv3pigimg").show();

	currLevel();

	$("#lv3dogimg").click(function(){
			setTimeout(showLv4, 4000);
			showSuccessDialog();

			level +=1;

			soundLevel();
		});

	$("#lv3cowimg").click(function(){
				showDialog();		  
		 });

	$("#lv3pigimg").click(function(){
				showDialog();	  
		 });
};

function showLv4(){
	$("#lv3dogimg").hide();
	$("#lv3cowimg").hide();
	$("#lv3pigimg").hide();

	$("#roosterimg").show();
	$("#bearimg").show();
	$("#humbirdimg").show();

	currLevel();

	$("#bearimg").click(function(){
				showDialog();
		});

	$("#humbirdimg").click(function(){
				showDialog();	  
		 });

	$("#roosterimg").click(function(){
				setTimeout(showLv5, 4000);
				showSuccessDialog();

				level +=1;

				soundLevel();
		 });
};

function showLv5(){		
	$("#roosterimg").hide();
	$("#bearimg").hide();
	$("#humbirdimg").hide();

	$("#lv5catimg").show();
	$("#monkeyimg").show();
	$("#fishimg").show();

	currLevel();

	$("#lv5catimg").click(function(){
				showDialog();
		});

	$("#fishimg").click(function(){
				showDialog();	  
		 });

	$("#monkeyimg").click(function(){
				setTimeout(showLv6, 4000);
				showSuccessDialog();

				level +=1;

				soundLevel();
		 });
};

function showLv6(){		
	$("#lv5catimg").hide();
	$("#monkeyimg").hide();
	$("#fishimg").hide();

	$("#lv6monkeyimg").show();
	$("#dolphinimg").show();
	$("#eleimg").show();

	currLevel();

	$("#lv6monkeyimg").click(function(){
				showDialog();
		});

	$("#eleimg").click(function(){
				showDialog();	  
		 });

	$("#dolphinimg").click(function(){
				setTimeout(showLv7, 4000);
				showSuccessDialog();

				level +=1;

				soundLevel();
		 });
};

function showLv7(){			
	$("#lv6monkeyimg").hide();
	$("#dolphinimg").hide();
	$("#eleimg").hide();

	$("#lv7eleimg").show();
	$("#rabbitimg").show();
	$("#lv7bearimg").show();

	currLevel();

	$("#lv7bearimg").click(function(){
				showDialog();
		});

	$("#rabbitimg").click(function(){
				showDialog();	  
		 });

	$("#lv7eleimg").click(function(){
				setTimeout(showLv8, 4000);
				showSuccessDialog();

				level +=1;

				soundLevel();
		 });
};

function showLv8(){			
	$("#lv7eleimg").hide();
	$("#rabbitimg").hide();
	$("#lv7bearimg").hide();

	$("#owlimg").show();
	$("#lv8fishimg").show();
	$("#lv8humbirdimg").show();

	currLevel();

	$("#lv8fishimg").click(function(){
				showDialog();
		});

	$("#owlimg").click(function(){
				setTimeout(showLv9, 4000);
				showSuccessDialog();

				level +=1;

				soundLevel();
		 });

	$("#lv8humbirdimg").click(function(){
				showDialog();	
		 });
};

function showLv9(){			
	$("#owlimg").hide();
	$("#lv8fishimg").hide();
	$("#lv8humbirdimg").hide();

	$("#goatimg").show();
	$("#lv9pigimg").show();
	$("#lv9roosterimg").show();

	currLevel();

	$("#goatimg").click(function(){
				setTimeout(showLv10, 4000);
				showSuccessDialog();

				level +=1;

				soundLevel();
		});

	$("#lv9roosterimg").click(function(){
				showDialog();
		 });

	$("#lv9pigimg").click(function(){
				showDialog();	
		 });
};

function showLv10(){			
	$("#goatimg").hide();
	$("#lv9pigimg").hide();
	$("#lv9roosterimg").hide();

	$("#lionimg").show();
	$("#giraffeimg").show();
	$("#duckimg").show();

	currLevel();

	$("#duckimg").click(function(){
				showDialog();
		});

	$("#giraffeimg").click(function(){
				showDialog();
		 });

	$("#lionimg").click(function(){
				setTimeout(showCredits, 4000);
				showSuccessDialog();

				level +=1;	
		 });
};

function showCredits(){			

	$("#currentLevel").hide();
	$("#lionimg").hide();
	$("#giraffeimg").hide();
	$("#duckimg").hide();

	$("#play-sound10").css("display","none");

	$("#mainText").html("Congratulations! You won!");

	setTimeout(location.reload.bind(location), 5000);

};



// This function hides the unneeded buttons and changes the main text
function beginGame(){
	$("#mainText").html("Which animal makes this sound?");
	$("#start").css("display", "none");
	$("#play-sound").css("display","inline");
	$("#play-sound2").css("display","none");
};


// This function plays the level's animal sound
function soundLevel(){
	if (level == 2){
		$("#play-sound").css("display","none");
		$("#play-sound2").css("display","inline");

	};

	if (level == 3){
		$("#play-sound2").css("display","none");
		$("#play-sound3").css("display","inline");

	};

	if (level == 4){
		$("#play-sound3").css("display","none");
		$("#play-sound4").css("display","inline");

	};

	if (level == 5){
		$("#play-sound4").css("display","none");
		$("#play-sound5").css("display","inline");

	};

	if (level == 6){
		$("#play-sound5").css("display","none");
		$("#play-sound6").css("display","inline");

	};

	if (level == 7){
		$("#play-sound6").css("display","none");
		$("#play-sound7").css("display","inline");

	};

	if (level == 8){
		$("#play-sound7").css("display","none");
		$("#play-sound8").css("display","inline");

	};

	if (level == 9){
		$("#play-sound8").css("display","none");
		$("#play-sound9").css("display","inline");

	};

	if (level == 10){
		$("#play-sound9").css("display","none");
		$("#play-sound10").css("display","inline");

	};
};



$("#start").click(function(){
	if (level == 1){

		showLv1();
		beginGame();

		$("#play-sound").click(function(){
			playAudio('sfx/cow.wav');
		});
	};
});


$("#play-sound2").click(function(){
	if (level == 2){
		playAudio('sfx/cat.mp3');	
	};
});

$("#play-sound3").click(function(){
	if (level == 3){
		playAudio('sfx/dog.mp3');	
	};
});

$("#play-sound4").click(function(){
	if (level == 4){
		playAudio('sfx/rooster.mp3');	
	};
});

$("#play-sound5").click(function(){
	if (level == 5){
		playAudio('sfx/monkey.mp3');	
	};
});	

$("#play-sound6").click(function(){
	if (level == 6){
		playAudio('sfx/dolphin.mp3');	
	};
});	

$("#play-sound7").click(function(){
	if (level == 7){
		playAudio('sfx/ele.mp3');	
	};
});	

$("#play-sound8").click(function(){
	if (level == 8){
		playAudio('sfx/owl.mp3');	
	};
});

$("#play-sound9").click(function(){
	if (level == 9){
		playAudio('sfx/goat.mp3');	
	};
});

$("#play-sound10").click(function(){
	if (level == 10){
		playAudio('sfx/lion.mp3');	
	};
});
