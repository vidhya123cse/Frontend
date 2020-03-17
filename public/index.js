var htm = '';

function Register()
{


htm = `
<div class="container-fluid"style="margin-top: 100px; margin-bottom: 100px;padding: 2%; border-style: solid;
border-color: #2dc997; border-radius: 7%; max-width: 950px;">

<h1 class="well"  style="text-align: center;font-weight: bold;" >SIGNUP FORM</h1>
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
								<input type="password" placeholder="Enter Password *" class="form-control">
							</div>		
							<div class="col-sm-6 form-group">
								<label><b>Confirm password</b></label>
								<input type="password" placeholder="Enter Confirm Password *" class="form-control" value=""  />
							</div>	
						</div>	
								
						</div>
            <div class="row">					
					<div class="col-sm-4 form-group col-xs-12 col-sm-6 ">
						<label><b>Mobile Number</b></label>
            <input type="tel" placeholder="Enter Mobile Number *" class="form-control" value="" pattern="[0-9]{10}">	</div>
            
				
					<div class="form-group col-sm-4 col-xs-12 col-sm-6 ">
						<label><b>Email Address</b></label>
						<input type="email" placeholder="Enter Email Address *" class="form-control">
		  </div>	
		  <br><br>
		  
								

		</div>
		
	
					<br><br><center><button type="button" id ="but3" class=" col-sm-2 col-sm-3 btn btn-lg btn-info" data-toggle="modal" data-target="#modalLRForm" style=" background-color:#2dc997;">SIGNUP</button></center>	<br>	

	

								
					</div>
	
				</div>
    </div>
	</div>
	
    `
    
    document.getElementById("register").innerHTML= htm; 
    

}


function User()
{


htm = `
<h2 class="well" style="min-width: 320px;margin-top:2%; text-align: center;font-weight: bold;"id ="register" >Registration Form</h2>
<div class="col-lg-12 ">
<div class=" col-xs-12 col-sm-6 col-md-9">
				
					<div class="row">
						<div class="col-xs-12 col-sm-6 form-group">
							<label><b> <span style="color: red;">*</span>First Name</b></label>
							<input type="text" placeholder="Enter First Name" class="form-control" value="" />
						</div>
						<div class="col-xs-12 col-sm-6 form-group">
							<label><b><span style="color: red;">*</span>Last Name</b></label>
							<input type="text" placeholder="Enter Last Name" class="form-control" value="" />
						</div>
		</div>					
		<div class="form-group col-xs-12 col-sm-6">
							<label><b><span style="color: red;">*</span>Address</b></label>
							<textarea placeholder="Enter Address Here.." rows="3" class="form-control"></textarea>
						</div>	
						<div class="row">
							<div class="col-sm-4 form-group col-xs-12 col-sm-6 ">
								<label><b> <span style="color: red;">*</span>City</b></label>
								<input type="text" placeholder="Enter City Name Here.." class="form-control">
							</div>	
							<div class="col-sm-4 form-group col-xs-12 col-sm-6 ">
								<label><b><span style="color: red;">*</span>State</b></label>
								<input type="text" placeholder="Enter State Name Here.." class="form-control">
							</div>	
							<div class="col-sm-4 form-group col-xs-12 col-sm-6 ">
								<label><b><span style="color: red;">*</span>Zip</b></label>
								<input type="text" placeholder="Enter Zip Code Here.." class="form-control">
							</div>		
					

						<div class="form-group"><br>
						<label class=" control-label" for="filebutton"><b><span style="color: red;">*</span>Upload Any proof</b></label>
						<div class="col-xs-12 col-sm-6 col-md-9">
						  <input name="filebutton" class="input-file" id="filebutton" type="file">
						</div>
					  </div>
					  </div>
					  </div>
					  </div> 	
					<br>
						<div class="col-sm-4 container-fluid col-xs-12 col-sm-6"style="margin:auto auto auto auto; min-width: 300px; max-width: 85%; border-radius: 7%;"><br>
		  <label><b style="font-size: 27px;">Instructions</b></label>
		  <br>
		  <ul>
		  <li>Use this site for good and legal things only.Malpractises should be avoided.</li>
		  <li>The input image you uploaded should  be clear. Noisy or incorrect image should lead to incorrect result. That willl not be our fault.</li>
		  <li>All the information given should be correct and not illegaly created.</li>
		  <li>Creating fake missing cases and use this site for search that person is a crime.</li>
		  <li>Your personal information is completely encrypted and safe in our hand.</li>
		  </ul>
		<br>
		<br>
		</div> 
		<span style="color: red;">*</span><input type="checkbox" class="form-check-input" id="instruct" value="done">
		<label class="form-check-label"> I have a Read the Instructions</label><br><br><br>
		  
		 <br><br>
		 <span style="color: red;">* Required Fields</span><br><br>
		
						<button type="button" style=" background-color:#2dc997;max-width: 50%;" class="btn btn-lg btn-info">Submit</button>	<br>
						
						
  
						`

document.getElementById("user").innerHTML= htm;

}














function Authority()
{


htm = `<h2 class="well" style="min-width: 320px;margin-top:2%; text-align: center;font-weight: bold;"id ="authority" >Registration Form</h2>
<div class="col-lg-12 ">
<div class=" col-xs-12 col-sm-6 col-md-9">

<div class="row">
						<div class="col-xs-12 col-sm-6 form-group">
							<label><b> <span style="color: red;">*</span>First Name</b></label>
							<input type="text" placeholder="Enter First Name" class="form-control" value="" />
						</div>
						<div class="col-xs-12 col-sm-6 form-group">
							<label><b><span style="color: red;">*</span>Last Name</b></label>
							<input type="text" placeholder="Enter Last Name" class="form-control" value="" />
						</div>

		</div>			
		
		
		<div class="btn-group dropright">
  <button class="btn btn-secondary dropdown-toggle" type="button"style="background-color:#2dc997;" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Job Title
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" >Police Force</a>
    <a class="dropdown-item" href="#" >RPF</a>
    <a class="dropdown-item" href="#" >Others</a>
  </div>
</div>
<div class="row">	
<div class="form-group"><br>
						<label class=" control-label" for="filebutton"><b><span style="color: red;">*</span>Upload ID card Image</b></label>
						<div class="col-xs-12 col-sm-6 col-md-9">
						  <input name="filebutton" class="input-file" id="filebutton" type="file">
						</div>
					  </div>
					 
					  </div>


</div>
</div>
<div class="col-sm-4 form-group col-xs-12 col-sm-6"style="	margin:auto auto auto auto; min-width: 300px; max-width: 85%; border-radius: 7%;"><br>
<label><b style="font-size: 27px;">Instructions</b></label>
<br>
<ul>
<li>Use this site for good and legal things only.Malpractises should be avoided.</li>
<li>The input image you uploaded should  be clear. Noisy or incorrect image should lead to incorrect result. That willl not be our fault.</li>
<li>All the information given should be correct and not illegaly created.</li>
<li>Creating fake missing cases and use this site for search that person is a crime.</li>
<li>Your personal information is completely encrypted and safe in our hand.</li>
</ul>
<br>
<br>
</div> 
<span style="color: red;">*</span><input type="checkbox" class="form-check-input" id="instruct" value="done">
<label class="form-check-label"> I have a Read the Instructions</label><br><br><br>

<br><br>
<span style="color: red;">* Required Fields</span><br><br>

			  <button type="button" style="background-color:#2dc997;max-width: 50%;" class="btn btn-lg btn-info">Submit</button>	<br>
	 `

document.getElementById("authority").innerHTML= htm;

}

$("#but1").click(function () {

	$("#but1").hide();
	$("#but2").hide();
	$("#authority").hide();
	$("#user").show();

});

$("#but2").click(function () {

	$("#but1").hide();
	$("#but2").hide();
	$("#user").hide();
	$("#authority").show();
	
});


$("#but4").click(function () {

	$("#but1").show();
	$("#but2").show();
	$("#authority").hide();
	$("#user").hide();
	

});



