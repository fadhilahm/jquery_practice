const fetchData = (event) => {
  console.log(`AJAX`);
  $(`#loading`).toggle();
  $.ajax({
    url: `https://baconipsum.com/api/?type=meat-and-filler`,
    method: `GET`,
  })
    .done((result) => {
      console.log(result[0]);
    })
    .fail(console.error)
    .always(() => {
      console.log(`this will always run last`);
      $(`#loading`).toggle();
    });
};

const main = () => {
  $(`#hello-text`).html(`Hello World`);

  $(`#count-button`).on(`click`, (event) => {
    console.log($(event.currentTarget).next().html());
    count = +$(event.currentTarget).next().html();
    $(event.currentTarget)
      .next()
      .html(count + 1);
  });

  // testing ajax
  $(`#ajax-button`).on(`click`, fetchData);
};

// run JQuery when document has been fully loaded
$(document).ready(main);
