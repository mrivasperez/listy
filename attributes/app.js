// Get input element
let filterInput = document.getElementById('filterInput');

//Add an event listener to input element
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //get value of input
    let filterValue = 
    document.getElementById('filterInput').value.toUpperCase();
    
    //get names ul
    let ul = document.getElementById('names');

    //get lis from ul and get them into an array
    let li = ul.querySelectorAll('li.collection-item');

    //loop through collection-item li array
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }

    }

}