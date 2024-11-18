       // 비밀번호 확인 함수
       function pw_check() {
        var pw = document.getElementById('password').value;
        var pw2 = document.getElementById('new_pw2').value;
        var pwResult = document.getElementById('pw_result');

        if (pw !== pw2) {
            document.getElementById('pw_result').innerText = 'X 비밀번호가 일치하지 않습니다';
            pwResult.style.color = 'brown';

        } else {
            document.getElementById('pw_result').innerText = 'V 비밀번호가 일치합니다';
            pwResult.style.color = '#00CA07';
        }
    }

    // 이메일 도메인 선택에 따른 입력 처리
    function updateEmail() {
        var domain = document.getElementById('email_domain').value;
        var emailField = document.getElementById('new_email');

        if (domain === 'nope') {
            document.getElementById('custom_email').style.display = 'inline';

        } else {
            document.getElementById('custom_email').style.display = 'none';
            emailField.value = emailField.value.split('@')[0] + '@' + domain;
        }
    }

    // 아이디 중복 체크 함수
    function checkUsername() {
        var username = document.getElementById('username').value;
        var idResult = document.getElementById('id_result');
        var xhr = new XMLHttpRequest();
        
        xhr.open('POST', '/check_username', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {

            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);

                if (response.result === 'exist') {
                    document.getElementById('id_result').innerText = 'X 이미 사용 중인 아이디입니다.';
                    idResult.style.color = 'brown';

                } else {
                    document.getElementById('id_result').innerText = 'V 사용 가능한 아이디입니다.';
                    idResult.style.color = '#00CA07';
                }
            }
        };
        xhr.send('username=' + encodeURIComponent(username));
    }