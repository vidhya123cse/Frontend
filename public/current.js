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
<div class="col-lg-12 ">
<div class=" col-xs-12 col-sm-6 col-md-9">
<div class="form-group"><br>
					<label class=" control-label" for="filebutton"><b><span style="color: red;">*</span>Input Video  </b></label>
					<div class="col-xs-12 col-sm-6 col-md-9">
					<input name="filebutton" class="input-file" id="filebutton" type="file">
					</div>
          </div>
</div>
</div>
`
document.getElementById("video").innerHTML= htm; 

}



function third()
{
htm = `

<div class="row">
						<div class="form-group col-sm-4 col-xs-12 col-sm-6">
						<label for="job">Source Authority</label>&nbsp;

						<select id="job">
						  <option class="dropdown-item" value="">--select option--</option>
						  <option class="dropdown-item" value="Police">Police Force</option>
						  <option class="dropdown-item" value="RPF">RPF</option>
						  <option class="dropdown-item" value="Others">Others</option>
						
            </select>
            </div>
						
				


<div class="col-xs-12 col-sm-6 form-group">
<label><b>Detils &nbsp;<span style="color: red;">*</span></b></label>
<input type="text" placeholder="" class="form-control" value="" />
</div>
</div>
`
document.getElementById("third").innerHTML= htm;

}