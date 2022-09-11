/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB0b2dnbGUgPSAoKT0+e1xyXG4gICAgdmFyIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1saXN0Jyk7XHJcbiAgICBidG5zLmZvckVhY2goKGJ0biwgaSk9PntcclxuICAgICAgICBpZihidG4ub25jbGljayl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4ub25jbGljayA9IChlKT0+e1xyXG4gICAgICAgICAgICBpZihlLmNvbXBvc2VkUGF0aCgpWzBdLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSAmJiBwcmV2VGFiLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihlLmNvbXBvc2VkUGF0aCgpWzBdLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlLmNvbXBvc2VkUGF0aCgpWzBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHByZXZUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcHJldlRhYiA9IGUuY29tcG9zZWRQYXRoKClbMF07XHJcbiAgICAgICAgICAgIHRhYkluZGV4ID0gaTtcclxuICAgICAgICAgICAgaSA+IDIgPyBwciA9IHRydWUgOiBwciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBEb20uZGlzcGxheVRhc2tzKClcclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGFic1t0YWJJbmRleF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxudmFyIHByID0gZmFsc2VcclxudmFyIHRhYnMgPSBbJ0luYm94JywnVG9kYXknLCdUaGlzIHdlZWsnXVxyXG5wcmV2VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYicpO1xyXG52YXIgdGFiSW5kZXggPSAwO1xyXG50b2dnbGUoKVxyXG52YXIgcHJvamVjdHMgPSBbXTtcclxuXHJcbnZhciBwcm9PYmogPSB7fTtcclxucHJvT2JqW3RhYnNbdGFiSW5kZXhdXSA9IFtdO1xyXG5wcm9PYmpbJ1RvZGF5J10gPSBbXTtcclxuXHJcbmlmKGxvY2FsU3RvcmFnZSl7XHJcblxyXG4gICAgZm9yKHggaW4gbG9jYWxTdG9yYWdlKXtcclxuICAgICAgICBpZih0eXBlb2YgbG9jYWxTdG9yYWdlW3hdICE9IFwic3RyaW5nXCIpXHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW3hdKVxyXG4gICAgICAgIHByb09ialt4XSA9IGRhdGE7XHJcbiAgICAgICAgaWYoeCAhPSAnSW5ib3gnKXtcclxuICAgICAgICAgICAgcHJvamVjdHMucHVzaCh4KVxyXG4gICAgICAgICAgICB0YWJzLnB1c2goeClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG5cclxuY29uc3QgVG9kbyA9ICgoKT0+e1xyXG5cclxuICAgIGNvbnN0IExpc3RlbmVycyA9ICgpPT57XHJcbiAgICAgICAgdmFyIHRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1idG4nKTtcclxuICAgICAgICB0YXNrQnRuLm9uY2xpY2sgPSBEb20udGFza0Zvcm07XHJcbiAgICAgICAgdmFyIHByb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm8tYnRuJylcclxuICAgICAgICBwcm9CdG4ub25jbGljayA9IERvbS5wcm9Gb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKT0+e1xyXG4gICAgICAgIHZhciBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpLnZhbHVlO1xyXG4gICAgICAgIHZhciBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpLnZhbHVlO1xyXG4gICAgICAgIHZhciB0YXNrID0gY3JlYXRlVGFzayhuYW1lLCBkYXRlKTtcclxuICAgICAgICBcclxuICAgICAgICBwcm9PYmpbdGFic1t0YWJJbmRleF1dLnB1c2godGFzayk7XHJcbiAgICAgICAgc3RvcmUoKVxyXG4gICAgICAgIERvbS5kaXNwbGF5VGFza3MoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAobmFtZSwgZGF0ZSk9PntcclxuICAgICAgICByZXR1cm4ge25hbWUsIGRhdGV9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSAoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhYnNbdGFiSW5kZXhdLCAgSlNPTi5zdHJpbmdpZnkocHJvT2JqW3RhYnNbdGFiSW5kZXhdXSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpPT57XHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHItbmFtZScpLnZhbHVlO1xyXG4gICAgICAgIHByb09ialtuYW1lXSA9IFtdO1xyXG4gICAgICAgIHRhYnMucHVzaChuYW1lKTtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsICBKU09OLnN0cmluZ2lmeShwcm9PYmpbbmFtZV0pKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb09iaik7XHJcbiAgICAgICAgRG9tLmRpc3BsYXlQcigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGx0VGFza0xpc3RuZXIgPSAoKT0+e1xyXG4gICAgICAgIHZhciBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvJylcclxuICAgICAgICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGlmKGJ0bi5vbmNsaWNrKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidG4ub25jbGljayA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICBwcm9PYmpbdGFic1t0YWJJbmRleF1dLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgIHN0b3JlKClcclxuICAgICAgICAgICAgICAgIERvbS5kaXNwbGF5VGFza3MoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGx0UHIgPSAoKT0+e1xyXG4gICAgICAgIHZhciBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRsdC1wcicpXHJcbiAgICAgICAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBpZihidG4ub25jbGljayl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidG4ub25jbGljayA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgZGx0ID0gcHJvamVjdHMuc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvT2JqW2RsdF1cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRsdClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb09iaik7XHJcbiAgICAgICAgICAgICAgICBEb20uZGlzcGxheVByKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2FkZFRhc2ssIGRsdFRhc2tMaXN0bmVyLCBMaXN0ZW5lcnMsIGFkZFByb2plY3QsIGRsdFByfVxyXG59KSgpXHJcblxyXG5cclxuY29uc3QgRG9tID0gKCgpPT57XHJcbiAgICBjb25zdCB0YXNrRm9ybSA9ICgpPT57XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJyk7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZhciBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1uYW1lJylcclxuICAgICAgICBuYW1lLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGF0ZScpXHJcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgIGRhdGUucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG4ub25jbGljayA9IFRvZG8uYWRkVGFza1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkFkZFwiO1xyXG4gICAgICAgIGRpdi5hcHBlbmQobmFtZSwgZGF0ZSwgYnRuKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb0Zvcm0gPSAoKT0+e1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxyXG4gICAgICAgIHZhciBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncHItbmFtZScpXHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiQWRkXCJcclxuICAgICAgICBidG4ub25jbGljayA9IFRvZG8uYWRkUHJvamVjdFxyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdi5hcHBlbmQobmFtZSwgYnRuKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0ICBkaXNwbGF5UHIgPSAoKT0+e1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XHJcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gcHJvamVjdDtcclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnc2lkZS1saXN0JylcclxuICAgICAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJYXCI7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdkbHQtcHInKVxyXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0b2dnbGUoKVxyXG4gICAgICAgIFRvZG8uZGx0UHIoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpPT57XHJcbiAgICAgICAgdmFyIGRhdGFzID0gcHJvT2JqW3RhYnNbdGFiSW5kZXhdXTtcclxuICAgICAgICBpZighZGF0YXMpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJylcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIGRhdGFzLmZvckVhY2goZGF0YT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkYXRhLm5hbWVcclxuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBkYXRhLmRhdGVcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcclxuICAgICAgICAgICAgbGkuYXBwZW5kKGJ0biwgcCAsc3BhbilcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgVG9kby5kbHRUYXNrTGlzdG5lcigpXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt0YXNrRm9ybSwgZGlzcGxheVRhc2tzLCBwcm9Gb3JtLCBkaXNwbGF5UHJ9XHJcbn0pKCk7XHJcblxyXG5cclxuVG9kby5MaXN0ZW5lcnMoKVxyXG5Eb20uZGlzcGxheVByKClcclxuRG9tLmRpc3BsYXlUYXNrcygpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=