
const toggle = ()=>{
    var btns = document.querySelectorAll('.side-list')
    btns.forEach((btn, index) =>{
        if(btn.onclick){
            return
        }
        btn.onclick = (e)=>{
            e.composedPath()[0].classList.add('selected');
            prevDom.classList.remove('selected');
            prevDom = e.composedPath()[0];
            i = index;
            Dom.displayTasks()
        }
    })
}

var proObj = {};
var projects = ['Inbox','Today','Week'];

var inb = document.getElementById('inb')

let prevDom = inb;


var i = 0;
toggle();
proObj[projects[i]] = []

const ToDos = (()=>{
    const listener = ()=>{
        var btn = document.getElementById('task-btn');
        btn.addEventListener('click', Dom.taskForm)
        var prbtn = document.getElementById('pr-btn');
        prbtn.addEventListener('click', Dom.prForm)

    }
    //Todo factory
    const toDos = (name, date)=>{
        return {name, date}
    }
    //function to make todo
    const addTodo = (name, date)=>{
        var task = toDos(name, date);
        console.log(proObj[projects[i]]);
        proObj[projects[i]].push(task)
        Dom.displayTasks();
    }

    const createTodo = ()=>{
        var name = document.getElementById('name').value;
        var date = document.getElementById('date').value;
        if(name == "" || date == ""){
            alert('Fields cannot be empty')
            return
        }
        addTodo(name, date);
    }
    
    const dltListener = ()=>{
        var btns = document.querySelectorAll('.radio');
        if(!btns){
            return
        }
        btns.forEach((btn, index)=>{
            btn.addEventListener('click', (e)=>{
                deleteToDo(index)
            })
        })
    }

    const deleteToDo = (index)=>{
        proObj[projects[i]].splice(index, 1)
        Dom.displayTasks()
    }

    const addProject = ()=>{
        var name = document.getElementById('pr-name').value;
        projects.push(name);
        proObj[projects[projects.length-1]] = [];
        Dom.displayProjects()
    }

    return { addTodo, listener , createTodo, dltListener, deleteToDo, addProject}
})();

const Dom = (()=>{
    var listContainer = document.getElementById('task')

    const displayTasks = ()=>{
        var taskBtn = document.getElementById('task-btn')
        if(i == 1 || i == 2){
            taskBtn.classList.add('disable');
        }else{
            taskBtn.classList.remove('disable');
        }
        listContainer.innerHTML = "";
        var project = proObj[projects[i]];
        if(!project){
            return
        }
        project.forEach(task=>{
            var p = document.createElement('p');
            var span = document.createElement('span');
            var btn = document.createElement('button')
            var li = document.createElement('li');
            p.innerHTML = task.name;
            span.innerHTML = task.date;
            btn.classList.add('radio');
            li.appendChild(btn);
            li.appendChild(p);
            li.appendChild(span);
            listContainer.appendChild(li)
        })
        setItems(proObj, projects, i);
        ToDos.dltListener()
    }

    const taskForm = ()=>{
        var div = document.createElement('div');
        div.classList.add('task-form');
        var name = document.createElement('input')
        var date = document.createElement('input');
        var btn = document.createElement('button');
        btn.addEventListener('click', ToDos.createTodo);
        btn.innerHTML = "Add"
        name.setAttribute('type', 'text');
        date.setAttribute('type', 'date');
        name.setAttribute('id', 'name');
        date.setAttribute('id', 'date');

        div.appendChild(name);
        div.appendChild(date)
        div.appendChild(btn)
        listContainer.appendChild(div);
        
    }

    const prForm = ()=>{
        var div = document.createElement('div');
        var container = document.getElementById('projects')
        div.classList.add('pr-form');
        var name = document.createElement('input');
        name.setAttribute('type', 'text');
        name.setAttribute('id', 'pr-name');
        var btn = document.createElement('button');
        btn.addEventListener('click', ToDos.addProject);
        btn.innerHTML = "Add"
        div.appendChild(name);
        div.appendChild(btn)

        container.appendChild(div)

    }

    const displayProjects = ()=>{

        var container = document.getElementById('projects')
        container.innerHTML = ""
        var li = document.createElement('li');
        projects.forEach((pr, index)=>{
            if(index <= 2){
                return
            }
            var li = document.createElement('li');
            li.classList.add('side-list')
            li.innerHTML = pr;
            container.appendChild(li)
        })
        toggle()


    }


    return { displayTasks, taskForm, displayProjects, prForm }
})();

ToDos.listener()

export { proObj }



