

    document.addEventListener("DOMContentLoaded", function() {
        const postInput = document.getElementById("postInput");
        const postButton = document.getElementById("postButton");
        const postContainer = document.getElementById("postContainer");
      
        postButton.addEventListener("click", function() {
          const postText = postInput.value.trim();
      
          if (postText !== "") {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.textContent = postText;
      
            postContainer.appendChild(postElement);
            postInput.value = "";
          } else {
            alert("Please type your post!");
          }
        });
      });
