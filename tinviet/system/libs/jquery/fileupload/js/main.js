/*
 * jQuery File Upload Plugin JS Example 8.9.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global $, window */

$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: ctx + '/system/filemanager/uploadfile.gw',
        autoUpload: false,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|pdf)$/i,
        maxFileSize: 999000,
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),
        previewMaxWidth: 100,
        previewMaxHeight: 100,
        previewCrop: true,
        singleFileUploads: true
    }).on('fileuploadsubmit', function(e, data){
    	var _hiddenImgPK = $('#hiddenImgPK');
    	var _hiddenTableName = $('#hiddenTableName');
    	var _hiddenMaster_pk = $('#hiddenMaster_pk');
    	var _hiddenSrcTableName = $('#hiddenSrcTableName');
    	data.formData = {pk: _hiddenImgPK.val(),
		    			 tableName:_hiddenTableName.val(),
		    			 tablePk:_hiddenMaster_pk.val(),
		    			 srcTableName: _hiddenSrcTableName.val()
		    			};
    }).on('fileuploaddone',function(e,data){
    	if(System.getQueryParameter('closeForFirstFile') == 'Y'){
    		if(data.result.files.length >0)
    		onCloseManagerFile(data.result.files[0].tablePk,data.result.files[0].pk, data.result.files[0].url,data.result.files[0].tableName);
    	}
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    if (window.location.hostname === 'blueimp.github.io') {
        // Demo settings:
        $('#fileupload').fileupload('option', {
            url: '//jquery-file-upload.appspot.com/',
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            disableImageResize: /Android(?!.*Chrome)|Opera/
                .test(window.navigator.userAgent),
            maxFileSize: 5000000,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
        });
        // Upload server status check for browsers with CORS support:
        if ($.support.cors) {
            $.ajax({
                url: '//jquery-file-upload.appspot.com/',
                type: 'HEAD'
            }).fail(function () {
                $('<div class="alert alert-danger"/>')
                    .text('Upload server currently unavailable - ' +
                            new Date())
                    .appendTo('#fileupload');
            });
        }
    } else {
    	var _hiddenImgPK = $('#hiddenImgPK');
    	var _hiddenTableName = $('#hiddenTableName');
    	var _hiddenMaster_pk = $('#hiddenMaster_pk');
    	var _hiddenSrcTableName= $('#hiddenSrcTableName');
        // Load existing files:    	
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: $('#fileupload').fileupload('option', 'url') + "?pk="+ _hiddenImgPK.val() + "&tableName=" + _hiddenTableName.val() + "&tablePk=" + _hiddenMaster_pk.val() + "&srcTableName=" +_hiddenSrcTableName.val(),
            dataType: 'json',
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done').call(this, $.Event('done'), {result: result});
        });
    }

});