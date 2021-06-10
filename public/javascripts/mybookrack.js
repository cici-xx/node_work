
$("#card-dec").delegate(".bookadd","click",function(){
    $.ajax({
        type:"POST",
        url:"/content",
        data:{"bname":$(this).data("id"),"bimg":$(this).data("img")},
        success:function(data){
            alert("添加成功！可以在我的书架阅读查看图书啦！")
    }
  })
  })