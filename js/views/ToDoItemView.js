/* this view handles all DOM events and rendering for an individual ToDO item */

var ToDoItemView = Backbone.View.extend({
  initialize:function(){
    this.listenTo(this.model,"change",this.render);
  },
  tagName:"div",
  attributes:{
    class:"todo-item"
  },
  events:{
    "dblclick":"editTodo",
    "keydown .edit-todo":"updateTodo",
    "click .remove-todo":function(){
      this.remove();
    }
  },
  editTodo:function(){
    var editTodo = $("<input>").val(this.model.get("toDoText")).addClass("edit-todo");
    this.$el.html(editTodo);
  },
  updateTodo:function(event){
    if(event.keyCode === 13){
      this.model.set("toDoText", event.currentTarget.value);
    }
  },
  render:function(){
    var closeButton = $("<span>").addClass("glyphicon glyphicon-remove remove-todo");
    this.$el.html(this.model.get("toDoText"));
    this.$el.append(closeButton);
    return this;
  }
});
