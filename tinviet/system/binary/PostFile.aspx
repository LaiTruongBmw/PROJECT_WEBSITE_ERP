<%@ Page Language="c#" AutoEventWireup="true" Inherits="TSERP.Core.Binary.PostFile" %>
<html>
<head>
<title>Select file to upload</title>
    <script src="../libs/system.js"></script>
<script>
   
    var file_path, img_pk;
    var first_load = true;
    
    function OnHidenFrameLoad()
    {
        
        var oFrm = window.document.all("ifrPhoto");
        //alert(oFrm.contentWindow)
        var closeForFirstFile = '<%=Request["closeForFirstFile"]%>' || 'N';
        var rtnValue = oFrm.contentWindow.getReturnPK();
        if(rtnValue != "")
        {
            if(closeForFirstFile === 'Y'){
                tserp.System.setDataParam({file_pk:rtnValue});
                tserp.System.ClosePopup(window);
            }
            //window.returnValue = rtnValue;
            //window.close();
        }
        else
        {
            initPhotoUpload();
        }
    }
    
</script>

<script type="text/javascript">
    /* <![CDATA[ */
        var PROGRESS_INTERVAL = 500;
        var PROGRESS_COLOR = '#000080';

        var _divFrame;
        var _divUploadMessage;
        var _divUploadProgress;
        var _ifrPhoto;

        var _loopCounter = 1;
        var _maxLoop = 10;
        var _photoUploadProgressTimer;

        function initPhotoUpload()
        {
            _divFrame = document.getElementById('divFrame');
            _divUploadMessage = document.getElementById('divUploadMessage');
            _divUploadProgress = document.getElementById('divUploadProgress');
            _ifrPhoto = document.getElementById('ifrPhoto');
            
            _ifrPhoto.contentWindow.document.getElementById('hiddenTableName').value = "<%=Request["table_name"] %>";
            _ifrPhoto.contentWindow.document.getElementById('hiddenMaster_pk').value = "<%=Request["master_pk"] %>";
            _ifrPhoto.contentWindow.document.getElementById('hiddenMaster_table').value = "<%=Request["master_table"] %>";
            _ifrPhoto.contentWindow.document.getElementById('hiddenProcedure').value = "<%=Request["procedure"] %>";
            _ifrPhoto.contentWindow.document.getElementById('hiddenImgPK').value = "<%=Request["img_pk"] %>";
            _ifrPhoto.contentWindow.document.getElementById('hiddenFilePath').value = "<%=Request["file_path"] %>";

            //alert(_ifrPhoto.contentWindow.document.getElementById('hiddenTableName'))
            var btnUpload = _ifrPhoto.contentWindow.document.getElementById('btnUpload');

            btnUpload.onclick = function(event)
            {
                var filPhoto = _ifrPhoto.contentWindow.document.getElementById('FileInput');

                //Baisic validation for Photo
                _divUploadMessage.style.display = 'none';

                if (filPhoto.value.length == 0)
                {
                    _divUploadMessage.innerHTML = '<span style=\"color:#ff0000\">Please specify the file.</span>';
                    _divUploadMessage.style.display = '';
                    filPhoto.focus();
                    return;
                }

                var regExp = /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))(.jpg|.JPG|.gif|.GIF|.png|.PNG|.bmp|.BMP)$/;
               /*
                if (!regExp.test(filPhoto.value)) //Somehow the expression does not work in Opera
                {
                    _divUploadMessage.innerHTML = '<span style=\"color:#ff0000\">Invalid file type. Only supports jpg, gif, png and bmp.</span>';
                    _divUploadMessage.style.display = '';
                    filPhoto.focus();
                    return;
                }
              */
                beginPhotoUploadProgress();
                _ifrPhoto.contentWindow.document.getElementById('photoUpload').submit();
                _divFrame.style.display = 'none';
            }
        }

        function beginPhotoUploadProgress()
        {
            _divUploadProgress.style.display = '';
            clearPhotoUploadProgress();
            _photoUploadProgressTimer = setTimeout(updatePhotoUploadProgress, PROGRESS_INTERVAL);
        }

        function clearPhotoUploadProgress()
        {
            for (var i = 1; i <= _maxLoop; i++)
            {
                document.getElementById('tdProgress' + i).style.backgroundColor = 'transparent';
            }

            document.getElementById('tdProgress1').style.backgroundColor = PROGRESS_COLOR;
            _loopCounter = 1;
        }

        function updatePhotoUploadProgress()
        {
            _loopCounter += 1;

            if (_loopCounter <= _maxLoop)
            {
                document.getElementById('tdProgress' + _loopCounter).style.backgroundColor = PROGRESS_COLOR;
            }
            else 
            {
                clearPhotoUploadProgress();
            }

            if (_photoUploadProgressTimer)
            {
                clearTimeout(_photoUploadProgressTimer);
            }

            _photoUploadProgressTimer = setTimeout(updatePhotoUploadProgress, PROGRESS_INTERVAL);
        }

        function photoUploadComplete(message, isError)
        {
            clearPhotoUploadProgress();

            if (_photoUploadProgressTimer)
            {
                clearTimeout(_photoUploadProgressTimer);
            }

            _divUploadProgress.style.display = 'none';
            _divUploadMessage.style.display = 'none';
            _divFrame.style.display = '';

            if (message.length)
            {
                var color = (isError) ? '#ff0000' : '#008000';

                _divUploadMessage.innerHTML = '<span style=\"color:' + color + '\;font-weight:bold">' + message + '</span>';
                _divUploadMessage.style.display = '';

                if (isError)
                {
                    _ifrPhoto.contentWindow.document.getElementById('FileInput').focus();
                }
            }
        }
    /* ]]> */
</script>
</head>
<body bgcolor="#66ff66">
    <script type="text/javascript">
 function getPopupId(){
        return System.getQueryParameter('popupId');
    } 
    </script>
    <div style="width: 400px">
        <div id="divFrame">
            <iframe id="ifrPhoto" name="ifrPhoto" onload="OnHidenFrameLoad()" scrolling="no"
                frameborder="0" style="text-align: center; vertical-align: middle;
                border-style: none; margin: 0px; width: 100%; height: 55px" src="PostFileSubmit.aspx">
            </iframe>
        </div>
        <div id="divUploadMessage" style="padding-top: 4px; display: none">
        </div>
        <div id="divUploadProgress" style="padding-top: 4px; display: none">
            <span style="font-size: smaller"><b>Uploading file...</b></span>
            <div>
                <table border="0" cellpadding="0" cellspacing="2" style="width: 100%">
                    <tbody>
                        <tr>
                            <td id="tdProgress1">&nbsp; &nbsp;</td>
                            <td id="tdProgress2">&nbsp; &nbsp;</td>
                            <td id="tdProgress3">&nbsp; &nbsp;</td>
                            <td id="tdProgress4">&nbsp; &nbsp;</td>
                            <td id="tdProgress5">&nbsp; &nbsp;</td>
                            <td id="tdProgress6">&nbsp; &nbsp;</td>
                            <td id="tdProgress7">&nbsp; &nbsp;</td>
                            <td id="tdProgress8">&nbsp; &nbsp;</td>
                            <td id="tdProgress9">&nbsp; &nbsp;</td>
                            <td id="tdProgress10">&nbsp; &nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    &nbsp;<img  width="200" height="180" id="imgPreview" border="1" src="data:image/gif;base64,R0lGODlhfQCgAMQAAPDw8PLy8vj4+PT09Pn5+ff39/39/f7+/vHx8fb29u7u7vz8/PX19fv7+/r6+vPz8////+/v7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAB9AKAAAAX/ICSOZGmeaKqubOu+cCzPdG3feK7vfO/zh1PwRywaj8ikUndoCBKDAAIQiQAQgUFC0BguRV5U+EtaCAaIqnrNriIGggV5/jKcqe28HgA30P8mCwUBeoWGEQEFcoB0BoOHkIWJfoxLBA+RmYUPBJVIBgl4mqNsAAmUnj4OmKStbQ8OqT0EhK62awGdsjkCore/AAK7N72/xmrBwzTFx83JyjAEvs3GALrQLA611NQBsdgqBqzc3A+oYkVjLgnk7REJ4CjS7uTW8SXi9O3mQknqKQX0uStwT8SCbQK7LYoXMGE7gvEMIHTYLMA5ZQIouhMGboDGdgPALZj2sdrCYRlL/5LjqMyjSm4hlR1I85Iagn+MGtQk1wDjTm4sZbH72QzeMJdERyloE1PWgYlJXQVQRjPqLQTKSFodBUDZVmNev97KKtZV12FVy2rCOgyq2kNTj74d1VToXE1Gd6W8CyloKp18IfUcNrPs0kw3oSFdczhwXb2BDfmVNXJr40gATsrNc1ntY5SR80zeJTE0rovKGpqOADHewdUBNGNTHbn1vXyR+RUUMY+vvd0jht7NCxwC7re6i4vQ9tab8hK9v/5+ToKZ1WfUS1gnij27dq0lu3uH7lZjrvEqVh3rDAkW+hWgtLLnzPXU+xaX6Je7dp+Fo/LHTNJfDIIAKJUiA9Jgx/8A4GXChwCoJSiDGWiM8kYcEvbQxBNRTFHFFVls0UWGJJZo4i44najiiiwS0QQBBTDQIQCi0IjFAAwUQMCILbZgBgMPNAgJAA8wgGGPJBhAQAIG3hJAAgREmOEBBDCQlkAIMEBAiug18EhNiQzWnwMMCKkRAAx8M54Di201gJrKkclXmsUtEEor8wlkimyECdAkNXmSEoAAXALSAAOrscGAmLL4mWgbg8oCyqOF2JdTm5SyMQCjZNCSKVz8LSHAlZ/mgcBoRhRgZqkf2nYEbaxC4ioRsMYq66u2tjLrDtvlihmqNxBAKp6ZIhAqDg38+VWgTnJqgwGY+kqXlDIIJ63/LcTVsNe1twDrQrLcGhOAsy8cgGi4xjBQaArbotvtDK+5Ky6fK1gr7y3ZZrPqvUPCycK5/Kb7ggMBU+NvCtEW3MpnJxD8C7PhHmwCwO5CTAoDKzSwr8KYkTtCrUpxvMauYCibq8WaBIATASKTc6wIFLcssAkGDCuzKwigxvLN1BxrL8/4mmAy0HCVsADR1JzULtK2BBUz065gPMI4UNvywAgHbFz1HkMAtvUtg+0cCcpA6wIy0WS3AdHTX48idcJspA10TEOLLHcVcdncdiRsmXk30GdpLbPcZ+39iwiGjwVB4rYgzngrjj8+SuSSZ0J55ZBcjrkhmm+uR+eetwF6GOhrjE56FYj/nbgIgn/d2VlIxi777DiEAAA7"/>
</body>
</html>
