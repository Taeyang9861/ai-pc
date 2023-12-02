<template>
    <div class="integral-title">
        <div class="text">我的积分</div>
        <div class="record">积分记录</div>
    </div>
    <div class="integral-block">
        <div class="left">
            <div v-for="i in 4">
                80
                <span>总可用积分</span>
            </div>
        </div>
        <div class="right">
            <div class="right-btn">充值积分</div>
        </div>
    </div>
    <div class="integral-task">
        <div class="task-item" v-for="i in 3">
            <div class="task-item-title">
                <div class="text">权益卡专享</div>
                <div class="btn">一键领取</div>
            </div>
            <div class="task-item-list">
                <div class="task-item-list-item" v-for="i in 5">
                    <div class="left">
                        <div class="img-wrap">
                            <img src="https://www.wujieai.cc/images/ai/equity/BRONZE_CARD.svg" alt="" />
                        </div>
                        <div class="content-wrap">
                            <div class="text">
                                购买文创商品
                                <img src="https://www.wujieai.cc/images/icons/gold.svg" alt="">
                                +交易额*5%
                            </div>
                            <div class="desc">注册即送，每天赠送 30积分</div>
                        </div>
                    </div>
                    <div class="btn">去创作</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.integral-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .text {
        font-size: 40px;
        line-height: 48px;
        font-weight: 600;
        word-break: break-all;
        color: rgb(252, 252, 253);
    }

    .record {
        width: 84px;
        height: 40px;
        border: 1px solid rgb(53, 57, 69);
        border-radius: 30px;
        color: rgb(119, 126, 144);
        font-size: 12px;
        line-height: 40px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            border-color: rgb(177, 181, 196);
            color: rgb(177, 181, 196);
            transition: all 0.8s;
        }
    }
}

.integral-block {
    display: flex;
    align-items: center;
    padding: 52px 0px;
    background: url(https://www.wujieai.cc/images/integral.png) right bottom -5px / 102px no-repeat rgb(35, 38, 47);
    border-radius: 16px;
    margin-bottom: 32px;

    .left {
        width: 66.6666%;
        border-right: 1px solid rgb(119, 126, 144);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 100px;

        div {
            color: rgb(252, 252, 253);
            font-weight: 600;
            font-size: 32px;
            line-height: 32px;
            text-align: center;
            flex: 1 1 0%;

            span {
                display: flex;
                font-weight: 400;
                color: rgb(119, 126, 144);
                margin-top: 8px;
                font-size: 12px;
                line-height: 20px;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
            }
        }
    }

    .right {
        width: 33.3333%;
        .right-btn {
            width: 164px;
            height: 48px;
            line-height: 48px;
            font-size: 16px;
            border-radius: 30px;
            margin: 0 auto;
            cursor: pointer;

            color: #fff;
            border-color: #7851ec;
            background: #7851ec;

            &:hover {
                border-color: #583ac7;
                background: #583ac7;
                transition: all 0.8s;
            }
        }
    }
}

.integral-task {
    display: flex;
    align-content: center;

    .task-item {
        flex: 1;
        margin-right: 30px;

        &:last-child {
            margin-right: 0px;
        }

        .task-item-title {
            display: flex;
            align-content: center;
            justify-content: space-between;
            margin-bottom: 16px;

            .text {
                color: #fcfcfd;
                font-size: 16px;
                font-weight: 600;
            }

            .btn {
                color: #777e90;
                font-size: 12px;
            }
        }

        .task-item-list {
            flex: auto;
            border: 2px solid #353945;
            border-radius: 16px;
            padding: 16px 0;
            min-height: 408px;
            max-height: 800px;
            overflow: auto;

            .task-item-list-item {
                display: flex;
                padding: 0 16px;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 24px;

                .left {
                    flex: auto;
                    display: flex;
                    align-items: center;
                    .img-wrap {
                        flex: 0 0 32px;
                        margin-right: 8px;
                        height: 32px;
                        overflow: hidden;
                    }
                    .content-wrap {
                        text-align: left;
                        .text {
                            color: #fcfcfd;
                            margin: 0;
                            font-weight: 600;
                            font-size: 14px;
                            line-height: 24px;
                            margin-right: 8px;
                            display: flex;
                            align-items: center;

                            img {
                                width: 16px;
                                height: 16px;
                                display: block;
                                margin: 0 4px 0 8px;
                            }
                        }

                        .desc {
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 20px;
                            color: #777e90;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }
                }

                .btn {
                    width: 60px;
                    height: 26px;
                    line-height: 26px;
                    color: #fff;
                    border-color: #7851ec;
                    background: #7851ec;
                    border-radius: 26px;
                    font-size: 12px;
                    cursor: pointer;
                    &:hover {
                        border-color: #583ac7;
                        background: #583ac7;
                        transition: all 0.8s;
                    }
                }
            }
        }
    }
}
</style>
