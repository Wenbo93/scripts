var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/1#";
var Y = "#fUI/GuildMark.img/Mark/Letter/00005024/3#";
var X = "#fUI/GuildMark.img/Mark/Letter/00005023/1#";
var D = "#fUI/GuildMark.img/Mark/Letter/00005003/1#";
var M = "#fUI/GuildMark.img/Mark/Letter/00005012/1#";
var A = "#fUI/GuildMark.img/Mark/Letter/00005000/1#";
var P = "#fUI/GuildMark.img/Mark/Letter/00005015/1#";
var Z = "#fUI/GuildMark.img/Mark/Letter/00005025/9#";
var 九 = "#fUI/GuildMark.img/Mark/Letter/00005035/15#";
var 七 = "#fUI/GuildMark.img/Mark/Letter/00005033/15#";
var 零 = "#fUI/GuildMark.img/Mark/Letter/00005026/15#";
var 返回市场 = "#fEffect/SkillName1.img/1001003/返回市场#";
var 远程传送 = "#fEffect/SkillName1.img/1001003/远程传送#";
var 活跃成就 = "#fEffect/SkillName1.img/1001003/活跃成就#";
var 清理背包 = "#fEffect/SkillName1.img/1001003/清理背包#";
var 快捷商店 = "#fEffect/SkillName1.img/1001003/快捷商店#";
var 快速转职 = "#fEffect/SkillName1.img/1001003/快速转职#";
var 签到 = "#fEffect/SkillName1.img/1001003/签到#";
var 自由1 = "#fEffect/SkillName1.img/1001003/自由1#";



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	    if (cm.getMapId() == 20000 || cm.getMapId() == 10000) {
            cm.sendOk(" 自 由 冒 险 岛 境 外 无 法 使 用 此 功 能 。");
            cm.dispose();
        }

	if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("你的等级未达到10级，因此未能解锁本功能");
        cm.dispose();
		 }
  
    else if (status == 0) {
        var selStr = "#e#r┏#k━━━━━━━━━━━━━━━━━━━#r┓#k\r\n";
		selStr += "         #r自由管理员1号，为您服务\r\n";
		
		selStr += "#r┗#k━━━━━━━━━━━━━━━━━━━#r┛#k#n\r\n";
		
			
		selStr += "#b#L0#自由宝#l     #L2#口令领奖#l#k\r\n\r\n";
		
		selStr += "    #b#L4#参加活动#l \r\n\r\n";
		
		
		  

		  

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {

			 		case 0:
            cm.dispose();
            cm.openNpc(9000064,9);	
           
			 break;
			 		case 1:
            cm.dispose();
            cm.openNpc(9000064,2);	
             break;
			         case 2:
            cm.dispose();
            cm.openNpc(9000064,3);	
             break;
			         case 3:
            cm.dispose();
            cm.openNpc(9000064,5);	
             break;
			        case 4:
            cm.dispose();
            cm.openNpc(9000064,4);	
             break;
			 
			       case 5:
            cm.dispose();
            cm.openNpc(9000064,6);	
             break;
		}
    }
}