/**
 * Created by xiaojun on 15/8/8.
 */
window.onload = function(){
    // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('home'));
            var people = ec.init(document.getElementById('boy_girl'));
            var people_school = ec.init(document.getElementById('boy_girl_school'));
            var birthday = ec.init(document.getElementById('birthday'));
            var constellation = ec.init(document.getElementById('constellation'));
            var difficult = ec.init(document.getElementById('difficult'));
            var graduation = ec.init(document.getElementById('graduation'));
            var graduations = ec.init(document.getElementById('graduations'));
            var idx = 1;
            var option = [
                {
                    title : {
                        text: '同乡比例',
                        x:'center',
                        y:'310',
                        textStyle : {
                            fontSize : '25',
                            color:'#692d0f'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : '65%',
                        y :'60%',
                        data:['重庆','全校人数'],
                        textStyle : {
                            fontSize : '20',
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : ['30%', '40%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                                emphasis : {
                                    label : {
                                        show : true,
                                        position : 'center',
                                        textStyle : {
                                            fontSize : '20',
                                            fontWeight : 'bold'
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'重庆'},
                                {value:310, name:'全校人数'},
                            ]
                        }
                    ]
                },
                {
                    title : {
                        text: '所在学院男女比例',
                        x:'220',
                        y:'310',
                        textStyle : {
                            fontSize : '25',
                            color:'#692d0f'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    //legend: {
                    //    orient : 'vertical',
                    //    x : '70%',
                    //    y :'60%',
                    //    data:['重庆','全校人数'],
                    //    textStyle : {
                    //        fontSize : '20',
                    //    }
                    //},
                    calculable : true,
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : ['30%', '40%'],
                            center: ['70%', '50%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                                emphasis : {
                                    label : {
                                        show : true,
                                        position : 'center',
                                        textStyle : {
                                            fontSize : '20',
                                            fontWeight : 'bold'
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'男生'},
                                {value:310, name:'女生'},
                            ]
                        }
                    ]
                },
                {
                    title : {
                        text: '学校男女比例',
                        x:'55',
                        y:'310',
                        textStyle : {
                            fontSize : '25',
                            color:'#692d0f'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : '70%',
                        y :'60%',
                        data:['男生','女生'],
                        textStyle : {
                            fontSize : '20',
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : ['30%', '40%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                                emphasis : {
                                    label : {
                                        show : true,
                                        position : 'center',
                                        textStyle : {
                                            fontSize : '20',
                                            fontWeight : 'bold'
                                        }
                                    }
                                }
                            },
                            center: ['30%', '50%'],
                            data:[
                                {value:335, name:'男生'},
                                {value:310, name:'女生'},
                            ]
                        }
                    ]
                },
                {
                    title : {
                        text: '同年同月比例',
                        x:'240',
                        y:'310',
                        textStyle : {
                            fontSize : '25',
                            color:'#692d0f'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    //legend: {
                    //    orient : 'vertical',
                    //    x : '70%',
                    //    y :'60%',
                    //    data:['重庆','全校人数'],
                    //    textStyle : {
                    //        fontSize : '20',
                    //    }
                    //},
                    calculable : true,
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : ['30%', '40%'],
                            center: ['70%', '50%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                                emphasis : {
                                    label : {
                                        show : true,
                                        position : 'center',
                                        textStyle : {
                                            fontSize : '20',
                                            fontWeight : 'bold'
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'同月同日/同星座'},
                                {value:310, name:'全校人数'},
                            ]
                        }
                    ]
                },
                {
                    title : {
                        text: '同星座比例',
                        x:'75',
                        y:'310',
                        textStyle : {
                            fontSize : '25',
                            color:'#692d0f'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : '65%',
                        y :'60%',
                        data:['同月同日/同星座','全校人数'],
                        textStyle : {
                            fontSize : '14',
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : ['30%', '40%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                                emphasis : {
                                    label : {
                                        show : true,
                                        position : 'center',
                                        textStyle : {
                                            fontSize : '20',
                                            fontWeight : 'bold'
                                        }
                                    }
                                }
                            },
                            center: ['30%', '50%'],
                            data:[
                                {value:335, name:'同月同日/同星座'},
                                {value:310, name:'全校人数'},
                            ]
                        }
                    ]
                },
                {
                    timeline : {
                    data : [
                        '计院','通信','自动化', '光电', '传媒',
                        '经管',
                        '外国语', '体院', '生物', '软件', '法学院','数理','国际'
                    ],
                    label : {
                        formatter : function(s) {
                            return s;
                        }
                    },
                        type:'number'
                },
                    options : [
                        {

                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient : 'vertical',
                                x:'700',
                                y:'200',
                                data:['设计素描','西方美术史','中外设计史']
                            },
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    center: ['50%', '45%'],
                                    radius: '50%',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'设计素描'},
                                        {value: idx * 64  + 160,  name:'西方美术史'},
                                        {value: idx * 32  + 320,  name:'中外设计史'},
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : '700',
                        y:'50',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },

                    calculable : true,
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : '60%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
                },
                {
                    timeline : {
                        data : [
                            '计院','通信','自动化'
                        ],
                        label : {
                            formatter : function(s) {
                                return s;
                            }
                        },
                        type:'number'
                    },
                    options : [
                        {

                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient : 'vertical',
                                x:'700',
                                y:'100',
                                data:['Chrome','Firefox','Safari','IE9+','IE8-']
                            },
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    center: ['50%', '45%'],
                                    radius: '40%',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        },
                        {
                            series : [
                                {
                                    name:'浏览器（数据纯属虚构）',
                                    type:'pie',
                                    data:[
                                        {value: idx * 128 + 80,  name:'Chrome'},
                                        {value: idx * 64  + 160,  name:'Firefox'},
                                        {value: idx * 32  + 320,  name:'Safari'},
                                        {value: idx * 16  + 640,  name:'IE9+'},
                                        {value: idx++ * 8  + 1280, name:'IE8-'}
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]


            // 为echarts对象加载数据
            myChart.setOption(option[0]);
            people.setOption(option[2]);
            people_school.setOption(option[1]);
            birthday.setOption(option[3]);
            constellation.setOption(option[4]);
            difficult.setOption(option[5]);
            graduation.setOption(option[6]);
            graduations.setOption(option[7]);
        }
    );
}