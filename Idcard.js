import yasaswini from './images/yasaswini.jpg'
export default function Idcard()
{
    return(
        <div>
            
<head><title>IdentityCard</title>
	
</head>

<form >
<table align="center">
<tr>
<td align="center" style={{color:"red"}}><h1>KONERU LAKSMAIAH EDUCATION FOUNDATION</h1></td>
</tr>
<tr>
<td align="center" style={{color:"green"}}><h2>IDENTITY CARD</h2></td>
</tr>
<tr>
<td  align="center"><img src={yasaswini} style={{width:"200px", height:"200px"}} alt=""/></td>
</tr>
<tr>
<td align="center" style={{color:"orange"}}><h3>STUDENT ID	:2200031646</h3></td>
</tr>
<tr>
<td align="center" style={{color:"blue"}}><h4>Abburi Yasaswini</h4></td>
</tr>
<tr>
<td align="center" style={{color:"darkblue"}}><h5>Branch:CSE-H</h5></td>
</tr>
</table>
</form>


        </div>
    )
}