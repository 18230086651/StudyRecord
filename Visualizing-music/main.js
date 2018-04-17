
window.onload = function(){
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;


     //var audio = document.getElementById('audio');
    // var adpl = document.getElementById('adpl');
    // adpl.onclick=function(){
    //     if(audios.paused)
    //                         {
    //          audios.play();//audio.play();// 这个就是播放
    //     }else{
    //          audios.pause();// 这个就是暂停
    //      }
    // }

    var ctx = new AudioContext();
    var analyser = ctx.createAnalyser();
    var audioSrc = ctx.createMediaElementSource(audio);
    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    var canvas = document.getElementById('canvas'),
        cwidth = canvas.width,
        cheight = canvas.height-2,
        meterWidth = 10, //柱体宽度
        gap = 2, //柱体间距
        capHeight = 2, //帽盖高度
        capStyle = '#fff',//帽盖颜色
        meterNum = 400, //柱体数量
        colorGradient=600, //颜色梯度
        capYPositionArray = [];
    ctx = canvas.getContext('2d'),
    gradient = ctx.createLinearGradient(0, 0, 0, colorGradient);
    gradient.addColorStop(1, '#0f0');
    gradient.addColorStop(0.5, '#ff0');
    gradient.addColorStop(0, '#f00');
    // loop
    function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum);
        ctx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            };
            ctx.fillStyle = capStyle;
            if (value < capYPositionArray[i]) {
                ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            } else {
                ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
                capYPositionArray[i] = value;
            };
            ctx.fillStyle = gradient;
            ctx.fillRect(i * 12 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight);
        }
        requestAnimationFrame(renderFrame);
    }
    renderFrame();
};