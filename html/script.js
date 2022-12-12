const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
	bar.addEventListerer('click',() => {
		nav.classList.add('active');
	})
}

if(close){
	close.addEventListerer('click',() => {
		nav.classList.remove('active');
	})
}

function loader() {
	document.querySelector('.load').classList.add("active");

}

function fadeOut() {
	setTimeout(loader,4000);
}

var mainimg=document.getelementbyid("mainimg");
        var smallimg = document.getelementbyclassname("small-img");

        smallimg[0].onclick=function () {
           mainimg.src=smallimg[0].src;
        }
        smallimg[1].onclick=function () {
           mainimg.src=smallimg[1].src;
        }
        smallimg[2].onclick=function () {
           mainimg.src=smallimg[2].src;
        }
        smallimg[3].onclick=function () {
           mainimg.src=smallimg[3].src;
        }