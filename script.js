const formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

const formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];

function dynForm (formDef) {

    let body = document.body;
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
    body.appendChild(form);

    for(let i=0; i<formDef.length; i++) {
        
        let label, input, combo, option, span, textarea, submit, 
            optionText, inputRadio, radioText, br;

        if ("label" in formDef[i]) {
            label = document.createElement("label");
            let labelText = document.createTextNode(formDef[i].label);
            label.appendChild(labelText);
            form.appendChild(label);
            if (formDef[i].kind === 'memo') {
                br = document.createElement("br");
                label.appendChild(br);
            }
        }

        switch (formDef[i].kind) {
            case 'longtext' :
                input = document.createElement("input");
                label.appendChild(input);
                input.setAttribute("name", formDef[i].name);
                input.setAttribute("type", "text");
                input.className = "longtext";
                break;
            case 'shorttext' :
                input = document.createElement("input");
                label.appendChild(input);
                input.setAttribute("name", formDef[i].name);
                input.setAttribute("type", "email");
                input.className = "shorttext";
                break;
            case 'number' :
                input = document.createElement("input");
                label.appendChild(input);
                input.setAttribute("name", formDef[i].name);
                input.setAttribute("type", formDef[i].kind);
                input.className = "number";
                break;            
            case 'combo' : 
                combo = document.createElement("select");
                label.appendChild(combo);
                combo.className = "combo";
                break;
            case 'radio' : 
                span = document.createElement("span");
                label.appendChild(span);
                span.className = "radio";
                break;
            case 'check' :
                input = document.createElement("input");
                label.appendChild(input);
                input.setAttribute("name", formDef[i].name);
                input.setAttribute("type", "checkbox");
                input.setAttribute("checked", "");
                input.className = "check";
                break;
            case 'memo' :
                textarea = document.createElement("textarea");
                label.appendChild(textarea);
                textarea.setAttribute("name", formDef[i].name);
                textarea.className = "memo";
                break;
            case 'submit' :
                submit = document.createElement("input");
                form.appendChild(submit);
                submit.setAttribute("value", formDef[i].caption);
                submit.setAttribute("type", formDef[i].kind);
                break;
        }

        if ("variants" in formDef[i]) {
            if (formDef[i].kind === 'combo') {
              let arr = formDef[i].variants;
              for (let elem of arr) {
                option = document.createElement("option");
                combo.appendChild(option);
                option.setAttribute("value", elem.value);
                optionText = document.createTextNode(elem.text);
                option.appendChild(optionText);
              }
            combo.lastChild.setAttribute("selected", "");
            }
            if (formDef[i].kind === 'radio') {
              let arr = formDef[i].variants;
              for (let elem of arr) {
                inputRadio = document.createElement("input");
                span.appendChild(inputRadio);
                inputRadio.setAttribute("value", elem.value);
                inputRadio.setAttribute("name", elem.name);
                inputRadio.setAttribute("type", "radio");
                if (elem.text === "платное") {
                  inputRadio.setAttribute("checked", "");
                }
                radioText = document.createTextNode(elem.text);
                span.appendChild(radioText);
              }
            }
        }

        for(let i=0; i<=1; i++) {
            br = document.createElement("br");
            form.appendChild(br);
        }

    }
}


dynForm (formDef1);

let body = document.body;
for(let i=0; i<=2; i++) {
  let br = document.createElement("br");
  body.appendChild(br);
}

dynForm (formDef2);
