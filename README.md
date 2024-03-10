An application has been developed for a Ukrainian company offering car rental
services.

The application is divided into three main pages:

1. The homepage provides a general overview of the company's services.
2. The catalog page displays various car models that users can filter by brand,
   hourly rental price, and mileage.
3. The favorites page showcases ads that users have saved for future reference.

Key features of the application include:

- Utilization of Redux Persist to save users' favorite cars even after page
  reloads.
- Implementation of a modal window displaying detailed car information and
  rental conditions, which can be closed by clicking a "cross" button, the
  backdrop, or pressing the Esc key.
- Automatic redirection to the homepage if the user enters a non-existent route.
- Enhanced user experience through the addition of brand, price, and mileage
  filters on the Catalog page using the React-Select library.
- Integration of animations to further improve user interaction.

To work with the list of announcements, a personal backend was created for
development using the UI service https://mockapi.io/. The Axios library is used
for queries.
