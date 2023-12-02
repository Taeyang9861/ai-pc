<template>
    <div class="header-wrap">
        <div class="logo">
            <img src="https://oss.smalld.cn/frontend/ai/default_avatar_system.png" alt="logo" />
            <span>触手AI</span>
        </div>
        <div class="tabs">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                background-color="transparent"
                text-color="#999"
                active-text-color="#fff"
                :teleported="false"
                @select="handleSelect"
            >
                <el-menu-item index="1">广场</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>AI创作</template>
                    <el-menu-item index="2-1" class="fs16">极简模式</el-menu-item>
                    <el-menu-item index="2-2" class="fs16">专业模式</el-menu-item>
                    <el-menu-item index="2-3" class="fs16">文生图</el-menu-item>
                    <el-menu-item index="2-4" class="fs16">图生图</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>创建模型</template>
                    <el-menu-item index="3-1" class="fs16">在线训练（自制模型）</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="4">
                    <template #title>实验室</template>
                    <el-menu-item index="4-1" class="fs16">图生文</el-menu-item>
                    <el-menu-item index="4-2" class="fs16">视频转换</el-menu-item>
                    <el-menu-item index="4-3" class="fs16">动态壁纸</el-menu-item>
                    <el-menu-item index="4-4" class="fs16">无损高清</el-menu-item>
                    <el-menu-item index="4-5" class="fs16">智能抠图</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="5">
                    <template #title>AI大赛</template>
                    <el-menu-item index="5-1" class="fs16">太一制造大赛</el-menu-item>
                    <el-menu-item index="5-2" class="fs16">京东AI小镇</el-menu-item>
                    <el-menu-item index="5-3" class="fs16">敦煌大赛</el-menu-item>
                    <el-menu-item index="5-4" class="fs16">AI·创无限</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="6">
                    <template #title>身份权益</template>
                    <el-menu-item index="6-1" class="fs16">真爱传播者</el-menu-item>
                    <el-menu-item index="6-2" class="fs16">平台会员</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="login">
            <div class="mobile-btn">
                <img src="../assets/layout/mobile_ico.png" alt="" />
                <div>触手移动端</div>
                <img class="right" src="../assets/layout/right_ico.png" alt="" />
            </div>
            <div class="vip-btn">
                <img src="../assets/layout/message_ico.png" alt="" />
                邀请即享会员权益
            </div>
            <div class="login-btn">登录</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.fs16 {
    font-size: 16px;
}
.header-wrap {
    width: 100vw;
    min-width: 1440px;
    height: 60px;
    background-color: #1e1e1e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 999;
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
        display: flex;
        align-items: center;
        flex: 1;
        padding-left: 32px;

        .el-menu-demo {
            width: 100%;
        }
        :deep(.el-menu--horizontal.el-menu),
        :deep(.el-menu--horizontal > .el-menu-item.is-active),
        :deep(.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title) {
            border: none;
        }
        :deep(.el-menu-item),
        :deep(.el-sub-menu__title) {
            font-size: 16px;
        }
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
