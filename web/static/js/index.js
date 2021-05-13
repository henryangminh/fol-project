function removeElement(e) {
    let button = e.target;
    let field = button.previousSibling;
    let div = button.parentElement;
    let div_parent = div.parentElement;
    
    div.removeChild(button);
    div.removeChild(field);
    div_parent.removeChild(div);
  }
  
  function add() {
    // let allElements = document.getElementById("reqs");
    // let reqs_id = allElements.getElementsByTagName("input").length;
    
    // reqs_id++;

    //create div
    let div = document.createElement('div');
    div.setAttribute('class', 'col-lg-12 input-group input-kb');
    
    //create textbox
    let input = document.createElement('input');
    input.type = "text";
    input.setAttribute("class", "form-control");
    input.setAttribute('style', 'width:80%');
    let reqs = document.getElementById("reqs");
    
    //create remove button
    let remove = document.createElement('button');
    remove.onclick = function(e) {
      removeElement(e);
    };
    remove.setAttribute("type", "button");
    remove.setAttribute("class", "btn btn-primary");
    remove.innerHTML = "Remove";
    
    //append elements
    div.appendChild(input);
    div.appendChild(remove);
    reqs.appendChild(div)
    // let br = document.createElement("br");
    // reqs.appendChild(br);
  }