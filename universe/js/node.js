var music=new Audio();
dontTouchMe = (url) => {
	music.pause();
	music=new Audio(url);
    music.play(url);
} 
const hero=document.getElementById("hero");
const villian=document.getElementById("villian");
const game=document.getElementById("game")
const attack=document.getElementById("attack")
const over=document.getElementById("over")

villian.classList.add("villianmove");
document.addEventListener("click",function(event){
	hit();
})
function hit(){
	if(attack.classList!="hit"){
		attack.classList.add("hit");
	}
	setTimeout(function(){
		attack.classList.remove("hit")
	},300)
}
document.addEventListener("keydown", function(event){
	jump();
})
function jump(){
	if(hero.classList!="jump"){
		hero.classList.add("jump");
	}
	setTimeout(function(){
		hero.classList.remove("jump")
	},800)
}
let EvilAttak=setInterval(function(){
	let heroy=parseInt(window.getComputedStyle(hero).getPropertyValue("top"))
	let villianx=parseInt(window.getComputedStyle(villian).getPropertyValue("left"))
	if(villianx>210 && villianx<250 &&heroy<=120){
		if(villian.classList!="villianattak"){
			villian.classList.add("villianattak");
		}
		setTimeout(function(){
			villian.classList.remove("villianattak");
		},300)
		
	}
},10)
let isAlive=setInterval(function(){
	let heroy=parseInt(window.getComputedStyle(hero).getPropertyValue("top"))
	let villianx=parseInt(window.getComputedStyle(villian).getPropertyValue("left"))
	let villiany=parseInt(window.getComputedStyle(villian).getPropertyValue("top"))
	if(villianx<=70&&heroy-villiany>=0&&heroy-villiany<=120&&villianx>=0){
		if(over.classList!="gameover"){
			villian.classList.remove("villianmove");
			villian.classList.add("whilegameover");
			hero.classList.add("whilegameover");
			over.classList.add("gameover");
		}
		setTimeout(function(){
			villian.classList.remove("whilegameover");
			villian.classList.add("villianmove");
			hero.classList.remove("whilegameover");
			over.classList.remove("gameover");
		},5000)
	}
},10)
let attacked=setInterval(function(){
	let attackx=parseInt(window.getComputedStyle(attack).getPropertyValue("left"))
	let villianx=parseInt(window.getComputedStyle(villian).getPropertyValue("left"))
	let villiany=parseInt(window.getComputedStyle(villian).getPropertyValue("top"))
	if(villianx>69&&villianx<=200 &&attackx>100){
		if(villian.classList!="attacked"){
			villian.classList.add("attacked");;
		}
		setTimeout(function(){
			villian.classList.remove("attacked");
		},10)
	}
},10)



