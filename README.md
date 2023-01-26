# Multi Restaurant platform (a react native implementation)
The project has been developed based on my prior experience as a waiter on a local branch in Cali, Colombia. Is ment to allow workers to splitt orders by costumer's name which is something pretty common on a waiter/waitress daily basis. So if they don't have a good system to support theirselves on easy requests by the costumer like this it can give them a really hard time and the costumer experience can be less engaging than expected.
It has been developped just as an educational pourpose and is not ment to get me any income by this time

## Libraries:
- react native
- @react-navigation
- react-redux
- @reduxjs/toolkit
- @sanity/cli
- @sanity/image-url
- typescript
- react-currency-formatter
- tailwindcss
- nativewind
- react-native-animatable
- react-native-heroicons

Now that you've got interested let's try [downloading the apk](https://expo.dev/accounts/nocallerworld/projects/deliveroonew/builds/1fb2f8b0-33d4-4e1d-8cbb-5312ea47a72d) to locally install it on your android. Also, if you rather, try it directly from Expo:

## Android
### Anybody can try it
![android QR code](https://user-images.githubusercontent.com/68607137/214677294-9ddf554e-3ec0-4a48-8ff5-83e807ca0f9a.png)


## iOS
### Reach me at anytime by the email __*camilocastrillon10@gmail.com*__ and let me know you want to try it
![iOS QR code](https://user-images.githubusercontent.com/68607137/214677963-db633afa-8ff6-4c1b-8450-fe3e08cfbdaa.png)

Now there are some pictures from the UI design implemented with react native:

-In this screen you can see the list of available restaurants in the app. There, you will see different rows showing restaurants following different criteria
(By this time everything is purely mocked. besides the cart logic to do the numbers on each bill either per person or in total:
![HomeScreen](https://user-images.githubusercontent.com/68607137/214683215-071d895f-21c1-4bc1-a659-f08406d21c76.png)

Fot the restaurant screen you're going to see the available list of options from the menu on each restaurant listed on the rows at the main screen:
if you press on it once you should see the add/remove buttons and the item count
if you press it again everything has to dissapear
if you add some costumer's name you should see the count and the controls from it got duplicate. At the left there is the counter from the general check on the table (everybody's dishes will be accounted by this controls). at the right is going to be the controls for the particular costumer account (costumer in session) so he can set up his own splitted check far appart from the general table's check (His dishes will be counted in the general table as well on pourpose so the waiter can confirm
the total from the bill matches with the sum from each spefic costumer check
![restaurantScreen](https://user-images.githubusercontent.com/68607137/214682102-30726036-39e4-4334-8a0b-4807a84c0f28.png)
![restaurantScreenByUser](https://user-images.githubusercontent.com/68607137/214682200-3a8e4ae1-9975-4214-8258-0fb5cb386f19.png)
![basketIconsRestaurantScreen](https://user-images.githubusercontent.com/68607137/214686921-4d0892d3-349c-4f19-b156-b8147f5a72f8.png)
![basketScreen](https://user-images.githubusercontent.com/68607137/214685656-627bd5d5-770f-4f62-84a6-609b1b1cdbff.png)
![basketPersonScreen](https://user-images.githubusercontent.com/68607137/214685661-e5cfd976-54d4-4c11-a441-29a84da66810.png)
![deliveryInScreen](https://user-images.githubusercontent.com/68607137/214682143-34f32a31-c847-4222-9b8e-4487f4d73a9c.png)


