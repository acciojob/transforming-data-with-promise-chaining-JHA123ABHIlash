//your JS code here. If required.
const input=document.querySelector('#ip');
const btn=document.querySelector('#btn');
const div=document.querySelector('#output');

function print() {
	return new Promise((resolve,reject)=>{
		let  invalue=input.value;
		setTimeout(()=>{
		div.innerHTML="Result: "+ invalue;
			resolve(invalue);
	},2000);
	})
}

function multiply(value){
	return new Promise((resolve,reject)=>{
		let newvalue=Number(value)*2;
	setTimeout(()=>{
		div.innerHTML="Result: "+ newvalue;
			resolve(newvalue);
	},2000);
	})
}

function subtract(value){
	return new Promise((resolve,reject)=>{
		let newvalue=Number(value)-3;
	setTimeout(()=>{
		div.innerHTML="Result: "+ newvalue;
			resolve(newvalue);
	},1000);
	})
}

function divide(value){
	return new Promise((resolve,reject)=>{
		let newvalue=Number(value)/2;
	setTimeout(()=>{
		div.innerHTML="Result: "+ newvalue;
			resolve(newvalue);
	},1000);
	})
	
}

function Add(value) {
	return new Promise((resolve,reject)=>{
		let newvalue=Number(value)+10;
	setTimeout(()=>{
		div.innerHTML="Final Result: "+ newvalue;
			resolve(newvalue);
	},1000);
	})
}

btn.addEventListener('click',()=>{
	print()
	.then((res)=>{return multiply(res)})
	.then((res)=>{return subtract(res)})
	.then((res)=>{return divide(res)})
	.then((res)=>{return Add(res)})
.catch((err)=>console.log(err))
})