angular.module("todoApp", [])
    .controller("mozhi_controller", function ($scope) {
        $scope.todos = [
            {name: "吃饭", isChecked: false},
            {name: "睡觉", isChecked: false},
            {name: "学习", isChecked: false},
            {name: "上班", isChecked: false},
            {name: "运动", isChecked: false}
        ];
        $scope.add = function () {
            if ($scope.name.trim() === "") {
                return false;
            }
            $scope.todos.push({name: $scope.name, isChecked: false});
            $scope.name = "";
        }
        $scope.newTodos = [];
        $scope.remove = function () {
            $scope.todos.forEach(function (item, index) {
                if (!item.isChecked) {
                    $scope.newTodos.push(item);
                }
            });
            $scope.todos = $scope.newTodos;
        }
    });