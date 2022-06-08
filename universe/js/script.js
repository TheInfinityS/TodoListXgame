let addButton=document.querySelector('.addButton');
let input=document.querySelector('.input');
let contain=document.querySelector('.contain');

let MockData = 
[
	{
		text: "sssss",
		checked: true,
	},
		{
		text: "sssdsadfdsfsss",
		checked: false,
	},
		{
		text: "sssfsdgghdghjhgmhgss",
		checked: true,
	},
		{
		text: "ssmfmhgmmsss",
		checked: false,
	},
		{
		text: "ssgfmnnghnnhsss",
		checked: false,
	},
		{
		text: "ssssdvsdfvdsfss",
		checked: true,
	},
]
//localStorage.setItem('TodoList',JSON.stringify(MockData));
let data=[]=JSON.parse(localStorage.getItem('TodoList')||'[]');

let id = 0;
class Item{
	constructor(itemName, itemChecked){
		this.createDiv(itemName, itemChecked);
	}
	createDiv(itemName, itemChecked){
		let input=document.createElement('input');
		
		input.value=itemName;
		input.disabled=true;
		input.classList.add('itemInput');
		input.type="text";

		let itemBox=document.createElement('div');
		itemBox.classList.add('item');
		itemBox.setAttribute("id", id);


		let editButton=document.createElement('button');
		editButton.innerHTML="EDIT";
		editButton.classList.add('editButton');

		let removeButton=document.createElement('button');
		removeButton.innerHTML="REMOVE";
		removeButton.classList.add('removeButton');

		let check=document.createElement('input');
		check.type="checkbox";
		check.checked=itemChecked;
		check.classList.add('check');

		contain.appendChild(itemBox);

		itemBox.appendChild(check);
		itemBox.appendChild(input);
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);

		check.addEventListener('click',()=>this.checking(check, itemBox));

        editButton.addEventListener('click',()=>this.edit(input, itemBox));

        removeButton.addEventListener('click',()=>this.remove(itemBox));
		id++;
	}
    edit(input, itemBox){
        input.disabled=!input.disabled;
        let id=itemBox.getAttribute("id");
        data[id].text=input.value;
        localStorage.setItem('TodoList',JSON.stringify(data));

    }
    
    remove(itemBox){
    	let id = itemBox.getAttribute("id");
    	data = data.filter((item,index) => index != id);
    	console.log(data);
        localStorage.setItem('TodoList',JSON.stringify(data));
        document.location.reload();
    }
    checking(check, itemBox){
    	let id = itemBox.getAttribute("id");
    	data[id].checked=check.checked;
    	localStorage.setItem('TodoList',JSON.stringify(data));
    }

}

let obj={
	text: "ssssasdasdadasasds",
	checked: true,
};
function check(){
    if(input.value!=""){
        obj.text=input.value;
		obj.checked=false;
		data.push(obj);
		localStorage.setItem('TodoList',JSON.stringify(data));
        input.value="";
        document.location.reload();
    }
}
addButton.addEventListener('click', check);

window.addEventListener('keydown',(e)=>{
    if(e.which==13){
        check();
    }
})

const displayData = () => data.forEach(item => new Item(item.text, item.checked));
displayData();


