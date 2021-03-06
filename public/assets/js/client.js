$(function () {
    $(".change").on("click", function (event) {
      var id = $(this).data("id");

      var newState = {
        devoured: "TRUE"
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function () {
          console.log("changed state to TRUE");

          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function (event) {

      event.preventDefault();

      var newBurger = {
        burger_name: $("#ca").val().trim(),
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");

          location.reload();
        }
      );
    });
  });