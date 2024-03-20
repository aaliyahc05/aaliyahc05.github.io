        // const button = document.querySelector("button");



        const button1 = document.querySelector(".button1");
        button1.addEventListener('click', changeText);


        const button2 = document.getElementById("button2");
        button2.addEventListener('click', changeText);

        const h1 = document.querySelector("h1");

        function changeText(){
            // alert('test successful!');
            const head = prompt('tell me a secret');
            h1.textContent = head; 
        }
