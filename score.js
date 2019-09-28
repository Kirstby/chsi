
function GetRequest(){
var url = location.search; 
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
    }



function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 






var Request = new Object();
Request = GetRequest();
var name,age;
zkzh = Request['zkzh'];
name = Request['name'];
var write=randomNum(142,160);
var listen=Math.round(randomNum(20,23)*7.1);
var read=Math.round(randomNum(20,23)*7.1);
if (zkzh == '140040191113912') {
    name = "潘齐洪";
    listen=147;
    read=161;
    write=166;
}
if (name = "潘齐洪") {
    zkzh == '140040191113912';
    listen=147;
    read=161;
    write=166;
}
var sum=write+listen+read;
