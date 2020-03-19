function readFile(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var htmlPreview =
          '<img width="200" src="' + e.target.result + '" />' +
          '<p>' + input.files[0].name + '</p>';
        var wrapperZone = $(input).parent();
        var previewZone = $(input).parent().parent().find('.preview-zone');
        var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');
  
        wrapperZone.removeClass('dragover');
        previewZone.removeClass('hidden');
        boxZone.empty();
        boxZone.append(htmlPreview);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  function reset(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
  }
  
  $(".dropzone").change(function() {
    readFile(this);
  });
  
  $('.dropzone-wrapper').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
  });
  
  $('.dropzone-wrapper').on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
  });
  
  $('.remove-preview').on('click', function() {
    var boxZone = $(this).parents('.preview-zone').find('.box-body');
    var previewZone = $(this).parents('.preview-zone');
    var dropzone = $(this).parents('.form-group').find('.dropzone');
    boxZone.empty();
    previewZone.addClass('hidden');
    reset(dropzone);
  });








var htm = '';

function video()
{

htm = `
<div class="container-fluid"style="margin-top: 100px; margin-bottom: 100px;padding: 2%; border-style: solid;
border-color: #2dc997; border-radius: 7%; max-width: 950px;">

<h1 class="well" style="text-align: center;font-weight: bold;" >SIGNUP FORM</h1>
<div class="col-lg-12 well">
<div class="row col-xs-12 col-sm-6 col-md-9">
<div class="row">
<div class="col-xs-12 col-sm-6 col-md-9 form-group">
<label><b>User Name</b></label>
<input type="text" placeholder="Enter User Name *" class="form-control" value="" />
</div>
</div> 
<div class="row">
<div class="col-xs-12 col-sm-6 form-group">
<label><b>Password</b></label>
<input type="text" placeholder="Enter Password *" class="form-control">
</div> 
<div class="col-sm-6 form-group">
<label><b>Confirm password</b></label>
<input type="password" placeholder="Enter Confirm Password *" class="form-control" value="" />
</div> 
</div> 
</div>
<div class="row"> 
<div class="col-sm-4 form-group col-xs-12 col-sm-6 ">
<label><b>Mobile Number</b></label>
<input type="text" placeholder="Enter Mobile Number *" class="form-control" value=""> </div>
<div class="form-group col-sm-4 col-xs-12 col-sm-6 ">
<label><b>Email Address</b></label>
<input type="text" placeholder="Enter Email Address *" class="form-control">
</div> 
<br><br><br><br>
<div class="col-sm-4 form-group col-xs-12 col-sm-6"style="border-color: #2dc997;border-radius: 7%;border-style: solid;"><br>
<label><b>Instructions</b></label>
<br>
<ul>
<li>Use this site for good and legal things only.Malpractises should be avoided.</li>
<li>The input image you uploaded should be clear. Noisy or incorrect image should lead to incorrect result. That willl not be our fault.</li>
<li>All the information given should be correct and not illegaly created.</li>
<li>Creating fake missing cases and use this site for search that person is a crime.</li>
<li>Your personal information is completely encrypted and safe in our hand.</li>
</ul>
</div>

</div>
<br><br><center><button type="button" id ="but3" class=" col-sm-2 col-sm-3 btn btn-lg btn-info" data-toggle="modal" data-target="#modalLRForm" style=" background-color:#2dc997;">SIGNUP</button></center> <br> 


</div>
</div>
</div>
</div>
`
document.getElementById("video").innerHTML= htm; 

}
