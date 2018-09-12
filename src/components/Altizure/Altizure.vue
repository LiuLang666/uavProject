<template>
  <div id="Altizure">
    <div class="page">
      <img src="../../../static/Altizure/background.png" alt="">
    </div>
    <!--图标-->
    <ul class="icons">
      <li @click="editor">
        <img class="iconImg" src="../../../static/Altizure/icon.png" alt="">
      </li>
      <li @click="way">
        <img class="iconImg" src="../../../static/Altizure/home.png" alt="">
      </li>
      <li @click="clickCamera">
        <img class="iconImg" src="../../../static/Altizure/camera.png" alt="">
      </li>
    </ul>
    <!--编辑-->
    <div class="editorBox" v-if="editorBox">
      <div class="editorTitle">
        <span>编辑</span>
        <span style="float: right;margin-right: 20px">保存</span>
      </div>
      <div class="editorContent">
        <div class="hight ft">
          <h2>高度</h2>
          <div class="slider">
            <span class="demonstration">{{height}}m</span>
            <div class="hightSlider">
              <el-slider v-model="height"></el-slider>
            </div>
          </div>
        </div>
        <div class="over ft">
          <h2>跳过已完成部分</h2>
          <div class="slider">
            <span class="demonstration">{{value2}}%</span>
            <div class="hightSlider">
              <el-slider v-model="value2"></el-slider>
            </div>
          </div>
        </div>
        <div class="camera ft">
          <h2>相机</h2>
          <div class="cam">多光谱传感器Sequoia</div>
        </div>
        <div>
          <h2>高级</h2>
          <!--信息丢失后-->
          <div class="lost">
            <div class="leftLost">
              <span>信息</span>
            </div>
            <div class="rightLost" @click="lostBox">
              <span style="margin-right: 45px;color: rgb(169,169,169)">终止执行</span>
              <div class="goImg">
                <img src="../../../static/Altizure/go.png" alt="">
              </div>
            </div>
          </div>
          <!--更多设置-->
          <div class="more" @click="clickMore">
            <div class="leftLost">
              <span>更多设置</span>
            </div>
            <div class="goImg">
              <img src="../../../static/Altizure/go.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--信号丢失后-->
    <div class="backBox" v-if="backBox">
      <div class="backBoxTitle">
        <div class="backIcon" @click="clickBackBox">
          <img src="../../../static/Altizure/back.png" alt="" style="vertical-align: middle">
        </div>
        <h2>信号丢失后</h2>
      </div>
      <div class="backBoxContent">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="终止任务（推荐）" name="first">
            <div class="les">
              失去遥控信号数秒后，飞机将自动取消任务，并触发失控行为。
            </div>
            <div class="les">
              失控行为默认为返航，你可以在DJI Go中检查这个设置。如果它被设置为其他选项，我们也会在起飞前警告并提示你将它改为自动返航。
            </div>
          </el-tab-pane>
          <el-tab-pane label="继续执行（危险）" name="second">
            <div style="overflow-y: scroll;max-height: 195px;color: red">
              <div class="les">
                注意：这是危险设置。无信号时，飞机可能无法在低电量时自动返航。因为低电量返航指令是在信号稳定时，由app发送的，所以只在信号稳定时才有效。
              </div>
              <div class="les">
                当以下情况同事发生时，飞机可能会立即自动原地降落导致丢机：
              </div>
              <div class="les">
                1.你启用了这个选项；<br/>
                2.信号丢失较长时间；<br/>
                3.任务完成前，电量低于严重低电量警告值（DJI Go中查看)
              </div>
              <div class="les">
                如果你确实需要开启这个选项，请确保电量用完前能重新获取连接或完成任务。
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!--更多设置-->
    <div class="moreSet" v-if="moreSet">
      <div class="backBoxTitle">
        <div class="backIcon" @click="clickBackBox">
          <img src="../../../static/Altizure/back.png" alt="">
        </div>
        <h2>高级设置</h2>
      </div>
      <div class="moreSetContent">
        <div class="over ft">
          <h3>航向重叠率</h3>
          <div class="slider">
            <span class="demonstration">{{hightSets.course}}%</span>
            <div class="hightSlider">
              <el-slider v-model="hightSets.course"></el-slider>
            </div>
          </div>
        </div>
        <div class="over ft">
          <h3>旁向重叠率</h3>
          <div class="slider">
            <span class="demonstration">{{hightSets.ateral}}%</span>
            <div class="hightSlider">
              <el-slider v-model="hightSets.ateral"></el-slider>
            </div>
          </div>
        </div>
        <div class="over ft">
          <h3>相机倾斜角（第2-5条航线）</h3>
          <div class="slider">
            <span class="demonstration">{{hightSets.inclination}}°</span>
            <div class="hightSlider">
              <el-slider v-model="hightSets.inclination"></el-slider>
            </div>
            <div>
              <span v-model="hightSets.defaultDu">垂直向下：{{hightSets.defaultDu}}°</span>
            </div>
          </div>
        </div>
        <div class="over ft">
          <h3>最大速度</h3>
          <div class="slider">
            <span class="demonstration">{{hightSets.maxSpeed}}m/s</span>
            <div class="hightSlider">
              <el-slider v-model="hightSets.maxSpeed"></el-slider>
            </div>
            <div>
              <span v-model="hightSets.defaultSu">实际速度：{{hightSets.defaultSu}}m/s</span>
            </div>
          </div>
        </div>
        <div class="over ft">
          <h3>最短拍照间隔</h3>
          <div class="slider">
            <span class="demonstration">{{hightSets.minTime}}s</span>
            <div class="hightSlider">
              <el-slider v-model="hightSets.minTime"></el-slider>
            </div>
            <div>
              <span v-model="hightSets.defaultGe">实际拍照间隔：{{hightSets.defaultGe}}s</span>
            </div>
          </div>
        </div>
        <!--<div class="over ft">-->
        <!--<h3>其它</h3>-->
        <!--</div>-->
        <!--地面分辨率-->
        <div class="over ft">
          <h3>地面分辨率</h3>
          <ul class="picWH">
            <li>
              <div>
                <span>焦距（毫米）:</span>
                <el-input-number v-model="hightSets.num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
              </div>
            </li>
            <li>
              <span v-model="hightSets.picWidth">照片宽度（像素）：{{hightSets.picWidth}}</span>
            </li>
            <li>
              <span v-model="hightSets.picHeight">照片高度（像素）：{{hightSets.picHeight}}</span>
            </li>
            <li>
              <span v-model="hightSets.sensorWidth">传感器宽度（毫米）：{{hightSets.sensorWidth}}</span>
            </li>
            <li>
              <span v-model="hightSets.sensorHeight">传感器高度（像素）：{{hightSets.sensorHeight}}</span>
            </li>
            <li>
              <span>计算值</span>
            </li>
            <li>
              <span v-model="hightSets.resolution" class="minPx">厘米/像素：{{hightSets.resolution}}</span>
            </li>
            <li>
              <span v-model="hightSets.level">水平视场（米）：{{hightSets.level}}</span>
            </li>
            <li>
              <span v-model="hightSets.vertical">垂直视场（米）：{{hightSets.vertical}}</span>
            </li>
          </ul>
        </div>
        <div class="over ft">
          <h3>拍照数量</h3>
          <div style="margin-top: 20px">
            <span v-model="hightSets.distance">距离（米）：{{hightSets.distance}} </span>
          </div>
          <div style="margin-top: 20px">
            <label for="">拍照数量约（张）：</label>
            <input type="text" v-model="hightSets.quantity" style="border: none;outline: none">
            <!--<span class="picNum" >拍照数量（张）：{{hightSets.quantity}}</span>-->
          </div>
        </div>
        <div class="over ft">
          <span style="color: rgb(63,158,255)" @click="repaly">重置参数</span>
        </div>
        <!--<div class="over ft" style="margin-top: -8px">-->
        <!--<span style="color: red">注：再次重置参数，需返回上一步再执行</span>-->
        <!--</div>-->
      </div>
    </div>
    <!--返航-->
    <div class="goWay" v-if="goWay">
      <h2 style="border-bottom: 1px solid rgb(217,217,217);">返航</h2>
      <ul class="goWayContent">
        <li @click="autoGoWay">
          <span>自动返航</span>
          <div class="goImg">
            <img src="../../../static/Altizure/go.png" alt="">
          </div>
        </li>
        <li @click="defaultLoader">
          <span>原地降落</span>
          <div class="goImg">
            <img src="../../../static/Altizure/go.png" alt="">
          </div>
        </li>
        <li @click="defaultHig">
          <span>返航高度</span>
          <div class="zi">
            <span style="margin-right: 20px;color: rgb(204,204,204)" v-model="noneMess">{{noneMess}}</span>
            <div>
              <img style="width: 20px" src="../../../static/Altizure/go.png" alt="">
            </div>
          </div>
        </li>
        <li style="color: rgb(33,150,243);">
          <span>中断任务并悬停</span>
        </li>
      </ul>
    </div>
    <!--自动返航-->
    <div class="goWay" v-if="auto">
      <div class="backBoxTitle" style="border-bottom: 1px solid rgb(217,217,217);">
        <div class="backIcon" @click="clickGoWay">
          <img src="../../../static/Altizure/back.png" alt="">
        </div>
        <h2>自动返航</h2>
      </div>
      <div class="goWayContent" style="border-bottom: 1px solid rgb(217,217,217);">
        <span>状态</span>
        <span style="color: rgb(204,204,204);float: right">未知</span>
      </div>
      <div class="goWayFoot">
        <div>开始</div>
        <div>停止</div>
      </div>
    </div>
    <!--原地降落-->
    <div class="goWay" v-if="defaultWay">
      <div class="backBoxTitle" style="border-bottom: 1px solid rgb(217,217,217);">
        <div class="backIcon" @click="clickGoWay">
          <img src="../../../static/Altizure/back.png" alt="">
        </div>
        <h2>原地降落</h2>
      </div>
      <div class="goWayContent" style="border-bottom: 1px solid rgb(217,217,217);">
        <span>状态</span>
        <span style="color: rgb(204,204,204);float: right">未知</span>
      </div>
      <div class="goWayFoot">
        <div>开始</div>
        <div>停止</div>
      </div>
    </div>
    <!--返航高度-->
    <div class="goWay" v-if="backHight">
      <div class="backBoxTitle" style="border-bottom: 1px solid rgb(217,217,217);">
        <div class="backIcon" @click="clickGoWay">
          <img src="../../../static/Altizure/back.png" alt="">
        </div>
        <h2>返航高度</h2>
      </div>
      <div class="goWayContent" style="margin-bottom: 70px !important;">
        <div>
          <span>当前设置</span>
          <span style="color: rgb(204,204,204);float: right" v-model="unKown">{{unKown}}</span>
        </div>
        <div style="margin-top: 40px">
          <span>改为（20-500m)</span>
          <div class="slider">
            <span class="demonstration">{{value8}}m</span>
            <div class="hightSlider">
              <el-slider v-model="value8"></el-slider>
            </div>
          </div>
        </div>
      </div>
      <div class="sure">
        <span @click="sureMessage">确认修改</span>
      </div>
    </div>
    <!--相机-->
    <div class="cameras" v-if="cameraBox">
      <h2 style="border-bottom: 1px solid rgb(217,217,217);">相机</h2>
      <ul class="goWayContent" style="margin-top: -8px !important;margin-bottom: 0px !important;">
        <li>
          <span>相机模式</span>
        </li>
        <li>
          <span>状态</span>
        </li>
        <li>
          <span>曝光设置</span>
          <div class="goImg">
            <img src="../../../static/Altizure/go.png" alt="">
          </div>
        </li>
        <li style="position: relative">
          <span>过曝警告</span>
          <div style="position: absolute;right: 10px">
            <el-switch v-model="value">
            </el-switch>
          </div>
        </li>
        <li>
          <span>峰值对焦阈值</span>
          <div class="zi">
            <select name="" id="" style="border-radius: 10px;outline: none">
              <option value="">关</option>
              <option value="">普通</option>
              <option value="">低</option>
              <option value="">高</option>
            </select>
          </div>
        </li>
      </ul>
      <div class="goWayFoot">
        <div @click="openFly">开始</div>
        <div>停止</div>
      </div>
    </div>
    <!--飞行路线-->
    <div class="lineWay" v-if="linePic">
      <img style="opacity: .6" src="../../../static/Altizure/pic1.png" alt="">
    </div>
    <div class="lineWay" v-if="line1">
      <img style="opacity: .6" src="../../../static/Altizure/line1.png" alt="">
    </div>
    <div class="lineWay" v-if="line2">
      <img style="opacity: .6" src="../../../static/Altizure/line2.png" alt="">
    </div>
    <div class="lineWay" v-if="line3">
      <img style="opacity: .6" src="../../../static/Altizure/line3.png" alt="">
    </div>
    <div class="lineWay" v-if="line4">
      <img style="opacity: .6" src="../../../static/Altizure/line4.png" alt="">
    </div>
    <div class="lineWay" v-if="line5">
      <img style="opacity: .6" src="../../../static/Altizure/line5.png" alt="">
    </div>
    <div class="lineWay" v-if="line6">
      <img style="opacity: .6" src="../../../static/Altizure/line6.png" alt="">
    </div>
    <!--计算图片-->
    <div class="jiPic">
      <img src="../../../static/Altizure/jisuan.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name:'tizure',
        data(){
            return{
                //点击次数
                clickNum:0,
                height: 87,
                value2: 0,
                activeName2: 'first',
                backBox:false,
                editorBox:false,
                //  高级设置
                moreSet:false,
                hightSets:{
                    course:85,
                    ateral:85,
                    inclination:43,
                    maxSpeed:6,
                    minTime:3,
                    defaultDu:0,
                    defaultSu:2.6,
                    defaultGe:5,
                    resolution:'',
                    quantity:'',
                    //地面分辨率
                    picWidth: 4609,
                    picHeight:3456,
                    sensorWidth:6.2,
                    sensorHeight:4.6,
                    level:62,
                    vertical:46,
                    num8:5,
                    //  旁向率与角度
                    distance:''
                },
                noneMess:'未知',
                //  自动返航
                auto:false,
                goWay:false,
                defaultWay:false,
                unKown:'???',
                value8: 0,
                backHight:false,
                //  相机
                value:false,
                cameraBox:false,
                linePic:false,
                //  飞行路线
                line1:false,
                line2:false,
                line3:false,
                line4:false,
                line5:false,
                line6:false,
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            clickBackBox(){
                this.editorBox = true
                this.backBox = false
                this.moreSet = false
            },
            lostBox(){
                this.backBox = true
                this.editorBox = false
            },
            clickMore(){
                this.moreSet = true
                this.editorBox = false
            },
            repaly(){
                this.clickNum = this.clickNum +1
                this.hightSets.defaultDu = this.hightSets.inclination
                this.hightSets.defaultSu = this.hightSets.maxSpeed
                this.hightSets.defaultGe = this.hightSets.minTime
                //  旁向重叠率与角度
                if(82 <= this.hightSets.ateral < 90){
                    this.hightSets.distance = 1210
                    this.line1 = true
                    this.linePic = false
                    this.line2 = false
                    this.line3 = false
                    this.line4 = false
                    this.line5 = false
                    this.line6 = false
                }
                if(this.hightSets.inclination <50 && 82 <= this.hightSets.ateral < 90){
                    this.hightSets.distance = 1130
                    this.linePic = false
                    this.line1 = false
                    this.line2 = true
                    this.line3 = false
                    this.line4 = false
                    this.line5 = false
                    this.line6 = false
                }
                if(this.hightSets.inclination >= 50 && 82 <= this.hightSets.ateral < 90){
                    this.hightSets.distance = 1250
                    this.linePic = false
                    this.line1 = false
                    this.line2 = false
                    this.line4 = false
                    this.line5 = false
                    this.line6 = false
                    this.line3 = true
                }
                if(this.hightSets.ateral >= 90){
                    this.hightSets.distance = 2350
                    this.linePic = false
                    this.line1 = false
                    this.line2 = false
                    this.line4 = true
                    this.line5 = false
                    this.line6 = false
                    this.line3 = false
                }
                if(this.hightSets.inclination < 50 && this.hightSets.ateral >= 90){
                    this.hightSets.distance = 2320
                    this.linePic = false
                    this.line1 = false
                    this.line2 = false
                    this.line4 = false
                    this.line5 = true
                    this.line6 = false
                    this.line3 = false
                }
                if(this.hightSets.ateral >= 90 && this.hightSets.inclination >= 50){
                    this.hightSets.distance = 2320
                    this.linePic = false
                    this.line1 = false
                    this.line2 = false
                    this.line4 = false
                    this.line5 = false
                    this.line6 = true
                    this.line3 = false
                }
                //  拍照数量=距离/速度/时间
                let numPho = this.hightSets.distance/this.hightSets.defaultSu/this.hightSets.defaultGe
                this.hightSets.quantity=(numPho+"").split('.')[0]
                //  地面分辨率
                let numReso = this.hightSets.sensorHeight/this.hightSets.picHeight*this.height/this.hightSets.num8
                this.hightSets.resolution = numReso.toFixed(3)
            },
            editor(){
                if(this.line1 || this.line2 || this.line3 || this.line4 || this.line5 || this.line6){
                    this.linePic = false
                }else{
                    this.linePic = true
                }
                this.editorBox = !this.editorBox
                this.goWay = false
                this.cameraBox = false
                this.backBox = false
                this.moreSet = false
                this.auto = false
                this.defaultWay = false
                this.backHight = false
            },
            clickGoWay(){
                this.auto = false
                this.defaultWay = false
                this.goWay = true
                this.backHight = false
            },
            autoGoWay(){
                this.auto = true
                this.goWay = false
            },
            way(){
                this.goWay = !this.goWay
                this.editorBox = false
                this.cameraBox = false
                this.backBox = false
                this.moreSet = false
                if(this.line1 || this.line2 || this.line3 || this.line4 || this.line5 || this.line6){
                    this.linePic = false
                }else{
                    this.linePic = true
                }
            },
            defaultLoader(){
                this.defaultWay = true
                this.goWay = false
            },
            sureMessage(){
                this.unKown = this.value8
            },
            defaultHig(){
                this.backHight = true
                this.goWay = false
            },
            clickCamera(){
                this.cameraBox = !this.cameraBox
                this.editorBox = false
                this.goWay = false
                this.backBox = false
                this.moreSet = false
                this.auto = false
                this.defaultWay = false
                this.backHight = false
                if(this.line1 || this.line2 || this.line3 || this.line4 || this.line5 || this.line6){
                    this.linePic = false
                }else{
                    this.linePic = true
                }
            },
            handleChange(value) {
                console.log(value);
            },
            openFly(){
                // this.$store.commit('CHANGE_ROUTERASS');

                let params = {
                    height: this.height,
                    course: this.hightSets.course,
                    ateral: this.hightSets.ateral,
                    inclination:this.hightSets.defaultDu,
                    maxSpeed:this.hightSets.defaultSu,
                    minTime:this.hightSets.defaultGe,
                    //地面分辨率
                    resolution:this.hightSets.resolution,
                    //拍照数量
                    quantity:this.hightSets.quantity,
                    //    重置参数点击次数
                    clickTimes:this.clickNum,
                    // userTaskId:sessionStorage.getItem("taskId")
                }
                if(this.clickNum > 0){
                    console.log(this.clickNum)
                    this.$axios.get(this.URL.uUserTask.randomResutl, {params}).then(res =>{
                        if(res.status === 200){
                            //外包

                            this.$alert('操作成功!', '提示', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.cameraBox = false
                                }
                            });
                        }
                    })
                }else{
                    this.$alert('请回到编辑页设置参数!', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.cameraBox = false
                            this.editorBox = true

                        }
                    });
                }
            },
        }
    }
</script>

<style scoped>
  #Altizure{
    height: 100%;
    width: 100%;
    position: relative;
    display: table;
    min-width: 1400px;
  }
  .page img{
    width: 100%;
    height: 100%;
    position: fixed;
    min-width: 1400px;
  }
  .icons{
    position: absolute;
    z-index: 22;
  ;
  }
  .icons li{
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 50%;
    background-color: #fff;
    top: calc(50vh - 100px);
    margin-left: 200px;
    margin-top: 30px;
    opacity: .7;
  }
  .iconImg{
    width: 30px;
    height: 30px;
    top:50%;
    left: 50%;
    margin: 10px 0 0 10px;
  }
  .editorBox{
    width: 350px;
    height: 410px;
    position: absolute;
    z-index: 22;
    top: 300px;
    left: 300px;
    background: #fff;
    border-radius: 4px;
  }
  .editorTitle{
    text-align: center;
    margin-top: 8px;
  }
  .editorTitle span:first-child{
    font-size: 16px;
    background: rgb(64,158,255);
    padding: 10px 16px;
    color: #fff;
    border-radius: 4px;
  }
  .editorContent{
    padding: 0px 15px;
  }
  .slider{
    margin-top: 5px;
  }
  .ft{
    margin-bottom: 20px;
  }
  .cam{
    margin-top: 6px;
    font-size: 16px;
  }
  /*信号丢失后*/
  .backBox{
    width: 350px;
    height: 300px;
    position: absolute;
    z-index: 22;
    top: 350px;
    left: 300px;
    background: #fff;
    border-radius: 4px;
  }
  .backBoxTitle{
    padding: 5px 10px;
    display: flex;
  }
  .backIcon{
    width: 25px
  }
  .backIcon img{
    width: 100%;
  }
  .backBoxTitle h2{
    margin: 0 auto;
  }
  .backBoxContent{
    margin-top: 10px;
  }
  .les{
    padding: 0 20px 10px;
  }
  .lost{
    display: flex;
    font-size: 16px;
    margin-top: 6px;
    position: relative;
    border-bottom: 1px solid rgb(217,217,217);
    padding-bottom: 10px;
  }
  .rightLost{
    display: flex;
    position: absolute;
    right: 0px;
  }
  .goImg{
    width: 20px;
    position: absolute;
    right: 20px;
  }
  .goImg img{
    width: 100%;
  }
  .more{
    display: flex;
    margin-top: 12px;
    font-size: 16px;
    position: relative;
  }
  /*高级设置*/
  .moreSet{
    width: 350px;
    height: 400px;
    position: absolute;
    z-index: 22;
    top: 300px;
    left: 300px;
    background: #fff;
    border-radius: 4px;
  }
  .moreSetContent{
    margin-top: 10px;
    max-height: 347px;
    overflow-y: scroll;
    margin: 15px;
  }
  .backColor{
    background: rgb(33,150,243);
  }
  /*返航*/
  .goWay{
    width: 350px;
    height: 300px;
    position: absolute;
    z-index: 22;
    top: 350px;
    left: 300px;
    background: #fff;
    border-radius: 4px;
  }
  .goWay h2{
    text-align: center;
    padding: 5px 0;
  }
  .goWayContent{
    padding: 15px;
    font-size: 16px;
    margin-bottom: 160px;
  }
  .goWayContent li{
    display: flex;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid rgb(217,217,217);
    margin-bottom: 10px;
  }
  .goWayContent li div img{
    vertical-align: middle;
  }
  .zi{
    display: flex;
    right: 20px;
    position: absolute;
  }
  /*自动返航*/
  .goWayFoot{
    display: flex;
    width: 100%;
    border-top: 1px solid rgb(217,217,217);
    padding-top: 10px;
  }
  .goWayFoot div{
    width: 50%;
    text-align: center;
    color: rgb(33,150,243);
  }
  .goWayFoot div:first-child{
    border-right: 1px solid rgb(217,217,217);
    color: red !important;
  }
  .sure{
    font-size: 16px;
    color: rgb(33,150,243);
    text-align: center;
  }
  /*相机*/
  .cameras{
    width: 350px;
    height: 300px;
    position: absolute;
    z-index: 22;
    top: 350px;
    left: 300px;
    background: #fff;
    border-radius: 4px;
  }
  .cameras h2{
    text-align: center;
    padding: 5px 0;
  }
  .lineWay{
    position: absolute;
    right: 200px;
    top: 300px;
  }
  .jiPic{
    position: absolute;
    top: 120px;
    left: 70px;
    width: 300px;
  }
  .jiPic img{
    width: 100%;
  }
  .picWH li{
    margin-top: 20px;
  }
  .minPx{
    max-width: 108px;
    overflow: hidden;
    display: block;
    white-space: nowrap;
  }
  .picNum{
    max-width: 130px;
    overflow: hidden;
    display: block;
    white-space: nowrap;
  }
  .hightSlider{
    margin-top: -25px;
    width: 80% !important;
    margin-left: 45px;
  }
</style>
