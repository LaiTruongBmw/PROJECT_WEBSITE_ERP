<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Binary.PostFileSubmit" %>

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
    <script type="text/javascript">
    function getReturnPK()
    {
        return window.document.all("hiddenImgPK").value;
    }
    function OnPreview(event)
    {
        var imgtag = parent.window.document.all("imgPreview");
        if( event.target.files.length > 0){
                   var selectedFile = event.target.files[0];
                   var reader = new FileReader();
                  imgtag.title = selectedFile.name;

                  reader.onload = function(event) {
                    imgtag.src = event.target.result;
                  };

                  reader.readAsDataURL(selectedFile);
            }
        else
        {
            imgtag.src ="data:image/gif;base64,R0lGODlhfQCgAMQAAPDw8PLy8vj4+PT09Pn5+ff39/39/f7+/vHx8fb29u7u7vz8/PX19fv7+/r6+vPz8////+/v7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAB9AKAAAAX/ICSOZGmeaKqubOu+cCzPdG3feK7vfO/zh1PwRywaj8ikUndoCBKDAAIQiQAQgUFC0BguRV5U+EtaCAaIqnrNriIGggV5/jKcqe28HgA30P8mCwUBeoWGEQEFcoB0BoOHkIWJfoxLBA+RmYUPBJVIBgl4mqNsAAmUnj4OmKStbQ8OqT0EhK62awGdsjkCore/AAK7N72/xmrBwzTFx83JyjAEvs3GALrQLA611NQBsdgqBqzc3A+oYkVjLgnk7REJ4CjS7uTW8SXi9O3mQknqKQX0uStwT8SCbQK7LYoXMGE7gvEMIHTYLMA5ZQIouhMGboDGdgPALZj2sdrCYRlL/5LjqMyjSm4hlR1I85Iagn+MGtQk1wDjTm4sZbH72QzeMJdERyloE1PWgYlJXQVQRjPqLQTKSFodBUDZVmNev97KKtZV12FVy2rCOgyq2kNTj74d1VToXE1Gd6W8CyloKp18IfUcNrPs0kw3oSFdczhwXb2BDfmVNXJr40gATsrNc1ntY5SR80zeJTE0rovKGpqOADHewdUBNGNTHbn1vXyR+RUUMY+vvd0jht7NCxwC7re6i4vQ9tab8hK9v/5+ToKZ1WfUS1gnij27dq0lu3uH7lZjrvEqVh3rDAkW+hWgtLLnzPXU+xaX6Je7dp+Fo/LHTNJfDIIAKJUiA9Jgx/8A4GXChwCoJSiDGWiM8kYcEvbQxBNRTFHFFVls0UWGJJZo4i44najiiiwS0QQBBTDQIQCi0IjFAAwUQMCILbZgBgMPNAgJAA8wgGGPJBhAQAIG3hJAAgREmOEBBDCQlkAIMEBAiug18EhNiQzWnwMMCKkRAAx8M54Di201gJrKkclXmsUtEEor8wlkimyECdAkNXmSEoAAXALSAAOrscGAmLL4mWgbg8oCyqOF2JdTm5SyMQCjZNCSKVz8LSHAlZ/mgcBoRhRgZqkf2nYEbaxC4ioRsMYq66u2tjLrDtvlihmqNxBAKp6ZIhAqDg38+VWgTnJqgwGY+kqXlDIIJ63/LcTVsNe1twDrQrLcGhOAsy8cgGi4xjBQaArbotvtDK+5Ky6fK1gr7y3ZZrPqvUPCycK5/Kb7ggMBU+NvCtEW3MpnJxD8C7PhHmwCwO5CTAoDKzSwr8KYkTtCrUpxvMauYCibq8WaBIATASKTc6wIFLcssAkGDCuzKwigxvLN1BxrL8/4mmAy0HCVsADR1JzULtK2BBUz065gPMI4UNvywAgHbFz1HkMAtvUtg+0cCcpA6wIy0WS3AdHTX48idcJspA10TEOLLHcVcdncdiRsmXk30GdpLbPcZ+39iwiGjwVB4rYgzngrjj8+SuSSZ0J55ZBcjrkhmm+uR+eetwF6GOhrjE56FYj/nbgIgn/d2VlIxi777DiEAAA7";
            imgtag.title = "";
        }
    }
   
    </script>
</head>
<body  bgcolor="#33cc66" >
    <form id="photoUpload" enctype="multipart/form-data" method="post" runat="server">
      <input id="FileInput" style="visibility:visible; width:300px" type="file"  name="FileInput"  runat="server" onchange="OnPreview(event)" >
      &nbsp;&nbsp;<input id="btnUpload" type="button" value="Upload" />
      <input  type=hidden id="hiddenImgPK" name="hiddenImgPK" runat="server" />
      <input  type=hidden id="hiddenTableName" name="hiddenTableName" runat="server" />
      <input  type=hidden id="hiddenMaster_pk" name="hiddenMaster_pk" runat="server" />
      <input  type=hidden id="hiddenMaster_table" name="hiddenMaster_table" runat="server" />
      <input  type=hidden id="hiddenProcedure" name="hiddenProcedure" runat="server" />
      <input  type=hidden id="hiddenFilePath" name="hiddenFilePath" runat="server" />
    </form>
  </body>
</html>
