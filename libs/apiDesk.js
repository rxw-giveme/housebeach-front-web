var apiDesk = {}apiDesk.uploadFile = function (inputDom,apiParam,ajaxParam) {    ajaxParam=ajaxParam?ajaxParam:{};    apiParam=apiParam?apiParam:{};    var formData = new FormData();    formData.append('file', inputDom.files[0]);    var url;    $.ajax({        url: '/housebeach/fileupload',        type: 'POST',        cache: !!ajaxParam.cache,        data: formData,        processData: false,        contentType: false,        async: !!ajaxParam.async,        success: ajaxParam.success?ajaxParam.success:function (res) {            if (res.code == 0) {                url = res.data.url;            } else {                alert(res.codeMsg);            }        }    })    return url;}apiDesk.uploadImage = function (inputDom,apiParam,ajaxParam) {    ajaxParam=ajaxParam?ajaxParam:{};    apiParam=apiParam?apiParam:{};    var formData = new FormData();    formData.append('file', inputDom.files[0]);    var url;    $.ajax({        url: '/housebeach/imgupload?'+$.param(apiParam),        type: 'POST',        cache: !!ajaxParam.cache,        data: formData,        processData: false,        contentType: false,        async: !!ajaxParam.async,        success: ajaxParam.success?ajaxParam.success:function (res) {            if (res.code == 0) {                url = res.data.url;            } else {                alert(res.codeMsg);            }        }    })    return url;}apiDesk.uploadBlob = function (blob, fileName,apiParam,ajaxParam) {    ajaxParam=ajaxParam?ajaxParam:{};    apiParam=apiParam?apiParam:{};    var formData = new FormData();    formData.append('file', blob, fileName);    var url;    $.ajax({        url: '/housebeach/fileupload',        type: 'POST',        cache: !!ajaxParam.cache,        data: formData,        processData: false,        contentType: false,        async: !!ajaxParam.async,        success: ajaxParam.success?ajaxParam.success:function (res) {            if (res.code == 0) {                url = res.data.url;            } else {                alert(res.codeMsg);            }        }    })    return url;}