# social-app

## Social application for communicate with friends
Clone: https://www.facebook.com/

ScreenShot of Home Page:

![HomePage](https://user-images.githubusercontent.com/82635883/221632741-03592b41-12c0-4671-8c9b-7eba5a1fe65e.jpg)
Deploy: https://social-client-xi.vercel.app/

---

 ### 🔨 Stack of using technologies: 
React.js, Node.js, Express.js, TypeScript, MongoDB, Material-UI. Deploy api on railway.app. Front-end on Vercel.

---

The following functionality are implemented:

### Back-end:
- implemented REST API
![restApi](https://user-images.githubusercontent.com/82635883/221638814-5f85d888-5689-4cf4-b6c6-144215379a5c.jpg)
- using MongoDB
![mongo](https://user-images.githubusercontent.com/82635883/221640774-6c80404e-c8cf-4a77-932d-93e54c337bfb.jpg)
- configured connection with data base (mongoose)
- registration of users with checking of entered data
![register](https://user-images.githubusercontent.com/82635883/221640892-a34bd826-f908-46c7-9ad4-9081a6a94cb0.jpg)
- authorization
![login](https://user-images.githubusercontent.com/82635883/221640962-8b9c89fe-3182-4573-88e8-633734464590.jpg)

### Front-end
- implemented oppotunity to add/delete/change posts connection with MongoDB
![postDelete](https://user-images.githubusercontent.com/82635883/221649007-1561ab19-fdfa-4f07-9a7b-889870d238c0.jpg). 
- implemented adding likes to posts with saving data in localStorage and MongoDB
- implemented work with comments to posts, adding/deleting them with time display
- implemented the ability to follow/unfollow users when going to a friend's page
- implementing functionality of display friend's day of birth
- the added information in the application is processed in context and stored in localstorage
- a calendar has been developed on the Events tab, with the ability to add/delete/change events of their display in the calendar in the checkbox section (data is also processed in context and stored in localstorage).
![calendar](https://user-images.githubusercontent.com/82635883/221657457-e4b0d71a-1b8d-4a4e-b568-b6afa62d0a68.jpg)
- implemented the output of a page with school courses
- partially implemented chat functionality, without connection socket.io . You can check the operation of the chat by logging in through the login user: alex@gmail.com, password: 123456.

---
### Run project locally
```
https://github.com/ivan-grekov/social-app.git
cd api -> npm i -> npm start
cd client -> npm i -> npm start
```
:warning: For using api you need the .env file from owner of the project 
