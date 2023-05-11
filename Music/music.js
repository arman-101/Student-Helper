document.getElementById('music');

let thismusic = new Audio('chillbeat1.mp3')

function playMusic() {
   
    
    thismusic.play();
    thismusic.loop = true;
    thismusic.volume = vol-control.value;

    onclick = document.getElementById('turnOn').style.display = 'block';
    onclick = document.getElementById('turnOff').style.display =  'block';
    onclick = document.getElementById('pause').style.display =  'block';
    
}

function turnOff() {

thismusic.load()
//onclick = document.getElementById('turnOn').style.display = 'block';

}

function pause() {

    thismusic.pause()
    //onclick = document.getElementById('turnOn').style.display = 'block';
    
}

//stops current music and loads the selected track

function track1() {

    thismusic.load();
    thismusic = new Audio('chillbeat1.mp3')
    thismusic.play();
}

function track2() {

    thismusic.load();
    thismusic = new Audio('chillbeat2.mp3');
    thismusic.play();
}

function track3() {

    thismusic.load();
    thismusic = new Audio('chillbeat3.mp3')
    thismusic.play();
}

function track4() {

    thismusic.load();
    thismusic = new Audio('chillbeat4.mp3')
    thismusic.play();
}

function track5() {

    thismusic.load();
    thismusic = new Audio('chillbeat5.mp3')
    thismusic.play();
}

//volume control

function thisVolume(volume_value)
    {
        document.getElementById("volCtrl").innerHTML=volume_value;
        thismusic.volume = volume_value / 100;
        
    }


