var xz=document.getElementsByClassName('xz')
var cthr=document.getElementsByClassName('classify-thr')
var reve=document.getElementsByClassName('reveal')

for (var i=0; i<xz.length; i++) {
    xz[i].index=i
    xz[i].onmouseover=function () {
        cthr[this.index].style.transform='rotate(360deg)'
    }
    xz[i].onmouseout=function () {
        cthr[this.index].style.transform='rotate(0deg)'
    }
}

for (var i=0; i<xz.length; i++) {
    xz[i].index=i
    xz[i].onclick=function () {
        for (var i=0; i<xz.length; i++) {
            xz[i].style.background='#f2f2f2'
            reve[i].style.display='none'
        }
        this.style.background='#d0d0d0'
        reve[this.index].style.display='block'
    }
}

var ImgLoaded = 0

function createImg (data, index) {
    var parentUL = document.querySelectorAll('.reveal-cond ul')
    for(var i=0; i<data.length; i++){
        var img = new Image()
        img.src = data[i]
        var li = document.createElement('li')
        li.appendChild(img)
        parentUL[index].appendChild(li)
        if (!index) {
            img.onload = function () {
                ImgLoaded += 1
                if (ImgLoaded == data.length) {
                    createImg(imgPath.b,1)
                    createImg(imgPath.c,2)
                }
            }
        }
    }
}
createImg(imgPath.a, 0)

