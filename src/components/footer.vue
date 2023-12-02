<template>
    <div class="footer-wrap">
        <div class="footer">
            <div class="footer-content">
                <div class="footer-content-left">
                    <div class="footer-content-left-logo">
                        <img src="https://webcdn.wujieai.com/images/logo-1.svg" alt="" />
                    </div>
                    <div class="footer-content-left-title">人人都是艺术家</div>
                    <div class="footer-content-left-desc">
                        <span>版权存证</span>
                        <span>品牌素材</span>
                        <span>隐私策略</span>
                        <span>用户协议</span>
                    </div>
                </div>
                <div class="footer-content-right">
                    <div class="footer-content-right-item" v-for="i in 3">
                        <div class="img-wrap">
                            <img src="../assets/layout/qrcode.png" alt="" />
                        </div>
                        <div>AI创作交流微信群</div>
                    </div>
                </div>
            </div>
            <div class="copy-right">Copyright © 2022 无界AI 版权所有 浙ICP备2021000434号-5</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.footer-wrap {
    width: 100%;
    border-top: 1px solid rgb(53, 57, 69);

    .footer {
        max-width: 1440px;
        margin: 0 auto;
        padding: 48px;

        .footer-content {
            padding: 24px 0;
            display: flex;
            justify-content: space-between;

            .footer-content-left {
                .footer-content-left-logo {
                    width: 104px;
                    height: 40px;
                    margin-bottom: 16px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .footer-content-left-title {
                    font-size: 16px;
                    color: #fff;
                    text-align: left;
                    margin-bottom: 16px;
                }
                .footer-content-left-desc {
                    color: rgb(119, 126, 144);
                    text-align: left;
                    span {
                        margin-right: 24px;
                        font-size: 12px;
                        cursor: pointer;
                        &:hover {
                            color: #7851ec;
                        }
                    }
                }
            }

            .footer-content-right {
                display: flex;
                align-items: center;
                .footer-content-right-item {
                    margin-left: 32px;
                    .img-wrap {
                        width: 100px;
                        padding: 5px;
                        box-sizing: border-box;
                        background: #fff;
                        img {
                            width: 90px;
                            height: 90px;
                            display: block;
                        }
                    }
                    div {
                        color: rgb(119, 126, 144);
                        font-size: 12px;
                        line-height: 28px;
                    }
                }
            }
        }

        .copy-right {
            color: rgb(119, 126, 144);
            padding: 24px 0;
            text-align: left;
            border-top: 1px solid rgb(53, 57, 69);
            font-size: 12px;
        }
    }
}
</style>
