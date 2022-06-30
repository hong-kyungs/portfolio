const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e)=>{
    if(!istxt("userid", 5)) e.preventDefault();

    if(!istxt("comments", 20)) e.preventDefault();

    if(!isEmail("email")) e.preventDefault();

    if(!isCheck("gender")) e.preventDefault();

    if(!isCheck("streaming")) e.preventDefault();

    if(!isSelect("edu")) e.preventDefault();

    if(!isPwd("pwd1", "pwd2", 7)) e.preventDefault();
});

function istxt(name, len){
    if(len == undefined) len = 5;

    let input = form.querySelector(`[name=${name}]`);
    let txt = input.value;

    if(txt.length >= len){
        const errMsg_is = input.closest("td").querySelectorAll("p");
        if(errMsg_is.length > 0) input.closest("td").querySelector("p").remove();
        return true;
    } else {
        const errMsg_is = input.closest("td").querySelectorAll("p");
        if(errMsg_is.length > 0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append(`입력항목을 ${len}글자 이상 입력하세요.`);
        input.closest('td').append(errMsg);
        return false;
    }
}

function isEmail(name){
    let input =  form.querySelector(`[name=${name}]`);
    let txt = input.value;

    if(/@/.test(txt)){
        const errMsg_is = input.closest('td').querySelectorAll("p");
        if(errMsg_is.length > 0) input.closest("td").querySelector("p").remove();

        return true;
    } else {
        const errMsg_is = input.closest('td').querySelectorAll("p");
        if(errMsg_is.length > 0) input.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("@를 포함한 전체메일을 입력하세요.");
        input.closest('td').append(errMsg);

        return false;
    }
}

function isCheck(name){
    let inputs = form.querySelectorAll(`[name=${name}]`);
    let isCheck = false;

    for(let el of inputs){
        if(el.checked) isCheck = true;
    }

    if(isCheck){
        const errMsg_is = inputs[0].closest("td").querySelectorAll("p");
        if(errMsg_is.length > 0) inputs[0].closest("td").querySelector('p').remove();

        return true;
    } else {
        const errMsg_is = inputs[0].closest("td").querySelectorAll("p");
        if(errMsg_is.length > 0) inputs[0].closest("td").querySelector('p').remove();

        const errMsg = document.createElement("p");
        errMsg.append("필수 입력항목입니다. 체크해주세요.");
        inputs[0].closest("td").append(errMsg);
        return false;
    }
}

function isSelect(name){
    let sel = form.querySelector(`[name=${name}]`);
    let sel_index = sel.options.selectedIndex;
    let val = sel[sel_index].value;

    if(val != ""){
        const errMsg_is = sel.closest("td").querySelectorAll("p");
        if(errMsg_is.length > 0) sel.closest("td").querySelector("p").remove();

        return true;
    } else {
        const errMsg_is = sel.closest("td").querySelectorAll("p");
        if(errMsg_is.length > 0) sel.closest("td").querySelector("p").remove();

        const errMsg = document.createElement("p");
        errMsg.append("항목을 선택해주세요.");
        sel.closest("td").append(errMsg);
        return false;
    }
}

function isPwd(name1, name2, len){
    let pwd1 = form.querySelector(`[name=${name1}]`);
    let pwd2 = form.querySelector(`[name=${name2}]`);
    let pwd1_val = pwd1.value;
    let pwd2_val = pwd2.value;

    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[~!@#$%^&*()_+?><]/;

    if(pwd1_val === pwd2_val &&
        pwd1_val.length >= len &&
        num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)){
            const errMsg_is = pwd1.closest("td").querySelectorAll("p");
            if(errMsg_is.length > 0) pwd1.closest('td').querySelector("p").remove();

            return true;
        } else {
            const errMsg_is = pwd1.closest("td").querySelectorAll("p");
            if(errMsg_is.length > 0) pwd1.closest('td').querySelector("p").remove();

            const errMsg = document.createElement("p");
            errMsg.append(`비밀번호는 ${len}글자 이상, 숫자, 영문자, 특수문자를 포함하여 입력하세요.`);
            pwd1.closest('td').append(errMsg);

            return false;
        }
}