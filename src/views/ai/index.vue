<template>
    <div class="ai-wrap">
        <div class="ai-left">
            <div class="title-wrap">
                <div class="title">AI创作</div>
                <div class="btns">
                    <div class="btn" v-for="i in btns">
                        <WechatOutlined />
                        <div class="text">{{ i }}</div>
                    </div>
                </div>
            </div>
            <div class="model-select">
                <div class="select-title">* 模型选择</div>
                <div class="model-list">
                    <div class="model-item-act">
                        <div class="text-wrap">
                            <div class="text">通用模型</div>
                            <div class="text2">描人绘景，真实生动</div>
                        </div>
                        <div class="img">
                            <img src="https://data.wujiebantu.com/FkSu6PFbYbbPCV3yFrvhxlKGytLE.png" alt="">
                        </div>
                    </div>
                    <div class="model-item">
                        <div class="text-wrap">
                            <div class="text">通用模型</div>
                            <div class="text2">描人绘景，真实生动</div>
                        </div>
                    </div>
                    <div class="model-item">
                        <div class="text-wrap">
                            <div class="text">通用模型</div>
                            <div class="text2">描人绘景，真实生动</div>
                        </div>
                    </div>
                    <div class="model-item">
                        <div class="text-wrap">
                            <div class="text">通用模型</div>
                            <div class="text2">描人绘景，真实生动</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="desc-wrap">
                <div class="select-title">* 画面描述</div>
                <div class="textarea">
                    <el-input :rows="5" maxlength="1000" resize="none" show-word-limit type="textarea" placeholder="画面描述以短句、短语为佳，建议40个字符以上；风格选择和高级参数对图像生成有艺术修饰作用；支持中英文输入" />
                </div>
                <div class="desc-select">
                    <div class="desc-btns">
                        <div class="desc-btn active">全部</div>
                        <div class="desc-btn">风格</div>
                        <div class="desc-btn">高级参数</div>
                        <div class="desc-btn">中英文</div>
                        <div class="desc-btn">风格</div>
                        <div class="desc-btn">高级参数</div>
                        <div class="desc-btn">中英文</div>
                    </div>
                    <div class="desc-single">
                        <div class="more">
                            <MenuOutlined />
                            更多
                        </div>
                        <div class="radio flc">
                            <div class="radio-item active">全参</div>
                            <div class="radio-item">纯咒</div>
                        </div>
                        <div class="radio flc">
                            <div class="radio-item active">中</div>
                            <div class="radio-item">英</div>
                        </div>
                        <div class="flc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.451 3.136a1.2 1.2 0 00-.756-.168l-7.42.815a.2.2 0 00-.093.362L12.76 9.51a2 2 0 001.773.27l5.989-1.945a.2.2 0 00.042-.36L13.45 3.135zm-.924 1.894a3.373 3.373 0 011.313.319c.16.076.3.161.412.25a.91.91 0 01.24.268c.048.089.06.172.034.246-.025.074-.085.137-.179.185a1.036 1.036 0 01-.364.097 2.335 2.335 0 01-.493-.006 3.391 3.391 0 01-1.068-.303c-.323-.154-.558-.34-.653-.519-.095-.178-.043-.333.145-.43.143-.075.357-.112.613-.107z"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.598 4.696a.2.2 0 00-.314.132l-1.406 9.149a1 1 0 00.32.896l6.165 5.53a.5.5 0 00.812-.228l2.767-9.194a.4.4 0 00-.15-.44L4.597 4.695zm4.928 5.99a.568.568 0 00-.231-.051c-.186 0-.361.1-.498.285-.136.185-.227.446-.258.741a2.281 2.281 0 00.146 1.067c.065.16.148.301.243.415a.889.889 0 00.312.247c.224.1.454.053.64-.13.184-.182.31-.487.347-.845a2.283 2.283 0 00-.146-1.067 1.562 1.562 0 00-.243-.415.89.89 0 00-.312-.247zM5.06 12.261c.07 0 .143.016.213.048a.82.82 0 01.288.228c.088.105.164.235.224.383a2.105 2.105 0 01.135.984 1.645 1.645 0 01-.11.451.99.99 0 01-.21.33.502.502 0 01-.59.12.821.821 0 01-.288-.228 1.44 1.44 0 01-.225-.384 2.106 2.106 0 01-.135-.984c.029-.273.113-.513.239-.684.126-.172.287-.264.459-.264z"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.81 11.137a.5.5 0 01.318-.328l6.667-2.263a.2.2 0 01.25.263l-3.169 8.037a1 1 0 01-.442.506l-6.229 3.482a.2.2 0 01-.289-.233l2.895-9.464zm5.406-.206a.393.393 0 00-.34-.254.664.664 0 00-.34.075c-.12.058-.24.147-.353.26-.199.2-.359.462-.445.73-.087.266-.093.516-.017.694.076.178.227.269.42.254.195-.016.415-.136.613-.336s.358-.462.445-.729c.086-.267.092-.517.017-.694zm-1.94 4.008c.141.02.245.107.297.246.06.164.042.388-.05.623a1.69 1.69 0 01-.44.632c-.19.17-.396.266-.573.27a.364.364 0 01-.37-.25c-.06-.164-.042-.389.05-.624a1.69 1.69 0 01.44-.631c.108-.096.222-.17.334-.216a.607.607 0 01.313-.05zm-2.841 1.93c-.037-.161-.135-.267-.277-.298a.583.583 0 00-.328.037c-.12.046-.246.123-.368.226-.214.18-.403.43-.524.692-.12.263-.164.518-.12.708a.41.41 0 00.125.223.36.36 0 00.228.085.691.691 0 00.298-.065c.106-.047.216-.117.322-.207.214-.18.403-.43.524-.693.12-.262.164-.517.12-.707zm1.267-4.914c.155.022.27.119.326.276.066.184.046.437-.056.703a1.926 1.926 0 01-.488.714c-.21.192-.438.302-.633.307a.399.399 0 01-.409-.28c-.065-.184-.045-.437.057-.703.102-.265.277-.522.488-.714.119-.109.245-.192.37-.245a.663.663 0 01.345-.058z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.8 13.598a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"></path>
                                <path d="M15.2 13.598a1.2 1.2 0 100-2.399 1.2 1.2 0 000 2.4z"></path>
                                <path d="M6.4 5.598h11.2a1.6 1.6 0 011.6 1.6v11.2a1.6 1.6 0 01-1.6 1.6H6.4a1.6 1.6 0 01-1.6-1.6v-11.2a1.6 1.6 0 011.6-1.6zm0 1.6v11.2h11.2v-11.2H6.4z"></path>
                                <path d="M20.8 9.598a.8.8 0 01.8.8v4.8a.8.8 0 11-1.6 0v-4.8a.8.8 0 01.8-.8z"></path>
                                <path d="M3.2 9.598a.8.8 0 01.8.8v4.8a.8.8 0 11-1.6 0v-4.8a.8.8 0 01.8-.8z"></path>
                                <path d="M23.2 11.198a.8.8 0 01.8.8v1.6a.8.8 0 11-1.6 0v-1.6a.8.8 0 01.8-.8z"></path>
                                <path d="M.8 11.198a.801.801 0 01.8.8v1.6a.8.8 0 11-1.6 0v-1.6a.8.8 0 01.8-.8z"></path>
                                <path d="M12 3.998a.8.8 0 01.8.8v1.6a.8.8 0 11-1.6 0v-1.6a.8.8 0 01.8-.8z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-select large-select">
                <div class="select-title">* 画面大小</div>
                <div class="model-list">
                    <div class="model-item-act">
                        <div class="text-wrap">
                            <img src="https://data.wujiebantu.com/FksSihCobzTUSwjsayjcgYMNXKfm.png" alt="">
                            <div class="text">1:1</div>
                            <div class="text2">头像图</div>
                        </div>
                    </div>
                    <div class="model-item">
                        <div class="text-wrap">
                            <img src="https://data.wujiebantu.com/FksSihCobzTUSwjsayjcgYMNXKfm.png" alt="">
                            <div class="text">1:1</div>
                            <div class="text2">头像图</div>
                        </div>
                    </div>
                    <div class="model-item">
                        <div class="text-wrap">
                            <img src="https://data.wujiebantu.com/FksSihCobzTUSwjsayjcgYMNXKfm.png" alt="">
                            <div class="text">1:1</div>
                            <div class="text2">头像图</div>
                        </div>
                    </div>
                    <div class="model-item">
                        <div class="text-wrap">
                            <img src="https://data.wujiebantu.com/FksSihCobzTUSwjsayjcgYMNXKfm.png" alt="">
                            <div class="text">1:1</div>
                            <div class="text2">头像图</div>
                        </div>
                    </div>
                    <div class="model-item">
                        <div class="text-wrap">
                            <img src="https://data.wujiebantu.com/FksSihCobzTUSwjsayjcgYMNXKfm.png" alt="">
                            <div class="text">1:1</div>
                            <div class="text2">头像图</div>
                        </div>
                    </div>
                </div>
                <div class="piexe-wrap flc">
                    <div class="piexe-item active">2048*2048</div>
                    <div class="piexe-item">1536*15363积分/张</div>
                </div>
            </div>
            <div class="theme-select">
                <div class="select-title">* 模型主题</div>
                <div class="theme-list flc">
                    <div :class="['theme-item', i == 1 && 'active']" :style="{ backgroundImage: `url(${themeList[i - 1]})` }" v-for="i in 14">
                        通用XL
                        <img v-if="i % 3 === 0" src="https://www.wujieai.cc/images/ai/new.png" alt="">
                        <img v-else src="https://www.wujieai.cc/images/ai/vip_model.png" alt="">
                    </div>
                    <div class="theme-item all">
                        <MenuOutlined />
                        更多
                    </div>
                </div>
                <div class="style-select">
                    <div class="select-title">* 风格选择</div>
                    <div class="style-list flc">
                        <div class="style-item-wrap" v-for="i in 7">
                            <div :class="['style-item', i == 1 && 'active']">
                                通用XL
                            </div>
                        </div>
                        <div class="style-item-wrap">
                            <div class="style-item more">
                                <MenuOutlined />
                                更多
                            </div>
                        </div>
                    </div>
                </div>
                <div class="count-select">
                    <div class="flc count-title">
                        <div class="select-title">* 作图数量</div>
                        <div class="flc count-btn">
                            <div>-</div>
                            <div>1</div>
                            <div>+</div>
                        </div>
                    </div>
                    <div class="select-list">
                        <div class="select-item flc active">
                            <div class="text">普通生成</div>
                            <div class="desc">预计排队：2分钟内</div>
                        </div>
                        <div class="select-item flc">
                            <div class="text">潮汐模式 </div>
                            <div class="desc">优惠低至五折，会员免费生成</div>
                        </div>
                    </div>
                    <div class="privacy">
                        使用无界AI创作服务表示您已同意<span>《AI创作服务协议》</span><span>《二次元模型AI创作服务协议》</span>
                    </div>
                </div>

                <div class="run-wrap">
                    <div class="run-btn">
                        <div>立即生成</div>
                        <div class="tips">（消耗2积分）</div>
                        <div class="logo">
                            <FileSearchOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ai-right">
            <div class="img-wrap">
                <img src="https://www.wujieai.cc/images/ai/loading.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { WechatOutlined, MenuOutlined, FileSearchOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const btns = ref(['加入社群', '教学', '78积分', '我的创作'])

const themeList = ref([
    'https://cdn.wujiebantu.com/py/deploy/tongyongxl1.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/chanpinsheji.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/shineisheji_xl.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/hanfu11.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/tongyongxl1.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/chanpinsheji.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/shineisheji_xl.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/hanfu11.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/tongyongxl1.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/chanpinsheji.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/shineisheji_xl.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/hanfu11.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/shineisheji_xl.jpg?imageView2/2/w/400/q/75/format/webp',
    'https://cdn.wujiebantu.com/py/deploy/hanfu11.jpg?imageView2/2/w/400/q/75/format/webp',
])
</script>

<style lang="scss" scoped>
.flc {
    display: flex;
    align-items: center;
}

.ai-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .ai-left {
        width: 50%;

        .select-title {
            color: rgb(177, 181, 196);
            font-size: 12px;
            text-align: left;
            margin-bottom: 12px;
        }

        .title-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;

            .title {
                font-size: 40px;
                line-height: 48px;
                font-weight: 600;
                word-break: break-all;
                color: rgb(252, 252, 253);
            }

            .btns {
                display: flex;

                .btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 30px;
                    border: 1px solid rgb(53, 57, 69);
                    background: rgb(20, 20, 22);
                    color: rgb(119, 126, 144);
                    margin-left: 8px;
                    padding: 7px 16px;

                    .text {
                        margin-left: 4px;
                        font-size: 12px;
                    }
                }
            }
        }

        .model-select {
            margin-bottom: 32px;

            .model-list {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .model-item {
                    cursor: pointer;
                    background: rgb(35, 38, 47);
                    border-radius: 10px;
                    padding: 12px;
                    width: 142px;
                    height: 104px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .text-wrap {
                        font-size: 12px;

                        img {
                            width: auto;
                            height: 30px;
                            margin-bottom: 4px;
                        }

                        .text {
                            color: #fff;
                            line-height: 20px;
                        }

                        .text2 {
                            color: rgb(177, 181, 196);
                        }
                    }
                }

                .model-item-act {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 16px;
                    border: 2px solid #fff;
                    box-sizing: border-box;
                    height: 104px;
                    border-radius: 10px;
                    background: radial-gradient(80.89% 737.39% at 19.11% 54.81%,
                            #374176 0%,
                            rgba(55, 65, 118, 0) 100%)
                        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
                        ,
                        #141416 !important;

                    .img {
                        img {
                            width: auto;
                            height: 80px;
                        }
                    }

                    .text-wrap {
                        font-size: 12px;
                        text-align: left;

                        img {
                            width: auto;
                            height: 30px;
                            margin-bottom: 4px;
                        }

                        .text {
                            color: #fff;
                            line-height: 20px;
                        }

                        .text2 {
                            color: rgb(177, 181, 196);
                        }
                    }
                }
            }
        }

        .desc-wrap {
            margin-bottom: 32px;

            .textarea {
                :deep(.el-textarea textarea) {
                    background: transparent;
                    box-shadow: none;
                    border: 2px solid #7851ec;
                }

                :deep(.el-textarea__inner:focus) {
                    box-shadow: none;
                }

                :deep(.el-input__count) {
                    background: transparent;
                }
            }

            .desc-select {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 8px;

                .desc-btns {
                    display: flex;
                    align-items: center;

                    .desc-btn {
                        padding: 4px 8px;
                        border-radius: 8px;
                        background: rgb(35, 38, 47);
                        font-size: 12px;
                        line-height: 14px;
                        color: rgb(119, 126, 144);
                        margin-right: 8px;
                    }

                    .active {
                        color: #fff;
                        background: #7851ec;
                    }
                }

                .desc-single {
                    width: 40%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .more {
                        padding: 4px 8px;
                        background: rgb(35, 38, 47);
                        font-size: 12px;
                        border-radius: 8px;
                        color: rgb(119, 126, 144);
                    }

                    .radio {
                        background: rgb(35, 38, 47);
                        border-radius: 8px;
                        overflow: hidden;
                        color: rgb(119, 126, 144);
                        font-size: 12px;
                        line-height: 14px;

                        .radio-item {
                            padding: 2px 4px;

                        }

                        .active {
                            color: #fff;
                            background: #7851ec;
                        }
                    }
                }
            }
        }

        .large-select {
            margin-bottom: 32px;

            .model-item-act,
            .model-item {
                width: 118px !important;
            }

            .text-wrap {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .piexe-wrap {
                margin-top: 12px;
                justify-content: space-between;

                .piexe-item {
                    width: 49%;
                    padding: 8px;
                    background: rgb(35, 38, 47);
                    border-radius: 30px;
                    color: #fff;
                    font-size: 12px;
                    box-sizing: border-box;
                }

                .active {
                    background: radial-gradient(74.76% 334.54% at 49.84% 50%, #374176 0%, rgba(55, 65, 118, 0) 100%);
                    border: 2px solid #fff;
                }
            }
        }

        .theme-select {
            margin-bottom: 32px;

            .theme-list {
                flex-wrap: wrap;
                justify-content: space-between;

                .theme-item {
                    box-sizing: border-box;
                    margin-bottom: 12px;
                    position: relative;
                    width: 138px;
                    height: 64px;
                    border-radius: 8px;
                    overflow: hidden;
                    line-height: 64px;
                    background: url(https://cdn.wujiebantu.com/py/deploy/chanpinsheji.jpg?imageView2/2/w/400/q/75/format/webp) no-repeat center;
                    background-size: 100%;

                    img {
                        position: absolute;
                        right: 4px;
                        top: 4px;
                        height: 14px;
                    }
                }

                .active {
                    border: 2px solid #fff;
                }

                .all {
                    background: rgba(35, 38, 47, 0.32);
                    border: 2px solid rgb(53, 57, 69);
                }
            }
        }

        .style-select {
            margin-bottom: 32px;

            .style-list {
                flex-wrap: wrap;

                .style-item-wrap {
                    width: 25%;
                    padding: 0 8px;
                    box-sizing: border-box;

                    .style-item {
                        padding: 4px;
                        border-radius: 30px;
                        background: rgb(35, 38, 47);
                        margin-bottom: 12px;
                    }

                    .active {
                        background: radial-gradient(74.76% 334.54% at 49.84% 50%, #374176 0%, rgba(55, 65, 118, 0) 100%);
                        border: 2px solid #fff;
                    }

                    .more {
                        background: rgba(35, 38, 47, 0.32);
                        border: 2px solid rgb(53, 57, 69);
                    }
                }
            }
        }

        .count-select {
            margin-bottom: 32px;
            .count-title {
                margin-bottom: 12px;
                justify-content: space-between;

                .count-btn {
                    div {
                        width: 32px;
                        height: 32px;
                        line-height: 32px;
                        font-size: 12px;
                        border-radius: 4px;
                        cursor: pointer;

                        &:nth-child(2n - 1) {
                            background: rgb(35, 38, 47);
                        }

                        &:nth-child(2n) {
                            background: transparent;
                            border: rgb(53, 57, 69) 2px solid;
                            margin: 0 12px;
                        }

                    }

                }
            }

            .select-list {
                .select-item {
                    width: 100%;
                    padding: 20px 16px;
                    border-radius: 18px;
                    background: rgb(35, 38, 47);
                    margin-bottom: 12px;
                    justify-content: space-between;

                    .text {}

                    .desc {
                        color: rgb(177, 181, 196);
                        font-size: 12px;
                    }
                }

                .active {
                    background: radial-gradient(74.76% 334.54% at 49.84% 50%, #374176 0%, rgba(55, 65, 118, 0) 100%);
                    border: 2px solid #fff;
                }
            }

            .privacy {
                text-align: left;
                font-size: 12px;
                color: rgb(177, 181, 196);

                span {
                    color: #7851ec;
                }
            }
        }

        .run-wrap {
            width: 100%;
            padding: 40px 0;
            border-top: 8px solid rgb(53, 57, 69);
            position: sticky;
            background: rgb(20, 20, 22);
            bottom: 0;

            .run-btn {
                width: 100%;
                height: 48px;
                font-size: 16px;
                border-radius: 30px;
                margin: 0 auto;
                cursor: pointer;
                color: #fff;
                border-color: #7851ec;
                background: #7851ec;
                font-weight: 600;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;

                &:hover {
                        border-color: #583ac7;
                        background: #583ac7;
                        transition: all 0.8s;
                    }

                .tips {
                    font-size: 12px;
                    line-height: 12px;
                    font-weight: 400;
                }

                .logo {
                    background: rgba(255, 255, 255, 0.16);
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    position: absolute;
                    right: 8px;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }

    .ai-right {
        flex: 1;
        margin-left: 22px;


        .img-wrap {
            background: rgb(35, 38, 47);
            height: 584px;
            border-radius: 8px;
            overflow: hidden;

            img {
                width: auto;
                height: 100%;
            }
        }
    }
}
</style>