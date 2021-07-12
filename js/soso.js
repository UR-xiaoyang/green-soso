$("#c-bing").click(function() {
    $("#soso").attr("action", ["https://cn.bing.com/search"])
    $("#search-input").attr("name", ["q"])
    $("#search-input").attr("placeholder", ["-->利用bing搜索你想要的东西<--"])
});
$("#c-google").click(function() {
    $("#soso").attr("action", ["https://www.google.com/search"])
    $("#search-input").attr("name", ["q"])
    $("#search-input").attr("placeholder", ["-->利用google搜索你想要的东西,在中国需要魔法<--"])
});
$("#c-yahu").click(function() {
    $("#soso").attr("action", ["https://search.yahoo.com/search"])
    $("#search-input").attr("name", ["q"])
    $("#search-input").attr("placeholder", ["-->利用雅虎去搜索你想搜的东西<--"])
})
$("#c-dogedoge").click(function() {
    $("#soso").attr("action", ["https://www.dogedoge.com/results"])
    $("#search-input").attr("name", ["q"])
    $("#search-input").attr("placeholder", ["-->DogeDoge正在维护中<--"])

})
$("#c-CNso").click(function() {
    $("#soso").attr("action", ["https://www.chinaso.com/search/pagesearch.htm"])
    $("#search-input").attr("name", ["q"])
    $("#search-input").attr("placeholder", ["-->国家权威搜索引擎<--"])

})
$("#c-baidu").click(function() {
    $("#soso").attr("action", ["https://www.baidu.com/s"])
    $("#search-input").attr("name", ["wd"])
    $("#search-input").attr("placeholder", ["-->中国知名的搜索引擎<--"])

})
$("#c-github").click(function() {
    $("#soso").attr("action", ["https://www.github.com/search"])
    $("#search-input").attr("name", ["q"])
    $("#search-input").attr("placeholder", ["-->在GitHub上搜索开源项目<--"])

})
$("#c-DuckDuckGo").click(function() {
    $("#soso").attr("action", ["https://duckduckgo.com"])
    $("#search-input").attr("name", ["q"])
    $("#search-input").attr("placeholder", ["-->利用DuckDuckGo匿名搜索<--"])

})