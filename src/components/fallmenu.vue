<template>
    <div class="fall-nav">
        <div class="fall-show">
            <div class="">
                <i class="nav-arrows nav-toright">+</i>
                <i class="nav-arrows nav-toleft">+</i>
            </div>
            <ul class="header-nav">
                <li v-for="(level1,index) in dataset" :key="index" class="header-item">
                    <a href="">{{level1.title}}</a>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            dataset:
                [{
                    title: "测试1",
                    child: [
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        }]
                },
                {
                    title: "测试1",
                    child: [
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        }]
                },
                {
                    title: "测试1",
                    child: [
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        }]
                },
                {
                    title: "测试1",
                    child: [
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        },
                        {
                            title: "测试12",
                            child:
                                [
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    },
                                    {
                                        title: "测试113", child: [
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" },
                                            { tilte: "测试1114" }
                                        ]
                                    }
                                ]
                        }]
                }, { title: '测试1测试1' }, { title: '测试测试' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }, { title: '测试1' }]
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
  outline: none;
}
.fall-nav {
  position: relative;
  float: left;
  width: 100%;
}

.fall-nav .header-nav {
  width: 50000px;
  margin-left: 40px;
  font-size: 14px;
  /* position: absolute; */
  top: 0;
  left: 0;
  box-sizing: border-box;
  color: #fff;
  z-index: 10;
  transition: background 0.3s ease;
}
.fall-nav .header-nav .header-item {
  text-align: center;
  padding: 24px 12px;
  /* margin-right: 12px; */
  border: solid 1px #ccc;
  min-width: 160px;
}

.fall-nav .header-nav .header-item a {
  color: black;
  font-size: 1.5em;
  font-weight: 600;
}

.header-nav li {
  position: relative;
  float: left;
  line-height: 1;
}

.fall-nav .nav-arrows {
  position: fixed;
  width: 50px;
  height: 71px;
  background: #ccc;
}
.fall-nav .nav-arrows.nav-toright {
  right: 0;
}
.fall-nav .nav-arrows.nav-toleft {
  left: 0;
}
</style>


