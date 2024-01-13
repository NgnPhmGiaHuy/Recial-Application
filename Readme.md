# Recial Application

Welcome to Recial Application! This application is built using `Next.js`, `React.js`, `TailwindCSS`, `Node.js`, `Express`, `MongoDB`, `Mongoose`, `Firebase` and utilizes environment variables with `.env`.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
    - [Clone the Repository](#clone-the-repository)
    - [Set Up Environment Variables](#set-up-environment-variables)
    - [Run the Application](#run-the-application)
    - [Generate Random Data](#generate-random-data)
- [Images](#images)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js and npm - [Install Node.js](https://nodejs.org/)
- MongoDB - [Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Clone the Repository

```bash
git clone https://github.com/NgnPhamGiaHuy/Recial-Application.git
cd Recial-Application
```

### Set Up Environment Variables

Create a new file named .env in the client directory, and add the following placeholders:

```bash
# client/src/.env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

ACCESS_TOKEN_SECRET=your_access_token_secret

NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_CLIENT_URL=http://localhost:3000
NEXT_PUBLIC_WEBSOCKET_URL=ws://localhost:8080

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

Create a new file named .env in the server directory, and add the following placeholders:
```bash
# server/src/.env

DATABASE_CONNECT_LINK=your_database_connect_link
DATABASE_LOCAL_CONNECT_LINK=your_local_database_connect_link

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

### Run the Application

To run Recial application, follow these steps:

#### Run Next.js Server (Client)

Navigate to the client directory:

```bash
cd client/src

#Install client dependencies:
npm install

#Run the Next.js development server:
npm run dev
```

The client application will be accessible at http://localhost:3000.

Run Node.js Server (Server)

Open a new terminal window/tab, navigate to the server directory:

```bash
cd server/src

#Install server dependencies:
npm install

#Run the Node.js server:
npm start
```

The server will be running at http://localhost:8080.

### Generate Random Data

Once you have successfully started the Node.js server and connected to the database, you have the option to generate random data using the `dataGenerator` function.

1. **Uncomment the `dataGenerator` Function:**

* Open the `server/src/index.js` file and uncomment the `dataGenerator` function. It might look like this:

   ```javascript
   // Uncomment the following line to enable the data generator
   // dataGenerator();
* This script will generate random data and populate your database. Note that the process might take around 10 minutes to complete.

2. **Comment the dataGenerator Function Again:**
Once the data generation is complete, comment the dataGenerator function again in the server/src/index.js file to prevent accidental re-generation in the future. Now, your database should be populated with random data, and you can proceed to use the application with the generated data.

## Image
![Login_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FLogin_Interface.png)
<p align="center"><b>Figure 01:</b> Login Interface</p>

![Register_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FRegister_Interface.png)
<p align="center"><b>Figure 02:</b> Register Interface</p>

![Landing_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FLanding_Interface.png)
<p align="center"><b>Figure 03:</b> Landing Interface</p>

![User_Landing_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FUser_Landing_Interface.png)
<p align="center"><b>Figure 04:</b> User Landing Interface</p>

![Profile_Setting_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FProfile_Setting_Interface.png)
<p align="center"><b>Figure 05:</b> Profile Setting Interface</p>

![Create_Post_With_Images.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FCreate_Post_With_Images.png)
<p align="center"><b>Figure 06:</b> Create Post With Images</p>

![Friend_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FFriend_Interface.png)
<p align="center"><b>Figure 07:</b> Friend Interface</p>

![Friend_Request_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FFriend_Request_Interface.png)
<p align="center"><b>Figure 08:</b> Friend Request Interface</p>

![Media_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FMedia_Interface.png)
<p align="center"><b>Figure 09:</b> Media Interface</p>

![Group_Feed_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FGroup_Feed_Interface.png)
<p align="center"><b>Figure 10:</b> Group Feed Interface</p>

![Group_Join_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FGroup_Join_Interface.png)
<p align="center"><b>Figure 11:</b> Group Join Interface</p>

![Group_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FGroup_Interface.png)
<p align="center"><b>Figure 12:</b> Group Interface</p>

![Setting_Interface.png](..%2F..%2FDownloads%2FThesis%2Fimg%2FUI%2FSetting_Interface.png)
<p align="center"><b>Figure 13:</b> Setting Interface</p>

## License

This project is privately owned by `NgnPhmGiaHuy` and is intended for personal use only. Unauthorized copying or reproduction of this project, in whole or in part, is strictly prohibited.

If you have any inquiries or would like to discuss the use of this project for purposes other than personal use, please contact the project owner at [`yuh.nguyenpham@gmail.com`].
