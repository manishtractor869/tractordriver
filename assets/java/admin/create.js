const body = document.querySelector("body"),
            header = document.querySelector("header"),
            nav = document.querySelector("nav"),
            modeToggle = document.querySelector(".dark-light"),
            searchBox = document.querySelector(".searchBox"),
            open = document.querySelector(".open"),
            close = document.querySelector(".close");


        // nav bar scroll up and down with windows

        let prevScrollpos = window.pageYOffset;
        window.addEventListener("scroll", () => {
            let currentScrollpos = window.pageYOffset;
            if (prevScrollpos < currentScrollpos) {
                header.classList.add("hide");
                arrowTop.classList.add("show");
            } else {
                header.classList.remove("hide");
                arrowTop.classList.remove("show");
            }
            prevScrollpos = currentScrollpos;
        })


        // for always selector dark or light mode
        let getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark-mode") {
            body.classList.add("dark");
        }

        //js code to toggle dark and light mode
        modeToggle.addEventListener("click", () => {
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark");

            //    for always dark or light mode    

            if (!body.classList.contains("dark")) {
                localStorage.setItem("mode", "light-mode");
            } else {
                localStorage.setItem("mode", "dark-mode");
            }

        });

        //toggle for nav bar
        searchBox.addEventListener("click", () => {
            searchBox.classList.toggle("active");
            // nav.classList.add("active");
        });


        //for side bar

        open.addEventListener("click", () => {
            nav.classList.add("active");
        })
        body.addEventListener("click", e => {
            let clickedElm = e.target;

            if (!clickedElm.classList.contains("open") && !clickedElm.classList.contains("menu")) {
                nav.classList.remove("active");
                searchBox.classList.remove("active");
            }
        })

        //header closed
        //end of header

        // Function to handle form submission
        document.getElementById('sheetForm').addEventListener('submit', function (event) {
            event.preventDefault();
            var form = document.getElementById('sheetForm');
            var sheetName = form.sheetName.value;

            // Make an HTTP POST request to the Google Apps Script web app
            fetch('https://script.google.com/macros/s/AKfycbwMff7Vv0Gco92Q_7cXy2tX3-igcwAmV_8-eMQgPJ-LxWhvl3pt9WIt6YlYhRNot_DsrQ/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    'sheetName': sheetName
                })
            })
                .then(response => response.text())
                .then(result => {
                    // Display the result in the div and show an alert
                    document.getElementById('result').innerText = result;
                    alert(result);
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('result').innerText = 'An error occurred.';
                    alert('An error occurred.');
                    window.location.reload();
                });
        });
