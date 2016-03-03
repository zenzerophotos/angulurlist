var app angular.module('ngTodo',[]);

app.controller('listController',function ($scope){
  $scope.todoList = [''];


    $scope.saveTodo = function(){
      var todoInfo = $scope.currentTodo;
      $scope.todoList.push(todoInfo);
      $scope.currentTodo = "";
    }

    $scope.removeTodo = function(singleTodo){
      var position = $scope.todoList.indexOf(singleTodo);
      $scope.todoList.splice(position, 1);
    };
});
