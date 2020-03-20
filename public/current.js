$(function () {
  $("#fileupload").change(function () {
      if (typeof (FileReader) != "undefined") {
          var dvPreview = $("#dvPreview");
          dvPreview.html("");
          var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
          $($(this)[0].files).each(function () {
              var file = $(this);
              if (regex.test(file[0].name.toLowerCase())) {
                  var reader = new FileReader();
                  reader.onload = function (e) {
                      var img = $("<img />");
                      img.attr("class", "img-fluid img-thumbnail");
                      img.attr("style", "height:100px;width: 100px; margin:10px");
                      img.attr("src", e.target.result);
                      dvPreview.append(img);
                  }
                  reader.readAsDataURL(file[0]);
              } else {
                  alert(file[0].name + " is not a valid image file.");
                  dvPreview.html("");
                  return false;
              }
          });
      } else {
          alert("This browser does not support HTML5 FileReader.");
      }
  });
});
  
function resetFile() {
  const file1 = document.getElementById("fileupload");
  const file2 = document.getElementById("dvPreview");
  file1.value = '';
  file2.value = '';
  $("#dvPreview").hide();
}
  



function resetvideo() {
  const file1 = document.getElementById("videobutton");
  file1.value = '';
  $("#up1").show();
  $("#up2").show();
  $("#video").hide();
  $("#third").hide();
}

function resetthird() {
  const file1 = document.getElementById("job");
  file1.value = '';
  $("#up1").show();
  $("#up2").show();
  $("#third").hide();
}






var htm = '';

function video()
{

htm = `
<div class="col-lg-12" style="margin-bottom: 10px;">
<div class=" col-xs-12 col-sm-6 col-md-9">
<div class="form-group" style = "margin-bottom: 10px;"><br>
<div style="margin: 20px;"><b>Upload File</b></div>
					<div class="col-xs-12 col-sm-6 col-md-9">
					<input name="filebutton" class="input-file" id="videobutton" type="file">
					</div>
          
          <button type="button" class="btn btn-danger pull-left" style="max-width: 200px;margin-left: 10px; margin-bottom: 10px;" onclick="resetvideo()"> Reset The Field
          </button><br><br><br>
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
						<div class="col-sm-4 col-xs-12 col-sm-6"style="margin:15px;">
						<label for="job">Source Authority</label>&nbsp;<br>

						<select id="job">
						  <option class="dropdown-item" value="">--select option--</option>
						  <option class="dropdown-item" value="Police">Police Force</option>
						  <option class="dropdown-item" value="RPF">RPF</option>
						  <option class="dropdown-item" value="Others">Others</option>
						
            </select>
            </div>
						
				


<div class="col-xs-12 col-sm-6 form-group" style="margin:15px;">

<input type="url" placeholder="Enter URL" class="form-control" value="" />
</div>
</div>
<button type="button" class="btn btn-danger pull-left" style="max-width: 200px;margin-left: 10px; margin-bottom: 10px;" onclick="resetthird()"> Reset The Field
          </button>
<br><br><br>
`
document.getElementById("third").innerHTML= htm;

}

$("#up1").click(function () {

	$("#up2").hide();
  $("#third").hide();
  $("#video").show();
});

$("#up2").click(function () {

	$("#up1").hide();
  $("#video").hide();
  $("#third").show();

	

});