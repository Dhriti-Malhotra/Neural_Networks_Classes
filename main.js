Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eX7sA53li/', modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded');
}

function gotResult(error, results)
{
    if (error){
        console.error(error);
    }   else    {
        console.log(results);
    }
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}