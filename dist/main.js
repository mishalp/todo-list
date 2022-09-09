/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "proObj": () => (/* binding */ proObj)
/* harmony export */ });

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






/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDaUI7QUFDakI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXHJcbmNvbnN0IHRvZ2dsZSA9ICgpPT57XHJcbiAgICB2YXIgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWxpc3QnKVxyXG4gICAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PntcclxuICAgICAgICBpZihidG4ub25jbGljayl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4ub25jbGljayA9IChlKT0+e1xyXG4gICAgICAgICAgICBlLmNvbXBvc2VkUGF0aCgpWzBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHByZXZEb20uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcHJldkRvbSA9IGUuY29tcG9zZWRQYXRoKClbMF07XHJcbiAgICAgICAgICAgIGkgPSBpbmRleDtcclxuICAgICAgICAgICAgRG9tLmRpc3BsYXlUYXNrcygpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxudmFyIHByb09iaiA9IHt9O1xyXG52YXIgcHJvamVjdHMgPSBbJ0luYm94JywnVG9kYXknLCdXZWVrJ107XHJcblxyXG52YXIgaW5iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYicpXHJcblxyXG5sZXQgcHJldkRvbSA9IGluYjtcclxuXHJcblxyXG52YXIgaSA9IDA7XHJcbnRvZ2dsZSgpO1xyXG5wcm9PYmpbcHJvamVjdHNbaV1dID0gW11cclxuXHJcbmNvbnN0IFRvRG9zID0gKCgpPT57XHJcbiAgICBjb25zdCBsaXN0ZW5lciA9ICgpPT57XHJcbiAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ0bicpO1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERvbS50YXNrRm9ybSlcclxuICAgICAgICB2YXIgcHJidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHItYnRuJyk7XHJcbiAgICAgICAgcHJidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEb20ucHJGb3JtKVxyXG5cclxuICAgIH1cclxuICAgIC8vVG9kbyBmYWN0b3J5XHJcbiAgICBjb25zdCB0b0RvcyA9IChuYW1lLCBkYXRlKT0+e1xyXG4gICAgICAgIHJldHVybiB7bmFtZSwgZGF0ZX1cclxuICAgIH1cclxuICAgIC8vZnVuY3Rpb24gdG8gbWFrZSB0b2RvXHJcbiAgICBjb25zdCBhZGRUb2RvID0gKG5hbWUsIGRhdGUpPT57XHJcbiAgICAgICAgdmFyIHRhc2sgPSB0b0RvcyhuYW1lLCBkYXRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9PYmpbcHJvamVjdHNbaV1dKTtcclxuICAgICAgICBwcm9PYmpbcHJvamVjdHNbaV1dLnB1c2godGFzaylcclxuICAgICAgICBEb20uZGlzcGxheVRhc2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICgpPT57XHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xyXG4gICAgICAgIHZhciBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcclxuICAgICAgICBpZihuYW1lID09IFwiXCIgfHwgZGF0ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgYWxlcnQoJ0ZpZWxkcyBjYW5ub3QgYmUgZW1wdHknKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkVG9kbyhuYW1lLCBkYXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZGx0TGlzdGVuZXIgPSAoKT0+e1xyXG4gICAgICAgIHZhciBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvJyk7XHJcbiAgICAgICAgaWYoIWJ0bnMpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVRvRG8oaW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVUb0RvID0gKGluZGV4KT0+e1xyXG4gICAgICAgIHByb09ialtwcm9qZWN0c1tpXV0uc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIERvbS5kaXNwbGF5VGFza3MoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKT0+e1xyXG4gICAgICAgIHZhciBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByLW5hbWUnKS52YWx1ZTtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIHByb09ialtwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGgtMV1dID0gW107XHJcbiAgICAgICAgRG9tLmRpc3BsYXlQcm9qZWN0cygpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgYWRkVG9kbywgbGlzdGVuZXIgLCBjcmVhdGVUb2RvLCBkbHRMaXN0ZW5lciwgZGVsZXRlVG9EbywgYWRkUHJvamVjdH1cclxufSkoKTtcclxuXHJcbmNvbnN0IERvbSA9ICgoKT0+e1xyXG4gICAgdmFyIGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpXHJcblxyXG4gICAgY29uc3QgZGlzcGxheVRhc2tzID0gKCk9PntcclxuICAgICAgICB2YXIgdGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ0bicpXHJcbiAgICAgICAgaWYoaSA9PSAxIHx8IGkgPT0gMil7XHJcbiAgICAgICAgICAgIHRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHZhciBwcm9qZWN0ID0gcHJvT2JqW3Byb2plY3RzW2ldXTtcclxuICAgICAgICBpZighcHJvamVjdCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0LmZvckVhY2godGFzaz0+e1xyXG4gICAgICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IHRhc2submFtZTtcclxuICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0YXNrLmRhdGU7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdyYWRpbycpO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRJdGVtcyhwcm9PYmosIHByb2plY3RzLCBpKTtcclxuICAgICAgICBUb0Rvcy5kbHRMaXN0ZW5lcigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFza0Zvcm0gPSAoKT0+e1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdmFyIGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUb0Rvcy5jcmVhdGVUb2RvKTtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJBZGRcIlxyXG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcclxuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRhdGUpXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bilcclxuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJGb3JtID0gKCk9PntcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3ByLWZvcm0nKTtcclxuICAgICAgICB2YXIgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwci1uYW1lJyk7XHJcbiAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRvRG9zLmFkZFByb2plY3QpO1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkFkZFwiXHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pXHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpPT57XHJcblxyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwciwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGlmKGluZGV4IDw9IDIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnc2lkZS1saXN0JylcclxuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gcHI7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvZ2dsZSgpXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHsgZGlzcGxheVRhc2tzLCB0YXNrRm9ybSwgZGlzcGxheVByb2plY3RzLCBwckZvcm0gfVxyXG59KSgpO1xyXG5cclxuVG9Eb3MubGlzdGVuZXIoKVxyXG5cclxuZXhwb3J0IHsgcHJvT2JqIH1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9