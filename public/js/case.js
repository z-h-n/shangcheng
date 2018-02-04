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