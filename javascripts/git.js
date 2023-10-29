let newSpot = document.getElementById('here2')
let navSpot = document.getElementById('here')

const data = [{
    title: "Git Branches",
    text: function () {
        return `    In order to create a branch, go into your terminal and go into a git initiated file. Make sure you are on the main branch by running 
    
        <span class = "highlight">🔷git branch🔷</span>
            
into the command line. Next, enter into your command line 
    
    <span class = "highlight">🔷git checkout -b (your branch name here)🔷</span>
  
You now have created your own branch and checked out to it, to checkout back to main, enter 

    <span class = "highlight">🔷git checkout main🔷</span>

into your command line. If you would like to delete your branch, go into main branch and enter 
    
    <span class = "highlight">🔷git branch -d (branch name here)🔷</span>

for more information, <a href="https://www.atlassian.com/git/tutorials/using-branches">click here</a>`;
    }
},
{
    title: "Git Forking",
    text: function(){
        return 'testing again'
    }
}
]

document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < data.length; i++) {
        let newNav = document.createElement('a')
        let newElement = document.createElement('div');
        newNav.innerHTML = `<a class="nav-link ms-3 my-1" href="#item-1-${i}">${data[i].title}</a>`;
        newElement.innerHTML = `<div id="item-1-${i}" class="box">
       <h5 class="m-3 text-primary title">${data[i].title}</h5>
       <p class="text font-weight-bold">${data[i].text()}</p>
     </div>`;
        navSpot.appendChild(newNav)
        newSpot.appendChild(newElement);
    }
})
// testing comment







