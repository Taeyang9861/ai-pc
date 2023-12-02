<template>
    <div class="header-wrap">
        <div class="header-bg">
            <div class="bg-img">
                <img srcset="https://data.wujiebantu.com/backgroundImage-default/li-zhang-8atj_eBENI8-unsplash.jpg?imageView2/2/w/1200/q/75/format/webp 1200w" src="https://data.wujiebantu.com/backgroundImage-default/li-zhang-8atj_eBENI8-unsplash.jpg?imageView2/2/w/1200/q/75/format/webp" alt="" />
            </div>
            <div class="edit-btn">
                <img src="../../assets/layout/edit.png" alt="">
            </div>
            <div class="bg-count">
                <div class="bg-count-item" v-for="i in bgCount">
                    <div>{{ i.count }}</div>
                    <div>{{ i.title }}</div>
                </div>
            </div>
        </div>
        <div class="user-wrap">
            <div class="avatar">
                <img src="https://cdn.wujiebantu.com/avatar-default/425667513ad64e8592135ae908d410f9.png?imageView2/2/w/400/q/75/format/webp" alt="">
            </div>
            <div class="info">
                <div class="top">
                    <div class="nickname">Wan-zhihao</div>
                    <div class="menus">
                        <div class="menu-item" v-for="i in 3">
                            <div class="ico">
                                <img src="../../assets/layout/cursor.png" alt="">
                            </div>
                            <div class="name">同款榜</div>
                            <div class="top">未上榜</div>
                        </div>
                    </div>
                </div>
                <div class="desc">这个人很懒，什么都没有留下</div>
            </div>
        </div>
    </div>
    <div class="content-wrap">
        <div class="tabs">
            <div :class="['tab-item', actTab === i && 'active' ]" v-for="i in tabs">{{ i }}</div>
        </div>
        <div class="filters">
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
                <el-sub-menu :index="sub1.index" v-for="sub1 in filters">
                    <template #title>{{ sub1.title }}</template>
                    <el-menu-item :index="sub2.title" class="fs16" v-for="sub2 in sub1.child">{{ sub2.title }}</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="lists">
            <div class="no-data">
                <img src="https://www.wujieai.cc/images/empty@2x.png" alt="">
                <div>暂无数据</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const bgCount = ref([
    {
        count: 0,
        title: '关注'
    },
    {
        count: 0,
        title: '粉丝'
    },
    {
        count: 0,
        title: '获赞'
    },
    {
        count: 0,
        title: '发布内容'
    },
    {
        count: 0,
        title: '被同款数'
    }
])

const actTab = ref('AI创作')
const tabs = ref(['AI创作', '帖子', '漫画', '合集'])

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
</script>
<style lang="scss" scoped>
.header-wrap {
    .header-bg {
        position: relative;

        .bg-img {
            height: 260px;
            border-radius: 16px;
            background-color: rgb(20, 20, 22);
            overflow: hidden;

            img {
                min-width: 100%;
                min-height: 100%;
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
            }
        }

        .edit-btn {
            width: 30px;
            height: 30px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            top: 16px;
            right: 16px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                display: block;
                width: 20px;
                height: 20px;
            }
        }

        .bg-count {
            position: absolute;
            right: 16px;
            bottom: 16px;
            padding: 8px;
            background: rgba($color: #000000, $alpha: 0.5);

            display: flex;
            align-items: center;
            justify-content: space-around;
            border-radius: 16px;

            .bg-count-item {
                padding: 0 16px;
            }
        }
    }

    .user-wrap {
        position: relative;
        padding: 16px 0px 16px 168px;

        .avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;

            position: absolute;
            top: -39px;
            left: 24px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .info {
            .desc {
                font-size: 12px;
                line-height: 20px;
                color: rgb(119, 126, 144);
                text-align: left;
            }

            .top {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .nickname {
                    font-size: 24px;
                    line-height: 32px;
                    font-weight: 600;
                    color: rgb(252, 252, 253);
                }

                .menus {
                    display: flex;
                    align-items: center;
                    .menu-item {
                        display: flex;
                        align-items: center;
                        color: rgb(119, 126, 144);
                        font-size: 18px;
                        margin-left: 16px;

                        img {
                            margin: 0 auto;
                        }

                        .name {
                            padding: 0 4px;
                        }
                        .top {
                            padding: 0 6px;
                            background: rgb(35, 38, 57);
                            border-radius: 4px;
                        }
                    }
                }
            }
        }
    }
}

.content-wrap {
    .tabs {
        width: 100%;
        padding: 12px 0;
        border-bottom: 1px solid rgb(53, 57, 69);
        display: flex;

        .tab-item {
            margin-right: 16px;
            color: #777e90;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;

            &:hover {
                color: rgb(255, 255, 255);
                transition: all 0.8s ease;
                font-weight: 800;
            }
        }
        .active  {
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

    .filters {
        :deep(.el-menu--horizontal.el-menu),
        :deep(.el-menu--horizontal > .el-menu-item.is-active),
        :deep(.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title) {
            border: none;
        }
    }

    .lists {
        .no-data {
            margin: 64px auto;
            font-size: 12px;
            color: #777e90;

            img {
                height: 100px;
                width: auto;
                margin-bottom: 24px;
            }
        }
    }
}
</style>
