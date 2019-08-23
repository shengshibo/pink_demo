angular.module("noteApp", []).controller("NoteController", function ($scope) {
    $scope.countText = "";
    $scope.getCount = function () {
        if ($scope.countText.length > 100) {
            $scope.countText = $scope.countText.slice(0, 100);
        }
        return 100 - $scope.countText.length;
    };
    $scope.m_click = function () {
        sessionStorage.setItem("m_text", $scope.countText);
        $scope.countText = "";
    }
    $scope.m_click2 = function () {
        $scope.countText = sessionStorage.getItem("m_text");
    }
    $scope.m_click3 = function () {
        sessionStorage.removeItem("m_text");
        $scope.countText = "";
    }
});