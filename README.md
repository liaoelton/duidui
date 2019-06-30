[107-2] Web Programming Final
===

> Demo 影片連結 
> https://youtu.be/NTuDPZVo7nE

> GITHUB REPO
> https://github.com/liaoelton/duidui
 
> DEPLOY網址
> https://duidui.herokuapp.com/

> PROJECT描述

    在限時內將臉部對至指定位置的小遊戲

> 安裝操作方式

    打開後端node server
    cd backend && npm install && nodemon server.js
    打開後端python server
    cd backend && pip install -r requirements.txt && python server.py
    打開前端react app
    npm start

> 操作方式

    * 輸入id遊戲開始
    * 將臉部對至指定範圍
    * 遊戲結束時選擇觀看分數排行或是restart

> 使用套件

前端

    * react-webcam (擷取webcam）
    * reactstrap (UI)
    * react-router-dom （router）
    * axios（資料傳輸）
    * socket.io（前端送出請求）
    
後端

    * express （後端架構）
    * mongo, mongoose（資料庫）
    * cors、axios（誇域傳輸）
    * imultis、cv2（圖像處理）
    * PIL、base64（圖像轉換）
    
> 分工

廖勗辰

    影像辨識、python後端架設、頁面設計、前端邏輯設計

曾浩瑋

    圖像轉檔、node後端架設、mongodb資料庫串接

謝昊辰

    前端架設、css動畫、ui設計

> 心得

廖勗辰

    這次final project讓我對web programming有了新的認
    識，包括如何進行專案管理、如何與組員合作、如何運用網路
    上的資源，都是相當難的課題，雖然最終做出來的網頁與原先
    構想的不太相同，希望未來能繼續精進，更加熟悉這塊領域。

曾浩瑋

    實在是膽戰心驚，一學期下來仍未相當扎實，在決定題目時也遲
    遲未有定論，最後決定以遊戲方面呈現並融合123木頭人的元
    素，可惜的是最終仍為能成功呈現進而稍作更改。但也因為這
    次的project讓我對於整體架構以及人生有了新的體悟，期待
    經過這次過後能夠在寫出更成熟的專案。

謝昊辰

    因為這次project負責的是前端的部分，除了更加熟悉整個
    react架構以外，也嘗試了一些不同的套件跟css動畫，對
    於整個前端以及js的語法精進了不少，特別是這次費了一番
    功夫研究webcam套件，對於前後端在傳送webcam所抓取的
    影像也有一些新的收穫，另外也體驗到自己一個人開發以及
    一個團隊的開發的差別，需要大量的溝通才能有好的成品。
    這堂課最有趣的就是能夠在實作中學習，能夠很明顯的看到
    自己的進步，也希望之後能夠繼續鑽研網頁架設的相關知識。# duidui
