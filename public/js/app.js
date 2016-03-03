var app angular.module('ngTodo',[]);

app.controller('listController',function ($scope){
  $scope.todoList = ['add'];


  $scope.saveTodo = function(){
    var todoInfo = $scope.currentTodo;
    $scope.todoList.push(todoInfo);
    $scope.currentTodo = "";
  }

  $scope.removeTodo = function(singleTodo){
    var position = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice( position, 1);
  }

  $scope.editTodo = function(singleTodo){
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index,1,$scope.currentTodo);
    $scope.currentTodo = '';
  }

  $scope.moveUp = function(singleTodo){
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index, 1);
    $scope.todoList.splice(index-1, 0, singleTodo);
  }
});
