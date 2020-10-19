!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["server-lib"]=t():e["server-lib"]=t()}(global,(function(){return e={222:e=>{e.exports={client:{addCharacters:function(e){this.game[e]={}},getCharacters:function(e,t=function(){},i=function(){},o=function(){}){const{game:s}=this;s.room.listen(e+"/:id",(function(o){if("add"==o.operation){const{id:i,x:n,y:r}=o.value;s[e][i]={sprite:s.add.sprite(n,r,e),id:i},t(s[e][i],o.value)}else if("remove"==o.operation){const{id:t}=o.path;s[e][t].sprite.destroy(),delete s[e][t],i(t)}})),s.room.listen(e+"/:id/:attribute",(function(t){if("replace"==t.operation){const{id:i,attribute:n}=t.path;"x"!=n&&"y"!=n||(s[e][i].sprite[n]=t.value),o(i,n,t.value)}}))}},server:{setupCharacters:function(e){this.game.state[e]={}},createACharacter:function(e,t,i){this.game.state[e][t.sessionId]={...i,id:t.sessionId}},getACharacter:function(e,t){return this.game.state[e][t.sessionId]},deleteACharacter:function(e,t){delete this.game.state[e][t.sessionId]}}}},228:(e,t,i)=>{const o=i(391),s={connect:function(){const{game:e,endpoint:t}=this,i=new o.Client(t);let s=this;e.room=i.join("main",{}),e.room.onJoin.add((()=>{e.roomJoined=!0})),e.room.listen("board/:id",(function(e){"add"==e.operation&&(s.setSize(500,500),s.createSquare(0,0,e.value.width,e.value.height,e.value.color))}))},canSend:function(){return this.game.roomJoined},sendAction:function(e,t){t?this.game.room.send({[e]:!0,...t}):this.game.room.send({[e]:!0})}};e.exports={client:s,server:{handleActions:function(e,t){for(let i in e)t[i]&&e[i]()}}}},800:e=>{const t={drawBackground:function(e,t=1,i=this.game.width,o=this.game.height){const{game:s}=this,n=s.add.sprite(0,0,e);n.setScale(t),n.depth=0;let{width:r,height:a}=n;r*=t,a*=t;for(let n=0;n<=Math.floor(i/r)+1;n++)for(let i=0;i<=Math.floor(o/a)+1;i++)if(n>0||i>0){const o=s.add.sprite(r*n,a*i,e);o.setScale(t),o.depth=0}},createSquare:function(e,t,i,o,s){var n=new Phaser.Geom.Rectangle(e,t,i,o);this.game.add.graphics({fillStyle:{color:"0x"+s}}).fillRectShape(n)},createSprite:function(e,t,i,o=1){let s=this.game.add.sprite(t,i,e);return s.setScale(o),s}};e.exports={client:t,server:{setupBoard:function(e,t,i){this.boardWidth=e,this.boardHeight=t,this.game.state.board.board={width:e,height:t,color:i}}}}},417:e=>{e.exports={client:{setSize:function(e,t){const{game:i}=this;e>0&&(i.width=e),t>0&&(i.height=t)},loadImage:function(e,t){return this.game.load.image(e,"asset/"+t)},setupKeys:function(e){this.keys=this.game.input.keyboard.addKeys(e)},getKeysDown:function(){const e={};for(let t in this.keys)e[t]=this.keys[t].isDown;return e},cameraFollow:function(e){this.game.cameras.main.startFollow(e)},cameraBounds:function(e=this.game.width,t=this.game.height){this.game.cameras.main.setBounds(0,0,e,t)}}}},225:(e,t,i)=>{const o=i(222),s=i(228),n=i(800),r=i(417),a=i(488),c={...o.client,...s.client,...n.client,...r.client,...a.client},d={...o.server,...s.server,...n.server,...r.server,...a.server};e.exports={clientMethods:c,serverMethods:d,linkMethods:function(e,t){for(let i in t)e[i]=t[i].bind(e)}}},488:e=>{const t={setupResources:function(e){this.game.state[e]={},this.counts[e]=0},createResources:function(e,t){for(var i=0;i<t;i++){let t=Math.random()*boardWidth,i=Math.random()*boardHeight;this.createAResource(e,t,i)}},createAResource:function(e,t,i){this.counts[e]+=1,this.game.state[e][this.counts[e]]={id:this.counts[e],x:t,y:i,type:"resource",height:103,width:61}},deleteAResource:function(e,t){delete this.game.state[e][t]}};e.exports={client:{addResources:function(e){this.game[e]={}},getResources:function(e,t=function(){},i=function(){},o=function(){}){const{game:s}=this;s.room.listen(e+"/:id",(function(o){if("add"==o.operation){const{id:i,x:n,y:r}=o.value;s[e][i]={sprite:s.add.sprite(n,r,e),id:i},t(s[e][i],o.value)}else if("remove"==o.operation){const{id:t}=o.path;s[e][t].sprite.destroy(),delete s[e][t],i(t)}})),s.room.listen(e+"/:id/:attribute",(function(t){if("replace"==t.operation){const{id:i,attribute:n}=t.path;s[e][i].sprite[n]=t.value,o(i,n,t.value)}}))}},server:t}},877:(e,t,i)=>{const{serverMethods:o,linkMethods:s}=i(225);e.exports=class{constructor(){this.game=null,this.counts={},this.boardWidth=500,this.boardHeight=500}setup(e){this.game=e,this.game.setState({board:{}}),s(this,o)}}},391:e=>{"use strict";e.exports=require("colyseus.js")}},t={},function i(o){if(t[o])return t[o].exports;var s=t[o]={exports:{}};return e[o](s,s.exports,i),s.exports}(877);var e,t}));