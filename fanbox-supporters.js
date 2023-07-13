function main() {
    const result = {};
    const supporters = document.querySelectorAll("a[href*='/manage/relationships/']");
    supporters.forEach((element) => {
        const url = element.href.split("/");
        result[url[url.length - 1]] = {
            "name":element.parentNode.parentNode.querySelectorAll("div > div")[0].innerText,
            "status":element.parentNode.parentNode.querySelectorAll("div > div")[1].innerText,
            "since":element.parentNode.parentNode.querySelectorAll("div > div")[3].innerText,
            "memo":element.parentNode.parentNode.querySelectorAll("div > div")[4].innerText
        }
    });
    const blob = new Blob([JSON.stringify(result)], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "fanbox.json"; link.click();
    alert("Downloading " + supporters.length.toString() + " Supporters...")
}

export { main };