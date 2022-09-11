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
            if(i > 0 && i < 3 ){
                document.getElementById('task-btn').classList.add('disable')
            }else{
                document.getElementById('task-btn').classList.remove('disable')
            }

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
proObj['This week'] = [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHRvZ2dsZSA9ICgpPT57XHJcbiAgICB2YXIgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWxpc3QnKTtcclxuICAgIGJ0bnMuZm9yRWFjaCgoYnRuLCBpKT0+e1xyXG4gICAgICAgIGlmKGJ0bi5vbmNsaWNrKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKGUpPT57XHJcbiAgICAgICAgICAgIGlmKGUuY29tcG9zZWRQYXRoKClbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpICYmIHByZXZUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGUuY29tcG9zZWRQYXRoKClbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGUuY29tcG9zZWRQYXRoKClbMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcHJldlRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBwcmV2VGFiID0gZS5jb21wb3NlZFBhdGgoKVswXTtcclxuICAgICAgICAgICAgdGFiSW5kZXggPSBpO1xyXG4gICAgICAgICAgICBpID4gMiA/IHByID0gdHJ1ZSA6IHByID0gZmFsc2U7XHJcbiAgICAgICAgICAgIERvbS5kaXNwbGF5VGFza3MoKVxyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKVxyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0YWJzW3RhYkluZGV4XTtcclxuICAgICAgICAgICAgaWYoaSA+IDAgJiYgaSA8IDMgKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxudmFyIHByID0gZmFsc2VcclxudmFyIHRhYnMgPSBbJ0luYm94JywnVG9kYXknLCdUaGlzIHdlZWsnXVxyXG5wcmV2VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYicpO1xyXG52YXIgdGFiSW5kZXggPSAwO1xyXG50b2dnbGUoKVxyXG52YXIgcHJvamVjdHMgPSBbXTtcclxuXHJcbnZhciBwcm9PYmogPSB7fTtcclxucHJvT2JqW3RhYnNbdGFiSW5kZXhdXSA9IFtdO1xyXG5wcm9PYmpbJ1RvZGF5J10gPSBbXTtcclxucHJvT2JqWydUaGlzIHdlZWsnXSA9IFtdO1xyXG5cclxuaWYobG9jYWxTdG9yYWdlKXtcclxuXHJcbiAgICBmb3IoeCBpbiBsb2NhbFN0b3JhZ2Upe1xyXG4gICAgICAgIGlmKHR5cGVvZiBsb2NhbFN0b3JhZ2VbeF0gIT0gXCJzdHJpbmdcIilcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbeF0pXHJcbiAgICAgICAgcHJvT2JqW3hdID0gZGF0YTtcclxuICAgICAgICBpZih4ICE9ICdJbmJveCcpe1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHgpXHJcbiAgICAgICAgICAgIHRhYnMucHVzaCh4KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcblxyXG5jb25zdCBUb2RvID0gKCgpPT57XHJcblxyXG4gICAgY29uc3QgTGlzdGVuZXJzID0gKCk9PntcclxuICAgICAgICB2YXIgdGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ0bicpO1xyXG4gICAgICAgIHRhc2tCdG4ub25jbGljayA9IERvbS50YXNrRm9ybTtcclxuICAgICAgICB2YXIgcHJvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byby1idG4nKVxyXG4gICAgICAgIHByb0J0bi5vbmNsaWNrID0gRG9tLnByb0Zvcm07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9ICgpPT57XHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJykudmFsdWU7XHJcbiAgICAgICAgdmFyIHRhc2sgPSBjcmVhdGVUYXNrKG5hbWUsIGRhdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByb09ialt0YWJzW3RhYkluZGV4XV0ucHVzaCh0YXNrKTtcclxuICAgICAgICBzdG9yZSgpXHJcbiAgICAgICAgRG9tLmRpc3BsYXlUYXNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChuYW1lLCBkYXRlKT0+e1xyXG4gICAgICAgIHJldHVybiB7bmFtZSwgZGF0ZX1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9yZSA9ICgpPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFic1t0YWJJbmRleF0sICBKU09OLnN0cmluZ2lmeShwcm9PYmpbdGFic1t0YWJJbmRleF1dKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCk9PntcclxuICAgICAgICB2YXIgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwci1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgcHJvT2JqW25hbWVdID0gW107XHJcbiAgICAgICAgdGFicy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgIEpTT04uc3RyaW5naWZ5KHByb09ialtuYW1lXSkpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvT2JqKTtcclxuICAgICAgICBEb20uZGlzcGxheVByKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkbHRUYXNrTGlzdG5lciA9ICgpPT57XHJcbiAgICAgICAgdmFyIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFkaW8nKVxyXG4gICAgICAgIGJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCk9PntcclxuICAgICAgICAgICAgaWYoYnRuLm9uY2xpY2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCk9PntcclxuICAgICAgICAgICAgICAgIHByb09ialt0YWJzW3RhYkluZGV4XV0uc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUoKVxyXG4gICAgICAgICAgICAgICAgRG9tLmRpc3BsYXlUYXNrcygpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkbHRQciA9ICgpPT57XHJcbiAgICAgICAgdmFyIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGx0LXByJylcclxuICAgICAgICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGlmKGJ0bi5vbmNsaWNrKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCk9PntcclxuICAgICAgICAgICAgICAgIHZhciBkbHQgPSBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSlcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9PYmpbZGx0XVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGx0KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvT2JqKTtcclxuICAgICAgICAgICAgICAgIERvbS5kaXNwbGF5UHIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7YWRkVGFzaywgZGx0VGFza0xpc3RuZXIsIExpc3RlbmVycywgYWRkUHJvamVjdCwgZGx0UHJ9XHJcbn0pKClcclxuXHJcblxyXG5jb25zdCBEb20gPSAoKCk9PntcclxuICAgIGNvbnN0IHRhc2tGb3JtID0gKCk9PntcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKTtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLW5hbWUnKVxyXG4gICAgICAgIG5hbWUucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kYXRlJylcclxuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICAgICAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gVG9kby5hZGRUYXNrXHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiQWRkXCI7XHJcbiAgICAgICAgZGl2LmFwcGVuZChuYW1lLCBkYXRlLCBidG4pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvRm9ybSA9ICgpPT57XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwci1uYW1lJylcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJBZGRcIlxyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gVG9kby5hZGRQcm9qZWN0XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZGl2LmFwcGVuZChuYW1lLCBidG4pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgIGRpc3BsYXlQciA9ICgpPT57XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3Q9PntcclxuICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdzaWRlLWxpc3QnKVxyXG4gICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlhcIjtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2RsdC1wcicpXHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bilcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZ2dsZSgpXHJcbiAgICAgICAgVG9kby5kbHRQcigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlzcGxheVRhc2tzID0gKCk9PntcclxuICAgICAgICB2YXIgZGF0YXMgPSBwcm9PYmpbdGFic1t0YWJJbmRleF1dO1xyXG4gICAgICAgIGlmKCFkYXRhcylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKVxyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgZGF0YXMuZm9yRWFjaChkYXRhPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IGRhdGEubmFtZVxyXG4gICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IGRhdGEuZGF0ZVxyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxyXG4gICAgICAgICAgICBsaS5hcHBlbmQoYnRuLCBwICxzcGFuKVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBUb2RvLmRsdFRhc2tMaXN0bmVyKClcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3Rhc2tGb3JtLCBkaXNwbGF5VGFza3MsIHByb0Zvcm0sIGRpc3BsYXlQcn1cclxufSkoKTtcclxuXHJcblxyXG5Ub2RvLkxpc3RlbmVycygpXHJcbkRvbS5kaXNwbGF5UHIoKVxyXG5Eb20uZGlzcGxheVRhc2tzKClcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==