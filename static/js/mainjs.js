var oneimgList=["/img/2_1.jpg", "/img/2_2.jpg"]
var oneimg=0

var twoimgList=["/img/3_1.jpg", "/img/3_2.jpg", "/img/3_3.jpg", "/img/3_4.jpg"]
var twoimghref=["https://www.instagram.com/nsu_reverse/p/C5ihQZ3Pk7Z/?img_index=1","https://www.instagram.com/nsu_reverse/p/C-nRHnLzjhm/?img_index=1","https://www.instagram.com/nsu_reverse/p/C_5xgs1z6hu/?img_index=1","https://www.instagram.com/p/DBgi0olTFhM/?igsh=MXF0c2kxbHZsa2h1Zw%3D%3D&img_index=1"]
var twoimg=0
const twoLen=twoimgList.length

function oneL(){
    oneimg++;
    if (oneimg%2==1){document.getElementById("one_img").src = oneimgList[1]; }
    else{document.getElementById("one_img").src = oneimgList[0]; }           
}

function oneR(){
    oneimg++;
    if (oneimg%2==1){document.getElementById("one_img").src = oneimgList[1];}
    else{document.getElementById("one_img").src = oneimgList[0];}   
}

function twoL(){
    twoimg++;
    for(var i=0; i<twoLen; i++){
        document.getElementById("two_img"+(i+1)).src = twoimgList[(twoimg+i)%twoLen];
        document.getElementById("two_img_h"+(i+1)).href = twoimghref[(twoimg+i)%twoLen];  
    }
    
}

function twoR(){
    twoimg+=twoLen-1;
    for(var i=0; i<twoLen; i++){
        document.getElementById("two_img"+(i+1)).src = twoimgList[(twoimg+i)%twoLen];
        document.getElementById("two_img_h"+(i+1)).href = twoimghref[(twoimg+i)%twoLen];   
    }
}