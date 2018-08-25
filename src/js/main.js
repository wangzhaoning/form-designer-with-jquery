$(function () {
    let dialog, choice, rowCount = 0, isPreview = false;

    delRow = function delRow(row) {
        $("#" + row).remove();
        rowCount--;
    };

    function addText() {
        rowCount++;
        $("#table tbody").append('<tr id=' + rowCount + '>' +
            '<td>' + "文本" + '</td>' +
            '<td>' + '<button id="del_btn_' + rowCount + '" class="ui-button ui-widget ui-corner-all" ' +
            'onclick=delRow(' + rowCount + ')' + '>删除</button>' + '</td>' +
            '</tr>');
        dialog.dialog("close");
    }
    function addDate() {
        rowCount++;
        $("#table tbody").append('<tr id=' + rowCount + '>' +
            '<td>' + "日期" + '</td>' +
            '<td>' + '<button id="del_btn_' + rowCount + '" class="ui-button ui-widget ui-corner-all" ' +
            'onclick=delRow(' + rowCount + ')' + '>删除</button>' + '</td>' +
            '</tr>');
        dialog.dialog("close");
    }


    $("#add_btn").button().on("click", function () {
        dialog.dialog("open");
    });

    $("#preview_btn").button().on("click", function () {
        isPreview = !isPreview;
        if (isPreview) {
            $("#add_btn").css("visibility","hidden");
            $("button[id^='del_btn_']").css("visibility","hidden");
            $(this).text('编辑');
        } else {
            $("#add_btn").css("visibility","visible");
            $("button[id^='del_btn_']").css("visibility","visible");
            $(this).text('预览');
        }
    });

    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 100,
        width: 250,
        modal: true,
        buttons: {
            "文本": addText,
            "日期":addDate,
            "取消": function () {
                dialog.dialog("close");
            }
        },
    });
});