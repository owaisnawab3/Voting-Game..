// array = ['Owais Nawab','Sameer Nawab','Raza Islam','Rimshaa']
// let input = document.querySelector("input")
// let addFriend = document.querySelector("btn")
// let all = document.querySelector("name")
// let user = document.querySelector("name2")

// function add(){
    
// }



 // Step 1: Create an array of people's names
 var myArray = [];

 // Step 2: Select page elements as JavaScript objects
 var friendNameInput = document.getElementById('friendName');
 var addFriendButton = document.getElementById('addFriend');
 var friendListTable = document.getElementById('friendList');

 // Step 3: Add event listener to the "Add Friend" button
 addFriendButton.addEventListener('click', function() {
     var newFriendName = friendNameInput.value;
     if (newFriendName) {
         myArray.push(newFriendName);
         buildPageContent();
         friendNameInput.value = '';
     }
 });

 // Step 4: Build content on the page using forEach()
 function buildPageContent() {
     friendListTable.innerHTML = ''; // Clear the existing content
     myArray.forEach(function(friend, index) {
         createTableRow(index + 1, friend, 0);
     });
 }

 // Step 5: Create a main function to create the page elements
 function createTableRow(serial, name, votes) {
     var row = document.createElement('tr');
     var serialCell = document.createElement('td');
     serialCell.textContent = serial;
     var nameCell = document.createElement('td');
     nameCell.textContent = name;
     var voteCell = document.createElement('td');
     voteCell.textContent = votes;
     row.appendChild(serialCell);
     row.appendChild(nameCell);
     row.appendChild(voteCell);
     friendListTable.appendChild(row);

     // Step 7: Add an event listener to increase vote counter
     row.addEventListener('click', function() {
         var currentVotes = parseInt(voteCell.textContent);
         currentVotes += 1;
         voteCell.textContent = currentVotes;
     });
 }

 // Initial page content
 buildPageContent();