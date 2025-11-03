if(('localStorage' in window) && (window.localStorage !== null)) {
    // ローカルストレージが使える
    const button = document.getElementById("button");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    // ローカルストレージから取得
    let inputEmail = localStorage.getItem('email');
    let inputPassword = localStorage.getItem('password');

    // フォームに設定
    email.value = inputEmail
    password.value = inputPassword

    button.addEventListener("click", function() {
        // ローカルストレージに保存
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
    })
} else {
    // 使えない。。。
    console.log("localStorage エラー")
}