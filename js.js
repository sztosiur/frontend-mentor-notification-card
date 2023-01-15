const unread = document.querySelectorAll(".not__unread");

let number = unread.length;

const notificationAmount = document.querySelector(".notification__amount");

const notification = document.querySelectorAll(".notification");

const switcher = document.querySelector(".notification__button");

unread.forEach(n => n.addEventListener("click", () => { 

 n.classList.remove("not__unread");
 notificationAmount.innerHTML = number;

}));
    

//Notifications counting


if(number > 0){

        notificationAmount.innerHTML = number;
        notificationAmount.classList.add("amount__visible");
        unread.forEach(n => n.addEventListener("click", () => { 

            n.classList.remove("not__unread");
            number--;
            if (number == 0){
                notificationAmount.classList.remove("amount__visible");
            }
            notificationAmount.innerHTML = number;
        
}));
}


switcher.addEventListener("click",()=>{
    unread.forEach(n => n.classList.remove("not__unread"));
    notificationAmount.classList.remove("amount__visible");
});


