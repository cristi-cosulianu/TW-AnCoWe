var dir;
var player;
var gravity;
var context;
var canvas;
var ground, pipe, wall, platform, spikes, crane, goomba;
var last_player = {
    x: -100,
    y: -100
};
var jump_sound, background_sound, jump_land;
var animation_stage = 0;
var first_press;
var oldplayer;
var hasDropDown = true;
var rendered = 0;
var maxLeftBound = 0;
var walk_1, walk_2, walk_3, walk_4;
var smoke_1, smoke_2, smoke_3, smoke_4;
var background_layer1, background_layer2, background_layer3, background_layer4, background_layer5, background_layer6, background_layer7;
var bounce = false;
var objects = [];
var backgroundX = 0;
var willColideTop = false;
var right = false,
    left = false,
    space = false;
var double_jump = 0;
var movementSpeed = 0;
var onPlatform = false;
var inAir = false;
var groundBase = 606;
var rightCollision = false,
    leftCollision = false,
    topCollision = false,
    bottomCollision = false;
var currentPlatformIndex = 0;
var defaultGroundX = 606;
const speed = 2;
var cameraSpeed = 0;
var xmlRequest = new XMLHttpRequest();
var data;

window.onload = () => {
    canvas = document.querySelector("#gameCanvas canvas");
    context = canvas.getContext("2d");
    document.addEventListener("keydown", keyPressed, false);
    document.addEventListener("keyup", keyReleased, false);
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    dir = new Vector2(1, 0);
    loadAudio();
    loadTextures();
    movementSpeed = speed;
    gravity = new Vector2(0, 0.31);
    player = new GameObject(null, canvas.width / 2 - 100, defaultGroundX, 64, 64);
    defaultGroundX = window.innerHeight - 64 - 40;
    groundBase = defaultGroundX;
    loadLevel();
    makeSynchronousRequest("http://localhost:3000/game?action=start&player=1&info=" + JSON.stringify(player) + "&info=" + JSON.stringify(objects));
    this.requestAnimationFrame(game_loop);
};

window.onresize = () => {
    defaultGroundX = window.innerHeight - 64 - 40;
    groundBase = defaultGroundX;
    render();
};

function loadLevel() {
    objects.push(new GameObject(pipe, canvas.width / 2, canvas.height / 2 + 264, 64, 128));
    objects.push(new GameObject(spikes, canvas.width / 2 + 200, canvas.height / 2 + 180, 64, 64));
    objects.push(new GameObject(spikes, canvas.width / 2 + 264, canvas.height / 2 + 180, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 328, canvas.height / 2 + 0, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 392, canvas.height / 2 - 40, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 456, canvas.height / 2 - 40, 128, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 584, canvas.height / 2 + 0, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 648, canvas.height / 2 + 40, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 712, canvas.height / 2 + 80, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 1200, canvas.height / 2 + 128, 128, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 1232, canvas.height / 2 - 200, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 1500, canvas.height / 2, 128, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 1628, canvas.height / 2, 128, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 1700, canvas.height / 2 - 160, 128, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 1828, canvas.height / 2 - 160, 128, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 1956, canvas.height / 2 - 160, 128, 64));

    objects.push(new GameObject(ground, canvas.width / 2 + 2200, canvas.height / 2 - 160, 128, 64));
    objects.push(new GameObject(platform, canvas.width / 2 + 2400, canvas.height / 2 - 160, 256, 32));
    objects.push(new GameObject(ground, canvas.width / 2 + 2756, canvas.height / 2, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 3056, canvas.height / 2, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 3056, canvas.height / 2 - 250, 64, 64));
    objects.push(new GameObject(ground, canvas.width / 2 + 3356, canvas.height / 2, 64, 64));
    objects.push(new GameObject(pipe, canvas.width / 2 + 3000, canvas.height / 2 + 264, 64, 128));
    objects.push(new GameObject(wall, canvas.width / 2 + 3600, canvas.height / 2, 64, 512));
    objects.push(new GameObject(wall, canvas.width / 2 + 3800, canvas.height / 8, 64, 512));
    objects.push(new GameObject(wall, canvas.width / 2 + 4000, 100, 64, 512));
    objects.push(new GameObject(platform, canvas.width / 2 + 4200, canvas.height / 2 + 150, 256, 32));
    objects.push(new GameObject(crane, canvas.width / 2 + 4800, canvas.height / 2 + 150, 32, 64));
    objects.push(new GameObject(crane, canvas.width / 2 + 4800, canvas.height / 2 + 90, 32, 64));
    objects.push(new GameObject(goomba, canvas.width / 2 + 4800, 680, 32, 32));
    objects.sort((a, b) => {
        if (a.position.x > b.position.x)
            return -1;
        if (a.position.x < b.position.x)
            return 1;
        return 0;
    });
}

function loadAudio() {
    jump_sound = new Audio();
    jump_land = new Audio();
    background_sound = new Audio();
    background_sound.src = "../sound/background_sound.mp3";
    background_sound.loop = true;
    background_sound.volume = 0.4;
    jump_sound.src = "../sound/jump_sound.mp3";
    jump_sound.volume = 0.1;
    jump_land.src = "../sound/jump_land.mp3";
    jump_land.volume = 0.1;

}

function loadTextures() {
    walk_1 = new Image();
    walk_2 = new Image();
    walk_3 = new Image();
    walk_4 = new Image();
    smoke_1 = new Image();
    smoke_2 = new Image();
    smoke_3 = new Image();
    smoke_4 = new Image();
    platform = new Image();
    goomba = new Image();
    spikes = new Image();
    wall = new Image();
    background_layer1 = new Image();
    background_layer2 = new Image();
    background_layer3 = new Image();
    background_layer4 = new Image();
    background_layer5 = new Image();
    background_layer6 = new Image();
    background_layer7 = new Image();
    crane = new Image();
    ground = new Image();
    pipe = new Image();
    ground.src = "../textures/ground.png";
    walk_1.src = "../textures/Hat_man/Walk/Hat_man1.png";
    walk_2.src = "../textures/Hat_man/Walk/Hat_man2.png";
    walk_3.src = "../textures/Hat_man/Walk/Hat_man3.png";
    walk_4.src = "../textures/Hat_man/Walk/Hat_man4.png";
    smoke_1.src = "../textures/Smoke/smoke_1.png";
    smoke_2.src = "../textures/Smoke/smoke_2.png";
    smoke_3.src = "../textures/Smoke/smoke_3.png";
    smoke_4.src = "../textures/Smoke/smoke_4.png";
    background_layer1.src = "../textures/background/sky.png";
    background_layer2.src = "../textures/background/mountains.png";
    background_layer3.src = "../textures/background/cloud_lonely.png";
    background_layer4.src = "../textures/background/clouds_BG.png";
    background_layer5.src = "../textures/background/clouds_MG_3.png";
    background_layer6.src = "../textures/background/clouds_MG_2.png";
    background_layer7.src = "../textures/background/clouds_MG_1.png";
    pipe.src = "../textures/pipe.png";
    wall.src = "../textures/wall.png";
    platform.src = "../textures/platform.png";
    spikes.src = "../textures/spikes.png";
    crane.src = "../textures/smallwall.png";
    goomba.src = "../textures/goomba.png";
}

function player_animation(p) {
    context.save();
    if (left) {
        context.translate(2 * player.position.x + player.width, 0);
        context.scale(-1, 1);
    }
    context.shadowOffsetX = -3;
    context.shadowOffsetY = 6;
    context.shadowColor = "black";
    context.shadowBlur = 10;
    if (p > 0 && !inAir) {
        if (p < 10) {
            context.drawImage(smoke_1, player.position.x - 30, player.position.y + player.height - 24);
        }
        if (p < 14) {
            context.drawImage(smoke_2, player.position.x - 30, player.position.y + player.height - 24);

        }
        if (p < 18) {
            context.drawImage(smoke_3, player.position.x - 30, player.position.y + player.height - 24);

        }
        if (p < 24) {
            context.drawImage(smoke_4, player.position.x - 30, player.position.y + player.height - 24);

        }
    }
    if (p % 25 < 6) {
        context.drawImage(walk_1, player.position.x, player.position.y, player.width, player.height);
        return;
    }
    if (p % 25 < 12) {
        context.drawImage(walk_2, player.position.x, player.position.y, player.width, player.height);

        return;
    }
    if (p % 25 < 18) {
        context.drawImage(walk_3, player.position.x, player.position.y, player.width, player.height);
        return;
    }
    if (p % 25 < 25) {
        context.drawImage(walk_4, player.position.x, player.position.y, player.width, player.height);
        return;
    }

}

function castRay(startPoint, direction, size) {
    for (let i = 0; i < size; ++i) {
        startPoint.position.add(direction);
        if (checkCollision(startPoint, false) && willColideTop) {
            dir.normalize();
        }
    }
}

function render() {
    if (backgroundX > canvas.width) {
        backgroundX %= canvas.width;
    }
    context.drawImage(background_layer1, backgroundX % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer1, canvas.width + backgroundX % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer2, backgroundX / 5 % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer2, canvas.width + backgroundX / 5 % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer3, backgroundX / 4 % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer3, canvas.width + backgroundX / 4 % canvas.width, 0, canvas.width, canvas.height);
    //    context.drawImage(background_layer4, backgroundX % canvas.width, 0, canvas.width, canvas.height);
    //    context.drawImage(background_layer4, canvas.width + backgroundX % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer5, backgroundX / 2 % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer5, canvas.width + backgroundX / 2 % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer6, backgroundX / 1.5 % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer6, canvas.width + backgroundX / 1.5 % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer7, backgroundX % canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(background_layer7, canvas.width + backgroundX % canvas.width, 0, canvas.width, canvas.height);
    for (let i = 0; i < canvas.width - backgroundX; i += 64) {
        context.drawImage(ground, i + backgroundX, defaultGroundX + 64, 64, 64);
    }
    drawObjects();
    player_animation(animation_stage);
    context.restore();

}

function drawObjects() {
    for (let i = 0; i < objects.length; ++i) {
        if (getRight(objects[i]) + backgroundX < 0) {
            //objects.pop();
            continue;
        }
        if (getLeft(objects[i]) + backgroundX > canvas.width) {
            continue;
        }
        context.drawImage(objects[i].type, objects[i].position.x + backgroundX, objects[i].position.y, objects[i].width, objects[i].height);
    }
}


function game_loop() {
    last_player.x = player.position.x;
    last_player.y = player.position.y;
    data = makeSynchronousRequest("http://localhost:3000/game?action=get-data&player=1");
    if (isValidJson(data)) {
        data = JSON.parse(data);
        try {
            updateData(data);
        } catch (e) {
            console.log(data);
        }
    }
    if (backgroundX < maxLeftBound) {
        maxLeftBound = backgroundX;
    }
    oldplayer = player;
    if (checkCollision(player, true)) {
        cameraSpeed = 0;
        //player = oldplayer;
        if (rightCollision && !bounce) {
            //left = false
            movementSpeed = 0;
            if (right) {
                movementSpeed = speed;
            }
        } else if (leftCollision && !bounce) {
            //right = false;
            movementSpeed = 0;
            if (left) {
                movementSpeed = speed;
            }
        }
        if (bounce) {
            movementSpeed = speed;
        }
    } else {
        if (Math.abs(cameraSpeed + dir.x / 10) <= 2) {
            if (!right || !left)
                cameraSpeed += dir.x / 10;
        }
        if (backgroundX - cameraSpeed * 2.75 < 0 && (right || left) && backgroundX - cameraSpeed * 2.75 <= maxLeftBound + 50) {
            if (!right || !left)
                backgroundX -= cameraSpeed * 2.75;
        }
        rightCollision = false;
        leftCollision = false;
        topCollision = false;
        bottomCollision = false;
    }
    updateplayerposition();
    if (bounce) {
        inertia();
    }
    if (rendered < 10) {
        render();
        ++rendered;
    }
    if (player.position.x != last_player.x || player.position.y != last_player.y) {
        if (player.position.x + player.width < player.width) {
            player.position.x = 0;
        }
        if (player.position.x + player.width > canvas.width / 2) {
            player.position.x = canvas.width / 2 - player.width;
        }
        if (player.position.x + player.width > canvas.width) {
            player.position.x = canvas.width - player.width;
        }
        render();

        rendered = 3;
    } else {
        console.log("Working");
        dir.x = 0;
        if (!right && !left) {
            cameraSpeed = 0;
        }
        animation_stage = 0;
        if (rendered < 20) {
            render();
            ++rendered;
        }
    }
    //    if (objects.length > 0) {
    this.requestAnimationFrame(game_loop);
    //    } else {
    //        alert("I think you won");
    //
    //    }
}

function inertia() {
    if (leftCollision) {
        dir.x -= movementSpeed;
        dir.y = -7;
    }
    if (rightCollision) {
        dir.x += movementSpeed;
        dir.y = -7;
    }
    gravity.y = 0.28;
    bounce = false;
}

function updateplayerposition() {

    //    if (dir.y > 8) {
    //        movementSpeed = 1;
    //    }
    if (objects.length > 0) {
        if (player.position.y < groundBase || !onPlatform) {
            groundBase = defaultGroundX;
        }
        if (getRight(player) < getLeft(objects[currentPlatformIndex]) + backgroundX || getLeft(player) > getRight(objects[currentPlatformIndex]) + backgroundX) {
            onPlatform = false;
        }
    }
    //    if (inAir && dir.y > 0) {
    //        castRay(getGameObjectCopy(player), new Vector2(0, 1), 12);
    //    }
}


function checkCollision(player, takeAction) {
    let response = false;
    for (let i = 0; i < objects.length; ++i) {
        if (getLeft(objects[i]) + backgroundX > canvas.width) {
            continue;
        }
        if (getTop(player) + player.height * 6 / 10 < getTop(objects[i]) && getBottom(player) > getTop(objects[i]) && ((getRight(player) - 10 > getLeft(objects[i]) + backgroundX && getRight(player) < getRight(objects[i]) + backgroundX) || (getLeft(player) + 10 < getRight(objects[i]) + backgroundX && getLeft(player) > getLeft(objects[i]) + backgroundX))) {
            if (takeAction === true) {
                groundBase = getTop(objects[i]) - player.height;
                if (objects[i].type === spikes) {
                    console.log("You died");
                }
                onPlatform = true;
                currentPlatformIndex = i;
                //dir.y = 1;
                inAir = false;
                topCollision = true;
                console.log("top");

            } else {
                willColideTop = true;
            }
            response = true;
        }
        if (getBottom(player) > getBottom(objects[i]) && getTop(player) < getBottom(objects[i]) && getRight(player) > getLeft(objects[i]) + backgroundX + player.width * 1 / 4 && getLeft(player) < getRight(objects[i]) + backgroundX - player.width * 1 / 4) {
            if (takeAction === true) {
                dir.x = 0;
                dir.y = 1;
                double_jump = 1;
                bottomCollision = true;
                console.log("bottom");


            }
            response = true;
        }
        if (getRight(player) > getLeft(objects[i]) + backgroundX && getRight(objects[i]) + backgroundX > getRight(player) && getTop(player) < getBottom(objects[i]) && getBottom(player) > getTop(objects[i]) + 5) {
            if (takeAction === true) {
                if (inAir && space && objects[i].type === wall && !bottomCollision) {
                    double_jump = 0;
                    bounce = true;
                    dir.y = 0;
                } else {
                    dir.x = 0;
                }
                console.log("left");
                leftCollision = true;

            }
            response = true;
        }
        if (getLeft(player) < getRight(objects[i]) + backgroundX && getLeft(objects[i]) + backgroundX < getLeft(player) && getTop(player) < getBottom(objects[i]) && getBottom(player) > getTop(objects[i]) + 5) {
            if (takeAction === true) {
                if (inAir && space && objects[i].type === wall && !bottomCollision) {
                    double_jump = 0;
                    bounce = true;
                    dir.y = 0;
                } else {
                    dir.x = 0;
                }
                console.log("right");
                rightCollision = true;
            }
            response = true;
        }
    }
    return response;
}


function keyPressed(event) {
    makeSynchronousRequest("http://localhost:3000/game?action=key-pressed&player=1&keycode=" + event.keyCode);
    if (event.keyCode === 37 && !rightCollision) {
        //left = true;
    }
    if (event.keyCode === 39 && !leftCollision) {
        // right = true;
        if (first_press === false) {
            animation_stage = 5;
            first_press = true;
        }
        // background_sound.play();
    }
    if (event.keyCode === 32) {
        if (double_jump < 3) {
            jump_sound.load();
            jump_sound.play();
        }
        //space = true;
    }
    if (event.keyCode === 40 && inAir && hasDropDown) {
        dir.y = 12;
        dir.x = 0;
    }
}

function keyReleased(event) {
    makeSynchronousRequest("http://localhost:3000/game?action=key-released&player=1&keycode=" + event.keyCode);
    if (event.keyCode === 37) {
        animation_stage = 0;
        // left = false;
    }
    if (event.keyCode === 39) {
        animation_stage = 0;
        //right = false;
        first_press = false;
    }
    if (event.keyCode === 32) {
        // space = false;
    }
}

function updateData(data) {
    right = data.right;
    left = data.left;
    space = data.space;
    animation_stage = data.animation_stage;
    gravity = data.gravity;
    dir = data.dir;
    player.position = data.player.position;
    inAir = data.inAir;
    movementSpeed = data.movementSpeed;
    double_jump = data.double_jump;
    onPlatform = data.onPlatform;
    groundBase = data.groundBase;
}

function makeSynchronousRequest(url) {
    xmlRequest.open("GET", url, false);
    xmlRequest.send();
    return xmlRequest.response;
}
