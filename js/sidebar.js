let mobileBtn = document.getElementById("mobile-cta");
      nav = document.querySelector("nav");
      mobileBtnExit = document.getElementById("mobile-exit");

      mobileBtn.addEventListener("click", () => {
        nav.classList.add("menu-drop");
      });

      mobileBtnExit.addEventListener("click", () => {
        nav.classList.remove("menu-drop");
      });