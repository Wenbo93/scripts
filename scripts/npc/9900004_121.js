var status = 0;
var itemList =   
Array(   
Array(2040502,1,5, 1), //全身铠甲敏捷卷轴10%*5	
Array(2040514,1,5, 1), //全身铠甲智力卷轴10%*5	
Array(2040517,1,5, 1), //全身铠甲运气卷轴10%*5
Array(2040560,0,1, 1), //品克缤全身铠甲力量卷轴	
Array(2040558,0,1, 1), //品克缤全身铠甲运气卷轴
Array(2040556,0,1, 1), //品克缤全身铠甲智力卷轴
Array(2040554,0,1, 1), //品克缤全身铠甲防御卷轴
Array(2040552,0,1, 1), //品克缤全身铠甲敏捷卷轴
Array(4001017,100,1, 0), //火焰的眼
Array(1432182,0,1, 1), //红色之矛
Array(1402214,0,1, 1), //红色双手剑
Array(1422156,1,1, 1), //红色巨锤
Array(1452220,0,1, 1), //红色弓
Array(1462208,0,1, 1), //红色之弩
Array(1472230,0,1, 1), //红色拳甲
Array(1482183,0,1, 1), //红色拳甲
Array(1332242,0,1, 1), //红色切割者
Array(1382226,1,1, 1), //红色长杖
Array(1492194,1,1, 1), //红色短枪
Array(1092050,1,1, 1), //冷艳剑盾

Array(2070005,10,1, 1), //金钱镖
Array(2070006,1,1, 1), //齿轮镖
Array(2070007,1,1, 1), //月牙镖
Array(2070024,0,1, 1), //无限飞镖
Array(2070026,0,1, 1), //黄金闪镖
Array(2070016,0,1, 1), //水晶镖
Array(2070023,0,1, 1), //火焰飞镖
Array(2070019,0,1, 1), //高科技电光镖
Array(2049100,10,3, 1), //混沌卷轴60%*3
Array(2340000,1,1, 1), //祝福卷轴

Array(1113055,100,1, 0), //巨匠之戒
Array(1113064,1,1, 1), //狂战士的匠人不朽戒指
Array(1113065,1,1, 1), //霸王的匠人永恒戒指
Array(1113066,1,1, 1), //神使匠人的永恒戒指	
Array(1113070,0,1), //真红之环
Array(1112613,1,1, 1), //十字旅团降魔戒指
Array(1112782,1,1, 1), //狂龙战士君主戒指	
Array(1112783,1,1, 1), //夜光法师君主戒指
Array(1112784,1,1, 1), //天使君主戒指
Array(1112435,10,1, 1), //第1不速之客戒指	 
Array(1112436,100,1, 0), //第2不速之客戒指	 
Array(1112437,100,1, 0), //第3不速之客戒指					
Array(1112425,100,1, 0), //金怀表戒指			
Array(1112426,100,1, 0), //蒲公英戒指		
Array(1112403,100,1, 0), //力量飞天猪的戒指
Array(1112721,100,1, 0), //暗影双刀 戒指
Array(1112714,1,1, 0), //公爵戒指
Array(1112664,0,1, 1), //守护者的不朽戒指	 
Array(1112665,0,1, 1), //狂战士的不朽戒指	
Array(1112666,0,1, 1), //霸王的永恒戒指
Array(1112667,0,1, 1), //神使的永恒戒指
Array(1113185,0,1, 1), //黑门戒指
Array(1112659,1,1, 0), //冒险家的格拉泰斯戒指	
Array(1112661,1,1, 0), //半月戒指
Array(1112591,100,1, 0), //反抗者勒克斯戒指	
Array(1112592,100,1, 0), //利琳的灵气戒指	
Array(1112593,100,1, 0), //	全能戒指		
Array(1112445,100,1, 0), //反抗者戒指
Array(1112434,100,1, 0), //传道者戒指
Array(1112686,10,1, 0), //希望之树之银色戒指	
Array(1112687,1,1, 0), //	希望之树之金色戒指		
Array(1112689,100,1, 0), //联盟不灭法老戒指
Array(1113017,100,1, 0), //妖精争执戒指
Array(1113039,1,1, 1), //妖精女皇戒指

Array(1382045,100,1, 0), //		火灵珠长杖	
Array(1382046,100,1, 0), //毒灵珠长杖
Array(1382047,100,1, 0), //冰灵珠长杖
Array(1382048,100,1, 0), //雷灵珠长杖
Array(1382049,1,1, 1), //朱雀长杖
Array(1382050,1,1, 1), //玄武长杖
Array(1382051,1,1, 1), //白虎长杖
Array(1382052,1,1, 1), //青龙长杖
Array(1372033,0,1, 1), //青龙长杖
Array(1402037,1,1, 1), //龙背刃
Array(1402063,1,1, 1), // 樱花伞
Array(1332055,70,1, 1), //枫叶超级短刀
Array(1452045,70,1, 1), //枫叶超级双刀
Array(1332056,70,1, 1), //枫叶超级短杖
Array(1372034,70,1, 1), //枫叶超级长杖	 
Array(1382039,70,1, 1), //枫叶超级剑	
Array(1402039,70,1, 1), //枫叶超级斧	
Array(1412027,70,1, 1), //枫叶超级弓	
Array(1432040,70,1, 1), //枫叶超级弩	
Array(1442051,70,1, 1), //枫叶超级拳套
Array(1482022,70,1, 1), //枫叶超级指节	 
Array(1492022,70,1, 1), //枫叶超级短枪
Array(1302064,70,1, 1),//枫叶超级斧           
Array(1402014,0,1, 1), //温度计
Array(1332053,10,1, 1), //野外烧烤串
Array(1302063,10,1, 1), //燃烧的火焰刀
Array(1432037,10,1, 0), //枫叶大将旗
Array(1432039,10,1, 0), //钓鱼竿
Array(1442046,10,1, 0), //超级滑雪板
Array(1382016,10,1, 1), //香菇 
Array(1302084,10,1, 0), //火柴
Array(1302128,10,1, 0), //火柴
Array(1432013,10,1, 0), //南瓜枪
Array(1402044,10,1, 0), //南瓜灯笼
Array(1432046,10,1, 0), //圣诞树手杖
Array(1402013,10,1, 1), //白日剑 
Array(1382015,10,1, 0), //毒蘑菇

Array(1002850,0,1, 1), //圣诞鹿变身帽
Array(1003946,1,1, 1), //革命帽子
Array(1002927,1,1, 1), //心疤狮王
Array(1002926,1,1, 1), //暴力熊帽
Array(1002357,1,1, 1), //扎昆头盔
Array(1003999,70,1, 1), //封印的九尾狐面具
Array(1004822,70,1, 0), //美美烟花帽
Array(1004786,70,1, 0), //恶魔之角
Array(1002939,1,1, 1), //安全帽 
Array(1004096,1,1, 1), //春节舞狮(头)
Array(1004097,10,1, 1), //春节舞狮(身)	
Array(1004098,10,1, 1), //春节舞狮(尾)
Array(1004387,1,1, 1), //圣诞鹿的象征
Array(1003981,10,1, 1), //头顶的宇宙海盗
Array(1003982,1,1, 1), //宇宙海盗半包式头盔
Array(1003980,70,1, 1), //宇宙海盗全包式头盔
Array(1004427,1,1, 1), //宇宙冲撞头盔
Array(1003635,70,1, 0), //天使之翼头箍
Array(1003624,70,1, 0), //狂龙之冠 
Array(1003644,70,1, 0), //战神英雄羽毛
Array(1003646,70,1, 0), //双弩精灵英雄羽毛
Array(1003647,70,1, 0), //幻影英雄羽毛
Array(1003648,70,1, 0), //夜光法师英雄羽毛

Array(1052357,70,1, 0), //冒险岛宝石外套
Array(1052304,10,1, 0), //女皇的优质长袍
Array(1052350,70,1, 0), //傻瓜训练服
Array(1052647,0,1, 1), //革命套服

Array(1072798,70,1, 0), //妖精红帆布鞋
Array(1072238,70,1, 0), //紫色钉鞋
Array(1072239,70,1, 0), //黄色钉鞋
Array(1072366,70,1, 0), //降落伞工作人员鞋
Array(1072368,70,1, 0), //最强工作人员鞋
Array(1072476,70,1, 0), //女皇的优质鞋子
Array(1072477,70,1, 0), //女皇的卓越鞋子
Array(1072534,10,1, 0), //雅典娜女神的鞋子
Array(1072533,10,1, 0), //柔软的鞋子
Array(1072761,0,1, 1), //斯泰拉鞋
Array(1073077,0,1, 1), //黑门长靴
Array(1072619,70,1, 0), //不灭法老鞋
Array(1072638,70,1, 0), //白银三叶草鞋
Array(1072639,70,1, 0), //黄金三叶草鞋

Array(1012070,10,1, 1), //草莓雪糕
Array(1012540,10,1, 1), //雪糕
Array(1012541,10,1, 1), //雪糕
Array(1012542,10,1, 1), //雪糕
Array(1012543,10,1, 1), //雪糕
Array(1022047,70,1, 0), //猫头鹰
Array(1022058,70,1, 0), //狸猫
Array(1022060,70,1, 0), //狐猴
Array(1022067,10,1, 1), //黑狐猴
Array(1022205,70,1, 0), //炎夏潜水镜
Array(1022120,70,1, 0), //旅行者的防风镜
Array(1022129,70,1, 0), //精灵眼镜 
Array(1022160,70,1, 1), //瑞贝卡的古典眼镜
Array(1022251,70,1, 1), //琳的经典眼镜
Array(1022161,70,1, 0), //瑞贝卡的碎眼镜
Array(1022172,70,1, 1), //情人节甜蜜眼镜
Array(1022132,70,1, 0), //升级眼镜
Array(1022117,70,1, 0), //玛瑙龙眼镜
Array(1012011,70,1, 0), //圣诞鹿的鼻子
Array(1012158,70,1, 0), //草莓幕斯
Array(1012077,70,1, 0), //哭泣的假面
Array(1012292,10,1, 1), //哭泣的假面
Array(1012079,70,1, 0), //郁闷的假面
Array(1012293,10,1, 1), //郁闷的假面
Array(1012076,70,1, 0), //微笑的假面
Array(1012294,10,1, 1), //微笑的假面
Array(1012078,70,1, 0), //生气的假面
Array(1012295,10,1, 1), //生气的假面
Array(1022170,70,1, 0), //反抗者面具

Array(1012286,70,1, 0), //传说枫叶
Array(1012309,70,1, 0), //热血面罩
Array(1012338,70,1, 0), //僵尸猎人面具
Array(1012469,70,1, 1), //分手面罩
Array(1012281,10,1, 1), //淡蓝粉扑
Array(1012291,10,1, 0), //心跳初恋
Array(1012310,10,1, 1), //情人节甜蜜巧克力
Array(1012535,1,1, 1), //黑门面具
Array(1012532,10,1, 1), //品克缤脸饰
Array(1082002,70,1, 0), //工地手套
Array(1082145,70,1, 0), //工地手套(黄) 
Array(1082146,70,1, 0), //工地手套(红)
Array(1082147,70,1, 0), //工地手套(蓝) 
Array(1082148,70,1, 0), //工地手套(紫) 
Array(1082149,10,1, 1), //工地手套(褐)  
Array(1082512,10,1, 1), //情人节手镯(高级)
Array(1082513,70,1, 0), //情人节手镯(中级) 
Array(1082514,70,1, 0), //情人节手镯(低级)
Array(1082518,10,1, 1), //情人节手镯(最高级)
Array(1082587,70,1, 0), //2014运动会优胜组手套
Array(1082536,70,1, 0), //冒险岛赛手手套
Array(1082516,70,1, 0), //妖精争执手套
Array(1082252,70,1, 0), //枫叶手套
Array(1082540,10,1, 1), //革命手套
Array(1082313,70,1, 0), //枫叶超级手套

Array(1032099,10,1, 1), //葡萄耳环
Array(1032194,70,1, 0), //瑞贝卡的葡萄耳环
Array(1032127,10,1, 0), //希望之树之银色耳环	
Array(1032128,10,1, 1), //希望之树之金色耳环	
Array(1032105,10,1, 1), //神圣拯救者耳环
Array(1032114,70,1, 0), //酸甜耳环	
Array(1032116,70,1, 0), //传说酸甜耳环
Array(1032193,10,1, 1), //瑞贝卡的酸甜耳环
Array(1032121,70,1, 0), //运动会优胜组耳环	
Array(1032122,70,1, 0), //升级耳环
Array(1032166,70,1, 0), //斯泰拉耳环
Array(1032203,10,1, 1), //进化耳环	
Array(1032216,1,1, 1), //真红耳环	 
Array(1032217,0,1, 1), //逆转宝石耳环
Array(1032226,10,1, 1), //兔耳环

Array(1132000,1,1, 0), //白色腰带
Array(1132001,1,1, 0), //黄色腰带
Array(1132002,1,1, 0), //蓝色腰带
Array(1132003,1,1, 0), //红色腰带
Array(1132004,1,1, 0), //黑贺腰带	
Array(1132133,70,1, 0), //希望之树之银色腰带
Array(1132134,10,1, 1), //希望之树之金色腰带
Array(1132135,1,1, 1), //希望之树之传说腰带
Array(1132005,0,1, 0), //白色曲奇腰带	
Array(1132006,0,1, 0), //黄色曲奇腰带	
Array(1132010,70,1, 0), //黄金猪猪腰带	
Array(1132011,70,1, 0), //黄金猪猪腰带	 
Array(1132044,0,1, 0), //坚韧绿色皮腰带		 
Array(1132046,0,1, 0), //坚韧棕色皮腰带		 
Array(1132051,10,1, 0), //坚韧蓝色金腰带	 
Array(1132052,10,1, 0), //坚韧棕色金腰带	  
Array(1132192,1,1, 1), //S级力量宝石腰带	 
Array(1132196,1,1, 1), //S级运气宝石腰带	 
Array(1132200,1,1, 1), //S级智慧宝石腰带	  
Array(1132204,1,1, 1), //S级敏捷宝石腰带

Array(1102840,70,1, 1), //黑门披风	
Array(1102040,70,1, 0), //浪人披风(黄)	
Array(1102041,1,1, 1), //浪人披风(粉)	
Array(1102042,70,1, 0), //浪人披风(紫)	
Array(1102043,70,1, 0), //浪人披风(褐)
Array(1102467,70,1, 0), //风暴披风
Array(1102612,70,1, 1), //革命披风
Array(1102777,1,1, 1), //宇宙冲撞披风
Array(1102471,0,1, 1), //赫里希安精锐战士披风
Array(1102472,0,1, 1), //赫里希安精锐法师披风	 
Array(1102473,0,1, 1), //赫里希安精锐弓箭手披风
Array(1102474,0,1, 1), //赫里希安精锐飞侠披风	
Array(1102475,0,1, 1) //赫里希安精锐海盗披风
//Array(2430144,0,1, 1), //秘密能手册

);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
           selStr = "#e#r该玩具箱可以获得以下物品，99%获得\r\n\#b是否消耗 #g1#r个#b#v4310158#\r\n来一发？#b[#r100%获得，绝无欺骗#b]#n#k\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
			
			cm.sendOk(selStr);
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		selStr = "\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
        if (cm.haveItem(4310158, 1)) {
            cm.sendYesNo("只要你有#v4310158#，就可以从我手中拿走一件装备\r\n\#b是否消耗 #g1#r个#b#v4310158#（可在自由市场#r卡姗德拉#b处用积分兑换）\r\n来获得称霸武林的力量？#b[#r100%获得，绝无欺骗#b]"+selStr);
        } else {
            cm.sendOk("只要你有#v4310158#，就可以从我手中拿走一件装备\r\n\#b是否消耗 #g1#r个#b#v4310158#（可在自由市场#r卡姗德拉#b处用积分兑换）\r\n来获得称霸武林的力量？#b[#r100%获得，绝无欺骗#b]"+selStr);
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 8);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "积分抽奖", notice);
            if (item != -1) {
                cm.gainItem(4310158, -1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你确实有#b#v4310158##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。\r\n\r\n#b#v4310158# 请通过充值或者雪花兑换获得！！！武林在这里等着你");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。");
            cm.gainItem(4310158, -1);
            cm.safeDispose();
        }
    }
}