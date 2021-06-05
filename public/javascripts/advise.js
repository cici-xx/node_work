$('#ok').click(function(){
    $.ajax({
        type:"POST",
        url:"/content/content",
        data:{"advise":$("#recipient-name").val()},
        success:function(data){
            alert("感谢您宝贵的意见！")
    }
  })
  })

//管理员页面
$.ajax({
    type:"POST",
      url:"/advise/content",
      async:false,
      success:function(data){
          console.log(data)
       $("#advise").empty();
       for(var i in data){
        $("#advise").append(`
        <tr>
              <td>${data[i].id}</td>
              <td>${data[i].advise}</td>
              <td>
                 <input type="button" value="确认" data-id="${data[i].advise}" class="confirm">
                 <input type="button" value="删除" data-id="${data[i].advise}" class="del_data"
              </td>
        </tr> 
              `) 
       }
 }
 })

 //删除
 $("#advise").delegate(".del_data","click",function(){
  $.ajax({
       type:"POST",
       url:"/advise/content",
       data:{"name":$(this).data("id")},
       success:function(data){
         if(data.data==1){
           window.location.href="/advise";
       }
   }
 })
 })

 //确认
 $('.confirm').click(function(){
  $.ajax({
      type:"POST",
      url:"/advise/content",
      data:{"advise":$("#recipient-name").val()},
      success:function(data){
          alert("感谢您宝贵的意见！")
  }
})
})