function NativeInteractive() {
  this.soft_prefix = 'Soft_Status_';
  this.platform_key = 'platform';
  this.userProfile_key = 'UserProfile';
  this.type = null;
  this.args = null;
  this.isNative = true;
  // var cache = window.open['CACHE'] = {};
  // this.obj = cache['native_status'] = {};
  this.obj = {};
  this.counter = 0;
  this.nativeCallJsType = {
    Platform_Info: 'Platform_Info',
    Soft_Installed: 'Soft_Installed',
    Install_Status: 'Install_Status',
    Native_Menu: 'Native_Menu',
    User_Login: 'User_Login',
    User_Logout: 'User_Logout'
  };
  this.jsCallNativeType = {
    GetSoftID: 'GetSoftID',
    OpenSoft: 'OpenSoft',
    SetSoftsSize: 'SetSoftsSize',
    LoadingFinished: 'LoadingFinished',
    OpenUrlWithBrowser: 'OpenUrlWithBrowser'
  };
  this.softStatusType = {
    Download_waiting: 'Download_waiting',
    Downloading: 'Downloading',
    Download_pause: 'Download_pause',
    Download_finished: 'Download_finished',
    Download_failed: 'Download_failed',
    Installing: 'Installing',
    Installed: 'Installed',
    Install_finished: 'Install_finished',
    Install_failed: 'Install_failed',
    Uninstall_finished: 'Uninstall_finished',
    Uninstall_failed: 'Uninstall_failed'
  }
  this.traceConfig = {
    channel: 'store.app'
  }
}

// 错误信息
NativeInteractive.prototype.error = function (code, message) {
  return {
    errorCode: code,
    message: message
  };
};
// 数组处理
NativeInteractive.prototype.splitArray = function (arr, len) {
  if (!Array.isArray(arr)) {
    return [];
  }
  var result = [];
  for (var i = 0; i < arr.length; i += len) {
    result.push(arr.slice(i, i + len));
  }
  return result;
};

NativeInteractive.prototype.postTrace = function (trace) {
  if (!trace || !trace.item) {
    console.log('trace', 'Invalid trace doc');
  }

  if (!trace.channel) {
    trace.channel = this.traceConfig.channel;
  }

  if (!trace.data) {
    trace.data = this.getPlatformInfo();
  }

  if (!trace.data.category) {
    trace.data.category = 'default';
  }
  var client = new HttpClient('/traces/');
  return client.post(trace).then(function (data) {
    return data;
  }).catch(function (e) {
    console.log('trace error', e);
    // alert('trace error:' + JSON.stringify(e));
  });
}

NativeInteractive.prototype.softStatusTrace = function (softId) {
  var soft = this.getSoftStatus(softId);
  if (!soft || !soft.status) {
    return;
  }
  var type = null;
  var action = soft.status;
  var percent = 0;
  var softStatusType = this.softStatusType;

  // 控制记录次数
  switch (action) {
    case softStatusType.Download_finished:
    case softStatusType.Download_failed:
    case softStatusType.Install_finished:
    case softStatusType.Install_failed:
    case softStatusType.Uninstall_failed:
    case softStatusType.Uninstall_finished:
      if (soft.traceAction == action) {
        return;
      }
      soft.traceAction = action;
      localStorage.setItem(this.getKeyBySoftId(softId), JSON.stringify(soft));
      break;
    default:
      break;
  }
  switch (action) {
    case softStatusType.Downloading:
      return;
    case softStatusType.Download_waiting:
    case softStatusType.Download_pause:
    case softStatusType.Download_finished:
    case softStatusType.Download_failed:
      type = 'download';
      percent = soft.percent || 0;
      break;
    case softStatusType.Installing:
    case softStatusType.Install_finished:
    case softStatusType.Install_failed:
      type = 'install';
      percent = soft.percent;
      break;
    case softStatusType.Uninstall_failed:
    case softStatusType.Uninstall_finished:
      type = 'uninstall';
      percent = soft.percent;
      break;
    default:
      break;
  }

  var platform = this.getPlatformInfo();
  var trace = {
    item: softId,
    type: type,
    action: action,
    comments: percent,
    data: platform
  }
  if (trace.data && soft.params) {
    trace.data.module = soft.params.module;
    trace.data.category = soft.params.category;
  }
  return this.postTrace(trace);
  // this.trace.bind(this, trace);
}

NativeInteractive.prototype.justNativeEnv = function () {
  if (typeof CallNativeMethod != 'function') {
    var error = this.error('E_500', 'Native interface "CallNativeMethod" is not defined!');
    console.log(error);
    this.isNative = false;
  }
  return this.isNative;
}

// js 调Native 唯一出口
NativeInteractive.prototype.JsCallNative = function (type, args) {
  if (!this.isNative) {
    return false;
  }
  if (typeof type != 'string' || !this.jsCallNativeType[type]) {
    return this.error('E_406', 'Invalid type enum:' + JSON.stringify(type));
  }
  if (!args) {
    return this.error('E_406', 'Invalid args:' + JSON.stringify(args));
  }

  if (args.Params) {
    var str = '';
    for (var attr in args.Params) {
      var valueType = typeof args.Params[attr];
      if (valueType == 'string' || valueType == 'number' || valueType == 'boolean') {
        str += attr + ',' + args.Params[attr] + ';'
      }
    }
    if (str.length > 0) {
      str = str.substring(0, str.length - 1);
    }

    args.Params = str;
  }

  if (typeof args != 'string') {
    args = JSON.stringify(args);
  }
  return CallNativeMethod(type, args);
};

NativeInteractive.prototype.emitter = function (type, args) {
  this.obj = {
    type: type,
    args: args,
    counter: this.counter++
  };
  return this.obj;
}

// Native调Js 唯一 入口
NativeInteractive.prototype.NativeCallJs = function (type, args) {
  if (args) {
    args = eval('(' + args + ')');    //JSON.parse(args);
  }
  switch (type) {
    case this.nativeCallJsType.Platform_Info:
      this.platformHandler(args);
      this.emitter(type, args);
      break;
    case this.nativeCallJsType.Soft_Installed:
      this.pretreatmentHandler(args);
      this.platformHandler(args);
      this.softsInfoHandler(args);
      this.emitter(type, args);
      this.postPlatformInfo();
      break;
    case this.nativeCallJsType.Install_Status:
      this.softStatusHandler(args);
      this.emitter(type, args);
      this.collectInfoHandler(args.SoftId);
      this.softStatusTrace(args.SoftId);
      break;
    case this.nativeCallJsType.Native_Menu:
      //args: {MenuName:<home|category|rank>}
      this.emitter(type, args);
      break;
    case this.nativeCallJsType.User_Login:
      // args: curTime  lenovoID   userName
      this.loginHandler(args);
      break;
    case this.nativeCallJsType.User_Logout:
      this.logoutHandler(args);
      break;
  }
};

//清除localStorage预处理器
NativeInteractive.prototype.pretreatmentHandler = function (args) {
  var platform = this.getPlatformInfo();
  var userInfo = this.getUserProfile();
  localStorage.clear();
  if (platform) {
    localStorage.setItem(this.platform_key, JSON.stringify(platform));
  }
  if (userInfo) {
    localStorage.setItem(this.userProfile_key, JSON.stringify(userInfo));
  }
}

// 机型等信息 处理器
NativeInteractive.prototype.platformHandler = function (data) {
  // alert(data.OS)
  // 处理操作系统字段
  if (!data || !data.OS) {
    var error = this.error('E_406', 'Invalid platform:' + JSON.stringify(data));
    console.log(error);
    return error;
  }
  var os;
  if (data.OS.indexOf('Windows 7') == 0) {
    os = 'win7'
  } else if (data.OS.indexOf('Windows 8') == 0) {
    os = 'win8'
  } else if (data.OS.indexOf('Windows 8.1') == 0) {
    os = 'win8_1'
  } else if (data.OS.indexOf('Windows 10') == 0) {
    os = 'win10'
  } else if (data.OS.indexOf('Windows XP') == 0) {
    os = 'winxp'
  } else if (data.OS.indexOf('Windows Vista') == 0) {
    os = 'vista'
  }
  var platform = {
    uuid: data.UUID,
    mac: data.MAC,
    sn: data.SN,
    mt: data.MT,
    os: os,
    osBit: data.OSbit
  }
  localStorage.setItem(this.platform_key, JSON.stringify(platform));
}

// 采集信息到 Avatar softStatusTrace
NativeInteractive.prototype.collectInfoHandler = function (softId) {
  var soft = this.getSoftStatus(softId);
  if (soft.params) {
    // Collect sw installation behavior
    // 首页
    if (soft.params.module == "home") {
      // 猜你喜欢
      if (soft.params.category == "cai_ni_xi_huan") {
        if (soft.status == 'Install_finished') {
          ludp_instance.trackInfo('h5_rec_guess', 'H5A020', 'installation', 'SWID', softId, 'Result', 'success')
        } else if (soft.status == 'Install_failed') {
          ludp_instance.trackInfo('h5_rec_guess', 'H5A020', 'installation', 'SWID', softId, 'Result', 'failure')
        }
      } else {
        // 分类
        switch (soft.params.category) {
          case 'shang_wang_tui_jian':
            if (soft.status == 'Install_finished') {
              ludp_instance.trackInfo('h5_rec_shang_wang_tui_jian', 'H5A031', 'installation', 'SWID', softId, 'Result', 'success')
            } else if (soft.status == 'Install_failed') {
              ludp_instance.trackInfo('h5_rec_shang_wang_tui_jian', 'H5A031', 'installation', 'SWID', softId, 'Result', 'failure')
            }
            break;
          case 'you_xi_tui_jian':
            if (soft.status == 'Install_finished') {
              ludp_instance.trackInfo('h5_rec_you_xi_tui_jian', 'H5A041', 'installation', 'SWID', softId, 'Result', 'success')
            } else if (soft.status == 'Install_failed') {
              ludp_instance.trackInfo('h5_rec_you_xi_tui_jian', 'H5A041', 'installation', 'SWID', softId, 'Result', 'failure')
            }
            break;
          case 'ban_gong_bi_bei':
            if (soft.status == 'Install_finished') {
              ludp_instance.trackInfo('h5_rec_ban_gong_bi_bei', 'H5A051', 'installation', 'SWID', softId, 'Result', 'success')
            } else if (soft.status == 'Install_failed') {
              ludp_instance.trackInfo('h5_rec_ban_gong_bi_bei', 'H5A051', 'installation', 'SWID', softId, 'Result', 'failure')
            }
            break;
          case 'xi_tong_bi_bei':
            if (soft.status == 'Install_finished') {
              ludp_instance.trackInfo('h5_rec_xi_tong_bi_bei', 'H5A061', 'installation', 'SWID', softId, 'Result', 'success')
            } else if (soft.status == 'Install_failed') {
              ludp_instance.trackInfo('h5_rec_xi_tong_bi_bei', 'H5A061', 'installation', 'SWID', softId, 'Result', 'failure')
            }
            break;
          default:
            break;
        }
      }
    } else if (soft.params.module == "category") {//宝库页
      if (soft.status == 'Install_finished') {
        ludp_instance.trackInfo('h5_baoku', 'H5B005', 'installation', 'SWID', softId, 'Result', 'success')
      } else if (soft.status == 'Install_failed') {
        ludp_instance.trackInfo('h5_baoku', 'H5B005', 'installation', 'SWID', softId, 'Result', 'failure')
      }
    } else if (soft.params.module == "rank") {//排行页
      if (soft.params.category == "game") {
        if (soft.status == 'Install_finished') {
          ludp_instance.trackInfo('h5_rank_' + soft.params.category, 'H5C020', 'installation', 'SWID', softId, 'Result', 'success')
        } else if (soft.status == 'Install_failed') {
          ludp_instance.trackInfo('h5_rank_' + soft.params.category, 'H5C020', 'installation', 'SWID', softId, 'Result', 'failure')
        }
      } else if (soft.params.category == "week") {
        if (soft.status == 'Install_finished') {
          ludp_instance.trackInfo('h5_rank_' + soft.params.category, 'H5C030', 'installation', 'SWID', softId, 'Result', 'success')
        } else if (soft.status == 'Install_failed') {
          ludp_instance.trackInfo('h5_rank_' + soft.params.category, 'H5C030', 'installation', 'SWID', softId, 'Result', 'failure')
        }
      } else {
        if (soft.status == 'Install_finished') {
          ludp_instance.trackInfo('h5_rank_' + soft.params.category, 'H5C040', 'installation', 'SWID', softId, 'Result', 'success')
        } else if (soft.status == 'Install_failed') {
          ludp_instance.trackInfo('h5_rank_' + soft.params.category, 'H5C040', 'installation', 'SWID', softId, 'Result', 'failure')
        }
      }
    } else if (soft.params.module == "detail") {//详情页
      if (soft.status == 'Install_finished') {
        ludp_instance.trackInfo('h5_detail', 'H5D002', 'installation', 'SWID', softId, 'Result', 'success')
      } else if (soft.status == 'Install_failed') {
        ludp_instance.trackInfo('h5_detail', 'H5D002', 'installation', 'SWID', softId, 'Result', 'failure')
      }
    } else if (soft.params.module == "search") {//搜索页
      if (soft.status == 'Install_finished') {
        ludp_instance.trackInfo('H5_search', 'H5E002', 'installation', 'SWID', softId, 'Result', 'success')
      } else if (soft.status == 'Install_failed') {
        ludp_instance.trackInfo('H5_search', 'H5E002', 'installation', 'SWID', softId, 'Result', 'failure')
      }
    } else if (soft.params.module == "subject") {//专题页
      if (soft.status == 'Install_finished') {
        ludp_instance.trackInfo('H5_subject', 'H5F002', 'installation', 'SWID', softId, 'Result', 'success')
      } else if (soft.status == 'Install_failed') {
        ludp_instance.trackInfo('H5_search', 'H5F002', 'installation', 'SWID', softId, 'Result', 'failure')
      }
    }

  }
}

NativeInteractive.prototype.loginHandler = function (args) {
  if (!args || !args.loginInfo) {
    return false;
  }
  var userInfo = args.loginInfo;
  localStorage.setItem(this.userProfile_key, JSON.stringify(userInfo));
  var client = new HttpClient('/login/');
  client.post(userInfo).then(function (data) {
    console.log('login profile', data)
  }).catch(function (e) {
    console.log('login failed', e);
  });
}

NativeInteractive.prototype.logoutHandler = function (args) {
  var client = new HttpClient('/logout/');
  client.post(this.getUserProfile()).then(function (data) {
    console.log('logout profile', data);
  }).catch(function (e) {
    console.log('logout failed', e);
  });
  localStorage.removeItem(this.userProfile_key);
}

// 软件信息存localstorage 键名处理
NativeInteractive.prototype.getKeyBySoftId = function (softId) {
  if (typeof softId != 'string' && typeof softId != 'number') {
    throw this.error('E_406', 'Invalid soft id ' + JSON.stringify(softId));
  }
  return this.soft_prefix + softId;
};

// 软件状态 处理器
NativeInteractive.prototype.softStatusHandler = function (soft) {
  if (!soft) {
    return;
  }
  if (typeof soft == 'string') {
    soft = eval('(' + soft + ')');
  }
  if (!soft || !soft.SoftId || !soft.Status) {
    return;
  }

  var value = {
    status: soft.Status || '',
    percent: soft.Percent,
    params: {}
  };
  var local_soft = this.getSoftStatus(soft.SoftId);
  if (local_soft && local_soft.traceAction) {
    value.traceAction = local_soft.traceAction;
  }
  if (typeof soft.Params == 'string') {
    var arr = soft.Params.split(';');
    arr.forEach(function (item) {
      if (item) {
        var attrArr = item.split(',');
        if (attrArr.length == 2) {
          value.params[attrArr[0]] = attrArr[1];
        }
      }
    });
  }
  localStorage.setItem(this.getKeyBySoftId(soft.SoftId), JSON.stringify(value));
};

// 软件信息 处理器
NativeInteractive.prototype.softsInfoHandler = function (args) {
  var self = this;
  var softs = [];
  if (!args || !Array.isArray(args.Softs) || args.Softs.length < 1) {
    return JSON.stringify(softs);
  }
  var client = new HttpClient('/apps/');
  var softIds = [];
  args.Softs.forEach(function (softInfo) {
    if (!softInfo || !softInfo.SoftId) {
      return false;
    }
    self.softStatusHandler(softInfo);
    softIds.push(softInfo.SoftId.toString());
  });

  var promises = [];
  this.splitArray(softIds, 10).forEach(function (arr) {
    if (Array.isArray(arr)) {
      promises.push(
        client.get({ SoftID: { $in: arr }, archived: false }, 0, 100, { archived: 1 }, { SoftID: 1, InstallFileSize: 1 }).then(function (data) {
          if (data && Array.isArray(data.docs)) {
            data.docs.forEach(function (item) {
              if (item) {
                softs.push({ SoftId: item.SoftID, SoftSize: item.InstallFileSize });
              }
            });
          }
          return data;
        }).catch(function (e) {
          // alert('error' + JSON.stringify(e));
          return e;
        })
      );
    }
  });

  Promise.all(promises).then(
    function (result) {
      self.JsCallNative(self.jsCallNativeType.SetSoftsSize, { Softs: softs });
      return result;
    },
    function (e) {
      // alert('softsLogic get softs info error:' + JSON.stringify(e));
    }
  );
  return 'ok';
};

// 获取某款软件的状态
NativeInteractive.prototype.getSoftStatus = function (softId) {
  var soft = localStorage.getItem(this.getKeyBySoftId(softId));
  if (!soft) {
    return null;
  }
  soft = JSON.parse(soft);
  return soft;
};

// 移除某款软件的状态
NativeInteractive.prototype.removeSoftStatus = function (softId) {
  var soft = this.getSoftStatus(softId);
  if (!soft) {
    return this.error('E_406', 'Not exists soft id in the localStorage ' + softId)
  }
  return localStorage.removeItem(this.getKeyBySoftId(softId));
}

NativeInteractive.prototype.postPlatformInfo = function () {
  var platform = localStorage.getItem(this.platform_key);
  if (!platform) {
    return;
  }
  platform = JSON.parse(platform)
  var client = new HttpClient('/platform/');
  client.post(platform).then(function (data) {
    console.log('platform profile', data)
  }).catch(function (e) {
    console.log('platform failed', e);
  });
}

//Get platform information
NativeInteractive.prototype.getPlatformInfo = function () {
  var str = localStorage.getItem(this.platform_key);
  if (!str) {
    return null;
  }
  return JSON.parse(str);
}

//Get logon user infomation
NativeInteractive.prototype.getUserProfile = function () {
  var str = localStorage.getItem(this.userProfile_key);
  if (!str) {
    return null;
  }
  return JSON.parse(str);
}

// var i_inter = 0;
// NativeInteractive.prototype.setInter = function (sec) {
//   var self = this;
//   setInterval(function () {
//     self.obj = Object.create(self.obj);
//     /*    self.obj = {
//           type: 'zhang',
//           args: i_inter
//         };
//         i_inter++;*/
//   }, sec)
// }



var native_instance = new NativeInteractive();
native_instance.justNativeEnv();
// native_instance.setInter(5000);

function NativeCallJs(type, args) {
  return native_instance.NativeCallJs(type, args);
}

window.NativeCallJs = NativeCallJs;
window.native_instance = native_instance;
