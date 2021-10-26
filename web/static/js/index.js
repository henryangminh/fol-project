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
    input.setAttribute('id', "knowledge-base-field");
    let reqs = document.getElementById("reqs");

    //create remove button
    let remove = document.createElement('button');
    remove.onclick = function (e) {
        removeElement(e);
    };
    remove.setAttribute("type", "button");
    remove.setAttribute("class", "btn btn-primary");
    remove.innerHTML = "Remove";

    //append elements
    div.appendChild(input);
    div.appendChild(remove);
    reqs.appendChild(div);
    // let br = document.createElement("br");
    // reqs.appendChild(br);
}

function get_all_knowledge_base() {
    knowledge_base_list = [];
    let allElements = document.querySelectorAll('[id=knowledge-base-field]');
    allElements.forEach(e => {
        if (e.value != '') {
            knowledge_base_list.push(e.value)
        }
    });
    return knowledge_base_list;
}

$(document).ready(function () {
    $("#prove-btn").click(function () {
        // var knowledge_base = get_all_knowledge_base();
        // var proof = document.getElementById("proves").value;
        // console.log(knowledge_base)
        // $.ajax({
        //     type: 'GET',
        //     url: "/resolution",
        //     contentType: 'application/json;charset=UTF-8',
        //     data: { "data": JSON.stringify(knowledge_base), "proof": proof },
        //     success: function (response) {
        //         console.log(response)
        //         var div = document.getElementById('resolution-rs');
        //         div.innerHTML = '';
        //         response.forEach(
        //             r => {
        //                 if (r != "") {
        //                     let pre = document.createElement('pre');
        //                     pre.innerText = r;
        //                     div.appendChild(pre);
        //                 }
        //             }
        //         )
        //     }
        // })
        var proof = document.getElementById("proves").value
        let reqs = ""
        let txtReqs = document.querySelectorAll('[id=txtReqs]');
        txtReqs.forEach(e => {
            if (e.value != '') {
                reqs = e.value
            }
        })
        $('#txtCal').show();
        $.ajax({
            type: 'GET',
            url: "/resolution",
            contentType: 'application/json;charset=UTF-8',
            data: { "data": JSON.stringify(reqs), "proof": proof },
            success: function (response) {
                console.log(response)
                $('#txtCal').hide();
                var div = document.getElementById('resolution-rs');
                div.innerHTML = '';
                response.forEach(
                    r => {
                        if (r != "") {
                            let pre = document.createElement('pre');
                            pre.innerText = r;
                            div.appendChild(pre);
                        }
                    }
                )
            },
        })
    });

    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });
}
)