var keyboardMap = [
  "", // [0]
  "", // [1]
  "", // [2]
  "CANCEL", // [3]
  "", // [4]
  "", // [5]
  "HELP", // [6]
  "", // [7]
  "BACK_SPACE", // [8]
  "TAB", // [9]
  "", // [10]
  "", // [11]
  "CLEAR", // [12]
  "ENTER", // [13]
  "ENTER_SPECIAL", // [14]
  "", // [15]
  "SHIFT", // [16]
  "CONTROL", // [17]
  "ALT", // [18]
  "PAUSE", // [19]
  "CAPS_LOCK", // [20]
  "KANA", // [21]
  "EISU", // [22]
  "JUNJA", // [23]
  "FINAL", // [24]
  "HANJA", // [25]
  "", // [26]
  "ESCAPE", // [27]
  "CONVERT", // [28]
  "NONCONVERT", // [29]
  "ACCEPT", // [30]
  "MODECHANGE", // [31]
  "SPACE", // [32]
  "PAGE_UP", // [33]
  "PAGE_DOWN", // [34]
  "END", // [35]
  "HOME", // [36]
  "LEFT", // [37]
  "UP", // [38]
  "RIGHT", // [39]
  "DOWN", // [40]
  "SELECT", // [41]
  "PRINT", // [42]
  "EXECUTE", // [43]
  "PRINTSCREEN", // [44]
  "INSERT", // [45]
  "DELETE", // [46]
  "", // [47]
  "0", // [48]
  "1", // [49]
  "2", // [50]
  "3", // [51]
  "4", // [52]
  "5", // [53]
  "6", // [54]
  "7", // [55]
  "8", // [56]
  "9", // [57]
  "COLON", // [58]
  "SEMICOLON", // [59]
  "LESS_THAN", // [60]
  "EQUALS", // [61]
  "GREATER_THAN", // [62]
  "QUESTION_MARK", // [63]
  "AT", // [64]
  "A", // [65]
  "B", // [66]
  "C", // [67]
  "D", // [68]
  "E", // [69]
  "F", // [70]
  "G", // [71]
  "H", // [72]
  "I", // [73]
  "J", // [74]
  "K", // [75]
  "L", // [76]
  "M", // [77]
  "N", // [78]
  "O", // [79]
  "P", // [80]
  "Q", // [81]
  "R", // [82]
  "S", // [83]
  "T", // [84]
  "U", // [85]
  "V", // [86]
  "W", // [87]
  "X", // [88]
  "Y", // [89]
  "Z", // [90]
  "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
  "", // [92]
  "CONTEXT_MENU", // [93]
  "", // [94]
  "SLEEP", // [95]
  "NUMPAD0", // [96]
  "NUMPAD1", // [97]
  "NUMPAD2", // [98]
  "NUMPAD3", // [99]
  "NUMPAD4", // [100]
  "NUMPAD5", // [101]
  "NUMPAD6", // [102]
  "NUMPAD7", // [103]
  "NUMPAD8", // [104]
  "NUMPAD9", // [105]
  "MULTIPLY", // [106]
  "ADD", // [107]
  "SEPARATOR", // [108]
  "SUBTRACT", // [109]
  "DECIMAL", // [110]
  "DIVIDE", // [111]
  "F1", // [112]
  "F2", // [113]
  "F3", // [114]
  "F4", // [115]
  "F5", // [116]
  "F6", // [117]
  "F7", // [118]
  "F8", // [119]
  "F9", // [120]
  "F10", // [121]
  "F11", // [122]
  "F12", // [123]
  "F13", // [124]
  "F14", // [125]
  "F15", // [126]
  "F16", // [127]
  "F17", // [128]
  "F18", // [129]
  "F19", // [130]
  "F20", // [131]
  "F21", // [132]
  "F22", // [133]
  "F23", // [134]
  "F24", // [135]
  "", // [136]
  "", // [137]
  "", // [138]
  "", // [139]
  "", // [140]
  "", // [141]
  "", // [142]
  "", // [143]
  "NUM_LOCK", // [144]
  "SCROLL_LOCK", // [145]
  "WIN_OEM_FJ_JISHO", // [146]
  "WIN_OEM_FJ_MASSHOU", // [147]
  "WIN_OEM_FJ_TOUROKU", // [148]
  "WIN_OEM_FJ_LOYA", // [149]
  "WIN_OEM_FJ_ROYA", // [150]
  "", // [151]
  "", // [152]
  "", // [153]
  "", // [154]
  "", // [155]
  "", // [156]
  "", // [157]
  "", // [158]
  "", // [159]
  "CIRCUMFLEX", // [160]
  "EXCLAMATION", // [161]
  "DOUBLE_QUOTE", // [162]
  "HASH", // [163]
  "DOLLAR", // [164]
  "PERCENT", // [165]
  "AMPERSAND", // [166]
  "UNDERSCORE", // [167]
  "OPEN_PAREN", // [168]
  "CLOSE_PAREN", // [169]
  "ASTERISK", // [170]
  "PLUS", // [171]
  "PIPE", // [172]
  "HYPHEN_MINUS", // [173]
  "OPEN_CURLY_BRACKET", // [174]
  "CLOSE_CURLY_BRACKET", // [175]
  "TILDE", // [176]
  "", // [177]
  "", // [178]
  "", // [179]
  "", // [180]
  "VOLUME_MUTE", // [181]
  "VOLUME_DOWN", // [182]
  "VOLUME_UP", // [183]
  "", // [184]
  "", // [185]
  "SEMICOLON", // [186]
  "EQUALS", // [187]
  "COMMA", // [188]
  "MINUS", // [189]
  "PERIOD", // [190]
  "SLASH", // [191]
  "BACK_QUOTE", // [192]
  "", // [193]
  "", // [194]
  "", // [195]
  "", // [196]
  "", // [197]
  "", // [198]
  "", // [199]
  "", // [200]
  "", // [201]
  "", // [202]
  "", // [203]
  "", // [204]
  "", // [205]
  "", // [206]
  "", // [207]
  "", // [208]
  "", // [209]
  "", // [210]
  "", // [211]
  "", // [212]
  "", // [213]
  "", // [214]
  "", // [215]
  "", // [216]
  "", // [217]
  "", // [218]
  "OPEN_BRACKET", // [219]
  "BACK_SLASH", // [220]
  "CLOSE_BRACKET", // [221]
  "QUOTE", // [222]
  "", // [223]
  "META", // [224]
  "ALTGR", // [225]
  "", // [226]
  "WIN_ICO_HELP", // [227]
  "WIN_ICO_00", // [228]
  "", // [229]
  "WIN_ICO_CLEAR", // [230]
  "", // [231]
  "", // [232]
  "WIN_OEM_RESET", // [233]
  "WIN_OEM_JUMP", // [234]
  "WIN_OEM_PA1", // [235]
  "WIN_OEM_PA2", // [236]
  "WIN_OEM_PA3", // [237]
  "WIN_OEM_WSCTRL", // [238]
  "WIN_OEM_CUSEL", // [239]
  "WIN_OEM_ATTN", // [240]
  "WIN_OEM_FINISH", // [241]
  "WIN_OEM_COPY", // [242]
  "WIN_OEM_AUTO", // [243]
  "WIN_OEM_ENLW", // [244]
  "WIN_OEM_BACKTAB", // [245]
  "ATTN", // [246]
  "CRSEL", // [247]
  "EXSEL", // [248]
  "EREOF", // [249]
  "PLAY", // [250]
  "ZOOM", // [251]
  "", // [252]
  "PA1", // [253]
  "WIN_OEM_CLEAR", // [254]
  "" // [255]
];

function sceneTransition(firstId, secondId) {
	if(secondId == 'gameCanvas' || firstId == 'gameCanvas') {
		document.getElementById("leftDiv").classList.add('leftCurtain');
		document.getElementById("rightDiv").classList.add('rightCurtain');
		document.getElementById(firstId).classList.remove('visible');
		document.getElementById(firstId).classList.remove('toTopTransition');
		document.getElementById(firstId).classList.add('invisible');
		document.getElementById(secondId).classList.remove('invisible');
		document.getElementById(secondId).classList.remove('toBotTransition');
		document.getElementById(secondId).classList.add('visible');
	} else {
		document.getElementById(firstId).classList.remove('visible');
		document.getElementById(firstId).classList.remove('toTopTransition');
		document.getElementById(firstId).classList.add('toBotTransition');
		document.getElementById(secondId).classList.remove('invisible');
		document.getElementById(secondId).classList.remove('toBotTransition');
		document.getElementById(secondId).classList.add('toTopTransition');
	}
}

function addSlider(elementId) {
	document.getElementById(elementId).classList.add('sliderAnimation');
}

function removeSlider(elementId) {
	document.getElementById(elementId).classList.remove('sliderAnimation');
}

function loadKeys(callback) {
    var url = "http://localhost:3000/options?action=get-all&player=" + uuid;
    var xmlRequest = new XMLHttpRequest();

    xmlRequest.onreadystatechange = function () {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var data = JSON.parse(this.responseText)[0];
                keyCodes.leftKeyCode = data.left_key;
                keyCodes.rightKeyCode = data.right_key;
                keyCodes.jumpKeyCode = data.jump_key;
                keyCodes.downKeyCode = data.down_key;
                keyCodes.dashKeyCode = data.dash_key;
                
                callback();
            }
        }
    };
    xmlRequest.open("GET", url, true);
    xmlRequest.send();
}

function startGame() {
    document.addEventListener("keydown", keyPressed, false);
    document.addEventListener("keyup", keyReleased, false);
    // GamePad Controls

    window.addEventListener("gamepadconnected", function (e) {
        gp = navigator.getGamepads()[0];
        document.removeEventListener("keydown", keyPressed, false);
        document.removeEventListener("keyup", keyReleased, false);
    });
    window.addEventListener("gamepaddisconnected", function (e) {
        document.addEventListener("keydown", keyPressed, false);
        document.addEventListener("keyup", keyReleased, false);
        gp = null;
    });

    window.onresize = () => {
        data.defaultGroundX = window.innerHeight - 80 - 40;
        data.groundBase = data.defaultGroundX;
        render();
    };
    window.onblur = () => {
        makeSynchronousRequest("http://localhost:3000/game?action=key-released&keycode=leftKey");
        makeSynchronousRequest("http://localhost:3000/game?action=key-released&keycode=rightKey");
        makeSynchronousRequest("http://localhost:3000/game?action=key-released&keycode=jumpKey");
    }
    
    makeSynchronousRequest("http://localhost:3000/game?action=start" + "&info=" + JSON.stringify(canvas.width) + "&info=" + JSON.stringify(canvas.height));
}


function addCharacter(container, name) {
	var url = "https://gateway.marvel.com/v1/public/characters?apikey=15b0df9dd78ed4c3d58e10b0c3d36a57&hash=758e48b905e396fca02324d24f1f7b06&ts=432&name=" + name;
	var xmlRequest = new XMLHttpRequest();

	xmlRequest.onreadystatechange = function () {

		// if (this.readyState == 4 && this.status == 200) {
			// var thumbnail = JSON.parse(this.responseText).data.results[0].thumbnail;
			// var imgUrl = thumbnail.path + '/portrait_xlarge.' + thumbnail.extension;
			var imgUrl = "../icons/1.jpg";

			var anchor = document.createElement("a");
			anchor.setAttribute("id",name);
			anchor.setAttribute("class", "buttonGame characterIcon");
			var goOnClick = "buildStoryPage('" + name + "')";
			anchor.setAttribute("onclick",goOnClick);

			var image = document.createElement("img");
			image.setAttribute("src", imgUrl);
			image.setAttribute("class", "icon");
			image.setAttribute("alt", name);

			anchor.appendChild(image);
			container.appendChild(anchor);
		// }
	};
	xmlRequest.open("GET", url, true);
	xmlRequest.send();
}

function buildStoryPage(characterName) {

	var container = document.getElementById("chooseCharacterCanvas");

	var titles = document.getElementById("charactersTitle");
	var charactersTables = document.getElementsByClassName("charactersTable");

	var imgUrl = "../icons/1.jpg";

	titles.setAttribute("style","display: none;");
	charactersTables[0].setAttribute("style","display: none;");
	charactersTables[1].setAttribute("style","display: none;");

	var anchor = document.createElement("a");
	anchor.setAttribute("id",characterName + "StoryIcon");
	anchor.setAttribute("class", "buttonGame storyIcon");
	anchor.setAttribute("href", "#gameCanvas");
	anchor.setAttribute("onclick", "sceneTransition('chooseCharacterCanvas','gameCanvas')");
	
	anchor.addEventListener('click', function() {
		// alert('start');
		loadKeys(startGame);
	});

	var image = document.createElement("img");
	image.setAttribute("src", imgUrl);
	image.setAttribute("class", "icon");
	image.setAttribute("alt", characterName);

	anchor.appendChild(image);
	container.appendChild(anchor);

	// Create back button.
	var backButton = document.createElement("a");
	backButton.setAttribute("id","storyBackButton");
	backButton.setAttribute("class","creditsBackButton");
	backButton.setAttribute("href","#chooseCharacterCanvas");
	backButton.setAttribute("onclick","removeStoryPage('" + characterName + "')");

	var backImg = document.createElement("img");
	backImg.setAttribute("src","../textures/backButton.png");

	backButton.appendChild(backImg);
	container.appendChild(backButton);
}

window.addEventListener("load", () => {
	document.getElementById("optionsButton").addEventListener("click", function (e) {
		loadKeys(displayKeys);
  });
});

function removeStoryPage(characterName) {
	var characterStoryIcon = document.getElementById(characterName + "StoryIcon");
	var storyBackButton = document.getElementById("storyBackButton");
	var chooseCharacterCanvas = document.getElementById("chooseCharacterCanvas");

	chooseCharacterCanvas.removeChild(storyBackButton);
	chooseCharacterCanvas.removeChild(characterStoryIcon);

	var titles = document.getElementById("charactersTitle");
	var charactersTables = document.getElementsByClassName("charactersTable");

	titles.removeAttribute("style","display: none;");
	charactersTables[0].removeAttribute("style","display: none;");
	charactersTables[1].removeAttribute("style","display: none;");
}

window.addEventListener("load", () => {
	document.getElementById("leftDiv").addEventListener("animationend", function () {
		document.getElementById("leftDiv").classList.remove('leftCurtain');
	});

	document.getElementById("rightDiv").addEventListener("animationend", function () {
			document.getElementById("rightDiv").classList.remove('rightCurtain');
	});

	var heroes = ["Spider-Man", "Wolverine", "Daredevil", "Captain America", "Iron Man", "Thor", "Black Widow", "Hulk"];
	var villains = ["Loki", "Red Skull", "Ultron", "Magneto", "Thanos", "Black Cat", "Galactus", "Apocalypse"];
	var heroesDiv = document.getElementById("heroes");
	var villainsDiv = document.getElementById("villains");

	for (var i = 0; i < heroes.length; ++i) {
		addCharacter(heroesDiv, heroes[i]);
	}

	for (var i = 0; i < villains.length; ++i) {
		addCharacter(villainsDiv, villains[i]);
	}
});

function changeVolume(elementId) {
	var inputVolume = elementId.value;
	if(elementId == "musicVolume"){
		background_sound.volume = inputVolume;
	} else {
		jump_land.volume = inputVolume;
		jump_sound.volume = inputVolume;
	}
}

function keyName(key) {
	if(key == ' ') return "Space";
	return key;
}

function getTextFromKeyCode(keyCode) {
	return keyName(keyboardMap[keyCode]);
}

function displayKeys() {
	document.getElementById('leftKey').textContent = getTextFromKeyCode(keyCodes.leftKeyCode);
	document.getElementById('rightKey').textContent = getTextFromKeyCode(keyCodes.rightKeyCode);
	document.getElementById('jumpKey').textContent = getTextFromKeyCode(keyCodes.jumpKeyCode);
	document.getElementById('downKey').textContent = getTextFromKeyCode(keyCodes.downKeyCode);
	document.getElementById('dashKey').textContent = getTextFromKeyCode(keyCodes.dashKeyCode);
}

function changeKey(elementId) { 
	var keybordFunction = function (event) {
		var pressed = false;
	
		if(pressed == false){
			const key = event.key;
			const keyCode = event.keyCode;
	
			document.getElementById(elementId).textContent = keyName(key);
	
			switch (elementId) {
				case "leftKey": keyCodes.leftKeyCode = keyCode; break;
				case "rightKey": keyCodes.rightKeyCode = keyCode; break;
				case "downKey": keyCodes.downKeyCode = keyCode; break;
				case "jumpKey": keyCodes.jumpKeyCode = keyCode; break;
				case "dashKey": keyCodes.dashKeyCode = keyCode; break;
				default: break;
			}
			try {
			updateKeyCodes(elementId, keyCode);
		}
		catch(err) {
			console.log(err.message);
		}
	
			pressed = true;
		}
		document.removeEventListener('keydown', keybordFunction, false);
	}

	document.addEventListener('keydown', keybordFunction, false);

	// document.removeEventListener('keydown', updateKeys, true);
}

function updateKeyCodes(elementId,keyCode) {
	var xmlRequest = new XMLHttpRequest();
	var serverURL = "http://localhost:3000/options?";
	serverURL = serverURL + "action=update&key=" + elementId + "&code=" + keyCode + "&player=" + uuid;
	//console.log(serverURL);
	xmlRequest.open("POST", serverURL, true);
	xmlRequest.send();
	return xmlRequest.response;
}
  
function buildSignUpMenu() {
	var loginButton = document.getElementById('loginButton');
	document.getElementById('loginForm').removeChild(loginButton);

	var repasswordRow = document.createElement("li");
	repasswordRow.setAttribute("id","repasswordRow");
	var repasswordInput = document.createElement("input");
	repasswordInput.setAttribute("id","repasswordInput");
	repasswordInput.setAttribute("class","themeText");
	repasswordInput.setAttribute("type","password");
	repasswordInput.setAttribute("name","repassword");
	repasswordInput.setAttribute("placeholder","Re-password");
	var keyIcon = document.createElement("img");
	keyIcon.setAttribute("class","menuIcon");
	keyIcon.setAttribute("src","../textures/Locker.png");

	repasswordRow.appendChild(keyIcon);
	repasswordRow.appendChild(repasswordInput);
	document.getElementById('loginBoxList').appendChild(repasswordRow);


	var signUpButton = document.getElementById("signUpButton");
	signUpButton.removeAttribute("onclick","buildSignUpMenu()");
	signUpButton.setAttribute("onclick","signUpRequest();");
}

function buildLoginMenu() {

		var repasswordRow = document.getElementById("repasswordRow");
		var loginBoxList = document.getElementById("loginBoxList");
		loginBoxList.removeChild(repasswordRow);

		var loginButton = document.createElement("a");
		loginButton.setAttribute("id","loginButton");
		loginButton.setAttribute("class","menuButtonLink themeBox");
		loginButton.setAttribute("onclick","loginRequest()");
		loginButton.setAttribute("href","#menuCanvas");
		loginButton.setAttribute("type","submit");
		loginButton.innerHTML = "Login";

		var signUpButton = document.getElementById("signUpButton");
		signUpButton.removeAttribute("onclick","signUpRequest()");
		signUpButton.setAttribute("onclick","buildSignUpMenu()");

		var loginForm = document.getElementById("loginForm");
		loginForm.insertBefore(loginButton,signUpButton);
}

function signUpRequest() {
	var username = document.getElementById("usernameInput");
	var password = document.getElementById("passwordInput");
	var repassword = document.getElementById("repasswordInput");

	if(username != null && password != null && repassword != null) {
		if(password.value == repassword.value) {
			var xmlRequest = new XMLHttpRequest();
			var serverURL = "http://localhost:3000/signup?";
			serverURL = serverURL + "username=" + username.value + "&password=" + password.value;
			xmlRequest.open("POST", serverURL, true);
			xmlRequest.send();

			setTimeout(function() {
				if(xmlRequest.status == 200) {
					buildLoginMenu();
				}
			}, 500);
		} else {
			alert("Passwords are not identical! Try again!");
		}
	}
}

//Utilitary function for server requests
function makeSynchronousRequest(url) {
    if (uuid === undefined) {
        console.log("uuid undefined");
        return;
    }
    socket.emit('game', url + "&player=" + uuid);
}

function loginRequest() {
	var username = document.getElementById("usernameInput");
	var password = document.getElementById("passwordInput");

	if(username != null && password != null) {
		var xmlRequest = new XMLHttpRequest();
		var serverURL = "http://localhost:3000/login?";
		serverURL = serverURL + "username=" + username.value + "&password=" + password.value;
		
		xmlRequest.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				uuid = this.responseText;
				
				if(uuid === "") {
					alert('uuid not generated');
				} else {
					setTimeout(function() {
						if(xmlRequest.status == 200) {
							sceneTransition('loginCanvas','menuCanvas');
						}
					}, 500);
										
					// console.log(uuid);
				}
			}
		}
		
		xmlRequest.open("GET", serverURL, true);
		xmlRequest.send();
	}
}
