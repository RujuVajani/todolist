const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

let todolist = [];

/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
    res.render('todo.ejs', { todolist, clickHandler:"func1();" });
})

/* Adding an item to the to do list */
    .post('/todo/add/', urlencodedParser, function (req, res) {
        var todoItem = req.body.newtodo;
        if (todoItem != '' ){
            var escapedNewItem = escape(todoItem);
            todolist.push(escapedNewItem);
        }  
    res.redirect('/todo');
    })

    /** Editing an item of to do list */
    .post('/todo/edit/:id', urlencodedParser, function (req, res) {
        console.log('in edit ' + req.params.id);
        var todoItem = req.body.newtodo;
        if (todoItem != '' && req.params.id != '') {
            var escapedNewItem = escape(todoItem);
            todolist[req.params.id] = escapedNewItem;
        }  
        res.redirect('/todo');
    })    

/* Deletes an item from the to do list */
.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') {
        todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080);


//<% var indexValue %>
// '<%  indexValue = index; %>'; 

//this.form.action="/todo/edit/<%= indexValue %>";

//this.form.action='/todo/edit/<%= indexValue %>'



//"document.getElementById('newtodo').value = '<%- todo %>' ; '<%=  indexValue%> = <%- index %>'; " 

//"test('<%- todo %>','<%- index %>')"