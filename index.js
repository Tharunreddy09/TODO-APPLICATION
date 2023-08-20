let inputEl = document.getElementById("inputEl");

let root = document.getElementById("root");


let count = 0 


function textChange1(id){
    let el = document.getElementById(id)
    el.classList.toggle("strike")
}
function deleteItem(id){
    let dl = document.getElementById(id)
    root.removeChild(dl)
}
function addTask(){
    
    let divEl = document.createElement("div");
    divEl.classList.add("d-flex","flex-row","justify-content-start",'pt-2',"w-50")
    let inputEl2 = inputEl.value;
    
        if (inputEl.value !== ""){
            inputEl.value=""
            count = count+1
            let checkbox = document.createElement('input');
            
            checkbox.type="checkbox"
            divEl.appendChild(checkbox)

            let taskItems = document.createElement('div')

            taskItems.classList.add("d-flex","flex-row","justify-content-between","task-item-bg","w-75","ml-3","pl-2")
            let pEl = document.createElement('p');
            pEl.id = "item"+count;

            pEl.textContent = inputEl2
            pEl.classList.add("m-0","mt-2")

            taskItems.appendChild(pEl)
        

            let btnEl = document.createElement('button');
            btnEl.classList.add("far","fa-trash-alt","delete-icon","btn")
            taskItems.appendChild(btnEl)
            divEl.id = "toggle"+count;

            divEl.appendChild(taskItems)

            checkbox.addEventListener("click",function(){
                textChange1(pEl.id)
            })
            btnEl.addEventListener("click",function(){
                deleteItem(divEl.id)
            })
            root.appendChild(divEl)
        }
    }

// let a = [1,2,3]
// let b = [4,5 ,...a]
// console.log(b)




// import React,{Component} from 'react';
// import './App.css';

// class App extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			languages : [
// 				{name: "Jvascript", votes: 0},
// 				{name: "Python", votes: 0},
// 				{name: "kotlin", votes: 0},
// 				{name: "Java", votes: 0}
// 			]
// 		}
// 	}

// 	vote (i) {
// 		let newLanguages = [...this.state.languages];
// 		newLanguages[i].votes++;
// 		function swap(array, i, j) {
// 			var temp = array[i];
// 			array[i] = array[j];
// 			array[j] = temp;
// 		}
// 		this.setState({languages: newLanguages});
		
// 	}

// 	render(){
// 		return(
// 			<>
// <h1>Vote Your Language!</h1>
// <div className="languages">
// 					{
// 						this.state.languages.map((lang, i) => 
// 		<div key={i} className="language">
// 		<div className="voteCount">
// 									{lang.votes}
// 								</div>
// <div className="languageName">
// 								{lang.name}
// 								</div>
// 								<button onClick={this.vote.bind(this, i)}>Click Here</button>
// 	</div>
// 	)}
// 	</div>
//         </>
// 	);
// 	}
// }
// export default App;