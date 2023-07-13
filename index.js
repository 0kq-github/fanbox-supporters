javascript: (
    function () {
        let result = {};
        let supporters = document.querySelectorAll("a[href*='/manage/relationships/']");
        supporters.forEach((element) => {
            let url = element.href.split("/");
            result[url[url.length - 1]] = {
                "status":element.parentNode.parentNode.querySelectorAll("div > div")[1].innerText,
                "since":element.parentNode.parentNode.querySelectorAll("div > div")[3].innerText
            }
        });
        let blob = new Blob([JSON.stringify(result)], { type: "text/plain" });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "fanbox.json"; link.click();
        alert("Downloading " + supporters.length.toString() + " Supporters...")
    }
)();