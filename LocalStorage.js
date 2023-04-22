var form_data=document.getElementById('form')
var Un_list=document.getElementById('unordred-list')
form_data.addEventListener('submit',SaveData)

function SaveData(Data){
    Data.preventDefault()
    var Name=document.getElementById('name').value
    var EmailId=document.getElementById('email').value
    var PhoneNumber=document.getElementById('phone_number').value

    var List=document.createElement('li')

    List.appendChild(document.createTextNode(Name))
    List.appendChild(document.createTextNode(" - "))
    List.appendChild(document.createTextNode(EmailId))
    List.appendChild(document.createTextNode(" - "))
    List.appendChild(document.createTextNode(PhoneNumber))
    Un_list.appendChild(List)


    var myobj={ }
    myobj.name=Name
    myobj.mail=EmailId
    myobj.number=PhoneNumber

    var serialisedObj=JSON.stringify(myobj)
    localStorage.setItem(EmailId,serialisedObj)

}