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



$(document).ready(function () {

var list1 = document.getElementById('firstList');

list1.options[0] = new Option('--Select--', '');
list1.options[1] = new Option('Railways', '1');
list1.options[2] = new Option('Police','2');
});

function getauth(){

var list1 = document.getElementById('firstList');
var list2 = document.getElementById("secondList");
var list1SelectedValue = list1.options[list1.selectedIndex].value;

if (list1SelectedValue=='1')
{

list2.options.length=0;
list2.options[0] = new Option('--Select--', '');
list2.options[1] = new Option('Ernakulam Junction South (ERS)', '1');
list2.options[2] = new Option('Thiruvananthapuram Central Station (TVC)', '2');
list2.options[3] = new Option('Ernakulam Town Station (ERN)', '3');
list2.options[4] = new Option('Angamaly Station (AFK)', '4');
list2.options[5] = new Option('Chalakudi Railway Station (CKI)', '5');


}
else if (list1SelectedValue=='2')
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
<div class="col-md-4">
<form>
<h4>Select Department</h4>
<select class="form-control"  id='firstList' name='firstList' onClick="getauth()">
</select>
 
<h4>Locate here</h4>
<select class="form-control"  id='secondList' name='secondList' >
</select>
 
</form>
</div>
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