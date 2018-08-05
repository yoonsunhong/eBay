var navbarInitializer = {}

// DB 에서 메뉴를 조회하여 콜백 함수 호출
navbarInitializer.initNavbar = function () {
    $.ajax({
        url: "/Home/GetTotalMenu",
        type: "POST",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            if (result != null) {
                navbarInitializer.setNavbar(result);
            }
        },
        error: function (err) {
            err = err + "";
            alert('메뉴조회 실패 : ' + err);
        }
    });

    $(".gnb-menulink").on("click", navbarInitializer.openMenu);
}

// DB 에서 메뉴들을 조회 한 후 호출되는 콜백 함수
navbarInitializer.setNavbar = function(menuArr) {
    // 사용하지 않는 메뉴 삭제
    try {
        //var usedMenuArr = menuArr.filter(function(){menu => menu.MenuUseYn == "Y"});
        // var lMenuArr = usedMenuArr.filter(menu => menu.MenuLevel == 1);
        //var mMenuArr = usedMenuArr.filter(menu => menu.MenuLevel == 2);
        //var sMenuArr = usedMenuArr.filter(menu => menu.MenuLevel == 3);

        var usedMenuArr = menuArr.filter(function(menu){return menu.MenuUseYn == "Y"});
        var lMenuArr = usedMenuArr.filter(function(menu){return menu.MenuLevel == 1});
        var mMenuArr = usedMenuArr.filter(function(menu){return menu.MenuLevel == 2});
        var sMenuArr = usedMenuArr.filter(function (menu) {return  menu.MenuLevel == 3 });


        // 소메뉴에서 지마켓 삭제
        //var iacSMenuArr = sMenuArr.filter(menu => menu.SCodeName != "지마켓");
        var iacSMenuArr = sMenuArr.filter(function (menu) { return menu.SCodeName != "지마켓" });

        // 메뉴를 tree 구조로 변환
        var appendedMmenuArr = navbarInitializer.appendSmenusToMmenus(iacSMenuArr, mMenuArr);
        var appendedLmenuArr = navbarInitializer.appendMmenusToLmenus(appendedMmenuArr, lMenuArr);
        navbarInitializer.appendLmenusToNavbar(appendedLmenuArr);
    } catch (e) { }
}



// 소메뉴 목록을 대응하는 중메뉴 목록에 추가
navbarInitializer.appendSmenusToMmenus = function (sMenuArr, mMenuArr) {
    var resultMmenuArr = [];

    for(var i = 0; i<mMenuArr.length;i++)
    {
        /*
        var curMmenu = { 
            mMenu : mMenuArr[i]
            , sMenuArr : sMenuArr.filter(menu => menu.MCodeName == mMenuArr[i].MCodeName)
        };
        */
        var curMmenu = { 
            mMenu : mMenuArr[i]
            , sMenuArr: sMenuArr.filter(function (menu) { return menu.MCodeName == mMenuArr[i].MCodeName })
        };
        resultMmenuArr.push(curMmenu);
    }

    return resultMmenuArr;
}

// 중메뉴 목록을 대응하는 대메뉴 목록에 추가
navbarInitializer.appendMmenusToLmenus = function (mMenuArr, lMenuArr) {
    var resultLmenuArr = [];

    for(var i = 0; i<lMenuArr.length;i++)
    {
        var curLmenu = { 
            lMenu : lMenuArr[i]
            , mMenuArr: mMenuArr.filter(function (menu) { return menu.mMenu.LCodeName == lMenuArr[i].LCodeName })
        };
        resultLmenuArr.push(curLmenu);
        /*
        var curLmenu = { 
            lMenu : lMenuArr[i]
            , mMenuArr : mMenuArr.filter(menu => menu.mMenu.LCodeName == lMenuArr[i].LCodeName)
        };
        resultLmenuArr.push(curLmenu);
        */
    }

    return resultLmenuArr;
}

// 주어진 menuArr 을 GNB 에 덧붙여서 화면에 표시
navbarInitializer.appendLmenusToNavbar = function (menuArr) {
    var menuHtml = '';
    // 대메뉴 추가
    for(var lIndex = 0; lIndex<menuArr.length;lIndex++){
        menuHtml += '<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">'
            + menuArr[lIndex].lMenu.MenuName + ' <b class="caret"></b></a>'
            + '<ul class="dropdown-menu" role="menu">';

        // 중메뉴 추가
        var mMenuArr = menuArr[lIndex].mMenuArr;
        for(var mIndex = 0; mIndex<mMenuArr.length;mIndex++){
            var curMmenu = mMenuArr[mIndex].mMenu; // current middle menu

            menuHtml += '<li class="dropdown-submenu"><a href="#">'
                + curMmenu.MenuName + ' <i class="icon-arrow-right"></i></a>'
                + '<ul class="dropdown-menu sub-menu">';

            // 소메뉴 추가
            var sMenuArr = mMenuArr[mIndex].sMenuArr;

            if (curMmenu.LeafIs == 1) {
                // 중메뉴가 leaf 인 경우, 중메뉴를 소메뉴에 추가
                menuHtml += '<li><a class="gnb-menulink" href="'+curMmenu.MenuUrl+'" style="'+ curMmenu.MenuUrl +'">'
                        + curMmenu.MenuName +  '</a></li>';
            }
            else if (sMenuArr.length == 1 && sMenuArr[0].MenuName == "옥션"){
                // 소메뉴가 옥션 뿐인 경우, 소메뉴 URL & 중메뉴 이름으로 소메뉴 추가
                menuHtml += '<li><a class="gnb-menulink" href="' + sMenuArr[0].MenuUrl + '" style="' + sMenuArr[0].MenuUrl + '">'
                        + curMmenu.MenuName+'</a></li>';
            }
            else{
                // 소메뉴가 여러 개인 경우, 소메뉴 URL & 소메뉴 이름으로 소메뉴 추가
                for (var sIndex = 0; sIndex < sMenuArr.length; sIndex++) {
                    menuHtml += '<li><a class="gnb-menulink" href="'+ sMenuArr[sIndex].MenuUrl+'" style="'+ sMenuArr[sIndex].MenuUrl +'">'
                        + sMenuArr[sIndex].MenuName+ '</a></li>';
                }
            }

            // 중메뉴 목록 닫음
            menuHtml += '</ul></li>';
        }

        // 대메뉴 목록 닫음
        menuHtml += '</ul></li>';
    }
 
    $('#globalNavigationBarMenus').append(menuHtml);
}

// GNB 에서 메뉴를 선택하여 해당 메뉴로 이동
navbarInitializer.openMenu = function (event) {
	var $anchor = $(event.target).eq(0);

	// 휠을 누른 경우 새 탭에서 열도록 설정
    //if(event.which == 2) $anchor.attr('target', '_blank');

    //var param = "url=" + $anchor.attr('href');
/*
    $.ajax({
        url: "/Menu/CheckMenuPermission?" + param,
        type: "GET",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            if (result == 'false') {
                alert('메뉴 권한이 없습니다. 메뉴 권한을 신청 해 주세요.');
                event.preventDefault();
            }
            // else 수행 할 작업 없음
        },
        error: function (err) {
            alert('메뉴 권한 조회에 실패 하였습니다.\n잠시 후 다시 시도 해 주세요.\n' + err.responseText);
            event.preventDefault();
        }
    });*/

	$(location).attr('pathname', $anchor.attr('style'));
}

$(document).ready(function () {
    navbarInitializer.initNavbar();
});
