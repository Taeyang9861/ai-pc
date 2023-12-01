<template>
    <div class="header-wrap">
        <div class="logo">
            <img src="https://oss.smalld.cn/frontend/ai/default_avatar_system.png" alt="logo" />
            <span>触手AI</span>
        </div>
        <div class="tabs">
            111111111111
        </div>
        <div class="login">
            <div class="mobile-btn">
                <img src="../assets/layout/mobile_ico.png" alt="" />
                <div>触手移动端</div>
                <img class="right" src="../assets/layout/right_ico.png" alt="" />
            </div>
            <div class="vip-btn">
                <img src="../assets/layout/message_ico.png" alt="">
                邀请即享会员权益
            </div>
            <div class="login-btn">登录</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.header-wrap {
    width: 100%;
    height: 60px;
    background-color: #1e1e1e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(130, 126, 142, 0.24);

    .logo {
        width: 120px;
        display: flex;
        align-items: center;
        img {
            width: 34px;
            height: 34px;
            margin-right: 10px;
        }
        span {
            font-size: 20px;
            color: #fff;
        }
    }

    .tabs {
        // width: calc(100% - 550px);
        display: flex;
        align-items: center;
        flex: 1;
    }

    .login {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .mobile-btn {
            flex-shrink: 0;
            height: 28px;
            border-radius: 14px;
            background: rgba(0, 0, 0, 0.7);
            padding-left: 12px;
            padding-right: 10px;
            color: #fff;
            margin-right: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            font-size: 14px;

            img {
                width: 16px;
                height: 16px;
                display: block;
                margin-right: 6px;
            }
        }

        .vip-btn {
            flex-shrink: 0;
            height: 28px;
            padding: 0 10px;
            background: -webkit-gradient(linear, left top, right top, from(#d026fe), to(#6e30ce));
            background: linear-gradient(90deg, #d026fe, #6e30ce);
            border-radius: 13px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            color: #fff;
            cursor: pointer;
        }
        .login-btn {
            flex-shrink: 0;
            width: 62px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            font-weight: 500;
            font-size: 16px;
            color: #000;
            background: linear-gradient(256deg, #8efff6 -10%, #f8fee8 23%, #fec5f5 66%, #cdb0ff 85%, #9b91ff 99%),
                #764dff;
            border-radius: 14px;
            cursor: pointer;
            margin-left: 12px;
        }
    }
}
</style>
