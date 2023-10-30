let newSpot = document.getElementById('here2')
let navSpot = document.getElementById('here')
const hc = "<span class='highlightCode'>"
const hcClose = "</span>"
const h = "<span class='highlight'>"
const hClose = "</span>"

const data = [{
    title: "Git Branches",
    text: function () {
        return `    In order to create a ${h}branch${hClose}, go into your terminal and go into a git initiated file. Make sure you are on the ${h}main${hClose} branch by running 
    
        ${hc}🔺git branch🔺</span>
            
into the command line. Next, enter into your command line 
    
    ${hc}🔺git checkout -b (your branch name here)🔺</span>
  
You now have created your own branch and checked out to it, to checkout back to main, enter 

    ${hc}🔺git checkout main🔺</span>

into your command line. If you would like to ${h}delete${hClose} your branch, go into main branch and enter 
    
    ${hc}🔺git branch -d (branch name here)🔺</span>

for more information, <a href="https://www.atlassian.com/git/tutorials/using-branches">click here</a>`;
    }
},
{
    title: "Repo Setup",
    text: function(){
        return `        <h5>Adding a Git ignore file</h5>
        Like with all projects, we need to start by making a repository. Navigate to <span class="highlight">GitHub</span> and create a new repository for your project. Ensure that the option to add a <span class="highlight">README.md</span> file is checked.

        Once the repository has been created, clone it to your machine using <span class="highlight">git clone repository-name</span> and open the entire application in VS Code.
        
        At the root of the application, use VS Code or the command line to create a file named <span class="highlight">.gitignore.</span> This file will store a list of files or folders that may end up in the application but that we don't want to keep on GitHub.
        
        Add the following line to the newly created <span class="highlight">.gitignore file:${hClose}
        
                ${hc}🔺.DS_Store🔺${hcClose}

        The .DS_Store file is a file unique to macOS that the operating system automatically creates to internally store a directory's attributes, so Windows users have likely not encountered this before. This file has no bearing on the actual project code, so it's best to always add it to the .gitignore file to ensure that it never makes it to the actual GitHub repository.

        Now save your code, commit it, and push it to the main branch using the following commands:

                ${hc}🔺git add -A🔺${hcClose}
                ${hc}🔺git commit -m 'added gitignore file'🔺${hcClose}
                ${hc}🔺git push origin main🔺${hcClose}
        
        Great, now the application is ready for other developers! Before we add those developers, however, let's add some protective measures to the repo on GitHub.

        <h5>Protecting the Main Branch</h5>

        Navigate to the repository on GitHub and select the ${h}Settings${hClose} tab for the repo. Once there, look in the left column's menu and select the ${h}Branches${hClose} option. Then find the ${h}Add Rule button${hClose} in the main content on the right, and select it.

        After you select ${h}Add Rule${hClose}, a page titled ${h}"Branch protection rule"${hClose} will appear. On this page, we'll set up the repository so that no code can be pushed to the main branch by any member of the developer team. All code that is to be merged into the main branch MUST be merged through a GitHub pull request. Let's add the following to this page:

        For the ${h}"Branch name pattern"${hClose} input field, enter the branch ${h}main.${hClose}

        Next, check the box next to the option for ${h}"Require pull request reviews before merging".${hClose} It will open another set of options asking if we want multiple reviewers before allowing a pull request to be merged, but we can leave it at just one for now.

        Finally, select the option to ${h}"Include administrators".${hClose} This way, even the repository owner cannot push to main and has to follow all of the same rules as the rest of the developers.

        Confirm that the correct rules are in place by comparing with the following image:
        
        <img src="../pictures/03-branch-rules-done.png " width=100%>
        
        Make sure to select the ${h}Create button${hClose} at the bottom of the page. The page will refresh and inform us that the rules have been created.
        
        <h5>Add Collaborators to the Repository</h5>
        
        In the GitHub repository's ${h}Settings${hClose} page, select ${h}Manage Access${hClose} from the menu on the left side.
        
        Once the modal dialog opens, start typing in the GitHub username of one of your collaborators, and the list should automatically populate that user's entry. The page should resemble the following image:
        
        <img src="../pictures/05-invite-collaborator.png " width=100%>
        
        Select the entry and click the ${h}"Add <github-username> to <project-repo-name>"${hClose} button.
        
        Now the user will need to accept the invitation to contribute to the repository. The owner of the repository can also select the small clipboard icon next to the Pending Invite note, copy the invite link, and send it to the collaborator directly.

        This will only handle one collaborator, so repeat this process for every collaborator on the project.

        Once all of the collaborators have accepted the invite, it's time to get coding!`
    }
},
{
    title: "Git Collaboration",
    text: function(){
        return `The following order of instructions is the correct work flow for collaborating with others on the same project:
        
        <h5>Create New Branch and add/commit/push Changes</h5>

        Once the project is cloned down and you now have access to it, you won't be able to work directly through the main branch. You will now need to ${h}create a new branch${hClose} and enter in your work here.
        
        ${hc}🔺git checkout -b branch-name-here🔺${hcClose}
        
        Here you will add content and commit them. Next you will ${h}push to the BRANCH YOU WORKED IN${hClose}, not the main. After pushing these changes you should see the following code in your terminal:

        Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
        remote:
        remote: Create a pull request for 'super_feature' on GitHub by visiting:
        remote:     https://github.com/lernantino/super-team-project/pull/new/super_feature
        remote:
        To https://github.com/lernantino/super-team-project.git
        * [new branch]     super_feature -> super_feature

        <h5>Open Pull Request</h5>

        Now go into github and create the ${h}pull request.${hClose} If one does not automatically pop up, it is because the branch is already recognized by the repository and you must create one by going to the Pull requests tab and comparing the name of the branch to the main branch. But for now, since this is a new branch your github should look like this:

        <img src="../pictures/02-compare-button.png" width=100%>

        Select the ${h}"Create pull request"${hClose} button so that it can be reviewed, as shown in the following image:

        <img src="../pictures/03-create-pull-request.png" width=100%>

        <h5>Review Pull Request</h5>

        Earlier, we created a rule that requires developers to open a pull request and have that pull request reviewed before merging a branch with main, as shown in the following image:

        <img src="../pictures/04-pr-created.png" width=100%>

        Now these must be reviewed, accepted, and merged by your collaborators. As long as there is no ${h}merge conflict${hClose} and the content is approved, either you or your collaborators can merge the branch into main.

        For more information on solving ${h}merge conflicts${hClose}, refer to this video:

        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mOJazBNrG-c?si=EWjNPXbVQCcXegF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>




        `
    }
}
]

document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < data.length; i++) {
        let newNav = document.createElement('a')
        let newElement = document.createElement('div');
        newNav.innerHTML = `<a class="navs" href="#${data[i].title}"><button class="navButtons">${data[i].title}</button></a>`;
        newElement.innerHTML = `<div id="${data[i].title}" class="box">
       <h5 class="m-3 title">${data[i].title}</h5>
       <p class="text font-weight-bold">${data[i].text()}</p>
     </div>`;
        navSpot.appendChild(newNav)
        newSpot.appendChild(newElement);
    }
})
// testing comment







