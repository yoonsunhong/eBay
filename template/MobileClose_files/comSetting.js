var carlendar_setting = {
    animationType: 'fade',
    allowKeyboardDelete: true,
    clearString: 'Clean',
    textAlign: 'center',
    width: '100px',
    height: 20,
    dropDownHorizontalAlignment: 'right',
    culture: 'ko-KR',
    formatString: 'yyyy-MM-dd'
};

var pg_gubn_setting = {
    source: [{ pg_code: '', pg_name: '전체' }, { pg_code: '1', pg_name: 'MOBILIANS' }, { pg_code: '2', pg_name: 'LGUPLUS' }],
    displayMember: "pg_name",
    valueMember: "pg_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};

var pg_gubn_with_daysum_setting = {
    source: [{ pg_code: '', pg_name: '전체' }, { pg_code: '1', pg_name: 'MOBILIANS' }, { pg_code: '2', pg_name: 'LGUPLUS' }, { pg_code: '9998', pg_name: '일별소개' }],
    displayMember: "pg_name",
    valueMember: "pg_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};


var pay_type_setting = {
    source: [{ pay_type: '1', pay_name: '승인일' }, { pay_type: '2', pay_name: '입금일' }],
    displayMember: "pay_name",
    valueMember: "pay_type",
    selectedIndex: 0,
    width: 100,
    height: 20
};


var close_code_setting = {
    source: [{ close_code: '', close_name: '승인일' }, { close_code: '11', close_name: '당일미확인' }, { close_code: '13', close_name: '당일상계' }, { close_code: '12', close_name: '이전미확인' }, { close_code: '14', close_name: '이전상계' }],
    displayMember: "close_name",
    valueMember: "close_code",
    selectedIndex: 0,
    width: 80,
    height: 20
};

var same_code_setting = {
    source: [{ close_code: '', close_name: '전체' }, { close_code: '1', close_name: '불일치' }, { close_code: '2', close_name: '처리완료' }],
    displayMember: "close_name",
    valueMember: "close_code",
    selectedIndex: 0,
    width: 80,
    height: 20
};


var payment_line_setting = {
    source: [{ line_code: '', line_name: '전체' }, { line_code: '1', line_name: '모바일' }, { line_code: '2', line_name: '신용카드' }, { line_code: '3', line_name: '계좌이체' }, { line_code: '2', line_name: '무통장입금' }],
    displayMember: "line_name",
    valueMember: "line_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};

var use_is_setting = {
    source: [{ line_code: '', line_name: '전체' },{ line_code: 'Y', line_name: '사용' }, { line_code: 'N', line_name: '미사용' }],
    displayMember: "line_name",
    valueMember: "line_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};

var fee_type_setting = {
    source: [{ line_code: '', line_name: '전체' }, { line_code: '101', line_name: '정액' }, { line_code: '102', line_name: '정률' }],
    displayMember: "line_name",
    valueMember: "line_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};

var payment_pay_method_setting_input = {
    source: [{ line_code: '', line_name: '선택하세요.' }, { line_code: '1', line_name: '모바일' }, { line_code: '2', line_name: '신용카드' }, { line_code: '3', line_name: '계좌이체' }, { line_code: '4', line_name: '무통장입금' }],
    displayMember: "line_name",
    valueMember: "line_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};

var pay_type_setting_input = {
    source: [{ pg_code: '', pg_name: '선택하세요' }, { pg_code: '1', pg_name: 'MOBILIANS' }, { pg_code: '2', pg_name: 'LGUPLUS' }],
    displayMember: "pg_name",
    valueMember: "pg_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};

var fee_type_setting_input = {
    source: [{ line_code: '', line_name: '선택하세요' }, { line_code: '101', line_name: '정액' }, { line_code: '102', line_name: '정률' }],
    displayMember: "line_name",
    valueMember: "line_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};

var use_yn_setting_input = {
    source: [ { line_code: 'Y', line_name: '사용' }, { line_code: 'N', line_name: '미사용' }],
    displayMember: "line_name",
    valueMember: "line_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};

var processCode =
{
    source: [{ close_code: '', close_name: '전체' }, { close_code: '3', close_name: '주문환불' }, { close_code: '0', close_name: '미처리' }, { close_code: '2', close_name: '전문취소' }],
    displayMember: "close_name",
    valueMember: "close_code",
    selectedIndex: 0,
    width: 80,
    height: 20
};


var searchCode =
{
    source: [{ close_code: '0', close_name: '승인번호' }, { close_code: '1', close_name: '주문번호' }, { close_code: '2', close_name: '배송비결제번호' }, { close_code: '3', close_name: '휴대폰번호' }, { close_code: '4', close_name: '고객ID' }, { close_code: '5', close_name: '판매자ID' }],
    displayMember: "close_name",
    valueMember: "close_code",
    selectedIndex: 0,
    width: 100,
    height: 20
};


var refund_close_setting = {
    source: [{ close_code: '', close_name: '환불완료일' }, { close_code: '11', close_name: '당일미확인' },  { close_code: '12', close_name: '이전미확인' }],
    displayMember: "close_name",
    valueMember: "close_code",
    selectedIndex: 0,
    width: 80,
    height: 20
};


var refund_close_setting2 = {
    source: [{ close_code: '', close_name: '승인일(원승인일)' }, { close_code: '1', close_name: 'Smile Cash 적립일' }],
    displayMember: "close_name",
    valueMember: "close_code",
    selectedIndex: 0,
    width: 120,
    height: 20
};

var refund_processCode =
{
    source: [{ close_code: '', close_name: '전체' }, { close_code: '0', close_name: '미처리' }, { close_code: '1', close_name: '처리확인' }],
    displayMember: "close_name",
    valueMember: "close_code",
    selectedIndex: 0,
    width: 80,
    height: 20
};

var refund_processCode2 =
{
    source: [{ close_code: '', close_name: '전체' }, { close_code: '0', close_name: '입금환불' }, { close_code: '1', close_name: '주문환불' }],
    displayMember: "close_name",
    valueMember: "close_code",
    selectedIndex: 0,
    width: 80,
    height: 20
};

var settingDayDate = function (num) {
    var settingDate = new Date();
    settingDate.setDate(settingDate.getDate() + num);
    return settingDate;
}

var settingDayDate_string  = function (num) {
    var settingDate = new Date();
    settingDate.setDate(settingDate.getDate() + num);


    return settingDate.getFullYear() + "/" + (settingDate.getMonth() + 1) + "/" + (settingDate.getDate()) + " " + settingDate.getHours() + ":" + settingDate.getMinutes() + ":" + settingDate.getSeconds();
}



var cellsrenderer = function (index, datafield, value, defaultHtml, column, rowdata) {
    var element = $(defaultHtml);
    if (rowdata['STATUS_CODE'] == '999') {
        element.css({ 'background-color': '#e0e9f5', 'width': '100%', 'height': '100%', 'padding': '5px 2px 0 0', 'margin': '0' });
        return element[0].outerHTML;
    }

    if (rowdata['PAY_TYPE'] == '999') {
        element.css({ 'background-color': '#477396', 'width': '100%', 'height': '100%', 'padding': '5px 2px 0 0', 'margin': '0' });
        return element[0].outerHTML;
    }
    return defaultHtml;
}


var aggregates =
    [{
        'sum': function (aggregatedValue, currentValue, column, record) {
            if (column == "CLOSE_DATE") {
                return "전체합계";
            } else {
                if (record['STATUS_CODE'] == '999') {
                    aggregatedValue = aggregatedValue + currentValue;
                }
                return aggregatedValue;
            }
        }
    }];
var aggregatesrenderer = function (aggregates) {
    var renderstring = "";

    $.each(aggregates, function (key, value) {
        renderstring += '<div style="position: relative; margin: 4px; overflow: hidden;">' + value + '</div>';
    });
    return renderstring;
}

var localizationobj = {
    // separator of parts of a date (e.g. '/' in 11/05/1955)
    '/': "/",
    // separator of parts of a time (e.g. ':' in 05:44 PM)
    ':': ":",
    // the first day of the week (0 = Sunday, 1 = Monday, etc)
    firstDay: 0,
    days: {
        // full day names
        names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        // abbreviated day names
        namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        // shortest day names
        namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    },
    months: {
        // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
        names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
        // abbreviated month names
        namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
    },
    // AM and PM designators in one of these forms:
    // The usual view, and the upper and lower case versions
    //      [standard,lowercase,uppercase]
    // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
    //      null
    AM: ["AM", "am", "AM"],
    PM: ["PM", "pm", "PM"],
    eras: [
    // eras in reverse chronological order.
    // name: the name of the era in this culture (e.g. A.D., C.E.)
    // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
    // offset: offset in years from gregorian calendar
    { "name": "A.D.", "start": null, "offset": 0 }
    ],
    twoDigitYearMax: 2029,
    patterns: {
        // short date pattern
        d: "M/d/yyyy",
        // long date pattern
        D: "dddd, MMMM dd, yyyy",
        // short time pattern
        t: "h:mm tt",
        // long time pattern
        T: "h:mm:ss tt",
        // long date, short time pattern
        f: "dddd, MMMM dd, yyyy h:mm tt",
        // long date, long time pattern
        F: "dddd, MMMM dd, yyyy h:mm:ss tt",
        // month/day pattern
        M: "MMMM dd",
        // month/year pattern
        Y: "yyyy MMMM",
        // S is a sortable format that does not vary by culture
        S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
    },
    percentsymbol: "%",
    currencysymbol: "$",
    currencysymbolposition: "before",
    decimalseparator: '.',
    thousandsseparator: ',',
    pagergotopagestring: "Go to page:",
    pagershowrowsstring: "Show rows:",
    pagerrangestring: " of ",
    pagerpreviousbuttonstring: "previous",
    pagernextbuttonstring: "next",
    groupsheaderstring: "Drag a column and drop it here to group by that column",
    sortascendingstring: "Sort Ascending",
    sortdescendingstring: "Sort Descending",
    sortremovestring: "Remove Sort",
    groupbystring: "Group By this column",
    groupremovestring: "Remove from groups",
    filterclearstring: "Clear",
    filterstring: "Filter",
    filtershowrowstring: "Show rows where:",
    filtershowrowdatestring: "Show rows where date:",
    filterorconditionstring: "Or",
    filterandconditionstring: "And",
    filterselectallstring: "(Select All)",
    filterchoosestring: "Please Choose:",
    filterstringcomparisonoperators: ['empty', 'not empty', 'contains', 'contains(match case)',
        'does not contain', 'does not contain(match case)', 'starts with', 'starts with(match case)',
        'ends with', 'ends with(match case)', 'equal', 'equal(match case)', 'null', 'not null'],
    filternumericcomparisonoperators: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal', 'null', 'not null'],
    filterdatecomparisonoperators: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal', 'null', 'not null'],
    filterbooleancomparisonoperators: ['equal', 'not equal'],
    validationstring: "Entered value is not valid",
    emptydatastring: "조회된 데이터가 없습니다.",
    filterselectstring: "Select Filter",
    loadtext: "조회중...",
    clearstring: "Clear",
    todaystring: "Today"
};