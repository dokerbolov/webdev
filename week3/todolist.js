// Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) 
    {
        var span = document.createElement("IMG");
        span.setAttribute("src","https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png");
        span.setAttribute("width","15px");
        span.setAttribute("align","right");
        span.className = "close";
        document.body.appendChild(span);
        myNodelist[i].appendChild(span);
    }    
// Click on a close button to hide the current list item

        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) 
        {
            close[i].onclick = function() 
            {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

    // function DeleteAll()
    // {
    //     var close = document.getElementsByClassName("close");
    //     var i;
    //     for (i = 0; i < close.length; i++)
    //     {
    //         close[i].parentElement.style.display = "none";
    //     }
    // }
// Create a new list item when clicking on the "Add" button
    function newElement() 
    {
        var li = document.createElement("li");
        var checkbox = document.createElement("input")
        checkbox.type="checkbox";
        checkbox.setAttribute('id','check')
        document.body.appendChild(checkbox);
        li.appendChild(checkbox);
        var inputValue = document.getElementById("myInput").value;
        var label = document.createElement("LABEL");
        label.innerHTML = inputValue;
        li.appendChild(label);
        if (inputValue === '') 
        {
             alert("You must write something!");
        } 
        else 
        {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("IMG");
        span.setAttribute("src","https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png");
        span.setAttribute("width","15px");
        span.setAttribute("align","right");
        span.className = "close";
        document.body.appendChild(span);
        li.appendChild(span);
        
        for (i = 0; i < close.length; i++) 
        {
            close[i].onclick = function() 
            {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }