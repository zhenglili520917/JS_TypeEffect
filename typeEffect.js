var texts = ["網頁設計師", "插畫家", "遊戲開發者"];   // 陣列
var speed = 1000;                                   // 打字速度
var index = 0;                                      // 編號
var count = 0;                                      // 字數
var id = "type-box";                                // 要寫入文字的 ID

// 定義方法
function type(){
    var box = document.getElementById(id);
    box.innerHTML = texts[index];
}

// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded", type);