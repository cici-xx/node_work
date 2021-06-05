$.ajax({
    type:"get",
      url:"/bookmanagement/alter1",
      async:false,
      success:function(data){
          document.getElementById('message').innerHTML = data.data.map(i =>
          
 `
        <span>请输入编号：</span>
    <input type="number" name="bid1" id="bid" value="${i.bid}">
    <br>
    <span>请输入书名：</span>
    <input type="text" name="bname1" id="bname" value="${i.bname}">
    <br>
    <span>请输入作者：</span>
    <input type="text" name="bwriter1" id="bwriter" value="${i.bwriter}">
    <br>
    <span>请输入库存：</span>
    <input type="number" name="bstock1" id="bstock" value="${i.bstock}">
    <br>
    <span>请输入图片：</span>
    <input type="text" name="bimg1" id="bimg" value="${i.bimg}">
    <br>
              `) 
       }
 }
 )
 $('#alter').click(function(){
     $.ajax({
         type:"POST",
         url:"/bookmanagement/alter",
         data:{"bid1":$("#bid").val(),"bname1":$("#bname").val(),"bwriter1":$("#bwriter").val(),"bstock1":$("#bstock").val(),"bimg1":$("#bimg").val()},
         success:function(data){
             console.log(data.data);
             if(data.data==1){
                 window.location.href="/bookmanagement"
             }
         }
         
     })
 }

 )

