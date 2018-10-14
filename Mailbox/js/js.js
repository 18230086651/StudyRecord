/*
 * @Author: Marte
 * @Date:   2018-07-14 16:42:51
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-07-16 11:53:43
 */

// 邮箱地址检验
$('.email-ipt').blur(function() {
        var regexp = /^([A-Z]|[a-z])([A-z]|[0-9])/;
        var string = $(this).val();
        var result = regexp.exec(string);
        var stringLength = string.length;
        if (stringLength <= 18 && stringLength >= 6) {
            $('.email-prompt').text('恭喜，该邮件地址可注册').removeClass('active-nametips-err').addClass('active-nametips-true');
        } else {
            $('.email-prompt').text('长度应为6~18个字符').removeClass('active-nametips-true').addClass('active-nametips-err');
        };
    })
    // 密码输入
$('.password-ipt').blur(function() {

    var string = $(this).val();
    var stringLength = string.length;
    if (stringLength >= 16 || stringLength <= 6) {
        $('.password-prompt').text('请输入6~16个字符').removeClass('active-nametips-true').addClass('active-nametips-err');
    } else if (test(string)) {
        $('.password-prompt').text('密码强度：弱').removeClass('active-nametips-err').addClass('active-nametips-true');
    } else {
        $('.password-prompt').text('密码强度：中').removeClass('active-nametips-err').addClass('active-nametips-true');
    };
})

//递增数列的判断
function test(str) {
    var Str = str.split('');
    var bool = true;
    for (var i = 0; i < Str.length - 1; i++) {
        if (Str[i] - Str[i + 1] !== -1) {
            bool = false;
        };
    };
    return bool;
}

// 确认密码密码输入
$('.confirm-password-ipt').blur(function() {
    var confirmPasswordIpt = $(this).val();
    var passwordIpt = $('.password-ipt').val();
    if (confirmPasswordIpt == '') {
        $('.confirm-password-prompt').text('密码不能为空，请重新输入！').removeClass('active-nametips-true').addClass('active-nametips-err');
    } else if (passwordIpt === confirmPasswordIpt) {
        $('.confirm-password-prompt').text('恭喜，填写正确').removeClass('active-nametips-err').addClass('active-nametips-true');
    } else {
        $('.confirm-password-prompt').text('两次填写的密码不一致，请重新输入').removeClass('active-nametips-true').addClass('active-nametips-err');
    };
})

// 手机号验证
$('.phone-number-ipt').blur(function() {
    var regexp = /^1(3[0-9]|5[012345789]|6[6]|7[135678]|8[0-9]|9[89])[0-9]{8}$/;
    var string = $(this).val();
    var result = regexp.exec(string);
    if (result !== null) {
        $('.phone-number-prompt').text('手机号码可用').removeClass('active-nametips-err').addClass('active-nametips-true');
    } else {
        $('.phone-number-prompt').text('请填写填写正确的手机号').removeClass('active-nametips-true').addClass('active-nametips-err');
    };
});
//验证码
$('.auth-code-ipt').blur(function() {
    /* Act on  event */
    var authCodeIpt = $(this).val().toUpperCase();
    if (authCodeIpt !== '' || authCodeIpt === 'HWRWY') {
        $('.auth-code-nametips').text('填写正确').removeClass('active-nametips-err').addClass('active-nametips-true');
    } else {
        $('.auth-code-nametips').text('请填写填写正确验证码！').removeClass('active-nametips-true').addClass('active-nametips-err');
    };
});

$('.gain').click(function(event) {
    /* Act on  event */
    event.preventDefault();
    var authCodeIpt = $('.auth-code-ipt').val().toUpperCase();

    if (authCodeIpt !== '' || authCodeIpt === 'HWRWY') {
        $('.auth-code-nametips').text('填写正确').removeClass('active-nametips-err').addClass('active-nametips-true');
    } else {
        $('.auth-code-nametips').text('请填写填写正确验证码！').removeClass('active-nametips-true').addClass('active-nametips-err');
    };
});

//手机验证码
$('.phone-auth-code-ipt').blur(function() {
    /* Act on  event */
    var authCodeIpt = $(this).val().toUpperCase();
    if (authCodeIpt !== '') {
        $('.phone-auth-code-tips').text('填写正确').removeClass('active-nametips-err').addClass('active-nametips-true');
    } else {
        $('.phone-auth-code-tips').text('请填写填写正确验证码！').removeClass('active-nametips-true').addClass('active-nametips-err');
    };
});

$('.title').click(function() {
    alert('此功能尚未开发！')
})
$('.logon').click(function() {
    alert('信息有误，请写正确填写！')
})