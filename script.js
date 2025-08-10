function showMood(mood) {

    let message = "";

    switch(mood) {

        case "happy":
            message = "Yay! Stay happy and spread positivity 😊";
            break;

        case "sad":
            message = "It’s okay to feel sad sometimes. Things will get better. 💙"   
            break;
            
        case "angry":
            message = "Take a deep breath. Let it go 😌";
            break;
            
        case "love":
            message = "Aww! Love is in the air ❤️";
            break;
            
        case "sleepy":
            message = "Time for a nap maybe? 😴";
            break;



    }

    document.getElementById("mood-message").textContent = message;

}