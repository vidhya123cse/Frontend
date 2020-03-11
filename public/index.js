var htm = '';

function Register()
{


htm = `
<div class="container-fluid"style="margin-top: 100px; margin-bottom: 100px;padding: 2%; border-style: solid;
border-color: green; border-radius: 7%; max-width: 950px;">

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
								<input type="text" placeholder="Enter Password *" class="form-control">
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
            <input type="text" placeholder="Enter Mobile Number *" class="form-control" value="">	</div>
            
				
					<div class="form-group col-sm-4 col-xs-12 col-sm-6 ">
						<label><b>Email Address</b></label>
						<input type="text" placeholder="Enter Email Address *" class="form-control">
          </div>	
        </div>
						
					<br><br><center><button type="button" class=" col-sm-2 col-sm-3 btn btn-lg btn-info">SIGNUP</button></center>	<br>				
					</div>
	
				</div>
    </div>
    </div>
    `
    
    document.getElementById("register").innerHTML= htm; 
    

}