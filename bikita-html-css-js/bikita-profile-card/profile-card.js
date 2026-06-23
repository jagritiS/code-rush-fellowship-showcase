const followBtn = document.getElementById("followBtn");
    followBtn.addEventListener("click", () => {
      if (followBtn.textContent === "Follow") {
        followBtn.textContent = "Unfollow";
        followBtn.style.backgroundColor = "#dc3545";
      } else {
        followBtn.textContent = "Follow";
        followBtn.style.backgroundColor = "#007BFF";
      }
    });