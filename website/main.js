import './functions.js';
export function calculateOrigin(){
         
    validateIP = document.getElementById("getIp").value;
                      
        /** check whether the user enters correct format----check whether user enter IP address */
        ipLogic = CheckIP(validateIP);
		rFormat =   ipLogic[0] ;
						  
        /** if all conditions is valid proceed calculation */
         
         if(!dropSelect || !rFormat  ) {
                   alert("You must Select a Subnet Mask and Enter Correct IP format ");
		}				   
        else {
        
            /** move into  input value*/
            
               ipEn1  = ipLogic[1];
			   ipEn2  = ipLogic[2];
			   ipEn3  = ipLogic[3];
			   ipEn4  = ipLogic[4];
               
			/** calculate wildCard */
			goWild = calWildCard(ipA,ipB,ipC,ipD);
			
				ipWn1  = goWild[0];
				ipWn2  = goWild[1];
				ipWn3  = goWild[2];
				ipWn4  = goWild[3];
			   
			/** calculate network address */
			goNetwork   = calNetworkAddress(ipEn1,ipEn2,ipEn3,ipEn4,ipA,ipB ,ipC ,ipD );
			 
			 
				ipNet1 = goNetwork[0];
				ipNet2 = goNetwork[1];
				ipNet3 = goNetwork[2];
				ipNet4 = goNetwork[3];
			   
			   
			/** calculate broadcast address*/
			   
				goBroad =  calBroadcast(ipNet1,ipNet2,ipNet3,ipNet4 );	
				ipBro1  =  goBroad[0];
				ipBro2  =  goBroad[1];
				ipBro3  =  goBroad[2];
				ipBro4  =  goBroad[3];
				
			 /** calculate number of subnet and host */
			   
				goSubHost = calHostSub(subBits,hostBits );	
				ipSub = goSubHost[0];
				ipHost = goSubHost[1];
					
					
			 /** calculate usable IP range */		
			
				goUsable = calIpRange(ipNet4,ipBro4);
				netLIP = goUsable[0];
				brLIP = goUsable[1];		           
    		}
					 
				document.getElementById("ipDisplay").innerHTML = "IP ADDRESS : "+ ipEn1  +"." + ipEn2 +"." + ipEn3 +"." + ipEn4 ;
				document.getElementById("subnetDisplay").innerHTML = "Net Mask : " + ipA  +"." + ipB +"." + ipC +"." + ipD ;
				document.getElementById("wildDisplay").innerHTML = "Wild Card : " + ipWn1 +"." + ipWn2 +"." + ipWn3 +"." + ipWn4 ;
				document.getElementById("networkDisplay").innerHTML = "Network : " + ipNet1 +"." + ipNet2 +"." + ipNet3 +"." + ipNet4 ;
				document.getElementById("broadDisplay").innerHTML = "Broadcast Address : " + ipBro1 +"." + ipBro2 +"." + ipBro3 +"." + ipBro4;
				document.getElementById("subnetnumDisplay").innerHTML = " Number of Subnet : " + ipSub ;
				document.getElementById("hostDisplay").innerHTML = " Number of Host : " + ipHost ;
				document.getElementById("firstIpDisplay").innerHTML = " First IP of the Network : " + ipNet1 +"." + ipNet2 +"." + ipNet3 +"." + netLIP ;
				document.getElementById("lastIpDisplay").innerHTML = "  Last IP of the Network : " + ipBro1 +"." + ipBro2 +"." + ipBro3 +"." + brLIP ;
					          
				dropSelect = 0;
				kase =0;
				resetSelectElement(slct2);
				document.getElementById("getIp").value="";
 } 