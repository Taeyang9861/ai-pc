<template>
    <div class="banners">
        <div class="banner-img">
            <img :src="bannerList[bannerIndex].img" alt="">
        </div>
        <div class="title-list">
            <div :class="['title-item', idx == bannerIndex && 'active']" v-for="(it, idx) in bannerList" @mouseenter="changeBanner(idx)">{{ it.title }}</div>
        </div>
        <div class="search-wrap">
            <div class="search-input">
                <SearchOutlined style="color: rgb(53 57 69);" />
                <input type="text" placeholder="搜描述词 找AI创作">
            </div>
            <div class="search-words">
                热门搜索：
                <span>精灵</span>
                <span>宫崎骏</span>
                <span>海边</span>
            </div>
        </div>
    </div>
    <div class="list-wrap">
        <div class="btns-wrap flc">
            <div class="tabs-wrap flc">
                <div class="tab-item">关注</div>
                <div class="tab-item active">全部</div>
                <div class="tab-item">通用</div>
                <div class="tab-item">漫画</div>
                <div class="tab-item">风格</div>
                <div class="tab-item">MJ</div>
                <div class="tab-item">工作流</div>
            </div>
            <div class="options flc">
                <div class="options-item">主题</div>
                <div class="options-item active">风格修饰</div>
                <div class="options-item">艺术家</div>
            </div>
            <div class="btns flc">
                <div class="btn-item1">清空</div>
                <div class="btn-item2 flc">
                    <RocketOutlined />
                    <div>排行榜</div>
                </div>
                <div class="btn-item2 flc">
                    <FileAddOutlined />
                    <div>发布AI创作</div>
                </div>
            </div>
        </div>

        <div class="kind-list flc">
            <div class="kind-list-column" v-for="i in 8">
                <div class="kind-item">
                    <div class="text">
                        人物
                    </div>
                </div>
                <div class="kind-item">
                    <div class="text">
                        合集
                    </div>
                </div>
            </div>
        </div>

        <div class="select-wrap flc">
            <div class="select-menu">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" background-color="transparent" text-color="#999" active-text-color="#fff" :teleported="false" @select="handleSelect">
                    <el-sub-menu :index="sub1.index" v-for="sub1 in filters">
                        <template #title>{{ sub1.title }}</template>
                        <el-menu-item :index="sub2.title" class="fs16" v-for="sub2 in sub1.child">{{ sub2.title }}</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </div>
            <div class="layout flc">
                <AppstoreOutlined @click="changeLayout(4)" />
                <BorderOuterOutlined @click="changeLayout(6)" />
                <BorderBottomOutlined @click="changeLayout(8)" />
            </div>
        </div>

        <div class="waterfull-list" :style="{ columnCount: layoutColumn }">
            <div class="waterfull-item" v-for="i in waterfull">
                <div class="img-wrap">
                    <img :src="i" alt="">
                    <div class="btns flc">
                        <div class="btn">
                            <HeartOutlined />
                        </div>
                        <div class="btn">
                            <StarOutlined />
                        </div>
                    </div>
                </div>
                <div class="info-wrap">
                    <div class="desc">绝代风华</div>
                    <div class="info flc">
                        <div class="user flc">
                            <img src="https://cdn.wujiebantu.com/ai/A7802042B5B59C4B3A232B01DC415583-01.jpg?imageView2/2/w/400/q/75/format/webp" alt="">
                            <div class="name">
                                美女太多
                            </div>
                        </div>
                        <div class="like flc">
                            <img src="../../assets/layout/cursor.png" alt="">
                            <div class="name">
                                19
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RocketOutlined, FileAddOutlined, AppstoreOutlined, BorderOuterOutlined, BorderBottomOutlined, SearchOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const activeIndex = ref(-1)

const filters = ref([
    {
        index: 1,
        title: '排序：最新发布',
        child: [
            {
                index: '1-1',
                title: '最新发布'
            },
            {
                index: '1-2',
                title: '同款最多'
            },
            {
                index: '1-3',
                title: '点赞最多'
            },
            {
                index: '1-4',
                title: '收藏最多'
            }
        ]
    },
    {
        index: 2,
        title: '画面尺寸：全部',
        child: [
            {
                index: '2-1',
                title: '1：1'
            },
            {
                index: '2-2',
                title: '1：2'
            },
            {
                index: '2-3',
                title: '4：3'
            },
            {
                index: '2-4',
                title: '3：4'
            }
        ]
    },
    {
        index: 3,
        title: '模型选择：全部',
        child: [
            {
                index: '2-1',
                title: '1：1'
            },
            {
                index: '2-2',
                title: '1：2'
            },
            {
                index: '2-3',
                title: '4：3'
            },
            {
                index: '2-4',
                title: '3：4'
            }
        ]
    },
    {
        index: 4,
        title: '风格模型：全部',
        child: [
            {
                index: '2-1',
                title: '1：1'
            },
            {
                index: '2-2',
                title: '1：2'
            },
            {
                index: '2-3',
                title: '4：3'
            },
            {
                index: '2-4',
                title: '3：4'
            }
        ]
    },
    {
        index: 5,
        title: '参考图：不限',
        child: [
            {
                index: '2-1',
                title: '1：1'
            },
            {
                index: '2-2',
                title: '1：2'
            },
            {
                index: '2-3',
                title: '4：3'
            },
            {
                index: '2-4',
                title: '3：4'
            }
        ]
    },
    {
        index: 6,
        title: '角色同人：不限',
        child: [
            {
                index: '2-1',
                title: '1：1'
            },
            {
                index: '2-2',
                title: '1：2'
            },
            {
                index: '2-3',
                title: '4：3'
            },
            {
                index: '2-4',
                title: '3：4'
            }
        ]
    },
    {
        index: 7,
        title: '融合模型：不限',
        child: [
            {
                index: '2-1',
                title: '1：1'
            },
            {
                index: '2-2',
                title: '1：2'
            },
            {
                index: '2-3',
                title: '4：3'
            },
            {
                index: '2-4',
                title: '3：4'
            }
        ]
    },
    {
        index: 8,
        title: '公开范围：不限',
        child: [
            {
                index: '2-1',
                title: '1：1'
            },
            {
                index: '2-2',
                title: '1：2'
            },
            {
                index: '2-3',
                title: '4：3'
            },
            {
                index: '2-4',
                title: '3：4'
            }
        ]
    },
])

const waterfull = ref([
    'https://cdn.wujiebantu.com/ai/52711ACB8EE2DCB69B2F77BC1E8B925F-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/9E2DE5B2EE6DDA1B824D9C9AB522D875DDCD1F903B890A390D23654D553719C0-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1726988882328686592/1726988882328686592-1.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1724719751160139776/1724719751160139776-2.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1726572987689209856/1726572987689209856-1.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/67B0139B212155D5C6BE2A85793F0EFD0B8934067D62987D6B77166C4E7BBAF3-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1722142188051107840/1722142188051107840-2.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/D8676719AEE2D42E8E3AFD79FC8C339F-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1710597248712183808/1710597248712183808-2.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/A7D17354152F1763FA519BFB229B11D5-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/9F441FA9904C95491736D158FC09B0F9-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/BDB09E90712D4EE37E3A1EF2F95AA60B-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1720714534861148160/1720714534861148160-0.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/09697C7051E7F1E0A2EB60A41B1AB8EC-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1722063016159088640/1722063016159088640-1.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1727363547039535104/1727363547039535104-2.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/50D904288C92ECC5F15BB9868193F58B-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/6D754D815346F0738EDF557D114FD0AC-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1724595176187367424/1724595176187367424-1.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/BD54745C3983A1BC8FD898E4B3CFF164-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1728089266535272448/1728089266535272448-3.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/BA2BB7F21E1AFF5B2C2725383C3327B9-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/midjourney/1723282426114871296/1723282426114871296-1.png?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/C968391C8881ACEA751C0638B7D4AEF7EC2D3A63173B6C50F7B51FC5EC72FD37-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/CC45A3374850DE79B90BAC900D9FAB8E2A95F586DF148F4F4AF9EA039F304E6F-01.jpg?imageView2/2/w/800/q/75/format/webp',
    'https://cdn.wujiebantu.com/ai/6CDB72F2840CF421C54681EFE957FACB-01.jpg?imageView2/2/w/800/q/75/format/webp'
])

const layoutColumn = ref(6)
const changeLayout = (e) => {
    layoutColumn.value = e
}

const bannerIndex = ref(0)
const bannerList = ref([
    {
        index: 0,
        title: '湖南文博会 AI虚拟数字形象创作大赛1',
        img: 'https://data.wujiebantu.com/upload/74C7459E1C26CFF4D280907F2B42189D/1699948585211/FvhsHfViOEzBYy9v4jMko2tiIP7X.jpg?imageView2/2/w/1440/q/75/format/webp&quot'
    },
    {
        index: 0,
        title: '专业版「工作流」征集令来咯！ 创作分享最高得6个月专业版会员',
        img: 'https://data.wujiebantu.com/upload/1C9161D59C5CBC2A540BA96E5C9FABEB/1700552601546/FgYl2urD-SDiI_YCTqmg_-PWegSg.png?imageView2/2/w/1440/q/75/format/webp&quot'
    },
])
const changeBanner = (idx) => {
    bannerIndex.value = idx
}
</script>

<style lang="scss" scoped>
.flc {
    display: flex;
    align-items: center;
}

@media screen and (min-width: 1440px) {
    .banner-img {
        width: 100vw !important;
        transform: translateX(calc(-50% + 720px)) !important;
    }
}

.banners {
    margin-top: -24px;
    position: relative;

    .banner-img {
        width: 100%;

        img {
            width: 100%;
            height: 320px;
        }
    }

    .title-list {
        min-width: 1440px;
        height: 1440px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        z-index: 9;
        height: 100%;

        .title-item {
            background-image: linear-gradient(270deg,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.35) 47.4%,
                    rgba(0, 0, 0, 0) 100%);
            height: 60px;
            line-height: 60px;
            color: rgba($color: #fff, $alpha: 0.5);
            cursor: pointer;
        }

        .active {
            color: #fff;
            font-size: 20px;
        }
    }

    .search-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;

        .search-input {
            width: 600px;
            height: 56px;
            background: #fff;
            border-radius: 12px;
            margin-bottom: 12px;
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;

            input {
                border: none;
                height: 100%;
                flex: 1;
                padding: 0;
                margin-left: 4px;
            }

            input:focus-visible {
                outline: none;
            }

            input:focus {
                outline: none;
            }
        }

        .search-words {
            text-align: left;
            cursor: pointer;

            span {
                margin-right: 8px;
            }
        }
    }
}

.list-wrap {
    .btns-wrap {
        justify-content: space-between;
        padding: 16px 0 12px;

        .tabs-wrap {
            .tab-item {
                margin-right: 16px;
                color: #777e90;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;
            }

            .active {
                color: rgb(255, 255, 255);
                transition: all 0.8s ease;
                font-weight: 800;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: rgb(120, 81, 236);
                }
            }
        }

        .options {
            .options-item {
                margin-right: 16px;
                color: #777e90;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;

                &:hover {
                    color: #fff;
                }
            }

            .active {
                color: #fff;
            }
        }

        .btns {

            .btn-item1 {
                width: 60px;
                height: 32px;
                line-height: 32px;
                border: 1px solid rgb(53, 57, 69);
                border-radius: 30px;
                font-size: 12px;
                color: #777e90;
                cursor: pointer;

                &:hover {
                    color: #fff;
                    border-color: #fff;
                    transition: all 0.8s ease;
                }
            }

            .btn-item2 {
                margin-left: 12px;
                padding: 0 16px;
                height: 32px;
                border-radius: 30px;
                background: rgb(249, 222, 185);
                font-size: 12px;
                color: #000;

                div {
                    margin-left: 8px;
                }

                &:last-child {
                    color: #Fff;
                    background: #7851ec;
                }
            }
        }
    }

    .kind-list {

        // overflow: scroll;
        .kind-list-column {
            margin-left: 14px;

            &:first-child {
                margin-left: 0;
            }

            .kind-item {
                border-radius: 8px;
                width: 163.5px;
                height: 64px;
                background-size: cover;
                background-position: center;
                color: #fcfcfd;
                font-size: 14px;
                line-height: 16px;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                overflow: hidden;


                background-image: linear-gradient(to bottom,
                        rgba(0, 0, 0, 0.1),
                        rgba(0, 0, 0, 0.5)), url(https://data.wujiebantu.com/%E4%BA%BA%E7%89%A9.png);

                .text {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0);
                    transition: background 0.2s ease;

                    &:hover {
                        background: rgba(255, 255, 255, 0.2);
                    }
                }

                &:last-child {
                    margin-top: 8px;
                }
            }
        }
    }

    .select-wrap {
        justify-content: space-between;

        .select-menu {

            :deep(.el-menu--horizontal.el-menu),
            :deep(.el-menu--horizontal > .el-menu-item.is-active),
            :deep(.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title) {
                border: none;
            }

            :deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title) {
                padding: 0 20px 0 0px;
            }

            :deep(.el-sub-menu .el-sub-menu__icon-arrow) {
                right: 4px;
            }
        }

        .layout {
            width: 80px;
            height: 24px;
            background: rgb(53, 57, 69);
            border-radius: 12px;
            justify-content: space-around;
            cursor: pointer;
        }
    }

    .waterfull-list {
        column-count: 8;
        column-gap: 12px;

        .waterfull-item {
            break-inside: avoid;
            margin-bottom: 12px;

            .img-wrap {
                width: 100%;
                border-radius: 12px;
                overflow: hidden;
                cursor: pointer;
                transition: all 0.8s ease;
                position: relative;

                img {
                    width: 100%;
                    height: auto;
                }

                .btns {
                    opacity: 0;
                    justify-content: space-between;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    padding: 12px;
                    box-sizing: border-box;

                    .btn {
                        padding: 4px 8px;
                        border-radius: 4px;
                        background: rgba($color: #000000, $alpha: 0.4);
                    }
                }

                &:hover {
                    .btns {
                        opacity: 1;
                    }
                }
            }

            .info-wrap {
                .desc {
                    color: rgb(177 181 196);
                    font-size: 14px;
                    text-align: left;
                }

                .info {
                    justify-content: space-between;

                    .user {
                        img {
                            width: 16px;
                            height: 16px;
                            border-radius: 50%;
                            margin-right: 4px;
                        }

                        .name {
                            color: rgb(119 126 144);
                            font-size: 12px;
                        }
                    }

                    .like {
                        cursor: pointer;
                        padding: 4px 8px;
                        border-radius: 16px;

                        img {
                            width: 16px;
                            height: 16px;
                        }

                        .name {
                            color: rgb(119 126 144);
                            font-size: 12px;
                        }

                        &:hover {
                            .name {

                                color: #fff !important;
                            }

                            background: #7851ec;
                        }
                    }
                }
            }
        }
    }
}</style>