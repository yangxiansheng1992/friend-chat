// function jumpBox () {
//   $(".startVideo").on("click", function () {
//     ifopen || ($("#videobox").animate({ "z-index": "19999" }, 200, function () {
//       $("#videobox .contentb").animate({
//         bottom: "50%",
//         right: "50%",
//         width: "880px",
//         height: "200px",
//         "margin-bottom": "-100px"
//       }, 500, function () {
//         $(".big").hide(), $(".small").show(), $(".animate").height("575")
//       })
//     }), "iframe1" == $(this).prev().children().find("div").attr("id") ? $(".loading").text($("fieldset #iframe1").html()) : "tziframe" == $(this).prev().children().find("div").attr("id") ? $(".loading").text($("fieldset #tziframe").html()) : "haveBgIframe" == $(this).prev().children().find("div").attr("id") ? $(".loading").text($("fieldset #haveBgIframe").html()) : "noBgIframe" == $(this).prev().children().find("div:eq(1)").attr("id") ? $(".loading").text($("fieldset #noBgIframe").html()) : "Iframe1" == $(this).parent().prev().attr("id") ? $(".loading").text($("fieldset #Iframe1").html()) : "Iframe2" == $(this).parent().prev().attr("id") && $(".loading").text($("fieldset #Iframe2").html()))
//   }), $("#videobox .closevideo").on("click", function () {
//     $("#videobox .contentb").animate({ width: "0", "margin-right": "0" }, 200, function () {
//       $("#videobox").css({ "z-index": "-1", position: "fixed" }), $("#videobox .contentb").css({
//         width: "880px",
//         "margin-right": "-440px",
//         bottom: "-50%"
//       })
//     }), ifopen = !1
//   })
// }

// function getK (t) {
//   switch (1 * t) {
//     case 10001:
//       jumpHtml("html/PK10/pk10kai.html");
//       break;
//     case 10002:
//       jumpHtml("html/shishicai_cq/ssc_index.html");
//       break;
//     case 10050:
//       jumpHtml("html/shishicai_qxc/ssc_index.html");
//       break;
//     case 10003:
//       jumpHtml("html/shishicai_tj/ssc_index.html");
//       break;
//     case 10004:
//       jumpHtml("html/shishicai_xj/ssc_index.html");
//       break;
//     case 10005:
//       jumpHtml("html/klsf/klsf_index.html");
//       break;
//     case 10006:
//       jumpHtml("html/shiyix5_gd/index.html");
//       break;
//     case 10007:
//       jumpHtml("html/k3/kuai3_index.html");
//       break;
//     case 10008:
//       jumpHtml("html/shiyix5_sd/index.html");
//       break;
//     case 10009:
//       jumpHtml("html/cqnc/index.html");
//       break;
//     case 10010:
//       jumpHtml("html/aozxy5/ssc_index.html");
//       break;
//     case 10011:
//       jumpHtml("html/aozxy8/klsf_index.html");
//       break;
//     case 10012:
//       jumpHtml("html/aozxy10/pk10kai.html");
//       break;
//     case 10013:
//       jumpHtml("html/aozxy20/aozxy20_index.html");
//       break;
//     case 10014:
//       jumpHtml("html/beijinkl8/bjkl8_index.html");
//       break;
//     case 10015:
//       jumpHtml("html/shiyix5_jiangxi/index.html");
//       break;
//     case 10016:
//       jumpHtml("html/shiyix5_jiangsu/index.html");
//       break;
//     case 10017:
//       jumpHtml("html/shiyix5_anhui/index.html");
//       break;
//     case 10018:
//       jumpHtml("html/shiyix5_shanghai/index.html");
//       break;
//     case 10019:
//       jumpHtml("html/shiyix5_liaoning/index.html");
//       break;
//     case 10020:
//       jumpHtml("html/shiyix5_hubei/index.html");
//       break;
//     case 10021:
//       jumpHtml("");
//     case 10022:
//       jumpHtml("html/shiyix5_guangxi/index.html");
//       break;
//     case 10023:
//       jumpHtml("html/shiyix5_jiling/index.html");
//       break;
//     case 10024:
//       jumpHtml("html/shiyix5_neimenggu/index.html");
//       break;
//     case 10025:
//       jumpHtml("html/shiyix5_zhejiang/index.html");
//       break;
//     case 10026:
//       jumpHtml("html/kuai3_guangxi/kuai3_index.html");
//       break;
//     case 10027:
//       jumpHtml("html/kuai3_jiling/kuai3_index.html");
//       break;
//     case 10028:
//       jumpHtml("html/kuai3_hebei/kuai3_index.html");
//       break;
//     case 10029:
//       jumpHtml("html/kuai3_neimenggu/kuai3_index.html");
//       break;
//     case 10030:
//       jumpHtml("html/kuai3_anhui/kuai3_index.html");
//       break;
//     case 10031:
//       jumpHtml("html/kuai3_fujian/kuai3_index.html");
//       break;
//     case 10032:
//       jumpHtml("html/kuai3_hubei/kuai3_index.html");
//       break;
//     case 10033:
//       jumpHtml("html/kuai3_beijing/kuai3_index.html");
//       break;
//     case 10034:
//       jumpHtml("html/klsf_tianjin/klsf_index.html");
//       break;
//     case 10035:
//       jumpHtml("html/xingyft/pk10kai.html");
//       break;
//     case 10036:
//       jumpHtml("html/shishicai_jisu/ssc_index.html");
//       break;
//     case 10037:
//       jumpHtml("html/jisusaiche/pk10kai.html");
//       break;
//     case 10038:
//       jumpHtml("html/klsf_gaungxi/klsf_index.html");
//       break;
//     case 10039:
//       jumpHtml("html/fcssq/index.html");
//       break;
//     case 10040:
//       jumpHtml("html/cjdlt/index.html");
//       break;
//     case 10041:
//       jumpHtml("html/fc3D/index.html");
//       break;
//     case 10042:
//       jumpHtml("html/fc7lc/index.html");
//       break;
//     case 10043:
//       jumpHtml("html/tcpl3/index.html");
//       break;
//     case 10044:
//       jumpHtml("html/tcpl5/index.html");
//       break;
//     case 10045:
//       jumpHtml("html/tc7xc/index.html");
//       break;
//     case 10046:
//       jumpHtml("html/PC_egxy28/PC_egxy28index.html");
//       break;
//     case 10047:
//       jumpHtml("html/taiwanbg/twbg_index.html");
//       break;
//     case 10048:
//       window.open("http://6hch.com/html/kaihistory.html")
//   }
// }

// function getH (t) {
//   switch (1 * t) {
//     case 10001:
//       jumpHtml("html/PK10/pk10kai_history.html");
//       break;
//     case 10002:
//       jumpHtml("html/shishicai_cq/ssc_kjhistory.html");
//       break;
//     case 10050:
//       jumpHtml("html/shishicai_qxc/ssc_kjhistory.html");
//       break;
//     case 10003:
//       jumpHtml("html/shishicai_tj/ssc_kjhistory.html");
//       break;
//     case 10004:
//       jumpHtml("html/shishicai_xj/ssc_kjhistory.html");
//       break;
//     case 10005:
//       jumpHtml("html/klsf/klsf_kjhistory.html");
//       break;
//     case 10006:
//       jumpHtml("html/shiyix5_gd/kjhistory.html");
//       break;
//     case 10007:
//       jumpHtml("html/k3/kuai3index_history.html");
//       break;
//     case 10008:
//       jumpHtml("html/shiyix5_sd/kjhistory.html");
//       break;
//     case 10009:
//       jumpHtml("html/cqnc/klsf_kjhistory.html");
//       break;
//     case 10010:
//       jumpHtml("html/aozxy5/ssc_kjhistory.html");
//       break;
//     case 10011:
//       jumpHtml("html/aozxy8/klsf_kjhistory.html");
//       break;
//     case 10012:
//       jumpHtml("html/aozxy10/pk10kai_history.html");
//       break;
//     case 10013:
//       jumpHtml("html/aozxy20/aozxy20_kjhistory.html");
//       break;
//     case 10014:
//       jumpHtml("html/beijinkl8/bjkl8_kjhistory.html");
//       break;
//     case 10015:
//       jumpHtml("html/shiyix5_jiangxi/kjhistory.html");
//       break;
//     case 10016:
//       jumpHtml("html/shiyix5_jiangsu/kjhistory.html");
//       break;
//     case 10017:
//       jumpHtml("html/shiyix5_anhui/kjhistory.html");
//       break;
//     case 10018:
//       jumpHtml("html/shiyix5_shanghai/kjhistory.html");
//       break;
//     case 10019:
//       jumpHtml("html/shiyix5_liaoning/kjhistory.html");
//       break;
//     case 10020:
//       jumpHtml("html/shiyix5_hubei/kjhistory.html");
//       break;
//     case 10021:
//       jumpHtml("");
//     case 10022:
//       jumpHtml("html/shiyix5_guangxi/kjhistory.html");
//       break;
//     case 10023:
//       jumpHtml("html/shiyix5_jiling/kjhistory.html");
//       break;
//     case 10024:
//       jumpHtml("html/shiyix5_neimenggu/kjhistory.html");
//       break;
//     case 10025:
//       jumpHtml("html/shiyix5_zhejiang/kjhistory.html");
//       break;
//     case 10026:
//       jumpHtml("html/kuai3_guangxi/kuai3index_history.html");
//       break;
//     case 10027:
//       jumpHtml("html/kuai3_jiling/kuai3index_history.html");
//       break;
//     case 10028:
//       jumpHtml("html/kuai3_hebei/kuai3index_history.html");
//       break;
//     case 10029:
//       jumpHtml("html/kuai3_neimenggu/kuai3index_history.html");
//       break;
//     case 10030:
//       jumpHtml("html/kuai3_anhui/kuai3index_history.html");
//       break;
//     case 10031:
//       jumpHtml("html/kuai3_fujian/kuai3index_history.html");
//       break;
//     case 10032:
//       jumpHtml("html/kuai3_hubei/kuai3index_history.html");
//       break;
//     case 10033:
//       jumpHtml("html/kuai3_beijing/kuai3index_history.html");
//       break;
//     case 10034:
//       jumpHtml("html/klsf_tianjin/klsf_kjhistory.html");
//       break;
//     case 10035:
//       jumpHtml("html/xingyft/pk10kai_history.html");
//       break;
//     case 10036:
//       jumpHtml("html/shishicai_jisu/ssc_kjhistory.html");
//       break;
//     case 10037:
//       jumpHtml("html/jisusaiche/pk10kai_history.html");
//       break;
//     case 10038:
//       jumpHtml("html/klsf_gaungxi/klsf_kjhistory.html");
//       break;
//     case 10039:
//       jumpHtml("html/fcssq/kjhistory.html");
//       break;
//     case 10040:
//       jumpHtml("html/cjdlt/kjhistory.html");
//       break;
//     case 10041:
//       jumpHtml("html/fc3D/kjhistory.html");
//       break;
//     case 10042:
//       jumpHtml("html/fc7lc/kjhistory.html");
//       break;
//     case 10043:
//       jumpHtml("html/tcpl3/kjhistory.html");
//       break;
//     case 10044:
//       jumpHtml("html/tcpl5/kjhistory.html");
//       break;
//     case 10045:
//       jumpHtml("html/tc7xc/kjhistory.html");
//       break;
//     case 10046:
//       jumpHtml("html/PC_egxy28/PC_egxy28_kjhistory.html");
//       break;
//     case 10047:
//       jumpHtml("html/taiwanbg/twbg_kjhistory.html");
//       break;
//     case 10048:
//       window.open("http://6hch.com/html/kaihistory.html")
//   }
// }

// function jumpHtml (t) {
//   window.open(config.jump() + "" + t)
// }

// var config = {
//   publicUrl: "/",
//   wwwUrl: "",
//   ifdebug: true,
//   listTime: 2e3,
//   startTime: 1e3,
//   ifScalse: $("html").width() / 1125,
//   path: function () {
//     var t = window.location.href, i = "https" == t.split(":")[0] ? "https" : "http";
//     return config.ifdebug ? i + "://" + t.split("/")[2] + "/kaiTransfer/view/" : -1 != t.split("/")[2].indexOf("192") ? i + "://" + t.split("/")[2] + "/kaiTransfer/view/" : i + "://" + t.split("/")[2] + "/view/"
//   },
//   ym: function () {
//     var t = window.location.search.split("?")[1];
//     return "" == t || void 0 == t ? "?" : "?" + t
//   },
//   ymL: function () {
//     var t = window.location.search.split("?");
//     return "" == (t = t[t.length - 1]) || void 0 == t ? "?" : "?" + t
//   },
//   jump: function () {
//     var t = window.location.search.split("?");
//     return "" == (t = t[t.length - 1]) || void 0 == t ? "?" + config.wwwUrl : "//" + t + "/"
//   }
// };
// // oldLog = console.log;
// // console.log = function () {
// //   config.ifdebug && oldLog.apply(console, arguments)
// // };
// var constant = {
//   pk10: { totalIssue: 179 },
//   cqssc: { totalIssue: 120 },
//   tjssc: { totalIssue: 84 },
//   xjssc: { totalIssue: 96 },
//   gdklsf: { totalIssue: 84 },
//   syydj: { totalIssue: 78 },
//   gdsyxw: { totalIssue: 84 },
//   jsks: { totalIssue: 82 },
//   xync: { totalIssue: 97 }
// }, lotCode = {
//   pk10: 10001,
//   jisusaiche: 10037,
//   cqssc: 10002,
//   cqqxc: 10050,
//   tjssc: 10003,
//   xjssc: 10004,
//   jisussc: 10036,
//   gdklsf: 10005,
//   gdsyxw: 10006,
//   gxklsf: 10038,
//   jsksan: 10007,
//   sdsyydj: 10008,
//   cqxync: 10009,
//   aozxy5: 10010,
//   aozxy8: 10011,
//   aozxy10: 10012,
//   aozxy20: 10013,
//   bjkl8: 10014,
//   twbg: 10047,
//   jxef: 10015,
//   jsef: 10016,
//   ahef: 10017,
//   shef: 10018,
//   lnef: 10019,
//   hbef: 10020,
//   cqef: 10021,
//   gxef: 10022,
//   jlef: 10023,
//   nmgef: 10024,
//   zjef: 10025,
//   gxft: 10026,
//   jlft: 10027,
//   hebft: 10028,
//   nmgft: 10029,
//   ahft: 10030,
//   fjft: 10031,
//   hubft: 10032,
//   bjft: 10033,
//   tjklsf: 10034,
//   fcssq: 10039,
//   cjdlt: 10040,
//   fcsd: 10041,
//   fcqlc: 10042,
//   pailie3: 10043,
//   pailie5: 10044,
//   qxc: 10045,
//   egxy28: 10046,
//   xingyft: 10035
// };
// $(function () {
//   jumpBox()
// });
// var ifopen = !1;
