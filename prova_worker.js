function fase1() {
    for (var i = 0; i < 999999999; i++) {}
}

function fase2() {
    for (var i = 0; i < 999999999; i++) {}
}

self.addEventListener("message", function(event) {
    if (event.data == "start") {
        self.postMessage("Elaborazione in corso: fase 1");
        fase1();
        self.postMessage("Elaborazione in corso: fase 2");
        fase2();
        self.postMessage("Fine elaborazione");
    }
});
