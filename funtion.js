	var userno;
	var username;
	var password;
	var buy_histroy;
	var writeusername;
	var abc=3;
	var user=["16052006","16052106","16052023","16052105"];
	var passw=["123456","111111","654321","000000"];
	var name=["徐楷","周伟伦","吕德峰","林学衔"];
	var shop=["A4本","纸巾","吕德峰的袜子","衣架"];
function login()
{
	var user1=document.getElementById("tempuser").value; 
	var pwd=document.getElementById("temppwd").value; 
	for( i=0;i<user.length;i++)
	{
		if(user1==user[i])
		{
			
				for( j=0;j<passw.length;j++)
			{
				if(pwd==passw[j])
				{
				 $.post("center.html",{username:name[i],userno:user[i]},function(){
					
					
				});
				window.location="center.html?username=123";
				break;
				}
				//			/跳转
				
				else
					{
						alert("密码错误！");
						break;
					}
			}break;
		}
		else
		{
			alert("用户不存在！");
			break;
		}
	}
}
function signup(){
	userno=document.getElementById("tempuser").value; 
	username=document.getElementById("tempname").value; 
}


 