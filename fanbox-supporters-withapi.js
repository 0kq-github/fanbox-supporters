async function main() {
    if (location.href.match("https://www.fanbox.cc/manage/relationships")) {
        const resp = await fetch("https://api.fanbox.cc/relationship.listFans?status=supporter", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "ja,en-US;q=0.9,en;q=0.8,ru;q=0.7",
                "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://www.fanbox.cc/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });
        const result = await resp.json();
        const blob = new Blob([JSON.stringify(result)], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "fanbox.json"; link.click();
        alert("支援者数 " + result.body.length.toString() + " 人")
    } else {
        alert("支援者管理ページを開いて実行してください");
    }
}

export { main };