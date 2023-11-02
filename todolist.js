


function addTask()
{
   
    event.preventDefault()
    const Input = document.getElementById("input").value;
    const st = document.getElementById("st");
    if(Input == "")
    {
        alert("Du kannst keine leeren Task schreiben")
    }
    else
    {
        //DIV
        const div = document.createElement("div");

        //LI und TEXT
        const li = document.createElement("li");
        const text = document.createTextNode(Input);

        //BTNy
        const delete_btn = document.createElement("button");
        delete_btn.setAttribute('class', 'deletebtn')
        delete_btn.setAttribute('onclick', "deleteFunction(this.parentNode)"); //ParentNode von W3schools
        const btnText= document.createTextNode("Delete");
        delete_btn.append(btnText);
        
        
        //Um die beiden in einer Zeile zu setzten
        li.style.display = "inline-block";
        delete_btn.style.display = "inline-block";

        //Append
        li.append(text);
        div.append(li);
        div.append(delete_btn);
        st.append(div);

        //Das input-feld leeren
        document.getElementById("input").value = '';
    }
    
}

function deleteFunction(parentDiv) 
{
    //Löscht die gesamte Zeile also die li und der button
  parentDiv.remove();
}





