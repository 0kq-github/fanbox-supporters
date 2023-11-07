# fanbox-supporters
fanbox支援者一覧取得ブックマークレット  
以下の形式でダウンロードされます  
```json
{
    "支援者ID":{
        "name":"支援者名",
        "status":"ステータス",
        "total":"累計月数",
        "since":"支援開始日",
        "memo":"メモ"
    }
}
```

### 使い方
以下をブックマークに追加  
```javascript
javascript:import("https://0kqnet.work/fanbox-supporters/fanbox-supporters.js").then(m=>{m.main()}).catch(e=>alert(`エラー (${e})`));
```

Fanbox APIを直接叩いてレスポンスを保存する場合  
```javascript
javascript:import("https://0kqnet.work/fanbox-supporters/fanbox-supporters-withapi.js").then(m=>{m.main()}).catch(e=>alert(`エラー (${e})`));
```
