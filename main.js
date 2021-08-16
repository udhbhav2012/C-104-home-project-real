Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(date_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+date_uri+'"/> '
    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/naJj_ThmK/model.json',modelLoaded);