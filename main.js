(()=>{const e=()=>{document.querySelectorAll(".side-list").forEach(((e,a)=>{e.onclick||(e.onclick=e=>{e.composedPath()[0].classList.add("selected"),prevTab.classList.remove("selected"),prevTab=e.composedPath()[0],n=a,c.displayTasks(),document.getElementById("title").innerHTML=t[n]})}))};var t=["Inbox","Today","This week"];prevTab=document.getElementById("inb");var n=0;e();var a=[],d={};if(d[t[n]]=[],d.Today=[],localStorage)for(x in localStorage)if("string"==typeof localStorage[x]){var r=JSON.parse(localStorage[x]);d[x]=r,"Inbox"!=x&&(a.push(x),t.push(x))}console.log(a);const o=(()=>{const e=()=>{localStorage.setItem(t[n],JSON.stringify(d[t[n]]))};return{addTask:()=>{var a=((e,t)=>({name:e,date:t}))(document.getElementById("task-name").value,document.getElementById("task-date").value);d[t[n]].push(a),e(),c.displayTasks()},dltTaskListner:()=>{document.querySelectorAll(".radio").forEach(((a,r)=>{a.onclick||(a.onclick=()=>{d[t[n]].splice(r,1),e(),c.displayTasks()})}))},Listeners:()=>{document.getElementById("task-btn").onclick=c.taskForm,document.getElementById("pro-btn").onclick=c.proForm},addProject:()=>{var e=document.getElementById("pr-name").value;d[e]=[],t.push(e),a.push(e),c.displayPr()}}})(),c={taskForm:()=>{var e=document.getElementById("task"),t=document.createElement("div"),n=document.createElement("input");n.setAttribute("id","task-name"),n.required=!0;var a=document.createElement("input");a.setAttribute("id","task-date"),a.setAttribute("type","date"),a.required=!0;var d=document.createElement("button");d.onclick=o.addTask,d.innerHTML="Add",t.append(n,a,d),e.appendChild(t)},displayTasks:()=>{var e=d[t[n]];if(e){var a=document.getElementById("task");a.innerHTML="",e.forEach((e=>{var t=document.createElement("button"),n=document.createElement("p"),d=document.createElement("span"),r=document.createElement("li");n.innerHTML=e.name,d.innerHTML=e.date,t.classList.add("radio"),r.append(t,n,d),a.appendChild(r)})),o.dltTaskListner()}},proForm:()=>{var e=document.getElementById("projects"),t=document.createElement("input"),n=document.createElement("button");t.setAttribute("id","pr-name"),n.innerHTML="Add",n.onclick=o.addProject;var a=document.createElement("div");a.append(t,n),e.appendChild(a)},displayPr:()=>{var t=document.getElementById("projects");t.innerHTML="",a.forEach((e=>{var n=document.createElement("li");n.innerHTML=e,n.classList.add("side-list");var a=document.createElement("button");a.innerHTML="X",n.appendChild(a),t.appendChild(n)})),e()}};o.Listeners(),c.displayPr(),c.displayTasks()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnQiOlsiXHJcbmNvbnN0IHRvZ2dsZSA9ICgpPT57XHJcbiAgICB2YXIgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWxpc3QnKTtcclxuICAgIGJ0bnMuZm9yRWFjaCgoYnRuLCBpKT0+e1xyXG4gICAgICAgIGlmKGJ0bi5vbmNsaWNrKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKGUpPT57XHJcbiAgICAgICAgICAgIGUuY29tcG9zZWRQYXRoKClbMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcHJldlRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBwcmV2VGFiID0gZS5jb21wb3NlZFBhdGgoKVswXTtcclxuICAgICAgICAgICAgdGFiSW5kZXggPSBpO1xyXG4gICAgICAgICAgICBpID4gMiA/IHByID0gdHJ1ZSA6IHByID0gZmFsc2U7XHJcbiAgICAgICAgICAgIERvbS5kaXNwbGF5VGFza3MoKVxyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKVxyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0YWJzW3RhYkluZGV4XTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG52YXIgcHIgPSBmYWxzZVxyXG52YXIgdGFicyA9IFsnSW5ib3gnLCdUb2RheScsJ1RoaXMgd2VlayddXHJcbnByZXZUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5iJyk7XHJcbnZhciB0YWJJbmRleCA9IDA7XHJcbnRvZ2dsZSgpXHJcbnZhciBwcm9qZWN0cyA9IFtdO1xyXG5cclxudmFyIHByb09iaiA9IHt9O1xyXG5wcm9PYmpbdGFic1t0YWJJbmRleF1dID0gW107XHJcbnByb09ialsnVG9kYXknXSA9IFtdO1xyXG5cclxuaWYobG9jYWxTdG9yYWdlKXtcclxuXHJcbiAgICBmb3IoeCBpbiBsb2NhbFN0b3JhZ2Upe1xyXG4gICAgICAgIGlmKHR5cGVvZiBsb2NhbFN0b3JhZ2VbeF0gIT0gXCJzdHJpbmdcIilcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbeF0pXHJcbiAgICAgICAgcHJvT2JqW3hdID0gZGF0YTtcclxuICAgICAgICBpZih4ICE9ICdJbmJveCcpe1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHgpXHJcbiAgICAgICAgICAgIHRhYnMucHVzaCh4KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcblxyXG5jb25zdCBUb2RvID0gKCgpPT57XHJcblxyXG4gICAgY29uc3QgTGlzdGVuZXJzID0gKCk9PntcclxuICAgICAgICB2YXIgdGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ0bicpO1xyXG4gICAgICAgIHRhc2tCdG4ub25jbGljayA9IERvbS50YXNrRm9ybTtcclxuICAgICAgICB2YXIgcHJvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byby1idG4nKVxyXG4gICAgICAgIHByb0J0bi5vbmNsaWNrID0gRG9tLnByb0Zvcm07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9ICgpPT57XHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJykudmFsdWU7XHJcbiAgICAgICAgdmFyIHRhc2sgPSBjcmVhdGVUYXNrKG5hbWUsIGRhdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByb09ialt0YWJzW3RhYkluZGV4XV0ucHVzaCh0YXNrKTtcclxuICAgICAgICBzdG9yZSgpXHJcbiAgICAgICAgRG9tLmRpc3BsYXlUYXNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChuYW1lLCBkYXRlKT0+e1xyXG4gICAgICAgIHJldHVybiB7bmFtZSwgZGF0ZX1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9yZSA9ICgpPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFic1t0YWJJbmRleF0sICBKU09OLnN0cmluZ2lmeShwcm9PYmpbdGFic1t0YWJJbmRleF1dKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCk9PntcclxuICAgICAgICB2YXIgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwci1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgcHJvT2JqW25hbWVdID0gW107XHJcbiAgICAgICAgdGFicy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgRG9tLmRpc3BsYXlQcigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGx0VGFza0xpc3RuZXIgPSAoKT0+e1xyXG4gICAgICAgIHZhciBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvJylcclxuICAgICAgICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGlmKGJ0bi5vbmNsaWNrKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidG4ub25jbGljayA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICBwcm9PYmpbdGFic1t0YWJJbmRleF1dLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgIHN0b3JlKClcclxuICAgICAgICAgICAgICAgIERvbS5kaXNwbGF5VGFza3MoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2FkZFRhc2ssIGRsdFRhc2tMaXN0bmVyLCBMaXN0ZW5lcnMsIGFkZFByb2plY3R9XHJcbn0pKClcclxuXHJcblxyXG5jb25zdCBEb20gPSAoKCk9PntcclxuICAgIGNvbnN0IHRhc2tGb3JtID0gKCk9PntcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKTtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLW5hbWUnKVxyXG4gICAgICAgIG5hbWUucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kYXRlJylcclxuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICAgICAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gVG9kby5hZGRUYXNrXHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiQWRkXCI7XHJcbiAgICAgICAgZGl2LmFwcGVuZChuYW1lLCBkYXRlLCBidG4pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvRm9ybSA9ICgpPT57XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwci1uYW1lJylcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJBZGRcIlxyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gVG9kby5hZGRQcm9qZWN0XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZGl2LmFwcGVuZChuYW1lLCBidG4pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgIGRpc3BsYXlQciA9ICgpPT57XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3Q9PntcclxuICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdzaWRlLWxpc3QnKVxyXG4gICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIlhcIjtcclxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9nZ2xlKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5VGFza3MgPSAoKT0+e1xyXG4gICAgICAgIHZhciBkYXRhcyA9IHByb09ialt0YWJzW3RhYkluZGV4XV07XHJcbiAgICAgICAgaWYoIWRhdGFzKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBkYXRhcy5mb3JFYWNoKGRhdGE9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gZGF0YS5uYW1lXHJcbiAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gZGF0YS5kYXRlXHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXHJcbiAgICAgICAgICAgIGxpLmFwcGVuZChidG4sIHAgLHNwYW4pXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFRvZG8uZGx0VGFza0xpc3RuZXIoKVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiB7dGFza0Zvcm0sIGRpc3BsYXlUYXNrcywgcHJvRm9ybSwgZGlzcGxheVByfVxyXG59KSgpO1xyXG5cclxuXHJcblRvZG8uTGlzdGVuZXJzKClcclxuRG9tLmRpc3BsYXlQcigpXHJcbkRvbS5kaXNwbGF5VGFza3MoKVxyXG5cclxuIl0sIm5hbWVzIjpbInRvZ2dsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJpIiwib25jbGljayIsImUiLCJjb21wb3NlZFBhdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmV2VGFiIiwicmVtb3ZlIiwidGFiSW5kZXgiLCJEb20iLCJkaXNwbGF5VGFza3MiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInRhYnMiLCJwcm9qZWN0cyIsInByb09iaiIsImxvY2FsU3RvcmFnZSIsIngiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJUb2RvIiwic3RvcmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVGFzayIsInRhc2siLCJuYW1lIiwiZGF0ZSIsImNyZWF0ZVRhc2siLCJ2YWx1ZSIsImRsdFRhc2tMaXN0bmVyIiwiaW5kZXgiLCJzcGxpY2UiLCJMaXN0ZW5lcnMiLCJ0YXNrRm9ybSIsInByb0Zvcm0iLCJhZGRQcm9qZWN0IiwiZGlzcGxheVByIiwiY29udGFpbmVyIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJlcXVpcmVkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJkYXRhcyIsInAiLCJzcGFuIiwibGkiLCJwcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==