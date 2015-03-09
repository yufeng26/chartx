
KISSY.ready(function(){

    var S = KISSY;
    window.data1= [
        ["val1","val2","val3","val4"],
        [ 1 , 101  , 201 , 301 ] 

    ];
    var options = {
        // title : "first charts",
        // disXAxisLine : 26,
        // disYAxisTopLine : 26,
        //rotate   : -90,
        disYAndO : 20,
        mode  : 1,                                  //模式( 1 = 正常(y轴在背景左侧) | 2 = 叠加(y轴叠加在背景上))[默认：1]
        yAxis : {
            mode     : 1,                           //模式( 1 = 正常 | 2 = 显示两条(最下面 + 最上面 且与背景线不对其))
            field   : ["val4","val3"],
            dataMode : 0,
            line:{
                enabled : 0,
                // strokeStyle : '#ff0000'
            },
            text:{
                fillStyle:'#999999',
                fontSize  : 12
            }
        },
        xAxis : {
            field : "val2",
            disY: 6,
            dis : 6,
            line:{
                width   : 2,
                height  : 4,
                strokeStyle   : '#cccccc'
            },
            text:{
                fontSize  : 10
            }
        },
        back : {
            xOrigin:{
                thinkness:1,
                strokeStyle : '#333333'
            },
            yOrigin:{
                enabled:0
            },
            xAxis:{
                // lineType: ''
                thinkness   : 1,
                strokeStyle : '#cccccc'
            },
            yAxis:{
                // enabled : 0
            }
        },
        graphs:{
                node : {
                    enabled : true
                },
                line : {
                    strokeStyle : {
                        normals : ['#f8ab5e','#E55C5C'],
                    }
                }
  
        },       
        tips  :{
            prefix  : ["黑色玫瑰","水晶之痕"]
        }
    }

    KISSY.use("chartx/chart/line/ , node" , function( S , Line ){
        window.line = new Line( S.all("#canvasTest") , data1 , options);
        line.draw();
    });
});
