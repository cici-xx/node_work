
$.ajax({
    type:"GET",
      url:"/bookmanagement/bookmanagement",
      async:false,
      success:function(data){
          console.log(data)
       $("#Book").empty();
       for(var i in data){
        $("#Book").append(`
        <tr>
              <td>${data[i].bid}</td>
              <td>${data[i].bname}</td>
              <td>${data[i].bwriter}</td>
              <td>${data[i].bstock}</td>
              <td>${data[i].bimg}</td>
              <td>
                 <input type="button" value="删除" data-id="${data[i].bname}" class="del_data">
                 <input type="button" value="修改" data-id="${data[i].bname}" class="update_data">
              </td>
        </tr> 
              `) 
       }
 }
 })

$('#bookAdd').click(function(){
  $.ajax({
      type:"POST",
      url:"/bookmanagement",
      data:{"bid":$("#bid").val(),"bname":$("#bname").val(),"bwriter":$("#bwriter").val(),"bstock":$("#bstock").val(),"bimg":$("#bimg").val()},
      success:function(data){
        if(data.data==1){
          window.location.href="/bookmanagement";
      }
  }
})
})

$("#Book").delegate(".del_data","click",function(){
 $.ajax({
      type:"POST",
      url:"/bookmanagement/del",
      data:{"name":$(this).data("id")},
      success:function(data){
        if(data.data==1){
          window.location.href="/bookmanagement";
      }
  }
})
})

$("#Book").delegate(".update_data","click",function(){
 $.ajax({
      type:"POST",
      url:"/bookmanagement/update",
      data:{"name":$(this).data("id")},
      success:function(data){
          if(data.data==1){
              window.location.href="/alter/alter";
          }
  }
})
})

$('#bsearch').click(function(){
  $.ajax({
    type:"POST",
    url:"/bookmanagement/bsearch",
    data:{"data":$("#bsearch1").val()},
    success:function(data){
      $("#Book").empty();
      for(var i in data){
       $("#Book").append(`
       <tr>
             <td>${data[i].bid}</td>
             <td>${data[i].bname}</td>
             <td>${data[i].bwriter}</td>
             <td>${data[i].bstock}</td>
             <td>${data[i].bimg}</td>
             <td>
                <input type="button" value="删除" data-id="${data[i].bname}" class="del_data">
                <input type="button" value="修改" data-id="${data[i].bname}" class="update_data">
             </td>
       </tr> 
             `) 
      }
}
})
})
