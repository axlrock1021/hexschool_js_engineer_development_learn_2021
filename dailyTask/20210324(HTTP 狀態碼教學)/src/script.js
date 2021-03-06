/*
  學會看 HTTP 狀態碼是寫網頁很重要的一個能力，狀態碼所代表的訊息可以讓我們了解一個 HTTP 請求是否已經被完成。
  這邊替大家整理一些使用 AJAX 比較常遇到、需要了解的狀態碼訊息 :

  1.成功回應 (Successful responses，200–299)
    這區間的狀態碼表示伺服器有成功接收到用戶端要求，以 AJAX 的串接為例，如果回傳的 status 為 200，則代表有成功接收到資料。

  2.用戶端錯誤 (Client errors，400–499)
    這區間的狀態碼表示有錯誤發生，且錯誤來自於「用戶端」，以 AJAX 的串接為例，
    回傳的 status 為 400，表示遠端伺服器接收到無效語法、無法理解請求，因此需要檢查程式碼有無寫錯的地方。
    回傳的 status 為 403，表示禁止使用，這代表用戶端沒有訪問權限，因此沒辦法成功串接資料。
    回傳的 status 404，表示找不到檔案資料。

  3.伺服器端錯誤 (Server errors，500–599)
    如果發生狀態碼為 5xx 的錯誤，則表示錯誤發生跟「遠端伺服器」有關，此時就需要跟後端工程師進行協調了。

  問題
  題目一 : 在使用 axios 串接 API 的時候，如果 HTTP 狀態碼顯示為 403，則代表有成功接收到資料嗎 ?
  請問是正確還是錯誤 ? 如果答案為錯誤，則狀態碼 403 代表什麼訊息。
  以及成功接收到資料的 HTTP 狀態碼應該為何?
  解答 : 錯誤，狀態碼 403 代表發生錯誤，表示用戶端沒有訪問權限。成功串接資料的狀態碼回應應該為 status 200。

  題目二 : 請問「用戶端錯誤」以及「伺服器端錯誤」的 HTTP 狀態碼各自位於哪個數字區間 ? 可否各自舉一個例子說明 ?
  「用戶端錯誤」的區間為 400–499，「伺服器端錯誤」的區間為 500–599
  舉例 : 
  400 -「用戶端錯誤」，表示發送的語法無效，應該檢查程式碼。
  500 - 「伺服器端錯誤」，表示伺服器端發生未知或無法處理的錯誤。
*/