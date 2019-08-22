$(function () {
    // 初始化数据
    var direction = {up: 1, right: 2, down: 3, left: 4};
    // 初始化坐标
    var now = {col: 1, row: 1};
    var last = {col: 0, row: 0};
    // 定义一个滑动页面
    function movePage (dir) {
        // 初始化参与动画的页面
        var lastPage = ".page-" + last.col + "-" + last.row;
        var nowPage = ".page-" + now.col + "-" + now.row;
        // 初始化两个动画类
        var inClass = ""; // 进场
        var outClass = ""; // 出场
        // 匹配方向
        switch (dir) {
            case direction.up:
                inClass = "pt-page-moveFromBottom";
                outClass = "pt-page-moveToTop";
                break;
            case direction.right:
                inClass = "pt-page-moveFromLeft";
                outClass = "pt-page-moveToRight";
                break;
            case direction.down:
                inClass = "pt-page-moveFromTop";
                outClass = "pt-page-moveToBottom";
                break;
            case direction.left:
                inClass = "pt-page-moveFromRight";
                outClass = "pt-page-moveToLeft";
                break;
        }
        $(nowPage).removeClass("hide");
        $(nowPage).addClass(inClass);
        $(lastPage).addClass(outClass);
        
        // 动画执行完清除动画
        setTimeout(function () {
            $(nowPage).removeClass(inClass);
            $(nowPage).find("img").removeClass("hide");
            $(lastPage).removeClass(outClass);
            $(lastPage).addClass("hide");
            $(lastPage).find("img").addClass("hide");
        }, 600);
    }

    $(".page").swipeUp(function () {
        if (now.col < 5) {
            last.col = now.col;
            last.row = now.row;
            now.col++;
            movePage(direction.up);
        }
    });
    $(".page").swipeDown(function () {
        if (now.col > 1) {
            last.col = now.col;
            last.row = now.row;
            now.col--;
            movePage(direction.down);
        }
    });
    $(".page").swipeLeft(function () {
        if (now.row == 1 && now.col > 1 && now.col < 5) {
            last.col = now.col;
            last.row = now.row;
            now.row++;
            movePage(direction.left);
        }
    });
    $(".page").swipeRight(function () {
        if (now.row == 2 && now.col > 1 && now.col < 5) {
            last.col = now.col;
            last.row = now.row;
            now.row--;
            movePage(direction.right);
        }
    });
});