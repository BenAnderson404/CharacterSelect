$(document).ready(function () {
    var p1name;
    var p2name;
    var innerImg1;
    var innerImg2;
    var imagePre;
    var imagePost;
    var imageName;
    var imageFinal;
    var activePlayer = 1;
    var buttonStatus;
    var playerState = 1;
    var p1full = 0;
    var p2full = 0;
    var goEnabled = 0;


    $('.imgL').mouseover(function () {
        activePlayer = getActivePlayer();
        imagePre = $(this).attr('src');
        imagePre = imagePre.split("/icons/");
        imagePost = imagePre[1];
        imagePost = imagePost.split(".");
        imageName = imagePost[0] + "Big." + imagePost[1];
        imageName = "/images/charsel/icons/" + imageName;
        if (activePlayer === 1) {
            p1name = imagePost[1];
            getBigImageP1(imageName);
        }
        else {
            p2name = imagePost[1];
            getBigImageP2(imageName);
        }
    });

    $('.imgR').mouseover(function () {
        activePlayer = getActivePlayer();
        imagePre = $(this).attr('src');
        imagePre = imagePre.split("/icons/");
        imagePost = imagePre[1];
        imagePost = imagePost.split(".");
        imageName = imagePost[0] + "Big." + imagePost[1];
        imageName = "/images/charsel/icons/" + imageName;
        if (activePlayer === 1) {
            p1name = imagePost[1];
            getBigImageP1(imageName);
        }
        else {
            p2name = imagePost[1];
            getBigImageP2(imageName);
        }
    });

    $('.imgL').click(function () {
        activePlayer = getActivePlayer();
        imagePre = $(this).attr('src');
        imagePre = imagePre.split("/icons/");
        imagePost = imagePre[1];
        imagePost = imagePost.split(".");
        if (activePlayer === 1) {
            p1name = imagePost[1];
            goCheck();
            activePlayer = 2;
        }
        else {
            p2name = imagePost[1];
            goCheck();
            $('.imgL').unbind('mouseenter mouseleave');
        }

    });
    $('.imgR').click(function () {
        activePlayer = getActivePlayer();
        imagePre = $(this).attr('src');
        imagePre = imagePre.split("/icons/");
        imagePost = imagePre[1];
        imagePost = imagePost.split(".");
        if (activePlayer === 1) {
            p1name = imagePost[1];
            goCheck();
            activePlayer = 2;
        }
        else {
            p2name = imagePost[1];
            goCheck();
            $('.imgL').unbind('mouseenter mouseleave');
        }
    });

    function getBigImageP1(picture) {
        //        $('.player-1-big-character').attr("src", picture);
        $('.player-1-big-character').css("background-image", "url(" + picture + ")");

    };

    function getBigImageP2(picture) {
        //        $('.player-1-big-character').attr("src", picture);
        $('.player-2-big-character').css("background-image", "url(" + picture + ")");

    };

    $('.button_active_player').click(function () {
        switchPlayer();
    });

    function getActivePlayer() {
        var ap;
        if (activePlayer === 1) {
            ap = 1;
            return ap;
        }
        else
            ap = 2;
        return ap;

    };

    function goCheck() {
        if ((p1name !== null) && (p2name !== null)) {
            goEnabled = 1;
            goSwitch();
        }
    };
    function goSwitch() {
        if (goEnabled === 1) {
            $('.goButton').prop('disabled', false);
        }
        else
            $('.goButton').prop('disabled', true);
    }
    function borderAnimate() {

    };

    $('.goButton').click(function () {
        confirmAll();
    });
    function confirmAll() {
        //* insert function that takes var p1name & p2name and structures them in correct url for an anchor tag
        //* add var that takes the return of prev function and puts that into string, make that strng the href for that <a>
    };

    function getImageName() {

    };

    function switchPlayer() {
        if (playerState === 1) {
            playerState = 2;
        }
        else
            playerState = 1;
    }

});




//* mouseover on character, grab name of that character and add to variable
//*  after that completes, take variable and send to function that changes big picture to that name.

//* click on character, grab name of that character and add to variable
//*  after that completes, take variable and send to function that changes big picture to that name.