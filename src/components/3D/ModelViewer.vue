<template>
    <el-row style="width:100%;height:100%;position:relative;" id="modelViewer">
        <el-col :span="24" class="ma-0 pa-0 transparent" style="width:100%;height:100%;" id="canvasArea">
            <el-progress type="circle" :percentage="Math.round(progress)" class="mdk-progress"></el-progress>
            <canvas class="webgl-canvas" id="renderCanvas" ref="webglCanvas" oncontextmenu="return false;"></canvas>
        </el-col>
    </el-row>
</template>
<script>
import * as BABYLON from './babylon.js'

export default {
    props: {
        folder: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            transparent: false,
            baseUrl: process.env.BASE_URL,
            textureProgress: 0,
            ifShowPlayMask: true,
            params: {},
            taskID: undefined,
            currentFrame: 0,
            totalFrames: undefined,
            animationStatus: true,
            model: { title: undefined },
            currentLabel: 0,
            ifFullscreen: false,
            ifshowModelLabel: false,
            labelList: [],
            thumbtail: '',
            modelUrl: undefined,
            gltf: undefined,
            animation: undefined,
            progress: 0,
            sections: undefined,
            currentSection: undefined,
            ifMobile: undefined,
            ifRotate: false,
            ifPreload: false,
            ifAutoplay: false,
            volumeValue: 80,
            ifMute: false,
            ifMobile: false,
        }
    },
    created : async function(){

        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            this.ifMobile = true
        }
        
        this.init();
        
    },
    watch: {
        folder: function(val) {
            if(val == 'ronghe'){
                this.transparent = true
            } else {
                this.transparent = false
            }
            BABYLON.MDKDisposeScene()
            this.init()
        },
        progress: function(val){
            this.$emit('loading', val)
            if(val === 100){
                var msg = {
                    type: 'Loaded'
                }
                window.parent.postMessage(msg, '*');              
            }
        }
    },
    methods:{
        init(){
            var _this = this
            this.fetchGltf().then(() => {
                _this.modelUrl = '/static/model/' + _this.folder
                if(_this.ifMobile){
                    BABYLON.MDKMobilelViewMain(_this);
                    _this.onResize()
                } else {
                    BABYLON.MDKMobilelViewMain(_this); 
                    _this.onResize()
                }
            })
        },
        fetchGltf(){
            var _this = this;
          // console.log('/static/model/' + this.folder + '/mdkModel.json');
            // 外包线上地址npm ru http://39.104.67.135:3536/
            // console.log('http://39.104.67.135:3536' + '/static/model/' + this.folder + '/mdkModel.json');
            return fetch( '/static/model/' + this.folder + '/mdkModel.json')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();                    
            })
            .then(function(gltf) {
                _this.gltf = gltf
            })  
        },
        badOSMessage(){
            this.$message('当前环境配置性能不良，显示效果可能有所下降', 'info')
        },
        onResize(){
            setTimeout(() => {
                scene.getEngine().resize()
            }, 20);
        },
        showModel(){
            this.ifShowPlayMask = false
            if(!this.ifPreload){
                if(this.ifMobile){
                    BABYLON.MDKMobilelViewMain(this);
                    if(this.ifRotate){
                        scene.moCamera.isUpdate = true
                    }
                } else {
                    BABYLON.MDKMobilelViewMain(this); 
                    if(this.ifRotate){
                        scene.moCamera.isUpdate = true
                    }
                }
            }
        },
        switchSection(value) {
            scene.moAnimation.switchSection(value);
            this.totalFrames = this.sections[value].range[1] - this.sections[value].range[0];
            this.currentSection = value;
            this.currentFrame = 0;
            scene.moAnimation.reset();
        },
        goToFrame(value) {
            scene.moAnimation.goToFrame(value + this.sections[this.currentSection].range[0]);
            if(this.animationStatus) {
                scene.moAnimation.play();
            }
            else {
               scene.moAnimation.stop();
            }
        },
        toggleAnimation(){
            this.animationStatus = !this.animationStatus;
            if(this.animationStatus) {
                scene.moAnimation.play();
            }
            else {
                scene.moAnimation.stop();
            }
        },
        navigateLabel(){
            //navigate labels from this.labelList[currentLabel]
            scene.moLabel.auto(this);
        },
        switchLabel(value){
            var mesh = scene.moLabel.labels[value];
            scene.moLabel.focus(mesh, this);
        },
        toggleFullscreen(){
            var _this = this
            this.ifFullscreen = !this.ifFullscreen

            function launchFullscreen(element) {
                if(element.requestFullscreen) {
                    element.requestFullscreen();
                } else if(element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if(element.msRequestFullscreen){
                    element.msRequestFullscreen();
                } else if(element.webkitRequestFullscreen) {
                    element.webkitRequestFullScreen();
                }
            }

            function exitFullscreen() {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }

            var el = document.getElementById('app')

            if(this.ifFullscreen){
                launchFullscreen(el);
            } else {
                exitFullscreen();
            }
            
            setTimeout(() => {
                scene.getEngine().resize()
            }, 20);
        },
        disableBrowserEvent(){
            var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1};

            function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault){
                e.preventDefault();
            }
            e.returnValue = false;  
            }

            function preventDefaultForScrollKeys(e) {
                if (keys[e.keyCode]) {
                    preventDefault(e);
                    return false;
                }
            }
            if (window.addEventListener){
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            } // older FF
            window.onwheel = preventDefault; // modern standard
            window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
            window.ontouchmove  = preventDefault; // mobile
            document.onkeydown  = preventDefaultForScrollKeys;
        },
        enableBrowserEvent() {
            var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1};

            function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;  
            }

            function preventDefaultForScrollKeys(e) {
                if (keys[e.keyCode]) {
                    preventDefault(e);
                    return false;
                }
            }
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.onmousewheel = document.onmousewheel = null; 
            window.onwheel = null; 
            window.ontouchmove = null;  
            document.onkeydown = null;  
        },
        changeVolume(value){
            if(value === 0){
                this.ifMute = true
            } else {
                this.ifMute = false
            }
            scene.moSound.setVolume("", value/100, true);
        },
        muteVolume () {
            this.ifMute = !this.ifMute
            if (this.ifMute) {
                scene.moSound.setVolume("", 0, true);
            }
            else {
                scene.moSound.setVolume("", this.volumeValue/100, true);
            }
        },


    }
}
</script>
<style>
.webgl-canvas {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;    
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    outline: none;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    pointer-events: all;
    cursor: -webkit-grab;
    cursor: grab;
    position: absolute;
}
.mdk-progress {
    position: absolute;
    top: 45vh;
	left: 50%;
	transform:translate(-50%)
}
</style>
