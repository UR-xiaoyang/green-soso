$("#c-bing").click(function() {
    $("#soso").attr("action", ["https://cn.bing.com/search"])
    $("#search-input").attr("name", ["q"])
});
$("#c-google").click(function() {
    $("#soso").attr("action", ["https://www.google.com/search"])
    $("#search-input").attr("name", ["q"])
});
$("#c-yahu").click(function() {
    $("#soso").attr("action", ["https://search.yahoo.com/search"])
    $("#search-input").attr("name", ["q"])
})
$("#c-dogedoge").click(function() {
    $("#soso").attr("action", ["https://www.dogedoge.com/results"])
    $("#search-input").attr("name", ["q"])
})
$("#c-CNso").click(function() {
    $("#soso").attr("action", ["http://www.chinaso.com/search/pagesearch.htm"])
    $("#search-input").attr("name", ["q"])
})
$("#c-baidu").click(function() {
    $("#soso").attr("action", ["http://www.baidu.com/s"])
    $("#search-input").attr("name", ["wd"])
})