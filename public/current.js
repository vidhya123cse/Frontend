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
  const file1 = document.getElementById("firstList");
  file1.value = '';
  $("#up1").show();
  $("#up2").show();
  $("#third").hide();
  $("#mass").hide();
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








function getauth(){

var list1 = document.getElementById('firstList').value;
var list2 = document.getElementById("secondList");


if (list1 =='1')
{

list2.options.length=0;
list2.options[0] = new Option('--Select--', '');
list2.options[1] = new Option('Ernakulam Junction South (ERS)', '1');
list2.options[2] = new Option('Thiruvananthapuram Central Station (TVC)', '2');
list2.options[3] = new Option('Ernakulam Town Station (ERN)', '3');
list2.options[4] = new Option('Angamaly Station (AFK)', '4');
list2.options[5] = new Option('Chalakudi Railway Station (CKI)', '5');


}
else if (list1 =='2')
{

list2.options.length=0;
list2.options[0] = new Option('--Select--', '');
list2.options[1] = new Option('Police Stations-THiruvanthapuram','');
list2.options[2] = new Option('kollam', '');
list2.options[3] = new Option('Pathanamthitta', '');
list2.options[4] = new Option('alappuzha', '');
list2.options[5] = new Option('Kottayam', '');

}
}




function third()
{
htm = `

<centre>
<div class="col-md-4" id ="mass">
<form>
<h4>Select Department</h4>
<div class ="container-fluid">
<select class="form-control"  id='firstList' name='firstList' onClick="getauth()">
<option class="dropdown-item" value="0">--Select--</option>
						  <option class="dropdown-item" value="1">Railways</option>
						  <option class="dropdown-item" value="2">Police</option>
						  
</select>
 
<h4>Locate here</h4>
<select class="form-control"  id='secondList' name='secondList' >
</select>
</div><br><br>

<div class ="row col-md-4 col-xs-12 col-sm-6 col-md-9"style="margin-left:5px;">
<button type="button" class="btn btn-primary pull-left" style="max-width: 200px;margin-left: 10px; background-color:#2dc997; margin-bottom: 10px;"> Request for Video</button>
<button type="button" class="btn btn-danger pull-left" style="max-width: 200px;margin-left: 10px; margin-bottom: 10px;" onclick="resetthird()"> Reset The Field
          </button>
        </div>
 <br><br><br>
</form>
</div>

<br><br>
</centre>



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