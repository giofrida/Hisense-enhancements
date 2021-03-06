/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetSetWifiIpSetDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetWifiIpSetHeadTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetWifiIpSetTypeTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetWifiIpSetTypeValue",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetWifiIpSetTypeNav",
            "description":"IP设置方式",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingNetSetWifiIpSetType",
                    "description":"网络设置方式",
                    "CaEType":"div"
                }
            ],
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingNetSetWifiIpSetType"],
                "PageSize":2,
                "ArrowFlag":true
            },
            "classes":{
                "normal":"wizardSetItemListLi_2_Normal","focus":"wizardSetItemListLi_2_Focus",
                "dataSelected":"wizardSetItemListLi_2_Selected","disable":"wizardSetItemListLi_2_Disable"
            },
            "nav":{
                "downTo":"settingNetSetWifiIpInfoUl"
            },
            "handler":{
                "aftLeftHandler":"settingNetSetWifiIpSetTypeEnterHandle","aftRightHandler":"settingNetSetWifiIpSetTypeEnterHandle"
            }
        },
        {
            "id":"settingNetSetWifiIpInfoUl",
            "description":"IP地址信息",
            "CaEType":"Ul",
            "firstFocusId":"settingNetSetWifiIpSetInput0",
            "oriCaE":[
                {
                    "id":"settingNetSetWifiIpSetInfoTitle",
                    "description":"ip头信息",
                    "CaEType":"span",
                    "classes":{
                        "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
                    }
                },
                {
                    "id":"settingNetSetWifiIpSetInfoTitleSuffix",
                    "description":"ip头信息",
                    "CaEType":"span",
                    "classes":{
                        "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
                    }
                },
                {
                    "id":"settingNetSetWifiIpSetInput0",
                    "description":"ip地址第一个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
//                    "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"settingNetSetWifiIpSetInputOnChage",
//                    "maxlength":3,
                    "classes":{
                        "normal":"settingIpAddrInputNormal","focus":"settingIpAddrInputFocus","disable":"settingIpAddrInputDisable"
                    },
                    "nav":{
                        "rightTo":"settingNetSetWifiIpSetInput1"
                    },
                    "handler":{
                        "aftLeftHandler":"setSettingNetSetWifiIpSetClearFlag",
                        "aftRightHandler":"setSettingNetSetWifiIpSetClearFlag"
                    }
                },
                {
                    "id":"settingNetSetWifiIpSetInput1",
                    "description":"ip地址第2个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
//                    "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"settingNetSetWifiIpSetInputOnChage",
//                    "maxlength":3,
                    "classes":{
                        "normal":"settingIpAddrInputNormal","focus":"settingIpAddrInputFocus","disable":"settingIpAddrInputDisable","DataSelectedIndex":"settingIpAddrInputNormal"
                    },
                    "nav":{
                        "leftTo":"settingNetSetWifiIpSetInput0","rightTo":"settingNetSetWifiIpSetInput2"
                    },
                    "handler":{
                        "aftLeftHandler":"setSettingNetSetWifiIpSetClearFlag",
                        "aftRightHandler":"setSettingNetSetWifiIpSetClearFlag"
                    }
                },
                {
                    "id":"settingNetSetWifiIpSetInput2",
                    "description":"ip地址第3个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
//                    "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"settingNetSetWifiIpSetInputOnChage",
//                    "maxlength":3,
                    "classes":{
                        "normal":"settingIpAddrInputNormal","focus":"settingIpAddrInputFocus","disable":"settingIpAddrInputDisable"
                    },
                    "nav":{
                        "leftTo":"settingNetSetWifiIpSetInput1","rightTo":"settingNetSetWifiIpSetInput3"
                    },
                    "handler":{
                        "aftLeftHandler":"setSettingNetSetWifiIpSetClearFlag",
                        "aftRightHandler":"setSettingNetSetWifiIpSetClearFlag"
                    }
                },
                {
                    "id":"settingNetSetWifiIpSetInput3",
                    "description":"ip地址第4个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
//                    "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"settingNetSetWifiIpSetInputOnChage",
//                    "maxlength":3,
                    "classes":{
                        "normal":"settingIpAddrInputNormal","focus":"settingIpAddrInputFocus","disable":"settingIpAddrInputDisable","DataSelectedIndex":"settingIpAddrInputNormal"
                    },
                    "nav":{
                        "leftTo":"settingNetSetWifiIpSetInput2","rightTo":""
                    },
                    "handler":{
                        "aftLeftHandler":"setSettingNetSetWifiIpSetClearFlag",
                        "aftRightHandler":"setSettingNetSetWifiIpSetClearFlag"
                    }
                }

            ],
            "UlConfig":{
                "UlDataItem":["settingNetSetWifiIpSetInfoTitle","settingNetSetWifiIpSetInfoTitleSuffix","settingNetSetWifiIpSetInput0","settingNetSetWifiIpSetInput1","settingNetSetWifiIpSetInput2","settingNetSetWifiIpSetInput3"],
                "PageSize":5
            },
            "nav":{
                "upTo":"settingNetSetWifiIpSetTypeNav","downTo":""
            },
            "handler":{
                "aftUpHandler":"setSettingNetSetWifiIpSetClearFlag",
                "aftDownHandler":"setSettingNetSetWifiIpSetClearFlag"
            },
            "classes":{
                "normal":"settingEtherIPV4InfoLi","focus":"settingEtherIPV4InfoLi",
                "disable":"settingEtherIPV4InfoLi",
                "DataSelectedIndex":"settingEtherIPV4InfoLi","selected":"settingEtherIPV4InfoLi"
            }
        }
    ];
    settingInitNetSetWifiIpSetDialogData();
    getSettingNetSetWifiIpSetOriConfigType();
    return settingNetSetWifiIpSetDialogData;
}
var settingNetSetWifiIpSetDialogData={
    "settingNetSetWifiIpSetHeadTitle":{"Data":"IP Setting"},
    "settingNetSetWifiIpSetTypeTitle":{"Data":"IP Setting Mode"},
    "settingNetSetWifiIpSetTypeValue":{"Data":"DHCP"},
    "settingNetSetWifiIpSetTypeNav":{
        "Data":[
            {
                "settingNetSetWifiIpSetType":{"Data":"DHCP"}
            },
            {
                "settingNetSetWifiIpSetType":{"Data":"Manual"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingNetSetWifiIpInfoUl":{
        "Data":[
            {
                "settingNetSetWifiIpSetInfoTitle":{"Data":"IP Address"},
                "settingNetSetWifiIpSetInfoTitleSuffix":{"Data":":"},
                "settingNetSetWifiIpSetInput0":{"Data":"0"},
                "settingNetSetWifiIpSetInput1":{"Data":"0"},
                "settingNetSetWifiIpSetInput2":{"Data":"0"},
                "settingNetSetWifiIpSetInput3":{"Data":"0"}
            },
            {
                "settingNetSetWifiIpSetInfoTitle":{"Data":"Netmask"},
                "settingNetSetWifiIpSetInfoTitleSuffix":{"Data":":"},
                "settingNetSetWifiIpSetInput0":{"Data":"0"},
                "settingNetSetWifiIpSetInput1":{"Data":"0"},
                "settingNetSetWifiIpSetInput2":{"Data":"0"},
                "settingNetSetWifiIpSetInput3":{"Data":"0"}
            },
            {
                "settingNetSetWifiIpSetInfoTitle":{"Data":"Gateway"},
                "settingNetSetWifiIpSetInfoTitleSuffix":{"Data":":"},
                "settingNetSetWifiIpSetInput0":{"Data":"0"},
                "settingNetSetWifiIpSetInput1":{"Data":"0"},
                "settingNetSetWifiIpSetInput2":{"Data":"0"},
                "settingNetSetWifiIpSetInput3":{"Data":"0"}
            },
            {
                "settingNetSetWifiIpSetInfoTitle":{"Data":"DNS Server 1"},
                "settingNetSetWifiIpSetInfoTitleSuffix":{"Data":":"},
                "settingNetSetWifiIpSetInput0":{"Data":"0"},
                "settingNetSetWifiIpSetInput1":{"Data":"0"},
                "settingNetSetWifiIpSetInput2":{"Data":"0"},
                "settingNetSetWifiIpSetInput3":{"Data":"0"}
            },
            {
                "settingNetSetWifiIpSetInfoTitle":{"Data":"DNS Server 2"},
                "settingNetSetWifiIpSetInfoTitleSuffix":{"Data":":"},
                "settingNetSetWifiIpSetInput0":{"Data":"0"},
                "settingNetSetWifiIpSetInput1":{"Data":"0"},
                "settingNetSetWifiIpSetInput2":{"Data":"0"},
                "settingNetSetWifiIpSetInput3":{"Data":"0"}
            }
        ],
        "SelectedIndex":0,
        "disable":false
    },
    "operateData":{
        "ipConfigType":0,// 0,automatic,1:manual
        "oriIpConfigType":0,
        "ipAddress":"",
        "subnet_Mask":"",
        "default_Gateway":"",
        "primary_DNS":"",
        "secondary_DNS":"",
        "clearFlag":0
    },
    "langData":{
        "IP Setting":["IP Setting"],
        "IP Setting Mode":["IP Setting Mode"],
        "DHCP":["DHCP"],
        "Manual":["Manual"],
        "IP Address":["IP Address"],
        "Netmask":["Netmask"],
        "Gateway":["Gateway"],
        "DNS Server 1":["DNS Server 1"],
        "DNS Server 2":["DNS Server 2"]
    },
    rewrite:"settingRewriteNetSetWifiIpSetPage"
}
function getSettingNetSetWifiIpSetOriConfigType(){
    var operateData = settingNetSetWifiIpSetDialogData.operateData;
    operateData.oriIpConfigType = operateData.ipConfigType;
}
/*******************************************************************
 name:settingInitNetSetWifiIpSetDialogData
 description:初始化有线
 input:
 output:
 return
 *******************************************************************/
function settingInitNetSetWifiIpSetDialogData(){
    try{
        var operateData = settingNetSetWifiIpSetDialogData.operateData;
        operateData.clearFlag = 1;
        if(tv == false){
            operateData.ipConfigType = 0;
            operateData.ipAddress = "2.2.3.176";
            operateData.subnet_Mask = "255.255.255.0";
            operateData.default_Gateway = "2.2.2.1";
            operateData.primary_DNS = "202.102.128.68";
            operateData.secondary_DNS = "219.147.1.66";
        }else{
            operateData.ipConfigType = model.network.getEnumIp_config();
            operateData.ipAddress = model.network.getIp_address();
            operateData.subnet_Mask = model.network.getSubnet_mask();
            operateData.default_Gateway = model.network.getGateway();
            operateData.primary_DNS = model.network.getDns_server_1();
            operateData.secondary_DNS = model.network.getDns_server_2();
            debugPrint("settingInitNetSetWifiIpSetDialogData:ipConfigType="+operateData.ipConfigType);
            debugPrint(operateData.ipAddress);
            debugPrint(operateData.subnet_Mask);
            debugPrint(operateData.default_Gateway);
            debugPrint(operateData.primary_DNS);
            debugPrint(operateData.secondary_DNS);
        }
    }catch (ex){
        debugPrint("settingInitNetSetWifiIpSetDialogData:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetSetWifiIpSetPage
 description:刷新有线设置页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetWifiIpSetPage(data){
    try{
        var ipAddrArray = data.operateData.ipAddress.split(".");
        if(ipAddrArray.length != 4){
            data.settingNetSetWifiIpInfoUl.Data[0].settingNetSetWifiIpSetInput0.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[0].settingNetSetWifiIpSetInput1.Data ="";
            data.settingNetSetWifiIpInfoUl.Data[0].settingNetSetWifiIpSetInput2.Data ="";
            data.settingNetSetWifiIpInfoUl.Data[0].settingNetSetWifiIpSetInput3.Data ="";
        }else{
            data.settingNetSetWifiIpInfoUl.Data[0].settingNetSetWifiIpSetInput0.Data = ipAddrArray[0];
            data.settingNetSetWifiIpInfoUl.Data[0].settingNetSetWifiIpSetInput1.Data = ipAddrArray[1];
            data.settingNetSetWifiIpInfoUl.Data[0].settingNetSetWifiIpSetInput2.Data = ipAddrArray[2];
            data.settingNetSetWifiIpInfoUl.Data[0].settingNetSetWifiIpSetInput3.Data = ipAddrArray[3];
        }
        var subnetMaskArray = data.operateData.subnet_Mask.split(".");
        if(subnetMaskArray.length != 4){
            data.settingNetSetWifiIpInfoUl.Data[1].settingNetSetWifiIpSetInput0.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[1].settingNetSetWifiIpSetInput1.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[1].settingNetSetWifiIpSetInput2.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[1].settingNetSetWifiIpSetInput3.Data = "";
        }else{
            data.settingNetSetWifiIpInfoUl.Data[1].settingNetSetWifiIpSetInput0.Data = subnetMaskArray[0];
            data.settingNetSetWifiIpInfoUl.Data[1].settingNetSetWifiIpSetInput1.Data = subnetMaskArray[1];
            data.settingNetSetWifiIpInfoUl.Data[1].settingNetSetWifiIpSetInput2.Data = subnetMaskArray[2];
            data.settingNetSetWifiIpInfoUl.Data[1].settingNetSetWifiIpSetInput3.Data = subnetMaskArray[3];
        }

        var default_GatewayArray = data.operateData.default_Gateway.split(".");
        if(default_GatewayArray.length != 4){
            data.settingNetSetWifiIpInfoUl.Data[2].settingNetSetWifiIpSetInput0.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[2].settingNetSetWifiIpSetInput1.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[2].settingNetSetWifiIpSetInput2.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[2].settingNetSetWifiIpSetInput3.Data = "";
        }else{
            data.settingNetSetWifiIpInfoUl.Data[2].settingNetSetWifiIpSetInput0.Data = default_GatewayArray[0];
            data.settingNetSetWifiIpInfoUl.Data[2].settingNetSetWifiIpSetInput1.Data = default_GatewayArray[1];
            data.settingNetSetWifiIpInfoUl.Data[2].settingNetSetWifiIpSetInput2.Data = default_GatewayArray[2];
            data.settingNetSetWifiIpInfoUl.Data[2].settingNetSetWifiIpSetInput3.Data = default_GatewayArray[3];
        }
        var primary_DNSArray = data.operateData.primary_DNS.split(".");
        if(primary_DNSArray.length != 4){
            data.settingNetSetWifiIpInfoUl.Data[3].settingNetSetWifiIpSetInput0.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[3].settingNetSetWifiIpSetInput1.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[3].settingNetSetWifiIpSetInput2.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[3].settingNetSetWifiIpSetInput3.Data = "";
        }else{
            data.settingNetSetWifiIpInfoUl.Data[3].settingNetSetWifiIpSetInput0.Data = primary_DNSArray[0];
            data.settingNetSetWifiIpInfoUl.Data[3].settingNetSetWifiIpSetInput1.Data = primary_DNSArray[1];
            data.settingNetSetWifiIpInfoUl.Data[3].settingNetSetWifiIpSetInput2.Data = primary_DNSArray[2];
            data.settingNetSetWifiIpInfoUl.Data[3].settingNetSetWifiIpSetInput3.Data = primary_DNSArray[3];
        }

        var secondary_DNSArray = data.operateData.secondary_DNS.split(".");
        if(secondary_DNSArray.length != 4){
            data.settingNetSetWifiIpInfoUl.Data[4].settingNetSetWifiIpSetInput0.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[4].settingNetSetWifiIpSetInput1.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[4].settingNetSetWifiIpSetInput2.Data = "";
            data.settingNetSetWifiIpInfoUl.Data[4].settingNetSetWifiIpSetInput3.Data = "";
        }else{
            data.settingNetSetWifiIpInfoUl.Data[4].settingNetSetWifiIpSetInput0.Data = secondary_DNSArray[0];
            data.settingNetSetWifiIpInfoUl.Data[4].settingNetSetWifiIpSetInput1.Data = secondary_DNSArray[1];
            data.settingNetSetWifiIpInfoUl.Data[4].settingNetSetWifiIpSetInput2.Data = secondary_DNSArray[2];
            data.settingNetSetWifiIpInfoUl.Data[4].settingNetSetWifiIpSetInput3.Data = secondary_DNSArray[3];
        }
        data.settingNetSetWifiIpSetTypeNav.DataSelectedIndex = data.operateData.ipConfigType;
        data.settingNetSetWifiIpSetTypeNav.SelectedIndex = data.operateData.ipConfigType;
        data.settingNetSetWifiIpSetTypeValue.Data = data.settingNetSetWifiIpSetTypeNav.Data[data.operateData.ipConfigType].settingNetSetWifiIpSetType.Data;
        if(data.operateData.ipConfigType == 0){
            //自动方式不可输入
            debugPrint("settingRewriteNetSetWifiIpSetPage:"+data.operateData.ipConfigType);
            data.settingNetSetWifiIpInfoUl.disable = true;
            for(var idx = 0;idx < data.settingNetSetWifiIpInfoUl.Data.length;idx++){
                var item = data.settingNetSetWifiIpInfoUl.Data[idx];
                item.settingNetSetWifiIpSetInfoTitle.disable = true;
                item.settingNetSetWifiIpSetInfoTitleSuffix.disable = true;
                item.settingNetSetWifiIpSetInput0.disable = true;
                item.settingNetSetWifiIpSetInput1.disable = true;
                item.settingNetSetWifiIpSetInput2.disable = true;
                item.settingNetSetWifiIpSetInput3.disable = true;
            }

        }else{
            debugPrint("settingRewriteNetSetWifiIpSetPage:"+data.operateData.ipConfigType);
            data.settingNetSetWifiIpInfoUl.disable = false;
            for(var idx = 0;idx < data.settingNetSetWifiIpInfoUl.Data.length;idx++){
                var item = data.settingNetSetWifiIpInfoUl.Data[idx];
                item.settingNetSetWifiIpSetInfoTitle.disable = false;
                item.settingNetSetWifiIpSetInfoTitleSuffix.disable = false;
                item.settingNetSetWifiIpSetInput0.disable = false;
                item.settingNetSetWifiIpSetInput1.disable = false;
                item.settingNetSetWifiIpSetInput2.disable = false;
                item.settingNetSetWifiIpSetInput3.disable = false;
            }
        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        }
        else {
        }
    }catch (ex){
        debugPrint("settingRewriteNetSetWifiIpSetPage"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetWifiIpSetInputOnChage(){
    try{
        debugPrint("settingNetSetWifiIpSetInputOnChage:"+this.id+","+$("#"+this.id).val(),DebugLevel.ALWAYS);
        var data = settingNetSetWifiIpSetDialogData;
        if(data.operateData.clearFlag == 1){
            if(!!$("#"+this.id).val()){
                var currInputVal = parseInt($("#"+this.id).val(),10)%10;
            }else{
                var currInputVal = 0;
            }
            $("#"+this.id).val(currInputVal);
            data.operateData.clearFlag = 0;
        }else{
            if(!!$("#"+this.id).val()){
                var currInputVal = parseInt($("#"+this.id).val(),10);
            }else{
                var currInputVal = 0;
            }
            if(currInputVal > 100 && currInputVal <=255){
                $("#"+this.id).val(currInputVal);
                if(!!this.page.getCaE(this.id).nav.rightTo){
                    this.page.hiFocus(this.page.getCaE(this.id).nav.rightTo);
                    data.operateData.clearFlag = 1;
                }
            }else if(currInputVal > 255 && currInputVal < 1000){
                var currValue = parseInt(currInputVal/10);
                var nextValue = currInputVal%10;
                $("#"+this.id).val(currValue);
                if(!!this.page.getCaE(this.id).nav.rightTo){
                    $("#"+this.page.getCaE(this.id).nav.rightTo).val(nextValue);
                    this.page.hiFocus(this.page.getCaE(this.id).nav.rightTo);
                }
            }else if(currInputVal > 1000){
                var currValue = parseInt(currInputVal/10);
                var nextValue = currInputVal%10;
                $("#"+this.id).val(currValue);
                if(!!this.page.getCaE(this.id).nav.rightTo){
                    $("#"+this.page.getCaE(this.id).nav.rightTo).val(nextValue);
                    this.page.hiFocus(this.page.getCaE(this.id).nav.rightTo);
                }
            }else{
                $("#"+this.id).val(currInputVal);
            }
        }

    }catch (ex){
        debugPrint("settingNetSetWifiIpSetInputOnChage:"+ ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingNetSetWifiIpSetTypeEnterHandle
 description:DHCP获取IP和手动输入获取IP切换
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiIpSetTypeEnterHandle(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = settingNetSetWifiIpSetDialogData;
    data.operateData.ipConfigType = this.DataSelectedIndex;
    hiWebOsFrame.NetSetWifiIpSetDialog.rewriteDataOnly();
}
/*******************************************************************
 name:settingNetSetWifiIpSetDialogEscHandle
 description:ip设置页按返回处理
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiIpSetDialogEscHandle(){
    var data = settingNetSetWifiIpSetDialogData;
    settingNetSetWifiIpSetRecordIpInfo();
    hiWebOsFrame.NetSetWifiIpSetDialog.close();
    hiWebOsFrame.NetSetAdvanceListDialog.close();
    hiWebOsFrame.NetSetAdvanceListDialog.destroy();
    hiWebOsFrame.NetSetWifiSetPage.hiFocus();
    hiWebOsFrame.NetSetWifiIpSetDialog.destroy();
}
/*******************************************************************
 name:wizardRecordIpInfo
 description:记录IP地址
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiIpSetRecordIpInfo(){
    try{
        var data = settingNetSetWifiIpSetDialogData;
        if(data.operateData.ipConfigType == 1){
            data.operateData.ipAddress = "";
            for(var idx = 0; idx < $("#settingNetSetWifiIpInfoUl li").eq(0).find("input").length; idx++){
                var item = $("#settingNetSetWifiIpInfoUl li").eq(0).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetWifiIpSetRecordIpInfo:ipAddress is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(0).find("input").length-1){
                        data.operateData.ipAddress += "0.";
                    }else{
                        data.operateData.ipAddress += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(0).find("input").length-1){
                        data.operateData.ipAddress += $(item).val()+".";
                    }else{
                        data.operateData.ipAddress += $(item).val();
                    }
                }
            }

            debugPrint("ipaddress:"+data.operateData.ipAddress);
            data.operateData.subnet_Mask = "";
            for(idx = 0; idx < $("#settingNetSetWifiIpInfoUl li").eq(1).find("input").length; idx++){
                item = $("#settingNetSetWifiIpInfoUl li").eq(1).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetWifiIpSetRecordIpInfo:subnet_Mask is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(1).find("input").length-1){
                        data.operateData.subnet_Mask += "0.";
                    }else{
                        data.operateData.subnet_Mask += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(1).find("input").length-1){
                        data.operateData.subnet_Mask += $(item).val()+".";
                    }else{
                        data.operateData.subnet_Mask += $(item).val();
                    }
                }
            }
            debugPrint("subnet_Mask:"+data.operateData.subnet_Mask);

            data.operateData.default_Gateway = "";
            for(idx = 0; idx < $("#settingNetSetWifiIpInfoUl li").eq(2).find("input").length; idx++){
                item = $("#settingNetSetWifiIpInfoUl li").eq(2).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetWifiIpSetRecordIpInfo:default_Gateway is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(2).find("input").length-1){
                        data.operateData.default_Gateway += "0.";
                    }else{
                        data.operateData.default_Gateway += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(2).find("input").length-1){
                        data.operateData.default_Gateway += $(item).val()+".";
                    }else{
                        data.operateData.default_Gateway += $(item).val();
                    }
                }
            }
            debugPrint("default_Gateway:"+data.operateData.default_Gateway);

            data.operateData.primary_DNS = "";
            for(idx = 0; idx < $("#settingNetSetWifiIpInfoUl li").eq(3).find("input").length; idx++){
                item = $("#settingNetSetWifiIpInfoUl li").eq(3).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetWifiIpSetRecordIpInfo:primary_DNS is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(3).find("input").length-1){
                        data.operateData.primary_DNS += "0.";
                    }else{
                        data.operateData.primary_DNS += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(3).find("input").length-1){
                        data.operateData.primary_DNS += $(item).val()+".";
                    }else{
                        data.operateData.primary_DNS += $(item).val();
                    }
                }
            }
            debugPrint("primary_DNS:"+data.operateData.primary_DNS);

            data.operateData.secondary_DNS = "";
            for(idx = 0; idx < $("#settingNetSetWifiIpInfoUl li").eq(4).find("input").length; idx++){
                item = $("#settingNetSetWifiIpInfoUl li").eq(4).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetWifiIpSetRecordIpInfo:secondary_DNS is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(4).find("input").length-1){
                        data.operateData.secondary_DNS += "0.";
                    }else{
                        data.operateData.secondary_DNS += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetWifiIpInfoUl li").eq(4).find("input").length-1){
                        data.operateData.secondary_DNS += $(item).val()+".";
                    }else{
                        data.operateData.secondary_DNS += $(item).val();
                    }
                }
            }
            debugPrint("secondary_DNS:"+data.operateData.secondary_DNS);
            if(tv == true){
                model.network.setEnumIp_config(data.operateData.ipConfigType);
                model.network.setIp_address(data.operateData.ipAddress);
                model.network.setSubnet_mask(data.operateData.subnet_Mask);
                model.network.setGateway(data.operateData.default_Gateway);
                model.network.setDns_server_1(data.operateData.primary_DNS);
                model.network.setDns_server_2(data.operateData.secondary_DNS);
                model.network.WirelessSet();
            }
        }else{ //DHCP
            if(tv == true){
                model.network.setEnumIp_config(data.operateData.ipConfigType);
                if(data.operateData.ipConfigType == data.operateData.oriIpConfigType && data.operateData.oriIpConfigType == 0){
                    debugPrint("settingNetSetWifiIpSetRecordIpInfo:do not need to set wireless!!")
                }else{
                    var connSSID = model.network.getSsid();
                    var connSecType = model.network.getEnumEncryption();
                    var connAuthType = model.network.getEnumAuthentication();
                    var connPassword = model.network.getEncryptionPassphrase();
                    debugPrint("settingNetSetWifiIpSetRecordIpInfo:"+connSSID+","+connSecType+","+connAuthType+","+connPassword,DebugLevel.ALWAYS);
                    model.network.WirelessSet();
                }
            }
        }
    }catch (ex){
        debugPrint("settingNetSetWifiIpSetRecordIpInfo:"+ ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingNetSetWifiIpSetDialogOnOpen
 description:有线设置页打开时的回调函数
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiIpSetDialogOnOpen(){
    try{

    }catch (ex){
        debugPrint("settingNetSetWifiIpSetDialogOnOpen:"+ex.message,DebugLevel.ERROR);
    }

}

function settingNetSetWifiIpSetDialogOnClose(){
}
function setSettingNetSetWifiIpSetClearFlag(){
    var data = settingNetSetWifiIpSetDialogData;
    data.operateData.clearFlag = 1;
}

function settingNetSetWifiIpSetDialogOnDestroy(){
    hiWebOsFrame.NetSetWifiIpSetDialog = null;
    if(tv == true){
        model.network.onEnumStateChaged = null;
    }
}