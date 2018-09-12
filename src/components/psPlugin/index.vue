<template>
    <div id="wrap" style="position: relative">
      <!--头部-->
      <el-row>
        <el-col :span="24">
          <div id="header">
            <el-row>
              <el-col :span="24">
                <div class="header-top">
                  <div class="logoImg">
                    <img src="../../../static/img/logo.png" alt="">
                  </div>
                  <div class="title">
                <span >Untitled - Agisoft PhotoScan Standard(demo)</span>
              </div>
                  <div class="icon">
                    <span><img src="../../../static/img/icon1.png" alt=""></span>
                    <span><img src="../../../static/img/icon2.png" alt=""></span>
                    <span @click="closeGo"><img src="../../../static/img/icon3.png" alt=""></span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <ul class="header-center">
              <li @click="openFile">File</li>
              <li @click="openEditor">Edit</li>
              <li>View</li>
              <li @click="workFlow">Workflow</li>
              <li>Tools</li>
              <li>Photo</li>
              <li>Help</li>
            </ul>
            <!--线-->
            <div class="line"></div>
            <!--图标-->
            <div class="icons">
              <ul>
                <li><img src="../../../static/img/icons1.png" alt=""></li>
                <li><img src="../../../static/img/icons2.png" alt=""></li>
                <li><img src="../../../static/img/icons3.png" alt=""></li>
                <li @click="saveFile"><img src="../../../static/img/icons4.png" alt=""></li>
                <li><img src="../../../static/img/icons5.png" alt=""></li>
                <li><img src="../../../static/img/icons6.png" alt=""></li>
                <li><img src="../../../static/img/icons7.png" alt=""></li>
                <li><img src="../../../static/img/icons8.png" alt=""></li>
                <li><img src="../../../static/img/icons9.png" alt=""></li>
                <li><img src="../../../static/img/icons10.png" alt=""></li>
                <li><img src="../../../static/img/icons11.png" alt=""></li>
                <li><img src="../../../static/img/icons12.png" alt=""></li>
                <li><img src="../../../static/img/icons13.png" alt=""></li>
                <li><img src="../../../static/img/icons14.png" alt=""></li>
                <li><img src="../../../static/img/icons15.png" alt=""></li>
                <li><img src="../../../static/img/icons16.png" alt=""></li>
                <li><img src="../../../static/img/icons17.png" alt=""></li>
                <li><img src="../../../static/img/icons18.png" alt=""></li>
                <li><img src="../../../static/img/icons19.png" alt=""></li>
                <li><img src="../../../static/img/icons20.png" alt=""></li>
                <li><img src="../../../static/img/icons21.png" alt=""></li>
                <li><img src="../../../static/img/icons22.png" alt=""></li>
                <li><img src="../../../static/img/icons23.png" alt=""></li>
              </ul>
            </div>
          </div>
          <!--左侧-->
          <el-row class="content">
            <el-col :span="6">
              <!--工作区-->
              <div class="left" v-if="work">
                <div class="leftTop">
                  <div class="font">Workspace</div>
                  <div class="leftRight">
                    <div class="leftRT"><img src="../../../static/img/icon4.png" alt=""></div>
                    <div class="leftRT2"><img src="../../../static/img/icon5.png" alt=""></div>
                  </div>
                </div>
                <ul class="leftCenter">
                  <li><img src="../../../static/img/01.png" alt=""></li>
                  <li><img src="../../../static/img/02.png" alt=""></li>
                  <li class="leftLine"></li>
                  <li><img src="../../../static/img/03.png" alt=""></li>
                  <li><img src="../../../static/img/04.png" alt=""></li>
                  <li><img src="../../../static/img/05.png" alt=""></li>
                </ul>
                <div class="leftWork">
                  <div v-if="addPic" style="width: 100%">
                    <img src="../../../static/img/pic002.png" alt="" style="width: 100%;max-height: 390px">
                  </div>
                  <div class="leftWorkTitle" v-if="nopic">
                    <img src="../../../static/img/1.png" alt="">
                    <div class="workCont">
                      <span>Workspace（0 chunks，0 cameras）</span>
                    </div>
                  </div>
                </div>
                <div class="leftWork2">

                </div>
              </div>
              <!--参考-->
              <div class="left" v-if="referen">
                <div class="leftTop">
                  <div class="font">Reference</div>
                  <div class="leftRight">
                    <div class="leftRT"><img src="../../../static/img/icon4.png" alt=""></div>
                    <div class="leftRT2"><img src="../../../static/img/icon5.png" alt=""></div>
                  </div>
                </div>
                <ul class="leftCenter">
                  <li><img src="../../../static/img/ic01.png" alt=""></li>
                  <li><img src="../../../static/img/ic02.png" alt=""></li>
                  <li><img src="../../../static/img/ic03.png" alt=""></li>
                  <li class="leftLine"></li>
                  <li><img src="../../../static/img/ic04.png" alt=""></li>
                  <li><img src="../../../static/img/ic05.png" alt=""></li>
                  <li><img src="../../../static/img/ic06.png" alt=""></li>
                  <li class="leftLine"></li>
                  <li><img src="../../../static/img/ic07.png" alt=""></li>
                  <li><img src="../../../static/img/ic08.png" alt=""></li>
                  <li><img src="../../../static/img/ic09.png" alt=""></li>
                  <li class="leftLine"></li>
                  <li><img src="../../../static/img/ic10.png" alt=""></li>
                </ul>
                <div class="leftWorks">
                  <ul>
                    <li>Cameras</li>
                    <li>X(m)</li>
                    <li>Y(m)</li>
                    <li>Z(m)</li>
                    <li>Accuracy(m)</li>
                    <li>Error(m)</li>
                    <li>Yaw(°)</li>
                    <li>Pitch(°)</li>
                    <li>Roll(°)</li>
                    <li>Accuracy(°)</li>
                    <li>Error(°)</li>
                    <li>Projections</li>
                    <li>Error(pix)</li>
                  </ul>
                </div>
                <div class="leftWorks">
                  <ul>
                    <li>Markers</li>
                    <li>X(m)</li>
                    <li>Y(m)</li>
                    <li>Z(m)</li>
                    <li>Accuracy(m)</li>
                    <li>Error(m)</li>
                    <li>Projections</li>
                    <li>Error(pix)</li>
                  </ul>
                </div>
                <div class="leftWorks" style="margin-bottom: 0px !important;">
                  <ul>
                    <li>Scale&nbsp;Bars</li>
                    <li>Distance(m)</li>
                    <li>Accuracy(m)</li>
                    <li>Error(m)</li>
                  </ul>
                </div>
              </div>
              <div class="footer">
                <div class="work" @click="works">Workspace</div>
                <div class="refer" @click="refence">Reference</div>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="right">
                <div class="rightTitle">
                  <span>模型</span>
                </div>
                <div class="rightContent">
                  <div v-if="contFirst">
                    <img src="../../../static/img/content.png" alt="">
                  </div>
                  <div v-if="contSecond">
                    <img src="../../../static/img/back02.png" alt="">
                  </div>
                  <div v-if="contThird">
                    <img src="../../../static/img/back03.png" alt="">
                  </div>
                  <div v-if="contFourth">
                    <img src="../../../static/img/back04.png" alt="">
                  </div>
                  <div v-if="contFave">
                    <img src="../../../static/img/back05.png" alt="">
                  </div>
                  <div v-if="contSix">
                    <img src="../../../static/img/back06.png" alt="">
                  </div>
                  <div v-if="contSeventh">
                    <img src="../../../static/img/back07.png" alt="">
                  </div>
                </div>
                <div class="rightBottom">
                  <div class="rightBottomTitle">
                    <div class="leftTop2">
                      <div class="font">Photos</div>
                      <div class="leftRight2">
                        <div class="leftRT"><img src="../../../static/img/icon4.png" alt=""></div>
                        <div class="leftRT2"><img src="../../../static/img/icon5.png" alt=""></div>
                      </div>
                    </div>
                  </div>
                  <ul class="rightBottomContent">
                    <li><img src="../../../static/img/03.png" alt=""></li>
                    <li><img src="../../../static/img/04.png" alt=""></li>
                    <li><img src="../../../static/img/05.png" alt=""></li>
                    <li class="leftLine"></li>
                    <li><img src="../../../static/img/pic01.png" alt=""></li>
                    <li><img src="../../../static/img/pic02.png" alt=""></li>
                    <li class="leftLine"></li>
                    <li><img src="../../../static/img/pic03.png" alt=""></li>
                    <li><img src="../../../static/img/pic04.png" alt=""></li>
                    <li><img src="../../../static/img/pic05.png" alt=""></li>
                    <li><img src="../../../static/img/icons9.png" alt=""></li>
                  </ul>
                  <div class="rightBottomFooter">
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!--文件-->
      <ul class="file" v-if="files">
        <li @mouseenter="secondLeave">
          <img src="../../../static/img/icons2.png" alt="">
          <span class="first" style="margin-left: 10px">New</span>
          <span class="kuai" style="margin-left: 45px">Ctrl+N</span>
        </li>
        <li @mouseenter="secondLeave">
          <img src="../../../static/img/icons3.png" alt="">
          <span class="first">Open...</span>
          <span class="kuai">Ctrl+O</span>
        </li>
        <li @mouseenter="secondLeave">
          <span class="only">Append...</span>
        </li>
        <li @mouseenter="secondLeave">
          <img src="../../../static/img/icons4.png" alt="">
          <span class="first" style="margin-left: 10px">Save...</span>
          <span class="kuai">Ctrl+S</span>
        </li>
        <li @mouseenter="secondLeave">
          <span class="only">Save&nbsp;As...</span>
        </li>
        <li class="line" style="height: 0px !important;margin-left: 38px"></li>
        <li @mouseenter="mouseOver">
          <span class="only">Export</span>
          <img style="width: 7px;margin-left: 60px" src="../../../static/img/next.png" alt="">
        </li>
        <li @mouseenter="importOver">
          <span class="only">Import</span>
          <img style="width: 7px;margin-left: 60px" src="../../../static/img/next.png" alt="">
        </li>
        <li @mouseenter="secondLeave">
          <button class="only" :disabled="uploadData">Upload&nbsp;Data...</button>
        </li>
        <li class="line" style="height: 0px !important;margin-left: 38px"></li>
        <li @mouseenter="secondLeave" @click="closeGo">
          <span class="only">Exit</span>
        </li>
      </ul>
      <!--导出-->
      <ul class="export" v-if="over">
          <li @mouseenter="leave">
            <span>Export&nbsp;Points...</span>
          </li>
          <li @mouseenter="leave">
            <span>Export&nbsp;Model...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Export&nbsp;Tiled&nbsp;Model...</span>
            <img style="width: 7px;margin-left: 165px" src="../../../static/img/next.png" alt="">
          </li>
          <li @mouseenter="model">
            <span style="color: #000 !important;">Export&nbsp;Orthomosaic...</span>
            <img style="width: 7px;margin-left: 165px" src="../../../static/img/next.png" alt="">
          </li>
          <li @mouseenter="numModel">
            <span style="color: #000 !important;">导出数字高程模型...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Generate&nbsp;Report...</span>
          </li>
          <li class="line" style="height: 0px !important;margin-left: 38px"></li>
          <li @mouseenter="leave">
            <span disabled>Export&nbsp;Cameras...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Export&nbsp;Markers...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Export&nbsp;Masks...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Export&nbsp;Shapes...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Export&nbsp;Texture...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Export&nbsp;Panorama...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Export&nbsp;Orthophotos...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Undistort&nbsp;Photos...</span>
          </li>
          <li @mouseenter="leave">
            <span disabled>Render&nbsp;Photos...</span>
          </li>
        </ul>
      <ul class="import" v-if="look" @mouseleave="unLook">
          <li @click="buildZH">
            <!--生成正射-->
            <span style="color: #000 !important;">Export&nbsp;JPEG/TIFF/PNG...</span>
          </li>
          <li>
            <span>Export&nbsp;Google&nbsp;KMZ...</span>
          </li>
          <li>
            <span>Export&nbsp;Google&nbsp;Map&nbsp;Tiles...</span>
          </li>
          <li>
            <span>Export&nbsp;MBTiles...</span>
          </li>
          <li>
            <span>Export&nbsp;World&nbsp;Wind&nbsp;Tiles...</span>
          </li>
        </ul>
      <!--导入-->
      <ul class="lesdIn" v-if="importIn" @mouseleave="unImport">
        <li>
          <span>Import&nbsp;Cameras...</span>
        </li>
        <li>
          <span>Import&nbsp;Markers...</span>
        </li>
        <li>
          <span>Import&nbsp;Masks...</span>
        </li>
        <li>
          <span>Import&nbsp;Shapes...</span>
        </li>
        <li>
          <span>Import&nbsp;Points...</span>
        </li>
        <li>
          <span>Import&nbsp;Model...</span>
        </li>
        <li>
          <span>Import&nbsp;Texture...</span>
        </li>
        <li>
          <span>Import&nbsp;DEM...</span>
        </li>
        <li>
          <span>Import&nbsp;Video...</span>
        </li>
      </ul>
      <!--导出数字高程模型-->
      <ul class="num" v-if="numberM" @mouseleave="numberMode">
        <li @click="buildDem">
          <span style="color: #000 !important;">Export&nbsp;TIFF/BIL/XYZ...</span>
        </li>
        <li>
          <span>Export&nbsp;Sputnik&nbsp;KMZ...</span>
        </li>
        <li>
          <span>Export&nbsp;Googel&nbsp;Map&nbsp;Tiles...</span>
        </li>
        <li>
          <span>Export&nbsp;MBTiles...</span>
        </li>
        <li>
          <span>Export&nbsp;World&nbsp;Wind&nbsp;Tiles...</span>
        </li>
      </ul>
      <!--编辑-->
      <ul class="editor" v-if="editors">
        <li>
          <img src="../../../static/img/icons5.png" alt="">
          <span class="first" style="margin-left: 10px">Undo</span>
          <span class="kuai" style="margin-left: 65px">Ctrl+Z</span>
        </li>
        <li>
          <img src="../../../static/img/icons6.png" alt="">
          <span class="first" style="margin-left: 10px">Redo</span>
          <span class="kuai" style="margin-left: 67px">Ctrl+Y</span>
        </li>
        <li class="line" style="height: 0px !important;margin-left: 38px"></li>
        <li>
          <span class="only">Invert&nbsp;Selection</span>
        </li>
        <li>
          <span class="only">Grow&nbsp;Selection</span>
        </li>
        <li>
          <span class="only">Shrink&nbsp;Selection</span>
        </li>
        <li>
          <span class="only">Reset&nbsp;Selection</span>
        </li>
        <li class="line" style="height: 0px !important;margin-left: 38px"></li>
        <li>
          <img src="../../../static/img/icons13.png" alt="">
          <span class="first" style="margin-left: 10px">Delete&nbsp;Selection</span>
        </li>
        <li>
          <img src="../../../static/img/icons14.png" alt="">
          <span class="first" style="margin-left: 8px">Crop&nbsp;Selection</span>
        </li>
      </ul>
      <!--工作流程-->
      <ul class="workflow" v-if="noneWork" @mouseleave="workLeave">
        <li @click="importPics">
          <img src="../../../static/img/02.png" alt="">
          <span style="margin-left: 20px">Add&nbsp;Photos...</span>
        </li>
        <li>
          <img src="../../../static/img/icons3.png" alt="">
          <span style="margin-left: 20px">Add&nbsp;Folder...</span>
        </li>
        <li class="line" style="height: 0px !important;margin-left: 60px"></li>
        <li @click="AlignPhotos">
          <button :disabled="Alphotos">Align&nbsp;Photos...</button>
        </li>
        <li @click="buildDenseCloud">
          <button :disabled="buildCloud">Build&nbsp;Dense&nbsp;Cloud...</button>
        </li>
        <li @click="clickbuildMesh">
          <button :disabled="buildMesh">Build&nbsp;Mesh...</button>
          <!--<input type="text" :disabled="true" value="Build Mesh..."/>-->
        </li>
        <li  @click="clickbuildTexture">
          <button :disabled="buildTexture">Build&nbsp;Texture...</button>
        </li>
        <li @click="BuildTiled">
          <button :disabled="buildModel">Build&nbsp;Tiled&nbsp;Model...</button>
        </li>
        <li>
          <button :disabled="buildDEM">Build&nbsp;DEM...</button>
        </li>
        <li @click="Orthomosaic">
          <button :disabled="buildOrthomosaic">Build&nbsp;Orthomosaic...</button>
        </li>
        <li class="line" style="height: 0px !important;margin-left: 60px"></li>
        <li>
          <button :disabled="alignChunks">Align&nbsp;Chunks...</button>
        </li>
        <li>
          <button :disabled="mergeChunks">Merge&nbsp;Chunks...</button>
        </li>
        <li class="line" style="height: 0px !important;margin-left: 60px"></li>
        <li>
          <span>Batch&nbsp;Process...</span>
        </li>
      </ul>
      <!--导入图片截图-->
      <div class="importPic" v-if="pic" @click="clickPic">
        <img src="../../../static/img/pic001.png" alt="">
      </div>
      <!--对齐图片-->
      <div class="Align" v-if="Align">
        <div class="AlignTop">
          <span><img src="../../../static/img/picture01.png" alt=""></span>
          <span style="margin-left: 8px;font-size: 16px">Align&nbsp;Photos</span>
          <span @click="AlignClose" style="float: right;margin-right: 15px"><img src="../../../static/img/icon3.png" alt="" style="width: 15px"></span>
        </div>
        <div class="AlignContent">
          <div class="AlignFirst">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>General</span>
            </div>
            <ul class="AlignFirstContent">
              <li>
                <span>Accuracy&nbsp;:</span>
                <select name="" id="" style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 90px">
                  <option value="">Highest</option>
                  <option value="">High</option>
                  <option value="">Medium</option>
                  <option value="">Low</option>
                  <option value="">Lowest</option>
                </select>
              </li>
              <li>
                <input type="checkbox" checked="checked">
                <span>Generic&nbsp;preselection</span>
              </li>
              <li>
                <input type="checkbox">
                <span style="color:rgb(120,120,120)!important;">Reference&nbsp;preselection</span>
              </li>
              <li>
                <input type="checkbox">
                <span style="color:rgb(120,120,120)!important;">Reset&nbsp;current&nbsp;alignment</span>
              </li>
            </ul>
          </div>
          <div class="Alignsecond">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>Advanced</span>
            </div>
            <ul class="AlignFirstContent">
              <li>
                <span>Key&nbsp;point&nbsp;limit:</span>
                <input type="text" value="40,000" style="width: 120px;padding-left: 5px;float: right; margin-right: 40px;">
              </li>
              <li>
                <span>Tie&nbsp;point&nbsp;limit:</span>
                <input type="text" value="40,000" style="width: 120px;padding-left: 5px;float: right; margin-right: 40px;">
              </li>
              <li>
                <span>Apply&nbsp;masks&nbsp;to:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 128px" disabled>
                  <option value="">None</option>
                  <option value="">High</option>
                  <option value="">Medium</option>
                  <option value="">Low</option>
                  <option value="">Lowest</option>
                </select>
              </li>
              <li style="margin-left: -3px">
                <input type="checkbox">
                <span>Adaptive&nbsp;camera&nbsp;model&nbsp;fitting</span>
              </li>
            </ul>
          </div>
          <div class="AlignFirstBottom">
            <button @click="AlignOk">Ok</button>
            <button @click="AlignClose">Cancel</button>
          </div>
        </div>
      </div>
      <!--01-->
      <div class="picture" v-if="contPic01" @click="picture">
        <img src="../../../static/img/con01.png" alt="">
      </div>
      <!--建立密集点云-->
      <div class="Align" v-if="buildDenseClouds">
        <div class="AlignTop">
          <span><img src="../../../static/img/picture01.png" alt=""></span>
          <span style="margin-left: 8px;font-size: 16px">Build&nbsp;Dense&nbsp;Cloud</span>
          <span @click="AlignClose" style="float: right;margin-right: 15px"><img src="../../../static/img/icon3.png" alt="" style="width: 15px"></span>
        </div>
        <div class="AlignContent">
          <div class="AlignFirst">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>General</span>
            </div>
            <ul class="AlignFirstContents">
              <li>
                <span>Quality&nbsp;:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Ultra high</option>
                  <option value="">High</option>
                  <option value="">Medium</option>
                  <option value="">Low</option>
                  <option value="">Lowest</option>
                </select>
              </li>
            </ul>
          </div>
          <div class="Alignsecond">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>Advanced</span>
            </div>
            <ul class="AlignFirstContents">
              <li>
                <span>Depth&nbsp;filtering:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Disabled</option>
                  <option value="">Mild</option>
                  <option value="">Medium</option>
                  <option value="">Moderate</option>
                  <option value="">Aggressive</option>
                </select>
              </li>
              <li>
                <input type="checkbox" disabled style="color: rgb(120,120,120)!important;">
                <span >Reuse&nbsp;depth&nbsp;maps:</span>
              </li>
              <li>
                <input type="checkbox" checked>
                <span>Calculate&nbsp;point&nbsp;colors:</span>
              </li>
            </ul>
          </div>
          <div class="AlignFirstBottom">
            <button @click="buildDenseOk">Ok</button>
            <button @click="AlignClose">Cancel</button>
          </div>
        </div>
      </div>
      <!--密集云点图片-->
      <div class="buildCloudpic" @click="clickbuildCloud" v-if="buildCloudPicture">
        <img src="../../../static/img/picture02.png" alt="">
      </div>
      <!--生成网格-->
      <div class="Align" v-if="mensh">
        <div class="AlignTop">
          <span><img src="../../../static/img/picture01.png" alt=""></span>
          <span style="margin-left: 8px;font-size: 16px">Build&nbsp;Mesh</span>
          <span @click="AlignClose" style="float: right;margin-right: 15px"><img src="../../../static/img/icon3.png" alt="" style="width: 15px"></span>
        </div>
        <div class="AlignContent">
          <div class="AlignFirst">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>General</span>
            </div>
            <ul class="AlignFirstContents">
              <li>
                <span>Surface&nbsp;type:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Arbitrary (3D)</option>
                  <option value="">Hight field (2.5D)</option>
                </select>
              </li>
              <li>
                <span>Source&nbsp;data:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Sparse cloud</option>
                  <option value="">Dense cloud</option>
                </select>
              </li>
              <li>
                <span>Face&nbsp;count:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Low（10,000）</option>
                  <option value="">Height（90,000）</option>
                  <option value="">Medium（30,000）</option>
                  <option value="">Custom</option>
                </select>
              </li>
            </ul>
          </div>
          <div class="Alignsecond">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>Advanced</span>
            </div>
            <ul class="AlignFirstContents">
              <li>
                <span>Interpolation:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Enabled (default)</option>
                  <option value="">Extrapolated</option>
                </select>
              </li>
              <li style="display: flex;position: relative">
                <span>Point&nbsp;classes：&nbsp;All</span>
                <div style="position: absolute;right: 40px;width: 90px;height: 25px;line-height:25px;border: 1px solid rgb(191,191,191);background: rgb(204,204,204);text-align: center">
                  <span style="color: rgb(120,120,120)">select...</span>
                </div>
              </li>
              <li>
                <input type="checkbox" disabled style="color: rgb(120,120,120)!important;margin-left: 0px">
                <span >Calculate&nbsp;vertex&nbsp;colors:</span>
              </li>
            </ul>
          </div>
          <div class="AlignFirstBottom">
            <button @click="clickCloud">Ok</button>
            <button @click="AlignClose">Cancel</button>
          </div>
        </div>
      </div>
      <!--生成纹理-->
      <div class="Align" v-if="texture">
        <div class="AlignTop">
          <span><img src="../../../static/img/picture01.png" alt=""></span>
          <span style="margin-left: 8px;font-size: 16px">Build&nbsp;Texture</span>
          <span @click="AlignClose" style="float: right;margin-right: 15px"><img src="../../../static/img/icon3.png" alt="" style="width: 15px"></span>
        </div>
        <div class="AlignContent">
          <div class="AlignFirst">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>General</span>
            </div>
            <ul class="AlignFirstContents">
              <li>
                <span>Mapping mode&nbsp;:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Generic</option>
                  <option value="">Orthophoto</option>
                  <option value="">Adaptive orthophoto</option>
                  <option value="">Spherical</option>
                  <option value="">Single camera</option>
                  <option value="">Keep uv</option>
                </select>
              </li>
              <li>
                <span>Blending mode&nbsp;:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Mosaic (default)</option>
                  <option value="">Average</option>
                  <option value="">Max intensity</option>
                  <option value="">Min intensity</option>
                  <option value="">Disabled</option>
                </select>
              </li>
              <li style="display: flex;position: relative">
                <span>Texture size/count&nbsp;:</span>
                <div style="display: flex;position: absolute;right: 40px;">
                  <input type="text" value="4096" style="width: 60px;padding-left: 5px;float: right;">
                  <div>&nbsp; x&nbsp;</div>
                  <input type="number" value="1" style="width: 30px">
                </div>
              </li>
            </ul>
          </div>
          <div class="Alignsecond">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>Advanced</span>
            </div>
            <ul class="AlignFirstContents">

              <li>
                <input type="checkbox" checked  >
                <span >Enable&nbsp;hole&nbsp;filling</span>
              </li>
              <li>
                <input type="checkbox" disabled style="color: rgb(120,120,120)!important;">
                <span>Enable&nbsp;ghosting&nbsp;filter:</span>
              </li>
            </ul>
          </div>
          <div class="AlignFirstBottom">
            <button @click="clickCloudTextTure">Ok</button>
            <button @click="AlignClose">Cancel</button>
          </div>
        </div>
      </div>
      <!--图片-->
      <div class="buildCloudpic" v-if="texturePic" @click="clicktexturePic">
        <img src="../../../static/img/picture.png" alt="">
      </div>
      <!--BuildOrhtomosaic-->
      <div class="Aligns" v-if="buildOrhtomosaic">
        <div class="AlignTop">
          <span><img src="../../../static/img/picture01.png" alt=""></span>
          <span style="margin-left: 8px;font-size: 16px">Build&nbsp;Orhtomosaic&nbsp;</span>
          <span @click="AlignClose" style="float: right;margin-right: 15px"><img src="../../../static/img/icon3.png" alt="" style="width: 15px"></span>
        </div>
        <div class="AlignContent">
          <div class="AlignFirst">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>Projection</span>
            </div>
            <ul class="AlignFirstContents">
              <li style="display: flex;position: relative">
                <span>Type:</span>
                <div style="position: absolute;right: 40px">
                  <input type="radio" value="" disabled/>Gegraphic
                  <input type="radio" value="1" v-model="params" @change="identityChange()"/>Planar
                  <input type="radio" value="2" v-model="params" @change="identityChange()"/>Cylindrical
                </div>
              </li>
            </ul>
            <!--选择Planar-->
            <ul class="AlignFirstContents" v-if="Planar">
              <li>
                <span>Projection&nbsp;plane&nbsp;:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 180px">
                  <option value="">Current View</option>
                  <option value="">Markers</option>
                  <option value="" selected>Top XY</option>
                  <option value="">Bottom XY</option>
                  <option value="">Front XZ</option>
                  <option value="">Back XZ</option>
                  <option value="">Right YZ</option>
                  <option value="">Left YZ</option>
                </select>
              </li>
              <li>
                <span>Rotation&nbsp;angle&nbsp;:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 180px">
                  <option value="">0</option>
                  <option value="">90</option>
                  <option value="" >180</option>
                  <option value="">270</option>
                </select>
              </li>
              <li style="display: flex;position: relative">
                <input type="radio" value="" disabled checked/>
                <span>Hrzontal&nbsp;axis&nbsp;:</span>
                <div style="position: absolute;right: 40px">
                  <select  style="background: rgb(225,225,225);width: 79px" disabled>
                    <option></option>
                  </select>
                  <span>-></span>
                  <select  style="background: rgb(225,225,225);width: 79px" disabled>
                    <option></option>
                  </select>
                </div>
              </li>
              <li style="display: flex;position: relative">
                <input type="radio" value="" disabled/>
                <span>Vertoca&nbsp;axis&nbsp;:</span>
                <div style="position: absolute;right: 40px">
                  <select  style="background: rgb(225,225,225);width: 79px" disabled>
                    <option></option>
                  </select>
                  <span>-></span>
                  <select  style="background: rgb(225,225,225);width: 79px" disabled>
                    <option></option>
                  </select>
                </div>
              </li>
            </ul>
            <!--选择cylindrical-->
            <ul class="AlignFirstContents" v-if="cylindrical">
              <li>
                <span>Cylinder&nbsp;orientation&nbsp;:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 180px">
                  <option value="">Current Region</option>
                  <option value="">Current View</option>
                  <option value="">Markers</option>
                  <option value="">X</option>
                  <option value="">Y</option>
                  <option value="">Z</option>
                </select>
              </li>
              <li style="display: flex;position: relative">
                <span>Cylinder&nbsp;axis&nbsp;:</span>
                <div style="position: absolute;right: 40px">
                  <select  style="background: rgb(225,225,225);width: 79px" disabled>
                    <option></option>
                  </select>
                  <span>-></span>
                  <select  style="background: rgb(225,225,225);width: 79px" disabled>
                    <option></option>
                  </select>
                </div>
              </li>
              <li style="display: flex;position: relative">
                <span>Projection&nbsp;origin&nbsp;:</span>
                <select  style="background: rgb(225,225,225);width: 180px;position: absolute;right: 40px" disabled>
                  <option></option>
                </select>
              </li>
              <li style="display: flex;position: relative">
                <input type="checkbox">
                <span>Interior&nbsp;projection&nbsp;</span>
              </li>
            </ul>
          </div>
          <div class="Alignsecond">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>Parameters</span>
            </div>
            <ul class="AlignFirstContents">
              <li>
                <span >Surface：</span>
                <select  style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 180px">
                  <option selected>Mesh</option>
                </select>
              </li>
              <li>
                <span >Blending&nbsp;mode：</span>
                <select  style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 180px" >
                  <option selected>Mosaic(default)</option>
                  <option>Average</option>
                  <option>Disabled</option>
                </select>
              </li>
              <li>
                <input type="checkbox" checked/>
                <span>Enable&nbsp;hole&nbsp;filling</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Enable&nbsp;back-face&nbsp;culling</span>
              </li>
              <li style="position: relative;display: flex;margin-top: 10px">
                <input type="radio" name="radioN" checked/>
                <span>Pixel&nbsp;size&nbsp;(m):</span>
                <div style="position: absolute;right: 25px;display: flex">
                  <input type="text" value="0.000867486" style="width: 180px;padding-left: 5px;margin-right: 5px;">
                  <span style="line-height: 25px">X</span>
                </div>
              </li>
              <li style="position: relative;display: flex;margin-top: 10px">
                <button disabled style="width: 100px;margin-left: 5px">Metres...</button>
                <div style="position: absolute;right: 25px;display: flex">
                  <input type="text" value="0.000867486" style="width: 180px;padding-left: 5px;margin-right: 5px;">
                  <span style="line-height: 25px">Y</span>
                </div>
              </li>
              <li style="margin-top: 10px;position: relative;display: flex">
                <input type="radio" name="radioN"  />
                <span>Max.&nbsp;dimension&nbsp;(pix):</span>
                <div style="position: absolute;right: 25px">
                  <input type="text" disabled value="4096" style="width: 180px;padding-left: 5px;">
                  <span>X</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="Alignsecond">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>Region</span>
            </div>
            <ul class="AlignFirstContents">
              <li style="position: relative;display: flex;margin-bottom: 10px">
                <input type="checkbox">
                <span >Setup&nbsp;boundaries:&nbsp;</span>
                <div style="position: absolute;display: flex;right: 25px" >
                  <input type="text" disabled value="" style="width: 90px;padding-left: 5px;"><span>&nbsp;-&nbsp;</span>
                  <input type="text" disabled value="" style="width: 90px;padding-left: 5px;"><span style="line-height: 25px;margin-left: 3px">X</span>
                </div>
              </li>
              <li style="position: relative;display: flex;margin-bottom: 10px">
                <button disabled style="width: 100px;margin-left: 5px">Estimate</button>
                <div style="position: absolute;display: flex;right: 25px" >
                  <input type="text" disabled value="" style="width: 90px;padding-left: 5px;"><span>&nbsp;-&nbsp;</span>
                  <input type="text" disabled value="" style="width: 90px;padding-left: 5px;"><span style="line-height: 25px;margin-left: 3px">Y</span>
                </div>
              </li>
              <li style="position: relative;display: flex;margin-bottom: 10px">
                <span>Total&nbsp;size&nbsp;(pix):</span>
                <div style="position: absolute;display: flex;right: 25px" >
                  <input type="text" value="" style="width: 90px;padding-left: 5px;"><span>&nbsp;x&nbsp;</span>
                  <input type="text" value="" style="width: 90px;padding-left: 5px;"><span style="line-height: 25px;margin-left: 3px">Y</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="AlignFirstBottom">
            <button @click="clickbuildOrhtomosaic">Ok</button>
            <button @click="AlignClose">Cancel</button>
          </div>
        </div>
      </div>
      <!--Build tiled model-->
      <div class="Align" v-if="buildTiledModel">
        <div class="AlignTop">
          <span><img src="../../../static/img/picture01.png" alt=""></span>
          <span style="margin-left: 8px;font-size: 16px">Build&nbsp;Tiled&nbsp;Model</span>
          <span @click="AlignClose" style="float: right;margin-right: 15px"><img src="../../../static/img/icon3.png" alt="" style="width: 15px"></span>
        </div>
        <div class="AlignContent">
          <div class="AlignFirst">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>General</span>
            </div>
            <ul class="AlignFirstContents">
              <li>
                <span>Source&nbsp;data&nbsp;:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">Dense cloud</option>
                  <option value="">Mesh</option>
                </select>
              </li>
              <li>
                <span>Pixel&nbsp;size&nbsp;(m)&nbsp;:</span>
                <input type="text" value="0.000835368" style="width: 112px;padding-left: 5px;float: right; margin-right: 40px;">
              </li>
              <li>
                <span>Title&nbsp;size&nbsp;:</span>
                <select style="float: right;margin-right: 40px;background: rgb(225,225,225);width: 120px">
                  <option value="">256</option>
                  <option value="">512</option>
                  <option value="">1024</option>
                  <option value="">2048</option>
                  <option value="">4096</option>
                  <option value="">8192</option>
                </select>
              </li>
            </ul>
          </div>
          <div class="Alignsecond">
            <div class="AlignFirstTop">
              <img src="../../../static/img/icons9.png" alt="">
              <span>Advanced</span>
            </div>
            <ul class="AlignFirstContents">

              <li>
                <input type="checkbox"   >
                <span >Enable&nbsp;ghosting&nbsp;filter</span>
              </li>
              <li>
                <input type="checkbox" disabled style="color: rgb(120,120,120)!important;">
                <span>Reuse&nbsp;depth&nbsp;maps</span>
              </li>
            </ul>
          </div>
          <div class="AlignFirstBottom">
            <button @click="clickCloudTiledModel">Ok</button>
            <button @click="AlignClose">Cancel</button>
          </div>
        </div>
      </div>
      <!--需要保存-->
      <div class="savePic" v-if="savePics" @click="clickSave">
        <img src="../../../static/img/save.png" alt="">
      </div>
      <!--保存弹框-->
      <div class="saveAlert" v-if="picSave" @click="alertPic">
        <img src="../../../static/img/savePic.png" alt="">
      </div>
      <!--进行-->
      <div class="buildCloudpic" v-if="playing" @click="nexting">
        <img src="../../../static/img/nextPic.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
          return{
            work:true,
            referen:false,
            files:false,
            editors:false,
            over:false,
            look:false,
            noneWork:false,
            importIn:false,
            numberM:false,

            uploadData:true,
            //禁止点击按钮
            Alphotos:true,
            buildCloud:true,
            buildMesh:true,
            buildTexture:true,
            buildModel:true,
            buildDEM:true,
            buildOrthomosaic:true,
            alignChunks:true,
            mergeChunks:true,

          //  导入图片
            pic:false,
            nopic:true,
            addPic:false,
          //  对齐图片
            Align:false,
            contPic01:false,
          //  内容图片
            contFirst:true,
            contSecond:false,
            // 建立密集点云
            buildDenseClouds:false,
            buildCloudPicture:false,
            contThird:false,
            mensh:false,
            contFourth:false,
            //生成纹理
            texture:false,
            texturePic:false,
            contFave:false,
            //buildTiledModel
            buildTiledModel:false,
            contSix:false,
            savePics:false,
            picSave:false,
            save:'',
            //buildOrhtomosaic
            buildOrhtomosaic:false,
            contSeven:false,
            playing:false,
            params:'1',
            Planar:true,
            cylindrical:false,
            identity: true,
            contSeventh:false
          }
      },
      methods:{
        works(){
          this.work = true
          this.referen = false
        },
        refence(){
          this.work = false
          this.referen = true
        },
        openFile(){
          this.files = !this.files
          this.editors = false
          this.noneWork = false
        },
        openEditor(){
          this.editors = !this.editors
          this.files = false
          this.noneWork = false
          this.numberM = false
          this.over = false
          this.look = false
          this.importIn = false
        },
        mouseOver(){
          this.over = true
          this.importIn = false
        },
        mouseLeave(){
          this.over = false
        },
        model(){
          this.look = true
          this.numberM = false
        },
        unLook(){
          this.look = false
        },
        workFlow(){
          this.noneWork = !this.noneWork
          this.editors = false
          this.files = false
          this.numberM = false
          this.over = false
          this.look = false
          this.importIn = false
        },
        importOver(){
          this.importIn = true
          this.over = false
        },
        unImport(){
          this.importIn = false
        },
        numModel(){
          this.numberM = true
          this.look = false
        },
        numberMode(){
          this.numberM = false
        },
        leave(){
          this.look = false
          this.numberM = false
        },
        secondLeave(){
          this.importIn = false
          this.over = false
        },
        workLeave(){
          this.noneWork = false
        },
        importPics(){
          this.pic = true
        },
        clickPic(){
          this.pic = false
          this.addPic = true
          this.nopic = false
          this.Alphotos = false
        },
        //对齐图片
        AlignPhotos(){
          this.Align = true
        },
        AlignOk(){
          let data = {
              optionId:26,
              taskId:sessionStorage.taskId
          }
          this.$axios.post(this.URL.uUserTask.select, data).then(res =>{
              if(res.status === 200){
                  this.Align = false
                  this.contPic01 = true
              }
          })
        },
        AlignClose(){
          this.Align = false
          this.buildDenseClouds = false
        },
        picture(){
          this.contPic01 = false
          this.contFirst = false
          this.contThird = false
          this.contFourth = false
          this.contFave = false
          this.contSix = false
          this.contSeventh = false
          this.contSecond = true
          this.buildCloud = false
          this.buildMesh = false
        },
        //建立密集点云
        buildDenseCloud(){
          this.buildDenseClouds = true
        },
        buildDenseOk(){
            let data = {
                optionId:30,
                taskId:sessionStorage.taskId
            }
            this.$axios.post(this.URL.uUserTask.select, data).then(res =>{
                if(res.status === 200){
                    this.buildDenseClouds = false
                    this.buildCloudPicture = true
                }
            })
        },
        clickbuildCloud(){
          this.buildCloudPicture = false
          this.contFirst = false
          this.contThird = true
          this.contFourth = false
          this.contFave = false
          this.contSix = false
          this.contSeventh = false
          this.contSecond = false
          this.buildModel = false
        },
        clickbuildMesh(){
          this.mensh = true
          this.buildTexture = false
          this.buildOrthomosaic = false

        },
        clickCloud(){
            let data = {
                optionId:32,
                taskId:sessionStorage.taskId
            }
            this.$axios.post(this.URL.uUserTask.select, data).then(res =>{
                if(res.status === 200){
                    this.mensh = false
                    this.contFirst = false
                    this.contThird = false
                    this.contFourth = true
                    this.contFave = false
                    this.contSix = false
                    this.contSeventh = false
                    this.contSecond = false
                }
            })
        },
        clickbuildTexture(){
          this.mensh = false
          this.texture=true
        },
        clickCloudTextTure(){
          let data = {
              optionId:31,
              taskId:sessionStorage.taskId
          }
          this.$axios.post(this.URL.uUserTask.select, data).then(res =>{
              if(res.status === 200){
                  this.texturePic = true
                  this.texture = false
              }
          })
        },
        buildZH(){
          let data = {
              optionId:34,
              taskId:sessionStorage.taskId
          }
          this.$axios.post(this.URL.uUserTask.select, data).then(res =>{
              if(res.status === 200){
                  console.log(sessionStorage.getItem("taskId"))
                  this.$alert('操作成功!', '提示', {
                      confirmButtonText: '确定',
                      callback: action => {
                          this.look = false
                          this.files = false
                          this.over = false
                          this.numberM = false
                          this.importIn = false
                      }
                  });
              }
          })
        },
        buildDem(){
            let data = {
                optionId:33,
                taskId:sessionStorage.taskId
            }
            this.$axios.post(this.URL.uUserTask.select, data).then(res =>{
                if(res.status === 200){
                    this.$alert('操作成功!', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.look = false
                            this.files = false
                            this.over = false
                            this.numberM = false
                            this.importIn = false
                        }
                    });
                }
            })
        },
        clicktexturePic(){
          this.texturePic = false
          this.contFirst = false
          this.contThird = false
          this.contFourth = false
          this.contFave = true
          this.contSix = false
          this.contSeventh = false
          this.contSecond = false
        },
        clickCloudTiledModel(){
          this.savePics = true
          this.buildTiledModel = false
          if(this.save === 'num'){
            this.playing = true
            this.savePics = false
          }
        },
        clickSave(){
          this.savePics = false
        },
        saveFile(){
          this.picSave = true
          this.save = 'num'
        },
        alertPic(){
          this.picSave = false
        },
        nexting(){
          this.playing = false
        },
        BuildTiled(){
          this.buildTiledModel = true
        },
        identityChange(){
          this.identity = !this.identity;
          if (this.identity) {
            this.cylindrical = false
            this.Planar = true
          } else {
            this.cylindrical = true
            this.Planar = false
          }
        },
        Orthomosaic(){
          this.buildOrhtomosaic = true
        },
        clickbuildOrhtomosaic(){
          this.buildOrhtomosaic = false
          this.contFirst = false
          this.contThird = false
          this.contFourth = false
          this.contFave = false
          this.contSix = false
          this.contSeventh = true
          this.contSecond = false
        },
      //    返回上一路由
          closeGo(){
              this.$router.back(-1)
          },
      },
    }
</script>

<style scoped>
  @import "../../../static/css/psPlugin.css";
</style>
