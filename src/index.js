
const toggle = ()=>{
    var btns = document.querySelectorAll('.side-list');
    btns.forEach((btn, i)=>{
        if(btn.onclick){
            return
        }
        btn.onclick = (e)=>{
            if(e.composedPath()[0].classList.contains('selected') && prevTab.classList.contains('selected')){
                return
            }
            if(e.composedPath()[0].classList.contains('selected')){
                return
            }
            e.composedPath()[0].classList.add('selected');
            prevTab.classList.remove('selected');
            prevTab = e.composedPath()[0];
            tabIndex = i;
            i > 2 ? pr = true : pr = false;
            Dom.displayTasks()
            var title = document.getElementById('title')
            title.innerHTML = tabs[tabIndex];

        }
    })
}
var pr = false
var tabs = ['Inbox','Today','This week']
prevTab = document.getElementById('inb');
var tabIndex = 0;
toggle()
var projects = [];

var proObj = {};
proObj[tabs[tabIndex]] = [];
proObj['Today'] = [];

if(localStorage){

    for(x in localStorage){
        if(typeof localStorage[x] != "string")
        continue
        var data = JSON.parse(localStorage[x])
        proObj[x] = data;
        if(x != 'Inbox'){
            projects.push(x)
            tabs.push(x)
        }
        
    }
}
console.log(projects);

const Todo = (()=>{

    const Listeners = ()=>{
        var taskBtn = document.getElementById('task-btn');
        taskBtn.onclick = Dom.taskForm;
        var proBtn = document.getElementById('pro-btn')
        proBtn.onclick = Dom.proForm;
    }

    const addTask = ()=>{
        var name = document.getElementById('task-name').value;
        var date = document.getElementById('task-date').value;
        var task = createTask(name, date);
        
        proObj[tabs[tabIndex]].push(task);
        store()
        Dom.displayTasks()
    }

    const createTask = (name, date)=>{
        return {name, date}
    }

    const store = ()=>{
        localStorage.setItem(tabs[tabIndex],  JSON.stringify(proObj[tabs[tabIndex]]))
    }

    const addProject = ()=>{
        var name = document.getElementById('pr-name').value;
        proObj[name] = [];
        tabs.push(name);
        projects.push(name);
        localStorage.setItem(name,  JSON.stringify(proObj[name]))
        console.log(proObj);
        Dom.displayPr()
    }

    const dltTaskListner = ()=>{
        var btns = document.querySelectorAll('.radio')
        btns.forEach((btn, index)=>{
            if(btn.onclick){
                return
            }

            btn.onclick = ()=>{
                proObj[tabs[tabIndex]].splice(index, 1)
                store()
                Dom.displayTasks()
            }

        })
    }

    const dltPr = ()=>{
        var btns = document.querySelectorAll('.dlt-pr')
        btns.forEach((btn, index)=>{
            if(btn.onclick){
                return
            }
            btn.onclick = ()=>{
                var dlt = projects.splice(index,1)
                delete proObj[dlt]
                localStorage.removeItem(dlt)
                console.log(proObj);
                Dom.displayPr()
            }
        })
    }
    return {addTask, dltTaskListner, Listeners, addProject, dltPr}
})()


const Dom = (()=>{
    const taskForm = ()=>{
        var container = document.getElementById('task');
        var div = document.createElement('div');
        var name = document.createElement('input');
        name.setAttribute('id', 'task-name')
        name.required = true;
        var date = document.createElement('input');
        date.setAttribute('id', 'task-date')
        date.setAttribute('type', 'date');
        date.required = true;
        var btn = document.createElement('button');
        btn.onclick = Todo.addTask
        btn.innerHTML = "Add";
        div.append(name, date, btn);
        container.appendChild(div)
    }

    const proForm = ()=>{
        var container = document.getElementById('projects')
        var name = document.createElement('input');
        var btn = document.createElement('button')
        name.setAttribute('id', 'pr-name')
        btn.innerHTML = "Add"
        btn.onclick = Todo.addProject
        var div = document.createElement('div')
        div.append(name, btn);
        container.appendChild(div)
    }

    const  displayPr = ()=>{
        var container = document.getElementById('projects')
        container.innerHTML = ""
        projects.forEach(project=>{
            var li = document.createElement('li')
            li.innerHTML = project;
            li.classList.add('side-list')
            var btn = document.createElement('button');
            btn.innerHTML = "X";
            btn.classList.add('dlt-pr')
            li.appendChild(btn)
            container.appendChild(li);
        })
        toggle()
        Todo.dltPr()
    }

    const displayTasks = ()=>{
        var datas = proObj[tabs[tabIndex]];
        if(!datas)
        return
        var container = document.getElementById('task')
        container.innerHTML = ""
        datas.forEach(data=>{
            
            var btn = document.createElement('button')
            var p = document.createElement('p')
            var span = document.createElement('span')
            var li = document.createElement('li')
            p.innerHTML = data.name
            span.innerHTML = data.date
            btn.classList.add('radio')
            li.append(btn, p ,span)
            container.appendChild(li)
        })
        Todo.dltTaskListner()

    }
    return {taskForm, displayTasks, proForm, displayPr}
})();


Todo.Listeners()
Dom.displayPr()
Dom.displayTasks()

