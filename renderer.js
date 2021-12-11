const game_data = [
  { title: "Final Fantasy VII: Integrade", price: 69.99, has_sale: true },
];

document.querySelector("#myButton").addEventListener("click", () => {
  if (game_data.length) {
    const first_item = game_data[0];
    if (first_item.has_sale) {
      const NOTIFICATION_TITLE = game_data[0].title;
      const NOTIFICATION_PRICE = game_data[0].price;
      const NOTIFICATION_BODY = `${NOTIFICATION_TITLE} is on sale for ${NOTIFICATION_PRICE}`;

      new Notification(NOTIFICATION_TITLE, {
        body: NOTIFICATION_BODY,
      }).onclick = () => window.open("http://google.com", "_blank");
    }
  }
});
